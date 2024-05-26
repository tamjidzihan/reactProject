import './App.css'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenre'
import PlatformsSelector from './components/PlatformsSelector'
import { PlatformList } from './hooks/usePlatforms'
import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import OrderingGames from './components/OrderingGames'
import GameHeading from './components/GameHeading'
import GamePagination from './components/GamePagination'




function App() {
  const [isSelectedGenre, setISSelectedGenre] = useState<Genre | null>(null)
  const [isSelectedPlatform, setISSelectedPlatform] = useState<PlatformList | null>(null)
  const [isSelectedSortOrder, setIsSelectedSortOrder] = useState('')
  const [isSearchInputs, setIsSearchInputs] = useState('')

  const [nextPage, setNextPage] = useState<string | null>(null);
  const [previousPage, setPreviousPage] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    if (nextPage) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (previousPage) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };


  return (
    <>
      {/* ===== Grid Layout ===== */}
      <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }}
        templateColumns={{
          base: '1fr',
          lg: '250px'
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
          />
          <GamePagination
            onNextPage={handleNextPage}
            onPreviousPage={handlePreviousPage}
            hasNextPage={!!nextPage}
            hasPreviousPage={!!previousPage}

          />
        </GridItem>
        {/* ===== End Main  ===== */}

      </Grid>

    </>
  )
}

export default App
