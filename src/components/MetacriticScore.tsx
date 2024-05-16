import { Tag } from "@chakra-ui/react"

interface Props {
    metacritic: number
}

function MetacriticScore({ metacritic }: Props) {
    let color = metacritic > 75 ? 'green' : metacritic > 60 ? 'yellow' : '';

    return (
        <Tag colorScheme={color}> {metacritic}</Tag >
    )
}

export default MetacriticScore
