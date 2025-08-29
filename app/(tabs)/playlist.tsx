import LikedSongList from "@/components/LikedSongList";
import { Song, songs } from "@/components/elements/Song";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { router } from "expo-router";


 
export default function PlaylistScreen() {
  const [isPressed, setIsPressed] = useState<boolean>(true);

  const handlePress = (song: Song) => {
    router.push({
      pathname: "/",
      params: {selectedSong: JSON.stringify(song)}
    })
  } 

  const handleLikePress = (song: Song) => {
    song.isLiked = false;
    setIsPressed(prev => !prev); // Без этой строки не работает))
  }


  return (
      <View style={styles.container}>
        <LikedSongList songs={songs} onPress={handlePress} onLikePress={handleLikePress} />
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