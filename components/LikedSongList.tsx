import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { FlatList, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Song } from "./elements/Song";

type LikedSongListProps = {
    songs: Song[];
    onPress: (song: Song) => void;
    onBtnPress: (song: Song) => void;
    
}

export default function LikedSongList({ songs, onPress, onBtnPress }: LikedSongListProps) {
    const filteredList = songs.filter(item => item.isLiked === true);
    const renderItem = ({ item }: { item: Song }) => (
        <View style={styles.songItem}>
            <View style={{ width: "65%"}}>
                <TouchableOpacity onPress={() => onPress(item)}>
                    <View style={styles.titleContainer}>
                        <Image source={item.cover} style={styles.image} resizeMode="contain"/>
                        <View style={styles.textContainer}>
                            <Text numberOfLines={1} style={styles.songTitle}>{item.title}</Text>
                            <Text style={styles.authorTitle}>{item.author}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{marginRight: "3%"}}>
                <Pressable style={styles.iconButton} onPress={() => onBtnPress(item)}>
                    <MaterialIcons name={"clear"} size={20} color="#fff" />
                </Pressable>
            </View>
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
        width: "70%",
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
        alignItems: "center",
    },
});