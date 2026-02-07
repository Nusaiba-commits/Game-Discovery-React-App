import meh from "../assets/meh.webp";
import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import { ImageProps, Image } from "@chakra-ui/react";

interface EmojisProps {
  rating: number;
}

const Emojis = ({ rating }: EmojisProps) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "20px" },
    5: { src: bullsEye, alt: "excellent", boxSize: "30px" },
  };

  return <Image {...emojiMap[rating]} />;
};

export default Emojis;
