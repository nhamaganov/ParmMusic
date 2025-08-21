import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, StyleSheet } from "react-native";


type Props = {
    icon: keyof typeof MaterialIcons.glyphMap;
    onPress: () => void;
}

export default function IconButton({ icon, onPress }: Props) {
    return (
        <Pressable style={styles.iconButton} onPress={onPress}>
            <MaterialIcons name={icon} size={40} color="#fff" />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    iconButton: {
        justifyContent: "center",
        alignItems: "center",
    },
    iconButtonLabel: {
        color: "#fff",
        marginTop: 12,
    },
})