import Head from 'next/head'
import { Box } from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import Footer from '../Footer/Footer';

const Layout = ({ children }) =>{

  return(
    <>
      <Head>
        <title>Giovanni Iacolare</title>
        <meta name="googlebot" content="all"></meta>
        <meta name="description" content="Giovanni Iacolare, Web Developer"></meta>

        <link rel="apple-touch-icon" sizes="180x180" href="./favicon_package_v0.16/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon_package_v0.16/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="./favicon_package_v0.16/favicon-16x16.png"></link>
        <link rel="manifest" href="./favicon_package_v0.16/site.webmanifest"></link>
        <link rel="mask-icon" href="./favicon_package_v0.16/safari-pinned-tab.svg" color="#5bbad5"></link>
        <meta name="msapplication-TileColor" content="#2b5797"></meta>
        <meta name="theme-color" content="#ffffff"></meta>

      </Head>
      <Box as="main">
        <Navbar></Navbar>
            { children }
        <Footer></Footer>
      </Box>
    </>
  )
}

export default Layout