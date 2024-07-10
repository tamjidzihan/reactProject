import { GridItem, HStack, Text, VStack } from '@chakra-ui/react'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInputs from './SearchInputs'
// import logo from '../assets/logo.webp'

function Navbar() {

    return (
        <GridItem
            area='nav'
            position='sticky'
            top='0'
            zIndex='99'
            backdropFilter="auto"
            backdropBlur="22px"
            boxShadow="md"
        >
            <HStack justifyContent='space-around' padding='6px'>

                <VStack>
                    {/* <Image src={logo} boxSize={'40px'} /> */}
                    <Text
                        whiteSpace='nowrap'
                        fontSize={'2xl'}
                        colorScheme='orange.500'
                        fontWeight='bold'>
                        Z-Zone
                    </Text>
                </VStack>

                <SearchInputs />

                <ColorModeSwitch />
            </HStack>
        </GridItem>
    )
}

export default Navbar
