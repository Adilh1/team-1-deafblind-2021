import React from "react";
import { Container, VStack, Grid, Box, Heading, Button, Center, Avatar, Text, GridItem,  } from '@chakra-ui/react'

const Welcome = () => {
  return (
    <Container w='100%' mb={5} pb={5} pl={5} pr={5}>
        <Heading as='h3'  mt={10} mb={5} >Hello, Susanne. Need any help today?</Heading>
        <Text w='80%' fontSize="xl">Get the help you need from your existing connections, or reach out to other volunteers!</Text>
    </Container>
  );
};

export default Welcome;