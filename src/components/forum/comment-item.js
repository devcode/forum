import React from "react";
import {
  Box,
  useColorMode,
  Avatar,
  Text,
  Heading,
  Flex,
  IconButton,
  Divider,
} from "@chakra-ui/core";
import { RiThumbUpLine } from "react-icons/ri";

import { color } from "../../utils/useTheme";

const CommentItem = ({ data }) => {
  const { colorMode } = useColorMode();

  let comments = data.map((item, i) => {
    return (
      <Box mt="2rem" color={color[colorMode]}>
        <Heading>{item.title}</Heading>
        <Text>{item.text}</Text>

        <Box mt="1.2rem">
          <Flex align="center" justify="space-between">
            <Flex>
              <Avatar mr="1rem" src={item.avatar} name={item.nama} />
              <Box>
                <Text fontSize="18px">{item.nama}</Text>
                <Text fontSize="14px" color="gray.400">
                  {item.date}
                </Text>
              </Box>
            </Flex>
            <Box>
              <IconButton as={RiThumbUpLine} size="sm" variant="none" />
            </Box>
          </Flex>
        </Box>

        <Divider color="gray.400" my="2rem" />
      </Box>
    );
  });

  return (
    <Box color={color[colorMode]}>
      <Heading>Komentar</Heading>
      {comments}
    </Box>
  );
};

export default CommentItem;
