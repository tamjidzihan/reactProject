import { Card, CardBody, HStack, Heading, Image, Tag, Text } from "@chakra-ui/react"
import { Games } from "../hooks/useGames"
import PlatfromIconList from "./PlatfromIconList"
import MetacriticScore from "./MetacriticScore"
import getCroppedImageUrl from "../services/image-url"

interface Props {
    game: Games
}



function GameCard({ game }: Props) {
    return (
        <Card borderRadius='10px' overflow={"hidden"} boxShadow={" rgba(17, 12, 46, 0.15) 0px 50px 100px -20px"} width={'300px'}>

            {/* <Image src={game.background_image} /> */}
            <Image src={getCroppedImageUrl(game.background_image)} />

            <CardBody>

                <Heading fontSize={"2xl"}>
                    {game.name}
                </Heading>

                <HStack justifyContent={"space-between"}>
                    <PlatfromIconList
                        platform={game.parent_platforms.map(p => p.platform)}
                    />
                    <MetacriticScore metacritic={game.metacritic} />
                </HStack>

            </CardBody>
        </Card>
    )
}

export default GameCard
