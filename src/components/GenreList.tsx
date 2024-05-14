import useGenre from '../hooks/useGenre'
import { HStack, Image, ListItem, Text, UnorderedList, VStack } from '@chakra-ui/react'
import getCroppedImageUrl from '../services/image-url'




function GenreList() {
    const { genres, error, isLoading } = useGenre()


    return (
        <UnorderedList padding={'10px'} >
            {genres.map(genre =>

                <ListItem key={genre.id} paddingY='10px' listStyleType={'none'}>
                    <HStack>
                        <Image
                            boxSize='32px'
                            borderRadius='8px'
                            src={getCroppedImageUrl(genre.image_background)} />
                        <Text>{genre.name}</Text>
                    </HStack>

                </ListItem>
            )}
        </UnorderedList>
    )
}

export default GenreList
