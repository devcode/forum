import React from "react";
import {
  useColorMode,
  Box,
  Grid,
  Heading,
  Icon,
  Input,
  Button,
  Text,
} from "@chakra-ui/core";
import { FiUser } from "react-icons/fi";

import Layout from "../../hoc/Layout/index";
import { NavLink } from "react-router-dom";
import { color, bgColor, secColor, secBgColor } from "../../utils/useTheme";

const Register = () => {
  const { colorMode } = useColorMode();

  return (
    <Layout height="100vh">
      <Grid mt="3rem">
        <Box
          shadow="xl"
          marginX="auto"
          pt="2rem"
          pb="4rem"
          px={["2rem", "4rem"]}
          bg={bgColor[colorMode]}
          w={["90%", "50%"]}
          borderRadius="5px"
          height="auto"
        >
          <Heading textAlign="center" color={color[colorMode]}>
            Daftar
            <br />
            <Icon
              as={FiUser}
              color={color[colorMode]}
              size="2.9rem"
              mt="1rem"
            />
          </Heading>

          <Box mt="2rem">
            <Input
              placeholder="Nama"
              focusBorderColor="turquoise.300"
              mb="1rem"
            />
            <Input
              placeholder="Email"
              focusBorderColor="turquoise.300"
              mb="1rem"
            />
            <Input
              placeholder="Password"
              focusBorderColor="turquoise.300"
              mb="1rem"
              type="password"
            />
            <Input
              placeholder="Konfirmasi Password"
              focusBorderColor="turquoise.300"
              mb="1rem"
              type="password"
            />
          </Box>
          <Button
            isFullWidth
            mb="15px"
            color={secColor[colorMode]}
            bg={secBgColor[colorMode]}
            variantColor={secBgColor[colorMode]}
          >
            MASUK
          </Button>

          <NavLink to="/login">
            <Text color={color[colorMode]} mt>
              Sudah punya akun ?
            </Text>
          </NavLink>
        </Box>
      </Grid>
    </Layout>
  );
};

export default Register;
