import { Box, HStack } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import OrderingGames from "../components/OrderingGames";
import PlatformsSelector from "../components/PlatformsSelector";

const HomePage = () => {
    const [isCurrentPage, setIsCurrentPage] = useState<number>(1);
    return (
        <>
            <Box padding='0 15px 10px'>
                <GameHeading />
                <HStack >
                    <PlatformsSelector />
                    <OrderingGames />
                </HStack>
            </Box>
            <GameGrid
                selectedCurrentPage={isCurrentPage}
                onSelectedCurrentPage={setIsCurrentPage}
            />
        </>
    )
}

export default HomePage
