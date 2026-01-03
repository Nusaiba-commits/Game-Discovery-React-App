import { Box, Button, HStack, Image, Link, LinkBox, List, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageURL from "../services/optimize-image";
import { FaUnderline } from "react-icons/fa";

interface GenreListProps{
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre}: GenreListProps) => {
  const { data, isLoading } = useGenres();

  return (
    <ul>
      {isLoading && <Spinner />}
      {data.map((genre) => (
        <li key={genre.id}>
          <HStack padding="10px" paddingX="3">
            <Image
              boxSize="9"
              borderRadius="md"
              src={getCroppedImageURL(genre.image_background)}
            />
            <Button variant="plain" onClick={() => {onSelectGenre(genre)}} fontSize="lg">{genre.name}</Button>
          </HStack>
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
