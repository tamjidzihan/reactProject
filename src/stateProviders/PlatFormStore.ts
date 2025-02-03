import { create } from "zustand";
import { PlatformList } from "../hooks/usePlatforms";

interface PlatformStore {
    isSelectedPlatform: PlatformList | null;
    setISSelectedPlatform: (selectedPlatform: PlatformList) => void;
};

const usePlatformStore = create<PlatformStore>(set => ({
    isSelectedPlatform: null,
    setISSelectedPlatform: (selectedPlatform: PlatformList) => set(() => ({
        isSelectedPlatform: selectedPlatform
    }))
}));


export default usePlatformStore;