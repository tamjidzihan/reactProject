import React from 'react'
import GameDetails from '../components/GameDetails'
import { Container, Flex, HStack } from '@chakra-ui/react'
import GameScreenShots from '../components/GameScreenShots'

const GameDetailPage = () => {
    return (
        <>

            <Container maxW={'1450px'}>

                <GameDetails />
                <GameScreenShots />

            </Container>

        </>
    )
}

export default GameDetailPage
