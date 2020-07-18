import React from "react";
import { Grid } from "@chakra-ui/core";

import Item from "./item";

const index = ({ data }) => {
  return (
    <Grid
      mt="2rem"
      w="100%"
      templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
      gap={6}
    >
      {data.map((item, i) => {
        return <Item key={i} developer={item} />;
      })}
    </Grid>
  );
};

export default index;
