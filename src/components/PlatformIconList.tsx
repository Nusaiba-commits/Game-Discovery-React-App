import {
  FaWindows,
  FaAndroid,
  FaPlaystation,
  FaApple,
  FaXbox,
  FaLinux,
  FaNeos
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { SiAtari, SiD3Dotjs, SiSega, SiCommodore } from "react-icons/si";
import { Platform } from "../hooks/usePlatforms";
import { HStack, Icon } from "@chakra-ui/react";
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
    applemacintosh: FaApple,
    atari: SiAtari,
    'commodore-amiga': SiCommodore,
    sega: SiSega,
    '3do': SiD3Dotjs,
    'neo-geo': FaNeos,
  };

  return (
    <HStack>
        {platforms.map((platform) => (
          <Icon key={platform.id} as={iconMap[platform.slug]} />
        ))}
    </HStack>
  );
};

export default PlatformIconList;
