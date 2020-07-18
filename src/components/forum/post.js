import React from "react";
import {
  Heading,
  Box,
  useColorMode,
  Stack,
  Avatar,
  Text,
  Icon,
  Flex,
  Button,
  Link,
} from "@chakra-ui/core";
import { RiThumbUpLine, RiDiscussLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

import { bgColor } from "../../utils/useTheme";

const Post = ({ item }) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Box bg={bgColor[colorMode]} shadow="lg" padding="2rem">
        <NavLink to="/posts/1">
          <Link>
            <Heading fontSize="26px" isTruncated maxWidth={["200px", "250px"]}>
              {item.text}
            </Heading>
          </Link>
        </NavLink>
        <Stack mt="1rem" spacing="20px" isInline>
          <Avatar src={item.avatar} name={item.nama} />
          <Box>
            <Text>{item.nama}</Text>
            <Text fontSize="14px" color="gray.400">
              {item.date}
            </Text>
          </Box>
        </Stack>
        <Flex mt="1rem" textAlign="end">
          <Flex>
            <Box mx="5px" textAlign="end">
              <Icon as={RiThumbUpLine} /> {item.likes.length}
            </Box>
            <Box mx="5px">
              <Icon as={RiDiscussLine} /> {item.comments.length}
            </Box>
          </Flex>

          <Box ml="auto">
            <Button size="sm">Hapus</Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Post;
