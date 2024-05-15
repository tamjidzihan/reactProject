import { Grid, GridItem, Show } from '@chakra-ui/react'
import './App.css'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenre'


function App() {
  const [isSelectedGenre, setISSelectedGenre] = useState<Genre | null>(null)



  return (
    <>
      <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }}
        templateColumns={{
          base: '1fr',
          lg: '200px'
        }}
      >

        <GridItem area='nav' >
          <Navbar />
        </GridItem>

        <Show above="lg">
          <GridItem area='aside' padding={'8px'}>
            <GenreList
              onSelectGenre={(genre) => {
                setISSelectedGenre(genre)
              }}
            />
          </GridItem>
        </Show>

        <GridItem area='main'>
          <GameGrid
            selectedGenre={isSelectedGenre} />
        </GridItem>

      </Grid>

    </>
  )
}

export default App
