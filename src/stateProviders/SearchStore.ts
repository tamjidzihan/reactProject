import { create } from 'zustand'


interface SearchStore {
    search: string;
    setSearchText: (searchText: string) => void;
}

const useSearchStore = create<SearchStore>((set) => ({
    search: '',
    setSearchText: (searchText: string) => set(() => ({ search: searchText }))
}))


export default useSearchStore;