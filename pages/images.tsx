import Layout from '../components/Layout'
import {
    Image,
    Stack,
    Box,
} from '@chakra-ui/react'
import Navbar from "../components/NavbarPrincipal";
import React from 'react';


const ImagesPage = () => (
    <Layout title="About | Next.js + TypeScript Example">
        <Navbar />
        <h1>ImagesPage</h1>
        <Box boxSize='sm'>
            <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
        </Box>

        <br></br>
        <br></br>

        <Stack direction='row'>
            <Image
                boxSize='100px'
                objectFit='cover'
                src='https://bit.ly/dan-abramov'
                alt='Dan Abramov'
            />
            <Image
                boxSize='150px'
                objectFit='cover'
                src='https://bit.ly/dan-abramov'
                alt='Dan Abramov'
            />
            <Image boxSize='200px' src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
        </Stack>

        <Image
            borderRadius='full'
            boxSize='150px'
            src='https://bit.ly/dan-abramov'
            alt='Dan Abramov'
        />

        <br></br>
        <br></br>

        <Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' />


    </Layout>
)

export default ImagesPage
