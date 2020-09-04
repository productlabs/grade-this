import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Box, Text } from "@chakra-ui/core";
//import { Link } from "@chakra-ui/core";

class Index extends Component {
  render() {
    return (
      <Box p={8}>
        <Helmet title={`Score This Domain`} />
        <Text fontSize="xl">  
          test
        </Text>
      </Box>
    );
  }
}

export default Index;
