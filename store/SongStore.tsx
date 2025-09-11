import { Song, songs } from "@/components/elements/Song";
import { makeAutoObservable } from "mobx";

class SongStore {
    songs: Song[] = songs;

    constructor() {
        makeAutoObservable(this);
        // makeObservable(this, {
        //     songs: observable,
        //     toggleLike: action,
        //     getLikedSongs: action,
        //     getAllSongs: action,
        // })
    }

    toggleLike = (songId: string) => {
        const songIndex = this.songs.findIndex(song => song.id === songId)
        this.songs[songIndex].isLiked = !this.songs[songIndex].isLiked;
    }

    getAllSongs = () => {
        return this.songs;
    }

    getLikedSongs = () => {
        return this.songs.filter(song => song.isLiked);
    }
}

export const songStore = new SongStore();