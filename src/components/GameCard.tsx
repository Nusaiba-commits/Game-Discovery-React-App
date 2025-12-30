import { Game } from "../hooks/useGames";
import { Card, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card.Root borderRadius={30} overflow={"hidden"}>
      <Image src={game.background_image} alt="game picture" />
      <Card.Header />
      <Card.Body>
        <Card.Title>{game.name}</Card.Title>
        <Card.Description>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
        </Card.Description>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
