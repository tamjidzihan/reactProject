import { Alert, AlertIcon, AlertTitle, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GamePagination from "./GamePagination";

interface Props {
    selectedCurrentPage: number;
    onSelectedCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}


function GameGrid({
    selectedCurrentPage,
    onSelectedCurrentPage
}: Props) {
    const { error, nextPage, previousPage, isLoading, games } = useGames(
        selectedCurrentPage
    );
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

    return (
        <>
            {error && <Alert status='error'>
                <AlertIcon />
                <AlertTitle>{error}</AlertTitle>
            </Alert>}

            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
                spacing={8}
                paddingX={'15px'}>

                {isLoading && skeletons.map(skeleton =>
                    <GameCardSkeleton key={skeleton} />
                )}
                {games.map((game) =>
                    <GameCard key={game.id} game={game} />
                )}
            </SimpleGrid>
            <GamePagination
                currentPage={selectedCurrentPage}
                onCurrentPage={onSelectedCurrentPage}
                nextPage={nextPage}
                previousPage={previousPage}
            />
        </>
    )
}

export default GameGrid
