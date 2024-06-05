import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Icon, Menu, MenuButton, MenuItem, MenuList, Spinner } from '@chakra-ui/react';
import usePlatforms from '../hooks/usePlatforms';
import usePlatformStore from '../stateProviders/PlatFormStore';
import { iconMap } from './PlatfromIconList';


function PlatformsSelector() {
    const { isSelectedPlatform, setISSelectedPlatform } = usePlatformStore()
    const { platforms, error, isLoading } = usePlatforms()

    if (error) return null;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} >
                {isSelectedPlatform?.name || 'Platforms'}
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
                        onClick={() => setISSelectedPlatform(platform)}>
                        <Icon marginEnd={'6px'} color={'gray.500'} as={iconMap[platform.slug]} />
                        {platform.name}
                    </MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default PlatformsSelector;
