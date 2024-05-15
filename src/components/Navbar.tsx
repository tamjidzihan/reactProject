import { Center, HStack, Image, Kbd, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'

function Navbar() {
    return (
        <div>
            <HStack justifyContent={'space-between'} padding='10px'>

                <HStack >
                    <Image src={logo} boxSize={'60px'} />
                    <Text fontSize={'4xl'} > <Kbd>Z</Kbd> - <Kbd>ZONE</Kbd></Text>

                </HStack>
                <ColorModeSwitch />
            </HStack>
        </div>
    )
}

export default Navbar
