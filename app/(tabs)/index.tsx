import { useAudioPlayer } from "expo-audio";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

import ImageViewer from "@/components/ImageViewer";
import PlayButton from "@/components/PlayButton";
import SeekBar from "@/components/SeekBar";


const MainPageImage = require("@/assets/images/Alfredo.jpg");
const song = require("@/assets/audio/SomethingToRapAbout.mp3");


export default function Index() {
  
  const player = useAudioPlayer(song)

  const [isPressed, setIsPressed] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);


  const onPlay = () => {
    if (isPressed) {
      setIsPressed(false);
    } else {
      setIsPressed(true);
    }

    if (isPlaying) {
      player.pause();
      player.seekTo(0);
      setIsPlaying(false);
    } else {
      player.play();
      setIsPlaying(true);
    }
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={MainPageImage} />
      </View>
      <View>
        <SeekBar />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
          <PlayButton onPress={onPlay} pressed={isPressed} />
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
    bottom: 80,
  },
  buttonRow: {
    alignItems: "center",
    flexDirection: "row",
  },
});