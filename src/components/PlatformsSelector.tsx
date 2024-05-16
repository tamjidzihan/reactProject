import { Menu, MenuButton, Button, MenuList, MenuItem, Icon, Spinner } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import usePlatforms, { PlatformList } from '../hooks/usePlatforms'
import { iconMap } from './PlatfromIconList'

interface Props {
    onSelectPlatfrom: (platform: PlatformList) => void;
    selectedPlatfrom: PlatformList | null;
}

function PlatformsSelector({ onSelectPlatfrom, selectedPlatfrom }: Props) {
    const { platforms, error, isLoading } = usePlatforms()

    if (error) return null;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} margin={'10px'}>
                {selectedPlatfrom?.name || 'Platforms'}
            </MenuButton>
            <MenuList>
                {isLoading && <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='orange.500'
                    size='xl'
                />}
                {platforms.map(platform =>
                    <MenuItem
                        key={platform.id}
                        onClick={() => onSelectPlatfrom(platform)}>
                        <Icon marginEnd={'6px'} color={'gray.500'} as={iconMap[platform.slug]} />
                        {platform.name}
                    </MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default PlatformsSelector;
