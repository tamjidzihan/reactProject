import { create } from "zustand";
import { Genre } from "../hooks/useGenre";

interface GenreStore {
    isSelectedGenre: Genre | null;
    setISSelectedGenre: (selectedgenre: Genre) => void;
}

const useGenreStore = create<GenreStore>(set => ({
    isSelectedGenre: null,
    setISSelectedGenre: (selectedgenre: Genre) => set(() => ({
        isSelectedGenre: selectedgenre
    }))
}))

export default useGenreStore;