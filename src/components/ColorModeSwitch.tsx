import { HStack, Switch, Icon, Text } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";
import { HiCheck, HiX } from "react-icons/hi";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    
      <Switch.Root
        checked={colorMode === "dark"}
        onCheckedChange={toggleColorMode}
        colorPalette={"yellow"}
      >
          
      <Switch.HiddenInput />
      <Switch.Control />
      <label>Dark Mode</label>
    </Switch.Root>
  );
};

export default ColorModeSwitch;
