import { useAudioPlayer, useAudioPlayerStatus } from "expo-audio";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import IconButton from "@/components/IconButton";
import ImageViewer from "@/components/ImageViewer";
import LikeSong from "@/components/LikeSong";
import PlayButton from "@/components/PlayButton";
import SeekBar from "@/components/SeekBar";
// import { songs } from "@/components/elements/Song";
import { songStore } from "@/store/SongStore";
import { setParams } from "expo-router/build/global-state/routing";

export default function Index() {
  const [songs, setSongs] = useState(songStore.songs);
  const [isShuffle, setIsShuffle] = useState<boolean>(false);
  const [isRepeat, setIsRepeat] = useState<boolean>(false);
  const [isPressed, setIsPressed] = useState<boolean>(false);
  const [currentSong, setCurrentSong] = useState(0);
  const [currentImg, setCurrentImg] = useState(songs[0].cover);
  const [position, setPosition] = useState(0);
  const [isLikePressed, setIsLikePressed] = useState(songs[currentSong].isLiked)
  

  const player = useAudioPlayer(songs[currentSong].uri);
  const playerStatus = useAudioPlayerStatus(player);
  const params = useLocalSearchParams();
  const selectedSong = params.selectedSong ? JSON.parse(params.selectedSong as string) : null;

  const formatSeconds = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainSeconds = seconds % 60;
    return `${minutes.toString().padStart(2,"0")}:${remainSeconds.toString().padStart(2,"0")}`;
  };

  
  const getRandom = (min: number, max: number) => {
    let rand = Math.floor(Math.random() * (max - min)) + min;
    if (rand !== currentSong) {
      return rand;
    } else {
      return getRandom(min, max);
    }
  }

  
  const onPlay = async () => {
    if (playerStatus.playing) {
      await player.pause()
      setIsPressed(false)
    } else {
      await player.play()
      setIsPressed(true)
    }
  };
  

  const onPrevious = async () => {
    if (playerStatus.currentTime < 3) {
      const previousTrack = (currentSong - 1 + songs.length) % songs.length;
      setCurrentSong(previousTrack);
      setCurrentImg(songs[previousTrack].cover);
      setIsPressed(false);
      player.pause();
      player.replace(songs[previousTrack].uri);
    } else {
      player.seekTo(0);
      setPosition(0);
    }
  };


  const onNext = () => {
    if (playerStatus.playing) {
      onPlay();
    }
    if (isRepeat) {
      const nextTrack = currentSong;
      setCurrentSong(nextTrack);
      setCurrentImg(songs[nextTrack].cover);
      player.replace(songs[nextTrack].uri);
    } else if (isShuffle) {
      const nextTrack = getRandom(0, songs.length);
      setCurrentSong(nextTrack);
      setCurrentImg(songs[nextTrack].cover);
      player.replace(songs[nextTrack].uri);
    } else {
      const nextTrack = (currentSong + 1) % songs.length;
      setCurrentSong(nextTrack);
      setCurrentImg(songs[nextTrack].cover);
      player.replace(songs[nextTrack].uri);
    }
  };
  

  const onLikePress = () => {
    setIsLikePressed(prev => !prev);
    if (songs[currentSong].isLiked) {
      songs[currentSong].isLiked = false;
    } else songs[currentSong].isLiked = true;
  };

  
  const onShuffle = () => {
    setIsShuffle(prev => !prev);
  };


  const onRepeat = () => {
    setIsRepeat(prev => !prev);
  };


  const changeValue = (value: number) => {
    player.seekTo(value)
  };


  useEffect(() => {
    const interval = setInterval(async () => {
      setPosition(Math.round(player.currentTime));
    }, 1000);


    return () => clearInterval(interval);
  }, [player]);


  useEffect(() => {
    if (playerStatus.didJustFinish) {
      onNext();
      setIsPressed(false);
    }
  }, [playerStatus]);

  useEffect(() => {
    if (songs[currentSong].isLiked) {
      setIsLikePressed(true);
    } else setIsLikePressed(false);
  })

  useEffect(() => {
    if (selectedSong) {
      setCurrentSong(selectedSong.id - 1);
      setCurrentImg(selectedSong.cover);
    };

    return () => setParams({ selectedSong: undefined });
  }, [selectedSong]);


  useEffect(() => {
    if (params.songs) {
      setSongs(JSON.parse(params.songs as string));
      // setCurrentSong(Number(songs[0].id));
    };

    // return () => setParams({ selectedSong: undefined });
  })

  return (
    <View style={styles.container}>

      <View style={styles.imageContainer}>
        <ImageViewer imgSource={currentImg} />
      </View>

      <View style={styles.titleContainer}>
        <View style={{width: "85%"}}>
          <Text numberOfLines={1} style={styles.songTitle}>{songs[currentSong].title}</Text>
          <Text style={styles.authorTitle}>{songs[currentSong].author}</Text>
        </View>
        <View style={{alignSelf: "center"}}>
          <LikeSong pressed={isLikePressed} onPress={onLikePress} />
        </View>
      </View>

      <View style={styles.seekBarContainer}>
        <SeekBar changeValue={changeValue} maxVal={playerStatus.duration || 1} value={position} />
        <View style={styles.timeContainer}>
          <Text style={styles.songCurrent}>{formatSeconds(Math.round(playerStatus.currentTime))}</Text>
          <Text style={styles.songDuration}>{formatSeconds(Math.round(playerStatus.duration))}</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <IconButton icon={isShuffle ? "shuffle-on" : "shuffle"} size={30} onPress={onShuffle} />
        <View style={{flexDirection:"row", justifyContent:"space-between", flexGrow:1/5}}>
          <IconButton icon="skip-previous" size={50} onPress={onPrevious} />
          <PlayButton onPress={onPlay} pressed={isPressed} />
          <IconButton icon="skip-next" size={50} onPress={onNext} />
        </View>
        <IconButton icon={isRepeat? "repeat-one-on" : "repeat-one"} size={30} onPress={onRepeat} />
      </View>

    </View> 

  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "space-between",
  },

  imageContainer: {

  },

  titleContainer: {
    flexDirection: "row",
    width: "88%",
    justifyContent: "space-between",
  },

  songTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 22,
  },
  
  authorTitle: {
    color: "#969696ff",
    fontStyle: "italic",
    fontSize: 15,
  },

  seekBarContainer: {
    width: "95%",
    alignItems: "center",
  },
  
  timeContainer: {
    flexDirection: "row",
    width: "93%",
    justifyContent: "space-between",
  },

  songCurrent: {
    color: "#fff",
  },
  
  songDuration: {
    color: "#fff",
  },

  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-between",
    width: "90%",
    marginBottom: "8%",
  },

});