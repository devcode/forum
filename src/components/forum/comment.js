import React from "react";
import { Box, Button, useColorMode, Heading, Textarea } from "@chakra-ui/core";
import { color } from "../../utils/useTheme";

function Comment() {
  const { colorMode } = useColorMode();
  return (
    <Box mt="2rem" color={color[colorMode]}>
      <Heading as="h6">Tinggalkan komentar</Heading>

      <Box mt="1rem">
        <Textarea />

        <Button mt="1rem" shadow="lg">
          Simpan
        </Button>
      </Box>
    </Box>
  );
}

export default Comment;
