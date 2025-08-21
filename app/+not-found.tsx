import { Link, Stack } from "expo-router";
import { View, StyleSheet } from "react-native";


export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: "Ooooops! Not Found!!!" }} />
            <View style={styles.container}>
                <Link href="/" style={styles.button}>
                    Back to the home page.
                </Link>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#25292e",
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        fontSize: 20,
        textDecorationLine: "underline",
        color: "white",
    },
})