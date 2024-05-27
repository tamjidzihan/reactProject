import { useState, useEffect } from "react";
import apiClint from "../services/api-clint";
import { CanceledError } from "axios";
import { Genre } from "./useGenre";
import { PlatformList } from "./usePlatforms";



export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Games {
    id: number;
    name: string;
    background_image: string;
    metacritic: number;
    parent_platforms: { platform: Platform }[];
}

export interface FetchGameResponse {
    count: number;
    next: string;
    previous: string;
    results: Games[];
}

const useGames = (
    selectedGenre: Genre | null,
    selectedPlatform: PlatformList | null,
    selectedSortOrder: string,
    searchInputText: string | null,
    selectedCurrentPage: number
) => {
    const [games, setGames] = useState<Games[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [nextPage, setNextPage] = useState<string | null>(null);
    const [previousPage, setPreviousPage] = useState<string | null>(null);
    const controller = new AbortController();

    useEffect(() => {
        setIsLoading(true)
        apiClint
            .get<FetchGameResponse>(
                '/games',
                {
                    signal: controller.signal,
                    params: {
                        genres: selectedGenre?.id,
                        platforms: selectedPlatform?.id,
                        ordering: selectedSortOrder,
                        search: searchInputText,
                        page: selectedCurrentPage
                    }
                }
            )
            .then(res => {
                setGames(res.data.results)
                setIsLoading(false)
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message)
                setIsLoading(false)
            })
        // return () => controller.abort()
    }, [
        selectedGenre?.id,
        selectedPlatform?.id,
        selectedSortOrder,
        searchInputText
    ]);
    return { games, error, isLoading }
};

export default useGames;