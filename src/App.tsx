import { Grid, GridItem } from "@chakra-ui/react";


function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //larger than 1024 px
      }}
    >
      <GridItem area="nav" bg="red">
        Nav
      </GridItem>
      <GridItem area="aside" bg="orange" display={{ base: "none", lg: "grid" }}>
        Aside
      </GridItem>
      <GridItem area="main" bg="blue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
