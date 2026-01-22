import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { IoSearchSharp } from "react-icons/io5";

interface SearchInputProps {
  onSearch: (searchText: string) => void;
}

const SearchInput = ( { onSearch } : SearchInputProps ) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form style={ { width:'85%', padding: '2%' } } onSubmit={ (event) => {
      event.preventDefault();
      if (ref.current) onSearch(ref.current.value)

    }}>
      <InputGroup startElement={<IoSearchSharp />}>
        <Input
          ref={ref}
          placeholder="Search games"
          borderRadius={30}
          variant={"subtle"}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
