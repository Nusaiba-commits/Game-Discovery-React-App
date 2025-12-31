import { Box, HStack, Image, List, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageURL from "../services/optimize-image";

const GenreList = () => {
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
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
