import Slider from "@react-native-community/slider";


type Props = {
    changeValue: (value: number) => void;
    disabled: boolean
    maxVal: number;
    value: number;
};

export default function SeekBar({changeValue, maxVal, value, disabled}: Props) {
    return (
        <Slider 
            style={{width: 300, height: 300}}
            minimumValue={0}
            maximumValue={maxVal}
            minimumTrackTintColor="white"
            maximumTrackTintColor="#000000"
            thumbTintColor="#fff"
            onValueChange={changeValue}
            value={value}
            step={1}
            disabled={disabled}
        />      
    )
}