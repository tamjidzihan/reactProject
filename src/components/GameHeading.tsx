import { Heading } from '@chakra-ui/react'
import useGenreStore from '../stateProviders/GenreStore';
import usePlatformStore from '../stateProviders/PlatFormStore';


function GameHeading() {
    const { isSelectedGenre } = useGenreStore()
    const { isSelectedPlatform } = usePlatformStore()

    const heading = `${isSelectedGenre?.name || ''} ${isSelectedPlatform?.name || ''} Games`
    return (
        <Heading as='h1' marginY='10px' fontSize='7xl'>
            {heading}
        </Heading>
    )
}

export default GameHeading
