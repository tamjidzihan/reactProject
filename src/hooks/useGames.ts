import { useState, useEffect } from "react";
import apiClint from "../services/api-clint";
import { CanceledError } from "axios";



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

const useGames = () => {
    const [games, setGames] = useState<Games[]>([]);
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const controller = new AbortController()

    useEffect(() => {
        setIsLoading(true)
        apiClint
            .get<FetchGameResponse>('/games', { signal: controller.signal })
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
    }, []);
    return { games, error, isLoading }
};

export default useGames;