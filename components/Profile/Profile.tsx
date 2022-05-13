import { Flex, Image } from '@chakra-ui/react'
import ReactNode from 'react'

export default function Profile({image}) {
  return (
    <Image src={image} w={"full"} maxW={"500px"} maxH={"500px"} bg={"gray"} border={"8px"} borderColor={"white"}></Image>
    )
}
