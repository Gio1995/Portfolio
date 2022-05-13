import { Flex, useColorModeValue, Text, Spacer, Box } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa"
import ReactNode from 'react'
import { EmailIcon } from '@chakra-ui/icons'
import Animate from '../Animate/Animate'
import RouterPage from '../RouterPage/RouterPage'

export default function Footer() {
  return (
    <Flex w="full" h="200px" bg={useColorModeValue("gray.200", "gray.800")} marginTop="10px" justify={"center"} align={"center"} direction="column" p={"10px"}>
        <Animate>
            <Flex margin={"10px"} align="center" justify={"center"}>
                <Text fontSize={"20px"}>Designed by Giovanni Iacolare</Text>
            </Flex>
            <Flex direction={"row"} maxW="400px" margin={"10px"} align={"center"} justify={"center"}>
                <Box margin={"10px"}>
                    <RouterPage href="https://github.com/Gio1995">
                        <FaGithub size={"30px"}></FaGithub>
                    </RouterPage>
                </Box>
                <Spacer></Spacer>
                <Box margin={"10px"}>
                    <RouterPage href="https://www.linkedin.com/in/giovanni-iacolare-78a9b6b8/">
                        <FaLinkedin size={"30px"}></FaLinkedin>
                    </RouterPage>
                </Box>
                <Spacer></Spacer>
                <Box margin={"10px"}>
                    <RouterPage href="mailto:giovanni_1995@libero.it">
                        <FaMailBulk size={"30px"}></FaMailBulk>
                    </RouterPage>
                </Box>
            </Flex>
        </Animate>
    </Flex>
    
    )
}
