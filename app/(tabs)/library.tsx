import { songs, Song } from "@/components/elements/Song";
import SongList from "@/components/SongList";
import { StyleSheet, View } from "react-native";
import { router } from "expo-router";

export default function Library() {
  const handlePress = (song: Song) => {
    router.push({
      pathname: "/",
      params: {selectedSong: JSON.stringify(song)}
    })
  }
  
  return (
    <View style={styles.container}>
      <SongList songs={songs} onPress={handlePress}/>
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