import { ReactNode, useState } from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useColorModeValue,
  Stack,
  Img,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { animate, motion } from 'framer-motion';
import RouterPage from '../RouterPage/RouterPage';

const Links = [
  {
    title: "Home",
    href: "/"
  }, {
    title: "About me",
    href: "/about"
  }, {
    title: "Works",
    href: "/works"
  }, {
    title: "Contact",
    href: "/contacts"
  }
];

const NavLink = ({ children, href }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={href}>
    {children}
  </Link>
);

export default function Simple() {

  const [isOpen, setOpen] = useState(false);
  const [isFirstView, setFirstView] = useState(true);
  
  function Open(){
    setOpen(true);
    if (isFirstView) {
      setFirstView(false);
    }
  }
  
  function Close(){
    setOpen(false);
  }

  return (
    <>
      <Box /*bg={useColorModeValue('gray.100', 'gray.900')}*/ bg={useColorModeValue("rgba(255, 255, 255, 0.9)", "rgba(255, 255, 255, 1)")} backdropFilter={"saturate(180%) blur(5px)"} px={4} position="fixed" w={"100%"} zIndex={"overlay"}>
        <Flex h={16} alignItems={'center'} justifyContent={"space-between"}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? Close : Open}
          />
          <HStack spacing={8} alignItems={"center"}>
            <RouterPage href="/">
              <Box width={10}>
                <Img src="/logo.svg" />
              </Box>
            </RouterPage>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.href} href={link.href}>{link.title}</NavLink>
              ))}
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <motion.aside
            initial="closed"
            animate="opened"
            transition={{ duration: .3 }}
            variants={{
              closed: { height: "0px" },
              opened: { height: "230px" }
            }}
          >
            <Box pb={4} display={{ md: 'none' }}>
              <motion.div
                initial="hidden"
                animate="visible"
                transition={{
                  delay: .3,
                  duration: .3
                }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 }
                }}
              >
                <Stack as={'nav'} spacing={4} alignItems="center">
                  {Links.map((link) => (
                    <NavLink key={link.href} href={link.href}>{link.title}</NavLink>
                  ))}
                </Stack>
              </motion.div>
            </Box>
          </motion.aside>
        ) : ((!isFirstView) ? (
          <motion.div
            initial="opened"
            animate="closed"
            transition={{ 
              delay: .3,
              duration: .3 
            }}
            variants={{
              closed: { height: "0px" },
              opened: { height: "230px" }
            }}
          >
          </motion.div>
        ) : null)}
      </Box>
    </>
  );
}