import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

function GameCardSkeleton() {
    return (
        <Card
            width={'4rm'}
            borderRadius='10px'
            overflow={"hidden"}
            boxShadow={" rgba(17, 12, 46, 0.15) 0px 50px 100px -20px"}>
            <Skeleton height={'240px'} />
            <CardBody>
                <SkeletonText />
            </CardBody>
        </Card>
    )
}

export default GameCardSkeleton
