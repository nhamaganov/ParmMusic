import { useAudioPlayer, useAudioPlayerStatus } from "expo-audio";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import IconButton from "@/components/IconButton";
import ImageViewer from "@/components/ImageViewer";
import LikeSong from "@/components/LikeSong";
import PlayButton from "@/components/PlayButton";
import SeekBar from "@/components/SeekBar";
import { songs } from "@/components/elements/Song";


export default function Index() {
  const [isPressed, setIsPressed] = useState<boolean>(false);
  const [currentSong, setCurrentSong] = useState(0);
  const [currentImg, setCurrentImg] = useState(songs[0].cover);
  const [position, setPosition] = useState(0);
  const [currentSongDuration, setCurrentSongDuration] = useState<string>("00:00");
  const [isLikePressed, setIsLikePressed] = useState(songs[currentSong].isLiked)
  const [justSwitched, setJustSwitched] = useState(false);
  
  const player = useAudioPlayer(songs[currentSong].uri);
  const playerStatus = useAudioPlayerStatus(player);
  const params = useLocalSearchParams();
  const selectedSong = params.selectedSong ? JSON.parse(params.selectedSong as string) : null;
  
  const formatSeconds = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainSeconds = seconds % 60;
    return `${minutes.toString().padStart(2,"0")}:${remainSeconds.toString().padStart(2,"0")}`;
  };

  
  const onPlay = async () => {
    if (player.playing) {
      await player.pause()
      setIsPressed(false)
    } else {
      await player.play()
      setIsPressed(true)
    }
  };
  

  const onPrevious = async () => {
    if (player.currentTime < 3) {
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
    if (player.playing) {
      onPlay();
    }
    const nextTrack = (currentSong + 1) % songs.length;
    setCurrentSong(nextTrack);
    setCurrentImg(songs[nextTrack].cover);
    player.replace(songs[nextTrack].uri);
  };
  

  const onLikePress = () => {
    setIsLikePressed(!isLikePressed);
    if (songs[currentSong].isLiked) {
      songs[currentSong].isLiked = false;
    } else songs[currentSong].isLiked = true;
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
    setCurrentSongDuration(formatSeconds(Math.round(player.duration)));
    if (songs[currentSong].isLiked) {
      setIsLikePressed(true);
    } else setIsLikePressed(false);
  })

  // useEffect(() => {
  //   if (selectedSong) {
  //     setCurrentSong(selectedSong.id - 1);
  //     setCurrentImg(selectedSong.cover);
      
  //   }
  // }, [selectedSong]);


  const changeValue = (value: number) => {
    player.seekTo(value)
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={currentImg} />
      </View>
      <View style={styles.seekBarRow}>
        <Text style={styles.songContinious}>{formatSeconds(Math.round(player.currentTime))}</Text>
        <SeekBar changeValue={changeValue} maxVal={player.duration || 1} value={position} />
        <Text style={styles.songTime}>{currentSongDuration}</Text>
        <LikeSong pressed={isLikePressed} onPress={onLikePress} />

      </View>
      <View style={styles.footerContainer}>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonRow}>
            <IconButton icon="skip-previous" onPress={onPrevious} />
            <PlayButton onPress={onPlay} pressed={isPressed} />
            <IconButton icon="skip-next" onPress={onNext} />
          </View> 
        </View> 
      </View>
    </View> 

  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 40,
  },
  buttonRow: {
    alignItems: "center",
    flexDirection: "row",
  },
  seekBarRow: {
    boxSizing: "border-box",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 90,
    marginLeft: 30,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
  songContinious: {
    marginRight: "2%",
    color: "white", 
  },
  songTime: {
    marginLeft: "2%",
    color: "white", 
  }
});