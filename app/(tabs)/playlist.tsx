import LikedSongList from "@/components/LikedSongList";
import { Song, songs } from "@/components/elements/Song";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";


 
export default function PlaylistScreen() {
  const [isPressed, setIsPressed] = useState<boolean>(true);

  const handlePress = (song: Song) => {
    router.push({
      pathname: "/",
      params: {selectedSong: JSON.stringify(song)}
    })
  } 

  const handleBtnPress = (song: Song) => {
    song.isLiked = false;
    setIsPressed(prev => !prev); // Без этой строки не работает))
  }


  return (
      <View style={styles.container}>
        <LikedSongList songs={songs} onPress={handlePress} onBtnPress={handleBtnPress} />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});