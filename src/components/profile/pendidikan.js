import React from "react";
import { Box, Heading, useColorMode, Text, Divider } from "@chakra-ui/core";
import { color, bgColor } from "../../utils/useTheme";

const Pendidikan = ({ data }) => {
  const { colorMode } = useColorMode();
  let Items = data.map((item, index) => {
    return (
      <Box key={index}>
        <Text fontSize="20px" fontWeight="600">
          {item.sekolah}
        </Text>
        <Text>
          {item.sejak} - {item.sampai}
        </Text>
        {item && item.jurusan && <Text>Jurusan : {item.jurusan}</Text>}
        {item && item.description && <Text>{item.description}</Text>}
        <Divider />
      </Box>
    );
  });

  return (
    <Box
      borderRadius="10px"
      padding="2rem"
      bg={bgColor[colorMode]}
      shadow="xl"
      color={color[colorMode]}
    >
      <Heading mb="2rem">Pendidikan</Heading>
      {Items}
    </Box>
  );
};

export default Pendidikan;
