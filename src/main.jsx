import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Favorites from "./Favorites.jsx";
import Events from "./Events.jsx";
import Resources from "./Resources.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/favorites", element: <Favorites /> },
  { path: "/events", element: <Events /> },
  { path: "/resources", element: <Resources /> },
]);

const theme = extendTheme({
  colors: {
    pink: "#ffafcc",
    blue: "#a2d2ff",
    lilac: "#cdb4db",
    lightblue: "#bde0fe",
  },
});
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>
);
