import { Badge } from "@chakra-ui/react";

interface MetacriticScoreProps {
  score: number | null;
}

const MetacriticScore = ({ score }: MetacriticScoreProps) => {
  if (score == null) return null;

  const color = score > 90 ? "green" : score > 60 ? "yellow" : "";
  return <Badge variant="solid" size="sm" paddingX='2' colorPalette={color}>{score}</Badge>;
};

export default MetacriticScore;
