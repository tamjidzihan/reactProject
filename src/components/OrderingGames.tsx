import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import useSortOrderStore from '../stateProviders/SortOrderStore';


function OrderingGames() {
    const { isSelectedSortOrder, setIsSelectedSortOrder } = useSortOrderStore()
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
    const currentSortOrder = sortOrder.find((order) => order.value === isSelectedSortOrder)

    return (
        <Menu>

            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} margin={'10px'}>
                Order By : {currentSortOrder?.label}
            </MenuButton>

            <MenuList>
                {sortOrder.map((order) =>
                    <MenuItem
                        key={order.value}
                        value={order.value}
                        onClick={() => setIsSelectedSortOrder(order.value)}>
                        {order.label}
                    </MenuItem>
                )}

            </MenuList>
        </Menu>
    )
}

export default OrderingGames
