import React from "react";
import { useColorMode, Box } from "@chakra-ui/core";

import Aux from "../Aux";
import Navbar from "../../components/navbar";
import { bgColor } from "../../utils/useTheme";

const Layout = ({ height = "auto", children }) => {
  const { colorMode } = useColorMode();

  return (
    <Box height={height} bg={bgColor[colorMode]}>
      <Aux>
        <Navbar mode={colorMode} />
        <main>{children}</main>
      </Aux>
    </Box>
  );
};

export default Layout;
