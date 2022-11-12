import { useState } from "react";
import { chakra, Text } from "@chakra-ui/react";
import { motion, Reorder, isValidMotionProp } from "framer-motion";
import {
  Box,
  Flex,
  ListItem,
  OrderedList,
  VStack,
  shouldForwardProp,
} from "@chakra-ui/react";

const listItems = [
  { name: "Rodri", id: 1, number: 1 },
  { name: "Mati DM", id: 2, number: 2 },
  { name: "Manuel Istillarte", id: 3, number: 4 },
  { name: "Felipe Ochandorena", id: 4, number: 14 },
  { name: "Andres Seren", id: 5, number: 10 },
  { name: "Chino", id: 6, number: 6 },
  { name: "Alan Albert", id: 7, number: 22 },
  { name: "Luciano Mariotti", id: 8, number: 9 },
  { name: "Otro", id: 9, number: 80 },
];

const listPositions = [
  { name: "GK", color: "#CD6200" },
  { name: "CB", color: "#006DBC" },
  { name: "RB", color: "#006DBC" },
  { name: "LB", color: "#006DBC" },
  { name: "CDM", color: "#006F26" },
  { name: "LM", color: "#006F26" },
  { name: "RM", color: "#006F26" },
  { name: "CF", color: "#A00606" },
];

const MotionFlex = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export const List = () => {
  const [items, setItems] = useState(listItems);

  return (
    <>
      <Flex border={"1px solid blue"}>
        <VStack p={"10px"} border={"1px solid red"}>
          <OrderedList>
            {listPositions.map((pos) => (
              <ListItem layerStyle={"listItem"} key={pos.name}>
                <Text
                  textAlign={"center"}
                  color={pos.color}
                  fontWeight={600}
                  pt="2px"
                >
                  {pos.name}
                </Text>
              </ListItem>
            ))}
          </OrderedList>
        </VStack>
        <Box p={"10px"} border={"1px solid green"}>
          <Reorder.Group values={items} onReorder={setItems}>
            {items.map((item) => (
              // Change the li to Reorder.Item and add value prop
              <Reorder.Item key={item.id} value={item}>
                <MotionFlex
                  layerStyle={"listItem"}
                  whileHover={{ scale: 1.1 }}
                  bg={"#FFF5DC"}
                  border={"1px solid #CCCCCC"}
                  boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
                  borderRadius={"10px"}
                  display={"flex"}
                  cursor={"grab"}
                >
                  <Box width={"50px"} p={"0px 15px"}>
                    <Text
                      textAlign={"center"}
                      fontWeight={400}
                      color={"#515151"}
                    >
                      {item.number}
                    </Text>
                  </Box>
                  <Box p={"0px 15px"} width={"200px"}>
                    <Text fontWeight={600} color={"#272727"}>
                      {item.name}
                    </Text>
                  </Box>
                </MotionFlex>
              </Reorder.Item>
            ))}
          </Reorder.Group>
        </Box>
      </Flex>
    </>
  );
};
