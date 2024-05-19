import { Heading } from '@chakra-ui/react'
import { Genre } from '../hooks/useGenre';
import { PlatformList } from '../hooks/usePlatforms';


interface Props {
    genre: Genre | null;
    platformList: PlatformList | null;

}

function GameHeading({ genre, platformList }: Props) {

    const heading = `${genre?.name || ''} ${platformList?.name || ''} Games`
    return (
        <Heading as='h1' padding='10px'>
            {heading}
        </Heading>
    )
}

export default GameHeading
