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

import { NavLink } from "react-router-dom";
import { color, bgColor, secColor, secBgColor } from "../../utils/useTheme";
import Layout from "../../hoc/Layout";

const Login = () => {
  const { colorMode } = useColorMode();

  return (
    <Layout height="100vh">
      <Grid mt="3rem">
        <Box
          boxShadow="xl"
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
            Masuk
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

          <NavLink to="/register">
            <Text color={color[colorMode]} mt>
              Belum punya akun ?
            </Text>
          </NavLink>
        </Box>
      </Grid>
    </Layout>
  );
};

export default Login;
