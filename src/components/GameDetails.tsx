import { Heading } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import useGameDetails from '../hooks/useGameDetails'


function GameDetails() {

    const prams = useParams()
    const { gameDetails } = useGameDetails(parseInt(prams.id as string))
    return (
        <>
            <Heading as='h1' marginY='10px' fontSize='7xl'>
                {gameDetails?.name}
            </Heading>

        </>
    )
}

export default GameDetails
