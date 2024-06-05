import { Button, HStack, Heading, Image, ListItem, UnorderedList } from '@chakra-ui/react'
import useGenre from '../hooks/useGenre'
import getCroppedImageUrl from '../services/image-url'
import useGenreStore from '../stateProviders/GenreStore'
import GenreListSkeleton from './GenreListSkeleton'


function GenreList() {
    const { isSelectedGenre, setISSelectedGenre } = useGenreStore()
    const { genres, error, isLoading } = useGenre()
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 15]

    if (error) return null;

    return (
        <>
            <UnorderedList >
                <Heading fontSize='2xl' marginY={3}>Genres</Heading>

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
                                // onClick={() => onSelectGenre(genre)}
                                // fontSize={genre.id === selectedGenre?.id ? 'xl' : 'lg'}
                                // fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}

                                onClick={() => setISSelectedGenre(genre)}
                                fontSize={genre.id === isSelectedGenre?.id ? 'xl' : 'lg'}
                                fontWeight={genre.id === isSelectedGenre?.id ? 'bold' : 'normal'}

                                variant={"link"}
                                whiteSpace='wrap'
                                textAlign='start'
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
