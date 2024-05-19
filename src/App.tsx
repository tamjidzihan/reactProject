import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import './App.css'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenre'
import PlatformsSelector from './components/PlatformsSelector'
import { PlatformList } from './hooks/usePlatforms'
import OrderingGames from './components/OrderingGames'
import Heading from './components/GameHeading'
import GameHeading from './components/GameHeading'




function App() {
  const [isSelectedGenre, setISSelectedGenre] = useState<Genre | null>(null)
  const [isSelectedPlatform, setISSelectedPlatform] = useState<PlatformList | null>(null)
  const [isSelectedSortOrder, setIsSelectedSortOrder] = useState('')
  const [isSearchInputs, setIsSearchInputs] = useState('')



  return (
    <>
      {/* ===== Grid Layout ===== */}
      <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }}
        templateColumns={{
          base: '1fr',
          lg: '200px'
        }}>

        {/* ===== Start Navbar ===== */}
        <GridItem
          area='nav'
          position='sticky'
          top='0'
          w="100%"
          zIndex='99'
          backdropFilter="auto"
          backdropBlur="22px"
          boxShadow="md"
        >
          <Navbar onSearchText={(searchText) => setIsSearchInputs(searchText)} />
        </GridItem>
        {/* ===== End Navbar ===== */}

        {/* ===== Start Sidebar  ===== */}
        <Show above="lg">
          <GridItem area='aside' padding={'8px'}>
            <GenreList
              onSelectGenre={(genre) => setISSelectedGenre(genre)}
              selectedGenre={isSelectedGenre}
            />
          </GridItem>
        </Show>
        {/* ===== End Sidebar  ===== */}

        {/* ===== Start Main  ===== */}
        <GridItem area='main'>
          <GameHeading
            genre={isSelectedGenre}
            platformList={isSelectedPlatform}
          />
          <HStack padding='0 15px 10px'>

            <PlatformsSelector
              onSelectPlatfrom={(platfrom) => setISSelectedPlatform(platfrom)}
              selectedPlatfrom={isSelectedPlatform}
            />
            <OrderingGames onSelectSortOrder={(order) => { setIsSelectedSortOrder(order) }}
              selectedSortOrder={isSelectedSortOrder}
            />
          </HStack>
          <GameGrid
            selectedGenre={isSelectedGenre}
            selectedPlatform={isSelectedPlatform}
            selectedSortOrder={isSelectedSortOrder}
            searchInputText={isSearchInputs}
          />
        </GridItem>
        {/* ===== End Main  ===== */}

      </Grid>

    </>
  )
}

export default App
