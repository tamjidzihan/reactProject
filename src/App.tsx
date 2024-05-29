import './App.css'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenre'
import PlatformsSelector from './components/PlatformsSelector'
import { PlatformList } from './hooks/usePlatforms'
import OrderingGames from './components/OrderingGames'
import GameHeading from './components/GameHeading'
import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react'



function App() {
  const [isSelectedGenre, setISSelectedGenre] = useState<Genre | null>(null)
  const [isSelectedPlatform, setISSelectedPlatform] = useState<PlatformList | null>(null)
  const [isSelectedSortOrder, setIsSelectedSortOrder] = useState('')
  const [isSearchInputs, setIsSearchInputs] = useState('')
  const [isCurrentPage, setIsCurrentPage] = useState<number>(1);

  return (
    <>
      {/* ===== Grid Layout ===== */}
      <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }}
        templateColumns={{
          base: '1fr',
          lg: '260px'
        }}>

        {/* ===== Start Navbar ===== */}
        <GridItem
          area='nav'
          position='sticky'
          top='0'
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
          <GridItem area='aside' padding={'15px'}>
            <GenreList
              onSelectGenre={(genre) => setISSelectedGenre(genre)}
              selectedGenre={isSelectedGenre}
            />
          </GridItem>
        </Show>
        {/* ===== End Sidebar  ===== */}

        {/* ===== Start Main  ===== */}
        <GridItem area='main'>

          <Box padding='0 15px 10px'>
            <GameHeading
              genre={isSelectedGenre}
              platformList={isSelectedPlatform}
            />
            <HStack >
              <PlatformsSelector
                onSelectPlatfrom={(platfrom) => setISSelectedPlatform(platfrom)}
                selectedPlatfrom={isSelectedPlatform}
              />
              <OrderingGames onSelectSortOrder={(order) => { setIsSelectedSortOrder(order) }}
                selectedSortOrder={isSelectedSortOrder}
              />
            </HStack>
          </Box>
          <GameGrid
            selectedGenre={isSelectedGenre}
            selectedPlatform={isSelectedPlatform}
            selectedSortOrder={isSelectedSortOrder}
            searchInputText={isSearchInputs}
            selectedCurrentPage={isCurrentPage}
            onSelectedCurrentPage={setIsCurrentPage}

          />
          {/* <GamePagination
            currentPage={isCurrentPage}
            onCurrentPage={setIsCurrentPage}

          /> */}
        </GridItem>
        {/* ===== End Main  ===== */}

      </Grid>

    </>
  )
}

export default App
