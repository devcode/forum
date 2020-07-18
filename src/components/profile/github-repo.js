import React from "react";
import {
  Box,
  Heading,
  useColorMode,
  SimpleGrid,
  Text,
  Stack,
  Tag,
  TagIcon,
  TagLabel,
} from "@chakra-ui/core";
import { GoRepoForked, GoStar, GoEye } from "react-icons/go";

import { bgColor, color } from "../../utils/useTheme";

function GithubRepo() {
  const { colorMode } = useColorMode();

  return (
    <Box color={color[colorMode]}>
      <Heading>Github Repository</Heading>
      <SimpleGrid columns={[1, 3]} spacing="20px">
        <Box
          bg={bgColor[colorMode]}
          padding={["2rem", "2rem"]}
          shadow="xl"
          borderRadius="10px"
          mt="1rem"
        >
          <Heading>Project Pertama</Heading>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
            accusamus iste voluptatem velit voluptatum quae perspiciatis odit
            ipsam ea qui!
          </Text>
          <Stack spacing={4} isInline>
            <Tag mt="15px">
              <TagIcon as={GoStar} size="16px" />
              <TagLabel>10</TagLabel>
            </Tag>
            <Tag mt="15px">
              <TagIcon as={GoRepoForked} size="16px" />
              <TagLabel>13</TagLabel>
            </Tag>
            <Tag mt="15px">
              <TagIcon as={GoEye} size="16px" />
              <TagLabel>12</TagLabel>
            </Tag>
          </Stack>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default GithubRepo;
