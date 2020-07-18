import React from "react";
import { Heading, Box, useColorMode, Text, Avatar } from "@chakra-ui/core";

import SocialMedia from "./social-media";
import { color, bgColor } from "../../utils/useTheme";

const DetailProfile = ({ data }) => {
  const { colorMode } = useColorMode();
  const { nama, avatar, status, alamat, socialmedia, website } = data;
  return (
    <div>
      <Box
        borderRadius="10px"
        padding={["2rem", "3rem"]}
        shadow="xl"
        mt="2rem"
        textAlign="center"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
      >
        <Box my="2rem">
          <Avatar name={nama} src={avatar} size="2xl" />
        </Box>
        <Heading as="h1">{nama}</Heading>
        <Text fontSize="20px">{status}</Text>
        <Text fontSize="16px" fontWeight="300" color="gray.300">
          {alamat}
        </Text>

        <SocialMedia socialmedia={socialmedia} website={website} />
      </Box>
    </div>
  );
};

export default DetailProfile;
