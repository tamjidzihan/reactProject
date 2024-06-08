import { Button, Heading, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import useGameDetails from '../hooks/useGameDetails'
import { useState } from 'react'


function GameDetails() {

    const prams = useParams()
    const { gameDetails } = useGameDetails(parseInt(prams.id as string))

    const [expanded, setExpanded] = useState(false)
    const textLimit = 300

    const expandableDescription = (description: string | undefined) => {
        const summary = description?.substring(0, textLimit) + '. . .'

        if (!description)
            return null

        if (description?.length <= textLimit)
            return <Text>{description}</Text>

        return (
            <Text>
                {expanded ? description : summary} {"  "}
                <Button
                    size='xs'
                    fontWeight='bold'
                    colorScheme='yellow'
                    marginX='3px'
                    _hover={{ opacity: '0.5' }}
                    onClick={() => setExpanded(!expanded)}
                >
                    {expanded ? 'Show Less' : 'Read More'}
                </Button>
            </Text>
        )
    }


    return (
        <>
            <Heading as='h1' marginY='10px' fontSize='7xl'>
                {gameDetails?.name}
            </Heading>

            {expandableDescription(gameDetails?.description_raw)}

            {/* <Text >

                {gameDetails?.description_raw}
            </Text> */}

        </>
    )
}

export default GameDetails
