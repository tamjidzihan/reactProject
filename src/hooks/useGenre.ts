import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClint from "../services/api-clint";

export interface Genre {
    id: number;
    name: string;
    image_background: string
}

export interface FetchGenreResponse {
    count: number;
    results: Genre[]
}

const useGenre = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const controller = new AbortController()

    useEffect(() => {
        setIsLoading(true)
        apiClint
            .get<FetchGenreResponse>('/genres', { signal: controller.signal })
            .then(res => {
                setGenres(res.data.results)
                setIsLoading(false)
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message)
                setIsLoading(false)
            })
        // return () => controller.abort()
    }, []);
    return { genres, error, isLoading }
}


export default useGenre;