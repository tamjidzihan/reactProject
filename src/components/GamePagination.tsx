import { Stack, Button } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

function GamePagination() {
    return (
        <Stack spacing={4} direction='row' justify='center' padding='20px'>

            <Button variant='outline' size='lg'>
                <ChevronLeftIcon fontSize='xxx-large' cursor='pointer' />
            </Button>

            <Button variant='outline' size='lg'>
                <ChevronRightIcon fontSize='xxx-large' cursor='pointer' />
            </Button>

        </Stack>
    )
}

export default GamePagination
