import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable } from "react-native";


type Props = {
    pressed: boolean; 
    onPress: () => void,
}

export default function LikeSong({ pressed, onPress }: Props) {
    return(
        <Pressable onPress={onPress}>
            <MaterialIcons name={pressed ? "favorite" : "favorite-outline"} size={28} color="#fff" />
        </Pressable>
    )   
}