import React from "react";
import { Box, Button, useColorMode, SimpleGrid } from "@chakra-ui/core";

import Pendidikan from "../../components/profile/pendidikan";
import Pengalaman from "../../components/profile/pengalaman";
import Top from "../../components/profile/top";
import Layout from "../../hoc/Layout";
import GithubRepo from "../../components/profile/github-repo";

import { color } from "../../utils/useTheme";
import profile from "../../utils/json/profile.json";

const Profile = () => {
  const { colorMode } = useColorMode();

  return (
    <Layout>
      <Box padding={["2rem", "4rem"]}>
        <Button color={color[colorMode]}>Kembali</Button>
        <Top data={profile} />
      </Box>

      <Box padding={["2rem", "4rem"]}>
        <SimpleGrid spacing="20px" columns={[1, 2]}>
          <Pendidikan data={profile.pendidikan} />
          <Pengalaman data={profile.pengalaman} />
        </SimpleGrid>
      </Box>

      <Box padding={["2rem", "4rem"]}>
        <GithubRepo />
      </Box>
    </Layout>
  );
};

export default Profile;
