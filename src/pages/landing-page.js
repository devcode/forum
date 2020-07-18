import React from "react";
import {
  Grid,
  Box,
  Heading,
  Image,
  Text,
  Button,
  Icon,
  useColorMode,
} from "@chakra-ui/core";
import { RiArrowRightLine } from "react-icons/ri";

import { bgColor, color } from "../utils/useTheme";
import friendship from "../assets/images/friendship.png";
import Layout from "../hoc/Layout";

const Home = () => {
  const { colorMode } = useColorMode();
  return (
    <Box bg={bgColor[colorMode]} height="100vh">
      <Layout>
        <Grid
          paddingX="2rem"
          padding="1rem"
          templateColumns="repeat(2, 2fr)"
          gap={2}
          alignItems="center"
        >
          <Box
            pl={["0rem", "5rem", "5rem", "5rem"]}
            mt={["7rem", "5rem", "10rem", "0rem"]}
            width={["300px", "auto"]}
          >
            <Heading
              textTransform="uppercase"
              lineHeight="2.3rem"
              fontSize={["2rem", "2.7rem", "2.7rem", "2.7rem"]}
              color="turquoise.300"
            >
              Ringan sama dijinjing berat sama dipikul
            </Heading>
            <Text color={color[colorMode]} mt="1.2rem">
              Saling terhubung dengan orang lain. bangun portofolio bagikan
              postingan dan minta bantuan dari orang lain
            </Text>
            <Button
              color="white"
              mt="1.2rem"
              variantColor="turquoise"
              bg="turquoise.300"
            >
              READ MORE <Icon as={RiArrowRightLine} ml="0.5rem" />
            </Button>
          </Box>
          <Box display={["none", "none", "none", "block"]}>
            <Image
              marginLeft="1em"
              size="35em"
              objectFit="cover"
              src={friendship}
              alt="friendship"
            />
          </Box>
        </Grid>
      </Layout>
    </Box>
  );
};

export default Home;
