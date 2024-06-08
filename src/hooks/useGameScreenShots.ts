import { useEffect, useState } from "react";
import apiClint from "../services/api-clint";

interface ScreenShots{
    id: number;
    image: string;
    width: number;
    height: number;
}

interface FetchGameScreenShots{
    count: number;
    results: ScreenShots[]
}

const useScreenShorts=(selectedGameId:number)=>{
    const [gamesScreenShorts, setGamesScreenShorts] = useState<ScreenShots[]>([]);


    useEffect(()=>{
        apiClint
        .get<FetchGameScreenShots>(
            `/games/${selectedGameId}/screenshots`
        )
        .then(res=>{
            setGamesScreenShorts(res.data.results)
        })
    },[])
    return { gamesScreenShorts}
}

export default useScreenShorts;