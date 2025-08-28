import { Image, ImageSourcePropType, StyleSheet } from "react-native";


type Props = {
    imgSource: ImageSourcePropType;
};

export default function ImageViewer({imgSource}: Props) {
    return <Image style={styles.image} source={imgSource} />
}


const styles = StyleSheet.create({
    image: {
        marginTop: 25,
        width: 250,
        height: 320,
        borderRadius: 8,
    }
})
