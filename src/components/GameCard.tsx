import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react"
import { Games } from "../hooks/useGames"
import PlatfromIconList from "./PlatfromIconList"
import MetacriticScore from "./MetacriticScore"
import getCroppedImageUrl from "../services/image-url"

interface Props {
    game: Games
}



function GameCard({ game }: Props) {
    return (
        <Card borderRadius='10px' overflow={"hidden"} boxShadow={" rgba(17, 12, 46, 0.15) 0px 50px 100px -20px"} width={'4rm'}>

            <Image objectFit='cover' src={getCroppedImageUrl(game.background_image)} />

            <CardBody>

                <HStack justifyContent={"space-between"} marginBottom={3}>
                    <PlatfromIconList
                        platforms={game.parent_platforms.map(p => p.platform)}
                    />
                    <MetacriticScore metacritic={game.metacritic} />
                </HStack>

                <Heading cursor='pointer' fontSize={"2xl"}>
                    {game.name}
                </Heading>

            </CardBody>
        </Card>
    )
}

export default GameCard
