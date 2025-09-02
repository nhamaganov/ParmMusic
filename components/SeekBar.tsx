import Slider from "@react-native-community/slider";
import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");  

type Props = {
    changeValue: (value: number) => void;
    maxVal: number;
    value: number;
};

export default function SeekBar({ changeValue, maxVal, value }: Props) {
    return (
        <Slider 
            style={styles.seekBarContainer}
            minimumValue={0}
            maximumValue={maxVal}
            minimumTrackTintColor="white"
            maximumTrackTintColor="#8b8b8bff"
            thumbTintColor="#fff"
            onValueChange={changeValue}
            value={value}
            step={1}
        />      
    )
}

const styles = StyleSheet.create({
    seekBarContainer: {
        width: "100%",
    }
})