import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, StyleSheet } from "react-native";


type Props = {
    icon: keyof typeof MaterialIcons.glyphMap;
    onPress: () => void;
    size: number;
}

export default function IconButton({ icon, onPress, size }: Props) {
    return (
        <Pressable style={styles.iconButton} onPress={onPress}>
            <MaterialIcons name={icon} size={size} color="#fff" />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    iconButton: {
        justifyContent: "center",
        alignItems: "center",
    },
})