import { ImageSourcePropType } from "react-native";

export type Song = {
    id: string
    title: string;
    author: string;
    uri: string;
    cover: ImageSourcePropType;
    isLiked: boolean;
};

export const songs: Song[] = [
    {
        id: "1",
        title: "The Boss",
        author: "James Brown",
        uri: require("@/assets/audio/TheBoss.mp3"),
        cover: require("@/assets/images/TheBoss.jpg"),
        isLiked: false,
    },
    {
        id: "2",
        title: "Something to Rap About",
        author: "Freddie Gibbs feat Tyler, The Creator",
        uri: require("@/assets/audio/SomethingToRapAbout.mp3"),
        cover: require("@/assets/images/Alfredo.jpg"),
        isLiked: false,
    },
    {
        id: "3",
        title: "September",
        author: "Earth, Wind & Fire",
        uri: require("@/assets/audio/September.mp3"),
        cover: require("@/assets/images/September.jpg"),
        isLiked: false,
    },
    {
        id: "4",
        title: "High Enough",
        author: "K.Flay",
        uri: require("@/assets/audio/HighEnough.mp3"),
        cover: require("@/assets/images/HighEnough.jpg"),
        isLiked: true,
    },
    {
        id: "5",
        title: "Ain't no love",
        author: "Booby Bland",
        uri: require("@/assets/audio/AintNoLove.mp3"),
        cover: require("@/assets/images/AintNoLove.jpg"),
        isLiked: true,
    },
]