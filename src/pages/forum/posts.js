import React from "react";
import Layout from "../../hoc/Layout";
import { Heading, Box, useColorMode, Text } from "@chakra-ui/core";

import PostItem from "../../components/forum/posts";

import posts from "../../utils/json/posts.json";
import { color } from "../../utils/useTheme";

const Posts = () => {
  const { colorMode } = useColorMode();
  return (
    <Layout>
      <Box padding={["2rem", "4rem"]} color={color[colorMode]}>
        <Heading color="turquoise.300">Forum</Heading>
        <Text>Tempat untuk bertanya dan sharing pengalaman</Text>
        <PostItem data={posts} />
      </Box>
    </Layout>
  );
};

export default Posts;
