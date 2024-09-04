import { useState, useEffect } from "react";
import { Heading, Text, Box, SimpleGrid } from "@chakra-ui/react";
import { getFavorites } from "./services/bible-api";
import Header from "./components/Header";
import "./App.css";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    async function getMyFavorites() {
      const favorites = await getFavorites();
      setFavorites(
        Object.values(favorites.data).filter(({ favorite }) => favorite)
      );
    }
    getMyFavorites();
  }, []);

  return (
    <Box>
      <Header />
      <Heading as="h1" size="xxl" mt={8} fontWeight={500} textAlign="center">
        My Favorite Scriptures
      </Heading>
      {favorites.length === 0 ? (
        <Text mt={8} color="lilac" fontWeight={800} fontSize="lg">
          No favorites yet
        </Text>
      ) : (
        <SimpleGrid columns={3} spacing={10} mt={8} p={8}>
          {favorites.map(({ text, reference, id }) => (
            <Box key={id}>
              <Heading as="h4">{reference}</Heading>
              <Text>{text}</Text>
            </Box>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
}

export default Favorites;
