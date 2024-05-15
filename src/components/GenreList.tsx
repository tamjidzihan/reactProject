import useGenre, { Genre } from '../hooks/useGenre'
import { Button, HStack, Image, ListItem, UnorderedList } from '@chakra-ui/react'
import getCroppedImageUrl from '../services/image-url'
import GenreListSkeleton from './GenreListSkeleton'


interface Props {
    onSelectGenre: (genre: Genre) => void
}

function GenreList({ onSelectGenre }: Props) {
    const { genres, error, isLoading } = useGenre()
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 15]

    if (error) return null;

    return (
        <>

            <UnorderedList >

                {isLoading && skeletons.map(skeleton =>
                    <GenreListSkeleton key={skeleton} />
                )}

                {genres.map(genre =>
                    <ListItem key={genre.id} paddingY='10px' listStyleType={'none'}>
                        <HStack>
                            <Image
                                boxSize='32px'
                                borderRadius='8px'
                                src={getCroppedImageUrl(genre.image_background)}
                            />
                            <Button
                                onClick={() => onSelectGenre(genre)}
                                fontSize={'lg'}
                                fontWeight={'thine'}
                                // fontWeight={'bold'}
                                variant={'link'}
                                colorScheme=''
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                )}
            </UnorderedList>
        </>
    )
}

export default GenreList
