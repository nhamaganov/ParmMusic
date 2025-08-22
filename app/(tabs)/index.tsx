import { useAudioPlayer } from "expo-audio";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

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
    
  const [currentSong, setCurrentSong] = useState(0)
  
  const player = useAudioPlayer(songs[currentSong])

  const [isPressed, setIsPressed] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);

  const onPlay = () => {
    setIsPressed(isPressed ? false : true)
    setIsPlaying(isPlaying? false : true)

    if (isPlaying) {
      player.pause();
    } else {
      player.play();
    }
  }

  const onPrevious = async () => {
    await onPlay();
    const previousSong = (currentSong - 1) % songs.length;
    if (previousSong < 0) {
      alert("This is first song");
    } else {
      await setCurrentSong(previousSong);
    }
  }

  const onNext = async () => {
    await onPlay();
    const nextSong = (currentSong + 1) % songs.length;
    await setCurrentSong(nextSong);
  }

  useEffect(() => {
    const interval = setInterval(async () => {
      const position = await Math.round(player.currentTime);
      const duration = await Math.round(player.duration);
      setPosition(position);
      setDuration(duration);
      if (position === duration) {
        setIsPressed(false)
        setIsPlaying(false)
        setPosition(0)
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const changeValue = (value: number) => {
    player.seekTo(value)
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={MainPageImage} />
      </View>
      <View>
        <SeekBar changeValue={changeValue} maxVal={player.duration || 1} value={position} />
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
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});