import React from "react";
import { Box, Button, useColorMode } from "@chakra-ui/core";
import { NavLink } from "react-router-dom";

import Layout from "../../hoc/Layout";
import PostItem from "../../components/forum/post-item";
import Commentar from "../../components/forum/comment";
import CommentItem from "../../components/forum/comment-item";

import { color } from "../../utils/useTheme";
import post from "../../utils/json/post.json";

const Forum = () => {
  const { colorMode } = useColorMode();

  return (
    <Layout>
      <Box padding={["2rem", "4rem"]}>
        <NavLink to="/forum">
          <Button size="sm" color={color[colorMode]}>
            Kembali
          </Button>
        </NavLink>
        <PostItem item={post} />
        <CommentItem data={post.comments} />
        <Commentar />
      </Box>
    </Layout>
  );
};

export default Forum;
