import React from "react";
import { Game } from "../hooks/useGames";
import { Card, Image } from "@chakra-ui/react";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card.Root borderRadius={30} overflow={"hidden"}>
      <Image src={game.background_image} alt="game picture" />
      <Card.Header />
      <Card.Body>
        <Card.Title fontSize={"xl"}>{game.name}</Card.Title>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
