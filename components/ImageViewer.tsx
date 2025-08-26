import { Image, ImageSourcePropType, StyleSheet } from "react-native";


type Props = {
    imgSource: ImageSourcePropType;
};

export default function ImageViewer({imgSource}: Props) {
    return <Image style={styles.image} source={imgSource} />
}


const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 370,
        borderRadius: 12,
    }
})
