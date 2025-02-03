import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react"
import { Games } from "../hooks/useGames"
import PlatfromIconList from "./PlatfromIconList"
import MetacriticScore from "./MetacriticScore"
import getCroppedImageUrl from "../services/image-url"
import { Link } from "react-router-dom"

interface Props {
    game: Games
}



function GameCard({ game }: Props) {
    return (
        <Card
            borderRadius='10px'
            overflow={"hidden"}
            boxShadow={" rgba(17, 12, 46, 0.15) 0px 50px 100px -20px"}
            width={'4rm'}
            _hover={{
                transform: 'scale(1.07)',
                transition: 'transform 0.15s ease-in'
            }}
        >

            <Image objectFit='cover' src={getCroppedImageUrl(game.background_image)} />

            <CardBody>

                <HStack justifyContent={"space-between"} marginBottom={3}>
                    <PlatfromIconList
                        platforms={game.parent_platforms.map(p => p.platform)}
                    />
                    <MetacriticScore metacritic={game.metacritic} />
                </HStack>

                <Heading cursor='pointer' fontSize={"2xl"}>
                    <Link to={`game/${game.name}/${game.id}`}>{game.name}</Link>

                </Heading>

            </CardBody>
        </Card>
    )
}

export default GameCard
