import { Image, ImageSourcePropType, StyleSheet } from "react-native";


type Props = {
    imgSource: ImageSourcePropType;
};

export default function ImageViewer({imgSource}: Props) {
    return <Image style={styles.image} source={imgSource} resizeMode="stretch"/>
}


const styles = StyleSheet.create({
    image: {
        width: 370,
        height: 440,
        borderRadius: 6,
    }
})
