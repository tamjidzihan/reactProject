import { Alert, AlertIcon, AlertTitle, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenre";


interface Props {
    selectedGenre: Genre | null
}


function GameGrid({ selectedGenre }: Props) {
    const { error, isLoading, games } = useGames(selectedGenre);
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <>
            {error && <Alert status='error'>
                <AlertIcon />
                <AlertTitle>{error}</AlertTitle>
            </Alert>}



            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={5} paddingX={'15px'}>

                {isLoading && skeletons.map(skeleton =>
                    <GameCardSkeleton key={skeleton} />
                )}
                {games.map((game) =>
                    <GameCard key={game.id} game={game} />
                )}
            </SimpleGrid>
        </>
    )
}

export default GameGrid
