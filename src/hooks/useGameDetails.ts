import { useEffect, useState } from "react";
import apiClint from "../services/api-clint";



export interface FetchGameDetailResponse {
    id: number;
    name: string;
    slug: string;
    background_image: string;
    description_raw: string;
    rating: number;
    metacritic: number;
}


const useGameDetails = (selectedGameId: number) => {
    const [gameDetails, setGameDetails] = useState<FetchGameDetailResponse>();

    useEffect(() => {
        apiClint
            .get<FetchGameDetailResponse>(
                `/games/${selectedGameId}`
            )
            .then(res => {
                setGameDetails(res.data)
            })
    }, [])
    return { gameDetails }


}

export default useGameDetails;
