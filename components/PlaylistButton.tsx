import { Pressable, StyleSheet, Text } from "react-native";


type Props = {
    onPress: () => void;
    buttonText: string;
}


export default function PlaylistButton({ onPress, buttonText }: Props) {


    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Text style={styles.textContainer}>{ buttonText }</Text>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1 / 6,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        width: "20%",
        borderRadius: 28,
        marginBottom: "3%",
    },
    textContainer: {
        
    }
})