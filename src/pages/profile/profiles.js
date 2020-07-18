import React from "react";
import { Box, useColorMode, Heading, Text } from "@chakra-ui/core";

import DevelopersItem from "../../components/developers/items";
import Layout from "../../hoc/Layout";

import { color } from "../../utils/useTheme";
import developers from "../../utils/json/developers.json";

const Profiles = () => {
  const { colorMode } = useColorMode();

  return (
    <Layout>
      <Box padding={["2rem", "4rem"]} color={color[colorMode]}>
        <Heading color="turquoise.300">Developers</Heading>
        <Text>Jelajahi dan terhubung dengan orang lain</Text>
        <DevelopersItem data={developers} />
      </Box>
    </Layout>
  );
};

export default Profiles;
