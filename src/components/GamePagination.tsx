import { Stack, Button } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'


function GamePagination() {

    const pageNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <Stack spacing={4} direction='row' justify='center' padding='20px'>

            <Button variant='outline' size='lg'>
                <ChevronLeftIcon fontSize='xxx-large' cursor='pointer' />
            </Button>

            {pageNumber.map((number) =>
                <Button variant='outline' size='lg' key={number}>
                    {number}
                </Button>
            )}

            <Button variant='outline' size='lg'>
                <ChevronRightIcon fontSize='xxx-large' cursor='pointer' />
            </Button>

        </Stack>
    )
}

export default GamePagination
