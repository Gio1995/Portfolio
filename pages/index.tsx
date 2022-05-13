import { Box, Image, Button, Flex, Heading, Input, useColorMode, useColorModeValue, VStack, Spacer } from "@chakra-ui/react";
import Title from "../components/Title/Title";
import Card from '../components/Card/Card';
import Animate from '../components/Animate/Animate';
import Profile from '../components/Profile/Profile';
import Layout from '../components/Layout/Layout';

const IndexPage = () => {

  return (
    <Layout>
      <Flex h="100vh" direction={{ md: "row" }} bg={useColorModeValue("gray.200", "gray.800")}>
        <Box w="full" h="full" p={10} alignItems="flex-start">
          <Title></Title>
        </Box>
        <Flex w="full" h="full" justify={"center"} alignItems={"center"} display={{ base: "none", md: "flex" }} paddingTop={"180px"}>
          <Animate>
            <Profile image="foto_portfolio.png"></Profile>
          </Animate>
        </Flex>
      </Flex>

      <Flex h="80px" direction={"row"} justify="center" alignItems={"center"} bg="white">
        <Animate>
          <Heading>Hobbies</Heading>
        </Animate>
      </Flex>
      <Flex direction={{ base: "column", md: "row" }} align={"center"} justifyContent={"center"}>
        <Card image="/programming.svg" title="Programming">In the free time, discovering new technologies and programming helps me to free my mind.</Card>
        <Spacer></Spacer>
        <Card image="/making_art.svg" title="Making Art">Drawing and painting is a passion born and carried on since I was child.</Card>
        <Spacer></Spacer>
        <Card image="/gardening.svg" title="Gardening">It is a passion that helps concentration and calm as you see the results of the treatments applied.</Card>
        <Spacer></Spacer>
        <Card image="/cooking.svg" title="Cooking">It is satisfying to see how the ingredients together result in a tasty meal.</Card>
      </Flex>
    </Layout>
  )
}

export default IndexPage