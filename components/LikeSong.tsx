import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, StyleSheet } from "react-native";


type Props = {
    pressed: boolean; 
    onPress: () => void,
}

export default function LikeSong({ pressed, onPress }: Props) {
    return(
        <Pressable style={styles.iconButton} onPress={onPress}>
            <MaterialIcons name={pressed ? "favorite" : "favorite-outline"} size={28} color="#fff" />
        </Pressable>
    )   
}

const styles = StyleSheet.create({
    iconButton: {
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 30,
    },
})