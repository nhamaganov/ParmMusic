import { Image, ImageSourcePropType, StyleSheet } from "react-native";


type Props = {
    imgSource: ImageSourcePropType;
};

export default function ImageViewer({imgSource}: Props) {
    return <Image style={styles.image} source={imgSource} />
}


const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    }
})
