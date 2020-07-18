import React from "react";
import { Box, Button, useColorMode } from "@chakra-ui/core";
import { color, bgColor } from "../../utils/useTheme";

const LoadMore = ({ data }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      {data.length > 1 && data ? (
        <Box textAlign="center" mt="2rem">
          <Button shadow="lg" bg={bgColor[colorMode]} color={color[colorMode]}>
            Lebih Banyak
          </Button>
        </Box>
      ) : null}
    </>
  );
};

export default LoadMore;
