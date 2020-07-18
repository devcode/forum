import React from "react";
import { SimpleGrid } from "@chakra-ui/core";

import About from "./about";
import DetailProfile from "./detail-profile";

const Top = ({ data }) => {
  return (
    <SimpleGrid columns={[1, 2]}>
      <DetailProfile data={data} />
      <About data={data} />
    </SimpleGrid>
  );
};

export default Top;
