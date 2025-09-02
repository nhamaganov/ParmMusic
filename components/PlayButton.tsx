import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, StyleSheet, View } from "react-native";


type Props = {
    onPress: () => void;
    pressed: boolean;
};

export default function PlayButton({onPress,pressed}: Props) {
    return (
        <View style={styles.circleButtonContainer}>
            <Pressable style={styles.circleButton} onPress={onPress}>
                <MaterialIcons name={pressed ? "pause" : "play-arrow"} size={38} color="#25292e" />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    circleButtonContainer: {
        width: 84,
        height: 84,
        borderWidth: 4,
        borderColor: "#ffacdcd8",
        borderRadius: 42,
        padding: 3,
    },
    circleButton: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 42,
        backgroundColor: "white",
    }
})