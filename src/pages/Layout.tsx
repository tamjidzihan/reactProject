import { Grid, GridItem } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import GenreList from "../components/GenreList"
import { Outlet } from "react-router-dom"

const Layout = () => {
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
                <Navbar />
                {/* ===== End Navbar ===== */}

                {/* ===== Start Sidebar  ===== */}
                <GenreList />
                {/* ===== End Sidebar  ===== */}

                {/* ===== Start Main  ===== */}
                <GridItem area='main'>
                    <Outlet />
                </GridItem>
                {/* ===== End Main  ===== */}

            </Grid>
        </>
    )
}

export default Layout
