import { Heading, Box, SimpleGrid } from "@chakra-ui/react";
import Header from "./components/Header";
import "./App.css";

function Resources() {
  return (
    <Box>
      <Header />
      <Heading as="h1" size="xxl" mt={8} fontWeight={500} textAlign="center">
        Resources
      </Heading>

      <SimpleGrid columns={3} spacing={10} mt={8} p={8}>
        <Box
          as="a"
          href="https://bible.com"
          target="_blank"
          rel="noopener noreferrer"
          _hover={{ color: "pink" }}
        >
          YouVersion Bible App
        </Box>
        <Box
          as="a"
          href="https://www.lwf.org/ultimate-guide-to-bible-study/best-bible-study-tools-for-deeper-understanding"
          target="_blank"
          rel="noopener noreferrer"
          _hover={{ color: "pink" }}
        >
          Love Worth finding Bible Study Tools
        </Box>
        <Box
          as="a"
          href="https://www.crossway.org/articles/study-bibles-2023/"
          target="_blank"
          rel="noopener noreferrer"
          _hover={{ color: "pink" }}
        >
          Study Bibles
        </Box>
        <Box
          as="a"
          href="https://www.crossway.org/articles/journals-and-journaling-bibles-2023/"
          target="_blank"
          rel="noopener noreferrer"
          _hover={{ color: "pink" }}
        >
          Journals
        </Box>
        <Box
          as="a"
          href="https://www.crossway.org/articles/bible-studies-and-commentaries-2023/"
          target="_blank"
          rel="noopener noreferrer"
          _hover={{ color: "pink" }}
        >
          Bible Commentaries
        </Box>
        <Box
          as="a"
          href="https://www.crossway.org/articles/devotionals-2023/"
          target="_blank"
          rel="noopener noreferrer"
          _hover={{ color: "pink" }}
        >
          Devotionals
        </Box>
        <Box
          as="a"
          href="https://www.crossway.org/articles/for-families-2023/"
          target="_blank"
          rel="noopener noreferrer"
          _hover={{ color: "pink" }}
        >
          Family Study Resources
        </Box>
        <Box
          as="a"
          href="https://www.crossway.org/articles/books-on-biblical-studies-2023/"
          target="_blank"
          rel="noopener noreferrer"
          _hover={{ color: "pink" }}
        >
          Books on Biblical Studies
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default Resources;
