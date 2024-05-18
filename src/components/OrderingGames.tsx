import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'


interface Props {
    onSelectSortOrder: (sortOrder: string) => void;
    selectedSortOrder: string;
}


function OrderingGames({ onSelectSortOrder, selectedSortOrder }: Props) {
    const sortOrder = [
        { value: '', label: 'Relavance' },
        { value: 'name', label: 'Name' },
        { value: '-added', label: 'Date Added' },
        { value: '-released', label: 'Realease Date' },
        { value: '-rating', label: 'Rating' },
        { value: '-metacritic', label: 'Metacritic' },
        { value: '-updated', label: 'Updated' },
        { value: '-created', label: 'Created' },
    ]
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} margin={'10px'}>
                Order By:{selectedSortOrder}
            </MenuButton>


            <MenuList>
                {/* {isLoading && <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='orange.500'
                    size='xl'
                />} */}

                {sortOrder.map((order) =>
                    <MenuItem
                        key={order.value}
                        value={order.value}
                        onClick={() => onSelectSortOrder(order.value)}>
                        {order.label}
                    </MenuItem>
                )}


            </MenuList>
        </Menu>
    )
}

export default OrderingGames
