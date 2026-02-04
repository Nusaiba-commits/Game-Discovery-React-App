import { Box, Button, Heading, HStack, Image, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageURL from "../services/optimize-image";

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: GenreListProps) => {
  const { data, isLoading } = useGenres();

  return (
      <ul>
        <Heading fontSize="3xl" padding="3">
          Genres
        </Heading>
        {isLoading && <Spinner />}
        {data.map((genre) => (
          <li key={genre.id}>
            <HStack padding="10px" paddingX="3">
              <Image
                boxSize="9"
                borderRadius="md"
                src={getCroppedImageURL(genre.image_background)}
              />
              <Button
                variant="plain"
                onClick={() => {
                  onSelectGenre(genre);
                }}
                fontSize="lg"
                fontWeight={genre.id == selectedGenre?.id ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </li>
        ))}
      </ul>
  );
};

export default GenreList;
