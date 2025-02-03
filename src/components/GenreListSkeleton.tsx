import { Skeleton, HStack } from '@chakra-ui/react'


function GenreListSkeleton() {
    return (
        <HStack py={'10px'}>
            <Skeleton boxSize='33px' borderRadius={'10px'} />
            <Skeleton height='20px' width={'60px'} />
        </HStack>
    )
}

export default GenreListSkeleton
