import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { FlatList, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Song } from "./elements/Song";

type LikedSongListProps = {
    songs: Song[];
    onPress: (song: Song) => void;
    onLikePress: (song: Song) => void;
    pressed: boolean;
}

export default function LikedSongList({ songs, onPress, onLikePress, pressed }: LikedSongListProps) {
    const filteredList = songs.filter(item => item.isLiked === true);
    const renderItem = ({ item }: { item: Song }) => (
        <View style={styles.songItem}>
            <TouchableOpacity onPress={() => onPress(item)}>
                <View style={styles.titleContainer}>
                    <Image source={item.cover} style={styles.image} resizeMode="contain"/>
                    <View style={styles.textContainer}>
                        <Text style={styles.songTitle}>{item.title}</Text>
                        <Text style={styles.authorTitle}>{item.author}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <Pressable style={styles.iconButton} onPress={() => onLikePress(item)}>
                <MaterialIcons name={item.isLiked ? "favorite" : "favorite-outline"} size={28} color="#fff" />
            </Pressable>
        </View>
    ) 

   return (
    <FlatList
        data={filteredList}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={{ width: "100%" }}
    />
   )
}


const styles = StyleSheet.create({
    songItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: "#616161ff",
    },
    
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "60%",
        marginBottom: 15,
        marginLeft: 18,
        paddingTop: 15,
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
    iconButton: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginRight: 30,
    },
});