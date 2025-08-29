import LikedSongList from "@/components/LikedSongList";
import { songs } from "@/components/elements/Song";
import { StyleSheet, View } from "react-native";

const handlePress = () => {
  //
}
 
export default function PlaylistScreen() {
  return (
      <View style={styles.container}>
        <LikedSongList songs={songs} onPress={handlePress}/>
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