import LikedSongList from "@/components/LikedSongList";
import { Song, songs } from "@/components/elements/Song";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";


 
export default function PlaylistScreen() {


  const handlePress = () => {
    //
  } 

  const handleLikePress = (song: Song) => {
    song.isLiked = false;
  }

  useEffect(() => {
    const interval = setInterval(async () => {
      
    }, 1000);


    return () => clearInterval(interval);
  }, [songs]);

  return (
      <View style={styles.container}>
        <LikedSongList songs={songs} onPress={handlePress} onLikePress={handleLikePress}/>
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