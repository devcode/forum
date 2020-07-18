import React from "react";
import { Box, Heading, useColorMode, Text, Divider } from "@chakra-ui/core";
import { color, bgColor } from "../../utils/useTheme";

const Pengalaman = ({ data }) => {
  const { colorMode } = useColorMode();
  let Items = data.map((item, index) => {
    return (
      <Box key={index}>
        <Text fontSize="20px" fontWeight="600">
          {item.title}
        </Text>
        <Text>
          {item.sejak} - {item.sampai}
        </Text>
        {item && item.perusahaan && <Text>{item.perusahaan} </Text>}
        {item && item.alamat && <Text> {item.alamat} </Text>}
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
      <Heading mb="2rem">Pengalaman</Heading>
      {Items}
    </Box>
  );
};

export default Pengalaman;
