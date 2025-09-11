import { Song } from "@/components/elements/Song";
import SongList from "@/components/SongList";
import { songStore } from "@/store/SongStore";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function Library() {


  const [isPressed, setIsPressed] = useState(false)
  

  const handleLikePress = (song: Song) => {
    song.isLiked = !song.isLiked;
    setIsPressed(prev => !prev);
  }
  
  
  const handlePress = (song: Song) => {
    router.push({
      pathname: "/",
      params: {selectedSong: JSON.stringify(song)}
    })
  }

  
  return (
    <View style={styles.container}>
      <SongList songs={songStore.songs} onPress={handlePress} onLikePress={handleLikePress}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#25292e",
    flex: 1,
    justifyContent: "center",
    alignItems: "baseline",
  }
})