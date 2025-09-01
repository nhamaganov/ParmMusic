import { Dimensions, Image, ImageSourcePropType, StyleSheet } from "react-native";


const { width } = Dimensions.get("window");

type Props = {
    imgSource: ImageSourcePropType;
};

export default function ImageViewer({imgSource}: Props) {
    return <Image style={styles.image} source={imgSource} />
}


const styles = StyleSheet.create({
    image: {
        width: width * 0.8, // 80% ширины экрана
        height: width * 0.8, // Делаем высоту равной ширине = квадрат
        maxWidth: 400, // Максимальный размер для больших экранов
        maxHeight: 400,
        alignSelf: 'center', // Центрируем по горизонтали
        marginVertical: 20,
        borderRadius: 12, // Скругленные углы как в Spotify
        overflow: 'hidden', // Обрезаем содержимое по границам контейнера
        elevation: 5, // Тень для Android
        shadowColor: '#000', // Тень для iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    }
})
