import { Box, Image, Button, Flex, Heading, Input, useColorMode, useColorModeValue, VStack, Spacer, Text } from "@chakra-ui/react";
import Title from "../components/Title/Title";
import Animate from '../components/Animate/Animate';
import Profile from '../components/Profile/Profile';
import Layout from '../components/Layout/Layout';

const AboutPage = () => {

    return (
        <Layout>
            <Flex h="100vh" direction={{ md: "row" }} bg={useColorModeValue("gray.200", "gray.800")}>
                <Box w="full" h="full" p={10} alignItems="center" justifyContent={"center"} display={{ base: "none", md: "flex" }}>
                    <Animate>
                        <Profile image="foto_portfolio.png"></Profile>
                    </Animate>
                </Box>
                <Flex w="full" h="full" justifyContent={"center"} alignItems={"center"} p={"20px"}>
                    <Animate>
                        <Flex w="full" justifyContent={"center"}>
                            <Text textAlign={"center"} fontWeight={"bold"} fontSize={"4xl"} mb={"10px"}>Giovanni Iacolare</Text>
                        </Flex>
                        <Flex>
                            <Text textAlign={{sm:"center", md:"start"}}>Computer Scientist with experience in backend web development in Flask, 
                                Next.js and Express.js. During the university course I studied the following 
                                languages: Assembly 8086 and 68k, C, C ++, C#, Java and Python. In my spare time I 
                                dedicate myself to creating devices using development boards like Arduino.
                            </Text>
                        </Flex>
                        
                    </Animate>
                </Flex>
            </Flex>
        </Layout>
    )
}

export default AboutPage