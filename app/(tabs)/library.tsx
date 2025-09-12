import { Song } from "@/components/elements/Song";
import SongList from "@/components/SongList";
import { songStore } from "@/store/SongStore";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";


export default function Library() {
  const songs = songStore.getAllSongs();

  
  const handlePress = (song: Song) => {
    router.push({
      pathname: "/",
      params: {selectedSong: JSON.stringify(song)},
    })
  }

  const onPlayButtonPressHandle = (songs: Song[]) => {
    router.push({
      pathname: "/",
      params: {songs: JSON.stringify(songs)},
    })
  }

  
  return (
    <View style={styles.container}>
      <SongList songs={songs} onPress={handlePress} onPlayButtonPress={onPlayButtonPressHandle}/>
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