import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Song } from "./elements/Song";

type SongListProps = {
    songs: Song[];
    onPress: () => void;
}

export default function SongList({ songs, onPress }: SongListProps) {
   const renderItem = ({ item }: { item: Song }) => (
    <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
            <Image source={item.cover} style={styles.image} resizeMode="contain"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress}>
            <View style={styles.textContainer}>
                <Text style={styles.songTitle}>{item.title}</Text>
                <Text style={styles.authorTitle}>{item.author}</Text>
            </View>
        </TouchableOpacity>
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