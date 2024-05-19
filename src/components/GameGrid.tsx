import { Alert, AlertIcon, AlertTitle, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenre";
import { PlatformList } from "../hooks/usePlatforms";

interface Props {
    selectedGenre: Genre | null;
    selectedPlatform: PlatformList | null;
    selectedSortOrder: string;
    searchInputText: string | null;
}


function GameGrid({ selectedGenre, selectedPlatform, selectedSortOrder, searchInputText }: Props) {
    const { error, isLoading, games } = useGames(selectedGenre, selectedPlatform, selectedSortOrder, searchInputText);
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

    return (
        <>
            {error && <Alert status='error'>
                <AlertIcon />
                <AlertTitle>{error}</AlertTitle>
            </Alert>}

            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
                spacing={6}
                paddingX={'15px'}>

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
