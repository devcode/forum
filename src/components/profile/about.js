import React from "react";
import { Heading, Box, useColorMode, Text, SimpleGrid } from "@chakra-ui/core";

import { color } from "../../utils/useTheme";

const About = ({ data }) => {
  const { nama, bio, skills } = data;
  const { colorMode } = useColorMode();

  return (
    <Box paddingX={["1rem", "3rem"]} paddingY="2rem" color={color[colorMode]}>
      <Box mb="1.5rem">
        <Heading>{nama.trim().split(" ")[0]} Bio</Heading>
        <Text mt="0.4rem">{bio}</Text>
      </Box>
      <Box mb="1.5rem">
        <Heading>{nama.trim().split(" ")[0]} Skills</Heading>
        <SimpleGrid columns={[2, 3]}>
          {skills.map((item, index) => {
            return (
              <Box mt="1rem" mx="1rem">
                <Text>{item}</Text>
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default About;
