import { CloseIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { FaSearch } from 'react-icons/fa'
import useSearchStore from '../stateProviders/SearchStore'



function SearchInputs() {
    const ref = useRef<HTMLInputElement>(null)
    const setSearchText = useSearchStore(s => s.setSearchText)

    return (
        <form style={{ width: '70%' }} onSubmit={(event) => {
            event.preventDefault();
            if (ref.current) {
                setSearchText(ref.current.value)
            }
        }}>
            <InputGroup>
                <InputLeftElement children={<FaSearch />} />
                <InputRightElement children={<CloseIcon fontSize='small' cursor='pointer' />} />
                <Input
                    type='text'
                    borderRadius={15}
                    variant='filled'
                    placeholder='Search games....'
                    ref={ref}
                />
            </InputGroup>
        </form>
    )
}

export default SearchInputs
