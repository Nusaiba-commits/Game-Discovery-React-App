import {
  FaWindows,
  FaAndroid,
  FaPlaystation,
  FaApple,
  FaXbox,
  FaLinux,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "@/hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface PlatformIconListProps {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: PlatformIconListProps) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    android: FaAndroid,
    xbox: FaXbox,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    mac: FaApple,
    linux: FaLinux,
    web: BsGlobe,
  };

  return (
    <HStack>
        {platforms.map((platform) => (
          <Icon as={iconMap[platform.slug]} />
        ))}
    </HStack>
  );
};

export default PlatformIconList;
