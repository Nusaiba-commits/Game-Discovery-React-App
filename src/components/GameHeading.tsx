import { GameQuery } from "../App";
import { Heading, Highlight } from "@chakra-ui/react";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const heading = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`;

  return (
    <Heading size="5xl">
        <Highlight query="Games" styles={{color: "gray.focusRing"}}>
      {heading}
      </Highlight>
    </Heading>
  );
};

export default GameHeading;
