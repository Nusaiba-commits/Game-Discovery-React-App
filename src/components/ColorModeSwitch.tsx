import { HStack, Switch} from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";
import { HiCheck, HiX} from "react-icons/hi";


const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch.Root
        checked={colorMode === "dark"}
        onCheckedChange={toggleColorMode}
        colorPalette={"yellow"}
      >
        <Switch.HiddenInput />
        <Switch.Control>
          <Switch.Thumb>
            <Switch.ThumbIndicator fallback={<HiX color="black" />}>
              <HiCheck />
            </Switch.ThumbIndicator>
          </Switch.Thumb>
        </Switch.Control>
        <Switch.Label> Dark Mode </Switch.Label>
      </Switch.Root>
    </HStack>
  );
};

export default ColorModeSwitch;
