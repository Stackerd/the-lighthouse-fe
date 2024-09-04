import { Flex, Text, Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      p="4"
      color="pink"
      width="100%"
    >
      <Flex color="lightblue">
        <Box
          as={NavLink}
          style={({ isActive }) => ({ color: isActive ? "pink" : "lightblue" })}
          to="/"
          mr={4}
          _hover={{ color: "pink" }}
        >
          Home
        </Box>
        <Text mr={4} color="blue">
          /
        </Text>
        <Box
          mr={4}
          as={NavLink}
          to="/favorites"
          _hover={{ color: "pink" }}
          style={({ isActive }) => ({ color: isActive ? "pink" : "lightblue" })}
        >
          Favorites{" "}
        </Box>
        <Text mr={4} color="blue">
          /
        </Text>
        <Box
          mr={4}
          as={NavLink}
          to="/events"
          _hover={{ color: "pink" }}
          style={({ isActive }) => ({ color: isActive ? "pink" : "lightblue" })}
        >
          Events{" "}
        </Box>
        <Text mr={4} color="blue">
          /
        </Text>
        <Box
          as={NavLink}
          to="/resources"
          _hover={{ color: "pink" }}
          style={({ isActive }) => ({ color: isActive ? "pink" : "lightblue" })}
        >
          Resources{" "}
        </Box>
      </Flex>
      <Text fontSize="xl" fontWeight="bold">
        The{" "}
        <Text as="span" color="blue">
          Lighthouse
        </Text>
      </Text>
    </Flex>
  );
}
