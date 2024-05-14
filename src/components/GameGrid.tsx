import { Alert, AlertIcon, AlertTitle, ListItem, SimpleGrid, Spinner, Stack, UnorderedList } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";





function GameGrid() {
    const { error, isLoading, games } = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <>
            {error && <Alert status='error'>
                <AlertIcon />
                <AlertTitle>{error}</AlertTitle>
            </Alert>}



            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10} paddingX={'15px'}>
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
