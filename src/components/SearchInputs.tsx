import { CloseIcon } from '@chakra-ui/icons'
import { InputGroup, Input, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { FaSearch } from 'react-icons/fa'

interface Props {
    onSearchInput: (searchInputs: string) => void
}

function SearchInputs({ onSearchInput }: Props) {
    const ref = useRef<HTMLInputElement>(null)
    return (
        <form style={{ width: '70%' }} onSubmit={(event) => {
            event.preventDefault();
            if (ref.current) {
                onSearchInput(ref.current.value)
            }
        }}>
            <InputGroup>
                <InputLeftElement children={<FaSearch />} />
                <InputRightElement children={<CloseIcon fontSize='small' />} />
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
