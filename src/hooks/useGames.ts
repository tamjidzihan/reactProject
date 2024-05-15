import { useState, useEffect } from "react";
import apiClint from "../services/api-clint";
import { AxiosRequestConfig, CanceledError } from "axios";
import { Genre } from "./useGenre";



export interface Platform {
    id: number;
    name: string;
    slug: string
}

export interface Games {
    id: number;
    name: string;
    background_image: string;
    metacritic: number;
    parent_platforms: { platform: Platform }[]
}

export interface FetchGameResponse {
    count: number;
    results: Games[]
}

const useGames = (selectedGenre: Genre | null) => {
    const [games, setGames] = useState<Games[]>([]);
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const controller = new AbortController()

    useEffect(() => {
        setIsLoading(true)
        apiClint
            .get<FetchGameResponse>(
                '/games',
                {
                    signal: controller.signal,
                    params: { genres: selectedGenre?.id }
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
    }, [selectedGenre?.id]);
    return { games, error, isLoading }
};

export default useGames;