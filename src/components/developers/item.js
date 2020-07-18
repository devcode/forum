import React from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Button,
  Avatar,
  useColorMode,
} from "@chakra-ui/core";
import { bgColor, color } from "../../utils/useTheme";
import { NavLink } from "react-router-dom";

const Item = ({ developer }) => {
  const gridSettings = {
    w: "100%",
    textAlign: "center",
    color: "white",
    padding: "1.5rem",
  };

  const { colorMode } = useColorMode();

  return (
    <Box
      shadow="xl"
      borderRadius="10px"
      {...gridSettings}
      bg={bgColor[colorMode]}
      color={color[colorMode]}
    >
      <Flex>
        <Avatar name={developer.nama} src={developer.avatar} size="xl" />
        <Box textAlign="left" ml="2rem">
          <Heading as="h3" size="lg">
            {developer.nama}
          </Heading>
          <Text>{developer.status}</Text>
          <Text fontSize="sm" color="gray.400">
            {developer.alamat}
          </Text>
          <NavLink to={`/profile/${developer.id}`}>
            <Button size="sm" mt="0.5rem" shadow="sm">
              Lihat Profile
            </Button>
          </NavLink>
        </Box>
      </Flex>
    </Box>
  );
};

export default Item;
