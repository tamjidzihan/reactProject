import { HStack, Image, Text, VStack } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInputs from './SearchInputs'
import useSearchStore from '../stateProviders/SearchStore'




function Navbar() {
    const { setSearchText } = useSearchStore()

    return (
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

            <SearchInputs onSearchInput={(search) => setSearchText(search)} />

            <ColorModeSwitch />
        </HStack>
    )
}

export default Navbar
