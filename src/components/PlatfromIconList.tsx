import { Platform } from '../hooks/useGames'
import { HStack, Icon } from '@chakra-ui/react'
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiAtari, SiD3Dotjs, SiNintendo, SiSega } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { IconType } from 'react-icons'


interface Props {
    platforms: Platform[]
}

export const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
    atari: SiAtari,
    sega: SiSega,
    '3do': SiD3Dotjs,
    // 'commodore-amiga': SiCommodore,
    // 'neo-geo': 'asd'
}
function PlatfromIconList({ platforms }: Props) {
    return (
        <HStack marginY={'10px'} >
            {platforms.map((p) =>
                <Icon margin={'3px'} color={'gray.500'} as={iconMap[p.slug]} key={p.id} />
            )}
        </HStack>
    )
}

export default PlatfromIconList
