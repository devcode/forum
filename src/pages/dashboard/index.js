import React from "react";
import {
  Box,
  Heading,
  Text,
  Stack,
  Link,
  Button,
  useColorMode,
} from "@chakra-ui/core";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import Layout from "../../hoc/Layout";
import { color } from "../../utils/useTheme";

const Th = styled.th`
  padding: 1rem;
  text-align: left;
`;

const Td = styled.td`
  padding: 1rem;
  text-align: left;
`;

const Dashboard = () => {
  const { colorMode } = useColorMode();
  return (
    <Layout>
      <Box padding="4rem" color={color[colorMode]}>
        <Heading>Dashboard</Heading>
        <Text>Selamat Datang Angry Man</Text>
        <Stack spacing={3} isInline mt="1rem">
          <Box>
            <NavLink to="/edit-profile">
              <Link>Edit Profile</Link>
            </NavLink>
          </Box>
          <Box>
            <NavLink to="/add-pengalaman">
              <Link>Tambah Pengalaman</Link>
            </NavLink>
          </Box>
          <Box>
            <NavLink to="/add-pendidikan">
              <Link>Tambah Pendidikan</Link>
            </NavLink>
          </Box>
        </Stack>

        <Box mt="1rem">
          <Heading>Pengalaman</Heading>
          <table>
            <thead>
              <tr>
                <Th>#</Th>
                <Th>Perusahaan</Th>
                <Th>Title</Th>
                <Th>Tahun</Th>
                <Th>Pilihan</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>1</Td>
                <Td>PPPTK</Td>
                <Td>magang hehe</Td>
                <Td>2020 - 2021</Td>
                <Td>
                  <Button variant="solid" variantColor="red">
                    Delete
                  </Button>
                </Td>
              </tr>
            </tbody>
          </table>
        </Box>
        <Box mt="1rem">
          <Heading>Pendidikan</Heading>
          <table>
            <thead>
              <tr>
                <Th>#</Th>
                <Th>Sekolah</Th>
                <Th>Jurusahn</Th>
                <Th>Tahun</Th>
                <Th>Pilihan</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>1</Td>
                <Td>PPPTK</Td>
                <Td>magang hehe</Td>
                <Td>2020 - 2021</Td>
                <Td>
                  <Button variant="solid" variantColor="red">
                    Delete
                  </Button>
                </Td>
              </tr>
            </tbody>
          </table>
        </Box>
      </Box>
    </Layout>
  );
};

export default Dashboard;
