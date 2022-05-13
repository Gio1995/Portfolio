import { ReactNode, useState } from 'react'
import { VStack, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import dynamic from "next/dynamic"
import Layout from '../components/Layout/Layout'
import Animate from '../components/Animate/Animate'
import Map from '../components/Map/Map'


export default function contact() {

  const MapWithNoSSR = dynamic(() => import("../components/Map/Map"), {
    ssr: false,
  });

  return (
    <Layout>
      <VStack>
        <Flex w="full" p={10} marginTop={"64px"} alignItems={"start"} justifyContent={"center"} direction={"row"} bg={useColorModeValue("gray.200", "gray.800")}>
          <Animate>
            <Text textAlign={"center"} fontWeight={"bold"} fontSize={"4xl"} mb={"10px"}>Contact Me</Text>
            <Flex>
              
            </Flex>
          </Animate>
        </Flex>

      </VStack>
    </Layout>
  )
}
