import Layout from '../components/Layout'
import {
    Grid,
    GridItem,
    Flex,
    Square,
    Center,
    Text,
    Box,
    Spacer,
    Heading,
    ButtonGroup,
    Button
} from '@chakra-ui/react'
import Navbar from "../components/NavbarPrincipal";
import React from 'react';


const GridPage = () => (
    <Layout title="About | Next.js + TypeScript Example">
        <Navbar />
        <h1>GridPage</h1>
        <br></br>

        <Grid templateColumns='repeat(5, 1fr)' gap={6}>
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
            <GridItem w='100%' h='10' bg='blue.500' />
        </Grid>

        <br></br>
        <br></br>

        <Grid
            h='200px'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(5, 1fr)'
            gap={4}
        >
            <GridItem rowSpan={2} colSpan={1} bg='tomato' />
            <GridItem colSpan={2} bg='papayawhip' />
            <GridItem colSpan={2} bg='papayawhip' />
            <GridItem colSpan={4} bg='tomato' />
        </Grid>

        <br></br>
        <br></br>

        <Grid templateColumns='repeat(5, 1fr)' gap={4}>
            <GridItem colSpan={2} h='10' bg='tomato' />
            <GridItem colStart={4} colEnd={6} h='10' bg='papayawhip' />
        </Grid>

        <br></br>
        <br></br>

        <Grid
            templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
            gridTemplateRows={'50px 1fr 30px'}
            gridTemplateColumns={'150px 1fr'}
            h='200px'
            gap='1'
            color='blackAlpha.700'
            fontWeight='bold'
        >
            <GridItem pl='2' bg='orange.300' area={'header'}>
                Header
            </GridItem>
            <GridItem pl='2' bg='pink.300' area={'nav'}>
                Nav
            </GridItem>
            <GridItem pl='2' bg='green.300' area={'main'}>
                Main
            </GridItem>
            <GridItem pl='2' bg='blue.300' area={'footer'}>
                Footer
            </GridItem>
        </Grid>

        <br></br>
        <br></br>

        <Flex color='white'>
            <Center w='100px' bg='green.500'>
                <Text>Box 1</Text>
            </Center>
            <Square bg='blue.500' size='150px'>
                <Text>Box 2</Text>
            </Square>
            <Box flex='1' bg='tomato'>
                <Text>Box 3</Text>
            </Box>
        </Flex>

        <br></br>
        <br></br>

        <Flex>
            <Box p='4' bg='red.400'>
                Box 1
            </Box>
            <Spacer />
            <Box p='4' bg='green.400'>
                Box 2
            </Box>
        </Flex>

        <br></br>
        <br></br>

        <Flex minWidth='max-content' alignItems='center' gap='2'>
  <Box p='2'>
    <Heading size='md'>Chakra App</Heading>
  </Box>
  <Spacer />
  <ButtonGroup gap='2'>
    <Button colorScheme='teal'>Sign Up</Button>
    <Button colorScheme='teal'>Log in</Button>
  </ButtonGroup>
</Flex>

        <br></br>
        <br></br>

    </Layout>
)

export default GridPage
