import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInputs from './SearchInputs'

interface Props {
    onSearchText: (searchText: string) => void;
}



function Navbar({ onSearchText }: Props) {

    return (
        <HStack justifyContent='space-between' padding='6px'>

            <Image src={logo} boxSize={'60px'} />
            <Text
                whiteSpace='nowrap'
                fontSize={'4xl'}
                color='orange.500'>
                Z-Zone
            </Text>

            <SearchInputs onSearchInput={(searchInputs) => onSearchText(searchInputs)} />

            <ColorModeSwitch />
        </HStack>
    )
}

export default Navbar
