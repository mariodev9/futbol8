import "./App.css";
import { List } from "./components/PlayerList/List";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  layerStyles: {
    listItem: {
      padding: "5px 0px",
      margin: "10px 0px",
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <List />
    </ChakraProvider>
  );
}

export default App;
