import { songs } from "@/components/elements/Song";
import SongList from "@/components/SongList";
import { StyleSheet, View } from "react-native";

export default function Library() {
  return (
    <View style={styles.container}>
      <SongList songs={songs}/>
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