import { Box, useColorModeValue, Heading, Text, Flex, Image } from '@chakra-ui/react'
import { ReactNode } from 'react'
import Animate from '../Animate/Animate'

export default function Card({image, title, children}) {
  return (
    
    <Animate>
        <Box rounded={"2xl"} bg={useColorModeValue("gray.200", "gray.800")} margin={"10px"} p={"10px"} h={"full"}>
            <Flex align={"center"} justify={"center"}>
                <Image src={image} roundedTop={"10px"} h={"200px"} w={"full"} maxW={"300px"}></Image>
            </Flex>
            <Flex w="full" p={"10px"} alignItems={"center"} justifyContent={"center"}>
                <Heading size="md">{title}</Heading>
            </Flex>
            <Flex w="full" p={"10px"} align={"center"} justify={"center"} marginBottom={"10px"}>
                <Text>{children}</Text>
            </Flex>
        </Box>
    </Animate>
    )
}
