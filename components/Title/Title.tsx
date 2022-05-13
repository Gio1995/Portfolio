import { Heading, VStack, Text, Button, Spacer, Collapse, transition } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import Animate from '../Animate/Animate'
import RouterPage from '../RouterPage/RouterPage'

export default function Title() {
  return (
    <VStack w="full" h="full" p={10} spacing={5} alignItems={"flex-start"} justify={"center"}>
      <Animate>
        <Heading size="xl" marginBottom={"10px"}>Giovanni Iacolare</Heading>
        <Heading size="md" marginBottom={"10px"}>Computer Scientist & Backend Developer</Heading>
        <RouterPage href={"/about"}>
          <Button colorScheme={"blackAlpha"}>About me</Button>
        </RouterPage>
      </Animate>
    </VStack>
  )
}
