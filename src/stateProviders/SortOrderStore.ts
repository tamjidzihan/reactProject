import { create } from "zustand";

interface SortOrderStore {
    isSelectedSortOrder: string;
    setIsSelectedSortOrder: (selectedSortOrder: string) => void;
}


const useSortOrderStore = create<SortOrderStore>(set => ({
    isSelectedSortOrder: '',
    setIsSelectedSortOrder: (selectedSortOrder: string) => set(() => ({
        isSelectedSortOrder: selectedSortOrder
    }))
}))


export default useSortOrderStore;