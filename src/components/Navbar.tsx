import { HStack, Text, VStack } from '@chakra-ui/react'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInputs from './SearchInputs'

function Navbar() {

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

            <SearchInputs />

            <ColorModeSwitch />
        </HStack>
    )
}

export default Navbar
