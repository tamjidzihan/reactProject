import { useState, useEffect } from "react";
import apiClint from "../services/api-clint";
import { CanceledError } from "axios";



export interface PlatformList {
    id: number;
    name: string;
    slug: string;
}

export interface FetchPlatforms {
    count: number;
    results: PlatformList[]
}

const usePlatforms = () => {
    const [platforms, setPlatfroms] = useState<PlatformList[]>([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const controller = new AbortController()

    useEffect(() => {
        setIsLoading(true)
        apiClint
            .get<FetchPlatforms>(
                '/platforms/lists/parents',
                {
                    signal: controller.signal
                }
            )
            .then(res => {
                setPlatfroms(res.data.results)
                setIsLoading(false)
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message)
                setIsLoading(false)
            })
        // return () => controller.abort()
    }, []);
    return { platforms, error, isLoading }
};

export default usePlatforms;