import { useState, useEffect } from "react";
import apiClint from "../services/api-clint";
import { CanceledError } from "axios";
import useSearchStore from "../stateProviders/SearchStore";
import useGenreStore from "../stateProviders/GenreStore";
import usePlatformStore from "../stateProviders/PlatFormStore";
import useSortOrderStore from "../stateProviders/SortOrderStore";



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
    selectedCurrentPage: number
) => {
    const [games, setGames] = useState<Games[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [nextPage, setNextPage] = useState<string | null>(null);
    const [previousPage, setPreviousPage] = useState<string | null>(null);
    const controller = new AbortController();

    const { isSelectedPlatform } = usePlatformStore()
    const { isSelectedGenre } = useGenreStore()
    const { search } = useSearchStore()
    const { isSelectedSortOrder } = useSortOrderStore()




    useEffect(() => {
        setIsLoading(true)
        apiClint
            .get<FetchGameResponse>(
                '/games',
                {
                    signal: controller.signal,
                    params: {
                        genres: isSelectedGenre?.id,
                        platforms: isSelectedPlatform?.id,
                        ordering: isSelectedSortOrder,
                        search: search,
                        page: selectedCurrentPage
                    }
                }
            )
            .then(res => {
                setGames(res.data.results)
                setNextPage(res.data.next)
                setPreviousPage(res.data.previous)
                setIsLoading(false)
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message)
                setIsLoading(false)
            })
        // return () => controller.abort()
    }, [
        isSelectedGenre?.id,
        isSelectedPlatform?.id,
        isSelectedSortOrder,
        selectedCurrentPage,
        search
    ]);
    return { games, nextPage, previousPage, error, isLoading }
};

export default useGames;