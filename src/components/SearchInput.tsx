import { Input, InputGroup } from "@chakra-ui/react"
import { IoSearchSharp } from "react-icons/io5"

const SearchInput = () => {
  return (
    <InputGroup startElement={<IoSearchSharp />}>
    <Input placeholder="Search games" borderRadius={30} variant={"subtle"}/>
  </InputGroup>
  )
}

export default SearchInput