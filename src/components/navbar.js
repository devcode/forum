import React from "react";
import {
  Box,
  Heading,
  Flex,
  Text,
  Button,
  useColorMode,
  Icon,
} from "@chakra-ui/core";
import DrawerUI from "../components/drawer-ui";
import { NavLink } from "react-router-dom";
import { RiCodeSSlashLine } from "react-icons/ri";

import { menus } from "../utils/menu";

const MenuItems = () =>
  menus.map((item, id) => {
    return (
      <NavLink key={id} to={{ pathname: item.url }} target={item.target}>
        <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
          {item.nama}
        </Text>
      </NavLink>
    );
  });

const Navbar = ({ mode }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bgColor = { light: "azure.300", dark: "gunmetal.300" };
  const color = { light: "turquoise.300", dark: "turquoise.300" };

  return (
    <Box shadow="md">
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1rem"
        paddingX={["2rem", "4rem", "4rem", "4rem"]}
        color={color[mode]}
        bg={bgColor[mode]}
      >
        <Flex align="center" mr={5}>
          <Icon as={RiCodeSSlashLine} width="30px" height="30px" />
          <NavLink to="/">
            <Heading
              letterSpacing="-1px"
              fontWeight="600"
              as="h1"
              size="lg"
              ml="0.3rem"
            >
              FORUM RPL
            </Heading>
          </NavLink>
        </Flex>

        <Box
          display={["none", "none", "none", "flex"]}
          width={{ sm: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
        >
          <MenuItems />
        </Box>

        <Box display={["none", "none", "none", "flex"]} alignItems="center">
          <NavLink to="/register">
            <Button variant="none" color="turquoise.300" mx="5px">
              Daftar
            </Button>
          </NavLink>
          <NavLink to="/login">
            <Button
              bg="turquoise.300"
              variantColor="turquoise"
              color="azure.300"
              mx="5px"
            >
              Masuk
            </Button>
          </NavLink>
          <Button
            variant="none"
            color="turquoise.300"
            onClick={toggleColorMode}
            mx="5px"
          >
            <Icon name={colorMode === "light" ? "sun" : "moon"} />
          </Button>
        </Box>

        <Box display={["block", "block", "block", "none"]}>
          <DrawerUI menus={menus} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
