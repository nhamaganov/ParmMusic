import { useAudioPlayer } from "expo-audio";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import IconButton from "@/components/IconButton";
import ImageViewer from "@/components/ImageViewer";
import PlayButton from "@/components/PlayButton";
import SeekBar from "@/components/SeekBar";

const MainPageImage = require("@/assets/images/Alfredo.jpg");
const songs = [
  require("@/assets/audio/TheBoss.mp3"),
  require("@/assets/audio/SomethingToRapAbout.mp3"),
  require("@/assets/audio/September.mp3"),
]

export default function Index() {
    
  
  const [isPressed, setIsPressed] = useState<boolean>(false);
  const [currentSong, setCurrentSong] = useState(0)
  const [position, setPosition] = useState(0);
  const [songDuration, setSongDuration] = useState<string>();
  
  const player = useAudioPlayer(songs[currentSong])

  const formatSeconds = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainSeconds = seconds % 60;
    return `${minutes.toString().padStart(2,"0")}:${remainSeconds.toString().padStart(2,"0")}`;
  }

  const onPlay = async () => {
    setIsPressed(isPressed ? false : true)
    if (player.playing) {
      await player.pause()
    } else {
      await player.play()
    }
  }
  
  const onPrevious = async () => {
    if (player.currentTime < 3) {
      const previousTrack = (currentSong - 1 + songs.length) % songs.length;
      setCurrentSong(previousTrack);
      setIsPressed(false);
      player.pause();
      player.replace(songs[previousTrack]);
    } else {
      player.seekTo(0);
      setPosition(0);
    }

  }

  const onNext = () => {
    if (player.playing) {
      onPlay();
    } else {

    }
    const nextTrack = (currentSong + 1) % songs.length;
    setCurrentSong(nextTrack);
    player.replace(songs[nextTrack]);
    
  }

  useEffect(() => {
    const interval = setInterval(async () => {
      const position = await Math.round(player.currentTime);
      setPosition(position);
      setSongDuration(formatSeconds(Math.round(player.duration)));
      if (position === Math.round(player.duration)) {
        setIsPressed(false);
        setPosition(0);
        player.pause();
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, [player]);

  const changeValue = (value: number) => {
    player.seekTo(value)
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={MainPageImage} />
      </View>
      <View style={styles.seekBarRow}>
        <Text style={styles.songContinious}>{formatSeconds(Math.round(player.currentTime))}</Text>
        <SeekBar changeValue={changeValue} maxVal={player.duration || 1} value={position} />
        <Text style={styles.songTime}>{songDuration}</Text>
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
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "red",
    height: 30,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
  songContinious: {
    marginRight: "5%",
    color: "white", 
  },
  songTime: {
    marginLeft: "5%",
    color: "white", 
  }

});