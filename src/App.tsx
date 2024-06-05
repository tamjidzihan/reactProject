import './App.css'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import PlatformsSelector from './components/PlatformsSelector'
import OrderingGames from './components/OrderingGames'
import GameHeading from './components/GameHeading'
import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react'


function App() {
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
          <Navbar />
        </GridItem>
        {/* ===== End Navbar ===== */}

        {/* ===== Start Sidebar  ===== */}
        <Show above="lg">
          <GridItem area='aside' padding={'15px'}>
            <GenreList />
          </GridItem>
        </Show>
        {/* ===== End Sidebar  ===== */}

        {/* ===== Start Main  ===== */}
        <GridItem area='main'>

          <Box padding='0 15px 10px'>
            <GameHeading />
            <HStack >
              <PlatformsSelector />
              <OrderingGames />
            </HStack>
          </Box>
          <GameGrid
            selectedCurrentPage={isCurrentPage}
            onSelectedCurrentPage={setIsCurrentPage}
          />
        </GridItem>
        {/* ===== End Main  ===== */}

      </Grid>

    </>
  )
}

export default App
