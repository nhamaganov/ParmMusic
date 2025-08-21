import { useState } from "react";


export default function SongList() {
    const [song] = useState<string[]>([
        require("../assets/audio/TheBoss.mp3"),
        require("../assets/audio/SomethingToRapAbout.mp3"),
    ])
}