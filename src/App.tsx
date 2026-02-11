import { Box, Grid, GridItem, HStack, StackSeparator } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, 
      }}
      templateColumns={{
        base: "1fr",
        lg: "1fr 5fr",
      }}
    >
      <GridItem area="nav">
        <NavBar onSearch={(searchText: string) => setGameQuery({ ...gameQuery, searchText })}/>
      </GridItem>
      <GridItem area="aside" display={{ base: "none", lg: "grid" }}>
        <GenreList
          selectedGenre={gameQuery.genre}
          onSelectGenre={(genre: Genre) => setGameQuery({ ...gameQuery, genre })}
        />
      </GridItem>
      <GridItem area="main">
        <Box padding='5' spaceY='5'>
        <GameHeading gameQuery={gameQuery}/>
        <HStack gap="7" separator={<StackSeparator />}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform: Platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector
            sortLabel={gameQuery.sortOrder}
            onSelect={(sortOrder: string) => setGameQuery({ ...gameQuery, sortOrder })}
          />
        </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
