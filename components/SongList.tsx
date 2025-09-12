import { songStore } from "@/store/SongStore";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { FlatList, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Song } from "./elements/Song";
import PlaylistButton from "./PlaylistButton";

type SongListProps = {
}

type ItemProps = {
    item: Song
    onPress: (song: Song) => void;
}

const MyItem = observer(({ item, onPress }: ItemProps) =>{
    return (
        <View style={styles.itemContainer}>
            <TouchableOpacity style={{ width:"65%" }} onPress={() => onPress(item)}>
                <View style={styles.titleContainer}>
                    <Image source={item.cover} style={styles.image} resizeMode="contain"/>
                    <View style={styles.textContainer}>
                        <Text numberOfLines={1} style={styles.songTitle}>{item.title}</Text>
                        <Text style={styles.authorTitle}>{item.author}</Text>
                        <Text style={styles.authorTitle}>{String(item.isLiked)}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <View style={styles.iconButton}>
                <Pressable onPress={() => songStore.toggleLike(item.id)}>
                    <MaterialIcons  name={item.isLiked ? "favorite" : "favorite-outline"} size={25} color="#fff" />
                </Pressable>
            </View>
        </View>

    )
})


const SongList = observer(({ onPress }: ItemProps) => {
    const songs = songStore.getAllSongs();  
    const [test, settest] = useState(false);

    const handleOnPress = (song: Song) => {
        songStore.toggleLike(song.id);
        settest(prev => !prev);
    }


    // const renderItem = ({ item }: { item: Song }) => (
    //     <View style={styles.itemContainer}>
    //         <TouchableOpacity style={{ width:"65%" }} onPress={() => onPress(item)}>
    //             <View style={styles.titleContainer}>
    //                 <Image source={item.cover} style={styles.image} resizeMode="contain"/>
    //                 <View style={styles.textContainer}>
    //                     <Text numberOfLines={1} style={styles.songTitle}>{item.title}</Text>
    //                     <Text style={styles.authorTitle}>{item.author}</Text>
    //                     <Text style={styles.authorTitle}>{String(item.isLiked)}</Text>
    //                 </View>
    //             </View>
    //         </TouchableOpacity>
    //         <View style={styles.iconButton}>
    //             <Pressable onPress={() => handleOnPress(item)}>
    //                 <MaterialIcons  name={item.isLiked ? "favorite" : "favorite-outline"} size={25} color="#fff" />
    //             </Pressable>
    //         </View>
    //     </View>
    // )

   return (
    <View style={{ flex: 1, width: "100%" }}>
        <FlatList
            data={songs}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <MyItem item={item} onPress={onPress} />}
            style={{ width: "100%" }}
            />
        <PlaylistButton onPress={() => {}} buttonText="Play"/>
    </View>
   )
})


const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: "#9696964f",
    },

    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "75%",
        marginBottom: 15,
        marginLeft: 18,
        paddingTop: 15,
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

    iconButton: {
        justifyContent: "center",
        marginRight: "3%",
    }
});


export default SongList;