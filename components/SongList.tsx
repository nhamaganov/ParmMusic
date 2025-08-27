import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Song } from "./elements/Song";

type SongListProps = {
    songs: Song[];
    onPress: (song: Song) => void;
}

export default function SongList({ songs, onPress }: SongListProps) {
   const renderItem = ({ item }: { item: Song }) => (
    <TouchableOpacity onPress={() => onPress(item)}>
        <View style={styles.container}>
            <Image source={item.cover} style={styles.image} resizeMode="contain"/>
            <View style={styles.textContainer}>
                <Text style={styles.songTitle}>{item.title}</Text>
                <Text style={styles.authorTitle}>{item.author}</Text>
            </View>
        </View>
    </TouchableOpacity>
   )

   return (
    <FlatList
        data={songs}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={{ width: "100%" }}
    />
   )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginBottom: 30,
        marginLeft: 18,
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
        width: 50,
        height: 50,
        borderRadius: 6,
    },
    textContainer: {
        marginLeft: 10,
        width: "100%",
    },
    songTitle: {
        fontSize: 14,
        color: "#fff",
        justifyContent: "center",
        marginTop: 5,
    },
    authorTitle: {
        fontSize: 14,
        color: "#c0c0c0ff",
        marginTop: "auto",
    },
});