import { useState, useEffect } from "react";
import { Input, Heading, Text, Box, Button, Flex } from "@chakra-ui/react";
import { StarIcon, CopyIcon } from "@chakra-ui/icons";
import Fuse from "fuse.js";
import {
  getRandomVerse,
  getVerseByReference,
  setFavoriteVerse,
} from "./services/bible-api";
import Header from "./components/Header";
import "./App.css";

const list = [
  "Genesis",
  "Exodus",
  "Leviticus",
  "Numbers",
  "Deuteronomy",
  "Joshua",
  "Judges",
  "Ruth",
  "1Samuel",
  "2Samuel",
  "1Kings",
  "2Kings",
  "1Chronicles",
  "2Chronicles",
  "Ezra",
  "Nehemiah",
  "Esther",
  "Job",
  "Psalm",
  "Proverbs",
  "Ecclesiastes",
  "Song of Solomon",
  "Isaiah",
  "Jeremiah",
  "Lamentations",
  "Ezekiel",
  "Daniel",
  "Hosea",
  "Joel",
  "Amos",
  "Obadiah",
  "Jonah",
  "Micah",
  "Nahum",
  "Habakkuk",
  "Zephaniah",
  "Haggai",
  "Zechariah",
  "Malachi",
  "Matthew",
  "Mark",
  "Luke",
  "John",
  "Acts",
  "Romans",
  "1Corinthians",
  "2Corinthians",
  "Galatians",
  "Ephesians",
  "Philippians",
  "Colossians",
  "1Thessalonians",
  "2Thessalonians",
  "1Timothy",
  "2Timothy",
  "Titus",
  "Philemon",
  "Hebrews",
  "James",
  "1Peter",
  "2Peter",
  "1John",
  "2John",
  "3John",
  "Jude",
  "Revelation",
];

const fuse = new Fuse(list);

function splitAtNumber(input) {
  const regex = /^(\d+\s\w+|\D+)\s\d+/;
  const match = input.match(regex);
  return match ? match[1] : input;
}

function App() {
  const [todaysVerse, setTodaysVerse] = useState({});
  const [searchVerse, setSearchVerse] = useState("");
  const [searchResults, setSearchResults] = useState({});
  const [searchResultsError, setSearchResultsError] = useState(null);

  useEffect(() => {
    async function getVerse() {
      const verse = await getRandomVerse();
      setTodaysVerse(verse.data);
    }
    getVerse();
  }, []);

  async function handleSearch(e) {
    e.preventDefault();
    const search = splitAtNumber(searchVerse);
    const closest = fuse.search(search);
    const chapterAndVerse = searchVerse.replace(search, "").trim();

    try {
      const data = await getVerseByReference(
        `${closest[0].item.toLowerCase()}_${chapterAndVerse}`
      );
      setSearchResults(data.data);
      setSearchVerse("");
    } catch (error) {
      setSearchResultsError({ reference: searchVerse, error: "Not Found" });
      console.log(error);
    }
  }

  async function handleFavorite(verse, callback) {
    const search = splitAtNumber(verse.reference);
    const closest = fuse.search(search);
    const chapterAndVerse = verse.reference.replace(search, "").trim();
    try {
      await setFavoriteVerse({
        id: `${closest[0].item.toLowerCase()}_${chapterAndVerse}`,
        ...verse,
      });
      callback({ ...verse, favorite: !verse.favorite });
      console.log(callback);
      console.log(todaysVerse);
    } catch (error) {
      console.log(error);
    }
  }

  const handleCopy = (verse) => {
    navigator.clipboard.writeText(`${verse.reference} - ${verse.text}`);
  };

  return (
    <Box>
      <Header />
      <Heading>
        Welcome to{" "}
        <Text as="span" color="pink">
          The
        </Text>{" "}
        <Text color="blue" as="span">
          Lighthouse
        </Text>
      </Heading>
      <Flex mt={8}>
        <Box w={400} borderRight="1px solid #efefef">
          <Heading as="h1" size="xl" fontWeight={400} mt={48}>
            Scripture of the Day
          </Heading>
          <Box mt={4}>
            <Flex justify="center" align="center">
              <Heading as="h3" size="lg">
                {todaysVerse.reference}
              </Heading>
              <StarIcon
                color={todaysVerse.favorite ? "lilac" : "#efefef"}
                ml={2}
                cursor="pointer"
                onClick={() => {
                  handleFavorite(todaysVerse, setTodaysVerse);
                }}
              />
              <CopyIcon
                ml={2}
                cursor="pointer"
                onClick={() => handleCopy(todaysVerse)}
              />
            </Flex>
            <Text>{todaysVerse.text}</Text>
          </Box>
        </Box>
        <Box ml="10%">
          <Flex
            justify="center"
            align="center"
            as="form"
            onSubmit={handleSearch}
          >
            <Input
              placeholder="search for your favorite scripture"
              w={500}
              value={searchVerse}
              onChange={(e) => {
                setSearchVerse(e.target.value);
                setSearchResultsError(null);
              }}
            />
            <Button
              background="blue"
              color="white"
              type="submit"
              _hover={{ background: "lightblue" }}
            >
              Search
            </Button>
          </Flex>
          {searchResultsError && (
            <Text color="red" fontWeight="bold">
              {searchResultsError.reference} - {searchResultsError.error}
            </Text>
          )}
          {searchResults.reference && (
            <Box mt={4}>
              <Text>
                <Text as="span" color="pink">
                  The
                </Text>{" "}
                <Text as="span" color="blue">
                  Lighthouse
                </Text>{" "}
                found your scripture
              </Text>
              <Flex justify="center" align="center" mt={6}>
                <Heading as="h3" size="lg" fontWeight={400}>
                  {searchResults.reference}
                </Heading>
                <StarIcon
                  color={searchResults.favorite ? "lilac" : "#efefef"}
                  ml={2}
                  cursor="pointer"
                  onClick={() =>
                    handleFavorite(searchResults, setSearchResults)
                  }
                />
                <CopyIcon
                  ml={2}
                  cursor="pointer"
                  onClick={() => handleCopy(searchResults)}
                />
              </Flex>
              <Text w={300} margin="auto" mt={4}>
                {searchResults.text}
              </Text>
            </Box>
          )}
        </Box>
      </Flex>
    </Box>
  );
}

export default App;
