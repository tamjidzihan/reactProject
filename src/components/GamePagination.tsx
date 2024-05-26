import { Stack, Button } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

interface Props {
    onNextPage: () => void;
    onPreviousPage: () => void;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
}


function GamePagination({ onNextPage, onPreviousPage, hasNextPage, hasPreviousPage }: Props) {


    return (
        <Stack spacing={4} direction='row' justify='center' padding='20px'>

            <Button onClick={onPreviousPage} isDisabled={!hasPreviousPage} boxShadow={" rgba(17, 12, 46, 0.15) 0px 50px 100px -20px"} width={'4rm'}>
                <ChevronLeftIcon fontSize='xxx-large' cursor='pointer' />
            </Button>


            <Button onClick={onNextPage} isDisabled={!hasNextPage} boxShadow={" rgba(17, 12, 46, 0.15) 0px 50px 100px -20px"} width={'4rm'}>
                <ChevronRightIcon fontSize='xxx-large' cursor='pointer' />
            </Button>

        </Stack>
    )
}

export default GamePagination
