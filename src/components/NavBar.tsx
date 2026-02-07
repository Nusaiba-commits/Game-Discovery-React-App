import { Flex, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface NavBarProps{
  onSearch: (searchText: string) => void
}

const NavBar = ( {onSearch} : NavBarProps ) => {
  return (
    <Flex justifyContent='space-between' padding={"7px"}>
      <Image src={logo} boxSize="50px" />
      <SearchInput onSearch={onSearch}/>
      <ColorModeSwitch />
    </Flex>
  );
};

export default NavBar;
