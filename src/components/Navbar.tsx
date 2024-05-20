import { HStack, Image, Text, VStack } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInputs from './SearchInputs'

interface Props {
    onSearchText: (searchText: string) => void;
}



function Navbar({ onSearchText }: Props) {

    return (
        <HStack justifyContent='space-around' padding='6px'>

            <VStack>
                <Image src={logo} boxSize={'40px'} />
                <Text
                    whiteSpace='nowrap'
                    fontSize={'2xl'}
                    color='orange.500'>
                    Z-Zone
                </Text>
            </VStack>

            <SearchInputs onSearchInput={(searchInputs) => onSearchText(searchInputs)} />

            <ColorModeSwitch />
        </HStack>
    )
}

export default Navbar
