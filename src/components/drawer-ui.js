import React from "react";
import {
  Icon,
  Button,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  useColorMode,
  Flex,
} from "@chakra-ui/core";
import { RiMenu3Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const DrawerUI = ({ menus }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const btnRef = React.useRef();
  const color = { light: "gunmetal.300", dark: "azure.300" };

  const MenuItems = () => {
    return menus.map((item, id) => {
      return (
        <NavLink key={id} to={{ pathname: item.url }} target={item.target}>
          <Text
            color={color[colorMode]}
            mt={{ base: 4, md: 0 }}
            mr={6}
            display="block"
          >
            {item.nama}
          </Text>
        </NavLink>
      );
    });
  };

  return (
    <>
      <Button
        ref={btnRef}
        bg="turquoise.300"
        color="azure.300"
        mx="5px"
        onClick={onOpen}
      >
        <Icon as={RiMenu3Line} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Text color={color[colorMode]}>Menu</Text>
          </DrawerHeader>

          <DrawerBody>
            <MenuItems />

            <Flex mt="10px">
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
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerUI;
