import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/core";
import Post from "./post";

const Posts = ({ data }) => {
  return (
    <Box mt={["1rem", "2rem"]}>
      <SimpleGrid spacing={["1rem", "2rem"]} columns={[1, 3]}>
        {data.map((item, i) => {
          return <Post key={i} item={item} />;
        })}
      </SimpleGrid>
    </Box>
  );
};

export default Posts;
