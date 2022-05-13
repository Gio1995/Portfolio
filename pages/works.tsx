import ReactNode from 'react'
import { Flex, Box, useColorModeValue, Text, Spacer, VStack } from '@chakra-ui/react'
import Layout from '../components/Layout/Layout'
import Animate from '../components/Animate/Animate'
import Card from '../components/Card/Card'

export default function works() {
    return (
        <Layout>
            <VStack>
                <Flex w="full" p={10} marginTop={"64px"} alignItems={"start"} justifyContent={"center"} direction={"row"} bg={useColorModeValue("gray.200", "gray.800")}>
                    <Animate>
                        <Text textAlign={"center"} fontWeight={"bold"} fontSize={"4xl"} mb={"10px"}>Works</Text>
                        <Flex>
                            <Text>
                                Turning your hobby into a job makes it more satisfying.
                            </Text>
                        </Flex>
                    </Animate>
                </Flex>
                <Flex direction={{ base: "column", md: "row" }} align={"center"} justifyContent={"center"}>
                    <Card image="/works/codeus.png" title="CodeUs">
                        Project completed for the TecWeb exam, written entirely in HTML, CSS, Javascript 
                        and python with the use of the Flask framework and Socket.io with the help of my 
                        colleague and friend Amalia Giordano. We developed it to connect developers with each other 
                        to share and modify their own code.
                        </Card>
                    <Spacer></Spacer>
                    <Card image="/works/plantcare.png" title="PlantCare">
                        Project completed for the Mobile Terminals exam, written entirely in Java and 
                        Flask framework with the help of my colleague and friend Amalia Giordano. We developed it 
                        to control your plants remotely using your smartphone.
                    </Card>
                    <Spacer></Spacer>
                    <Card image="/works/pompei.jpg" title="Pompei">
                        Project completed for the virtual reality exam, written entirely in X3D and Javascript, with the 
                        help of the knowledge of a student of art history and architecture.
                    </Card>
                    <Spacer></Spacer>
                    <Card image="/works/assets.png" title="Cooking">
                        Project for the degree thesis with the aim of being able to upload Assets on a portal and then 
                        view them in a virtual reality environment.
                    </Card>
                </Flex>
            </VStack>
        </Layout>
    )
}
