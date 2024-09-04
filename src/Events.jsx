import { Heading, Text, Box, SimpleGrid } from "@chakra-ui/react";

import Header from "./components/Header";
import "./App.css";

const events = [
  {
    title: "Women’s Nature Retreat",
    date: "October 15, 2024",
    location: "Pine Valley Forest",
    description:
      "A weekend retreat for women to reconnect with God and nature. Enjoy guided hikes, prayer sessions, and group reflection inspired by biblical teachings.",
  },
  {
    title: "Sunrise Scripture Hike",
    date: "November 3, 2024",
    location: "Mount Hope",
    description:
      "Join us for an early morning hike to watch the sunrise, followed by a reading from the Psalms and group discussions. A refreshing way to start the day with God’s word.",
  },
  {
    title: "Faith in the Garden Workshop",
    date: "December 10, 2024",
    location: "Serenity Botanical Gardens",
    description:
      "Spend a day in the garden, learning about God’s creation and working with your hands. We’ll explore biblical gardening themes and how they relate to growth in faith.",
  },
];
function Events() {
  return (
    <Box>
      <Header />
      <Heading as="h1" size="xxl" mt={8} fontWeight={500} textAlign="center">
        Events
      </Heading>

      <SimpleGrid columns={3} spacing={10} mt={8} p={8}>
        {events.map((event, index) => (
          <Box key={index}>
            <Heading as="h2" size="lg" fontWeight={500}>
              {event.title}
            </Heading>
            <Text color="blue" fontWeight={500}>
              {event.date}
            </Text>
            <Text color="pink" fontWeight={500}>
              @ {event.location}
            </Text>
            <Text color="#101010">{event.description}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Events;
