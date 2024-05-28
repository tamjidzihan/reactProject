import { Stack, Button, Box, Tag } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

interface Props {
    currentPage: number;
    nextPage: string | null;
    previousPage: string | null;
    onCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}


function GamePagination({ currentPage, onCurrentPage, nextPage, previousPage }: Props) {

    const handlePreviousPage = () => {
        if (previousPage) {
            onCurrentPage(prevPage => Math.max(prevPage - 1, 1));

        }
    };

    const handleNextPage = () => {
        if (nextPage) {
            onCurrentPage(prevPage => prevPage + 1);

        }
    }

    return (
        <Stack spacing={4} direction='row' justify='center' padding='20px'>

            <Button onClick={handlePreviousPage}
                isDisabled={!previousPage}
                boxShadow={" rgba(17, 12, 46, 0.15) 0px 50px 100px -20px"}
                width={'4rm'}>
                <ChevronLeftIcon fontSize='xxx-large' cursor='pointer' />
            </Button>
            <Tag variant='solid' colorScheme='gray' paddingX={4} fontSize='large'>
                1 / {currentPage}
            </Tag>
            <Button onClick={handleNextPage}
                isDisabled={!nextPage}
                boxShadow={" rgba(17, 12, 46, 0.15) 0px 50px 100px -20px"}
                width={'4rm'}>
                <ChevronRightIcon fontSize='xxx-large' cursor='pointer' />
            </Button>

        </Stack>
    )
}

export default GamePagination
