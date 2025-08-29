import LikedSongList from "@/components/LikedSongList";
import { Song, songs } from "@/components/elements/Song";
import { useState } from "react";
import { StyleSheet, View } from "react-native";


 
export default function PlaylistScreen() {
  const [isPressed, setIsPressed] = useState<boolean>(true);

  const handlePress = () => {
    //
  } 

  const handleLikePress = (song: Song) => {
    song.isLiked = false;
    setIsPressed(prev => !prev);
  }


  return (
      <View style={styles.container}>
        <LikedSongList songs={songs} onPress={handlePress} onLikePress={handleLikePress} pressed={isPressed}/>
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