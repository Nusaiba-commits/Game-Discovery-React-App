import { Game } from "../hooks/useGames";
import { Card, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import MetacriticScore from "./MetacriticScore";
import getCroppedImageURL from "../services/optimize-image";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card.Root>
      <Image src={getCroppedImageURL(game.background_image)} alt="game picture" />
      <Card.Header fontSize="xl"> {game.name}</Card.Header>
      <Card.Body>
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
