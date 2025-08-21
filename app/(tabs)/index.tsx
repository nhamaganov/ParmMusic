import { useAudioPlayer } from "expo-audio";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import IconButton from "@/components/IconButton";
import ImageViewer from "@/components/ImageViewer";
import PlayButton from "@/components/PlayButton";
import SeekBar from "@/components/SeekBar";

const MainPageImage = require("@/assets/images/Alfredo.jpg");
const song = require("@/assets/audio/SomethingToRapAbout.mp3");


export default function Index() {
  
  const player = useAudioPlayer(song)

  const [isPressed, setIsPressed] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  // const [value, setValue] = useState<number>(0);
  // const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);

  const onPlay = () => {
    setIsPressed(isPressed ? false : true)
    setIsPlaying(isPlaying? false : true)
    
    // if (isPressed) {
    //   setIsPressed(false);
    // } else {
    //   setIsPressed(true);
    // }

    if (isPlaying) {
      player.pause();
    } else {
      player.play();
    }
  }

  const onPrevious = () => {
    //
  }

  const onNext = () => {
    //
  }

  useEffect(() => {
    const interval = setInterval(async () => {
      const position = await Math.round(player.currentTime);
      const duration = await Math.round(player.duration);
      setPosition(position);
      setDuration(duration);
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