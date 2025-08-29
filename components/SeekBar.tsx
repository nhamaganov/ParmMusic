import Slider from "@react-native-community/slider";

type Props = {
    changeValue: (value: number) => void;
    maxVal: number;
    value: number;
};

export default function SeekBar({ changeValue, maxVal, value }: Props) {
    return (
        <Slider 
            style={{width: 200, height: 100, alignItems: "center"}}
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