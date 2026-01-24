import { Game } from "../hooks/useGames";
import { Card, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import MetacriticScore from "./MetacriticScore";
import getCroppedImageURL from "../services/optimize-image";
import { useColorMode } from "./ui/color-mode";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  const {colorMode} = useColorMode()
  let cardRootbgcolor: string= '';
  if (colorMode === "dark") cardRootbgcolor="gray.700" 
  else (cardRootbgcolor="gray.muted")


  return (
    <Card.Root borderBottomRadius={30} overflow={"hidden"} backgroundColor={cardRootbgcolor}>
      <Image src={getCroppedImageURL(game.background_image)} alt="game picture" />
      <Card.Header fontSize="xl"> {game.name}</Card.Header>
      <Card.Body >
        <Card.Description>
          <HStack justify={"space-between"}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <MetacriticScore score={game.metacritic} />
          </HStack>
        </Card.Description>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
