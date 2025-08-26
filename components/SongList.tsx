import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { Song } from "./elements/Song";

type SongListProps = {
    songs: Song[];
}

export default function SongList({ songs }: SongListProps) {
   const renderItem = ({ item }: { item: Song }) => (
    <View>
        <Image source={item.cover} style={styles.image}/>
        <Text style={{color: "white"}}>{item.title}</Text>
        <Text style={{color: "white"}}>{item.author}</Text>
    </View>
   )

   return (
    <FlatList
        data={songs}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
    />
   )
}


const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    item: {
        flex: 1,
        margin: 5,
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 10,
        alignItems: "center",
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    title: {
        marginTop: 5,
        fontSize: 14,
    },
});