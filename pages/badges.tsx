import Link from 'next/link'
import Layout from '../components/Layout'
import {
    Image,
    Button,
    useDisclosure,
    Input,
    RadioGroup,
    Stack,
    Radio,
    Box,
    FormLabel,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    Select,
    Textarea,
    Text,
    FormControl,
    Wrap,
    WrapItem,
    Badge,
    Flex,
    Avatar
} from '@chakra-ui/react'
import Navbar from "../components/NavbarPrincipal";
import React from 'react';


const BadgesPage = () => (
    <Layout title="About | Next.js + TypeScript Example">
        <Navbar />
        <h1>BadgesPage</h1>
        <Badge>Default</Badge>
        <br></br>
        <br></br>
        <Stack direction='row'>
            <Badge>Default</Badge>
            <Badge colorScheme='green'>Success</Badge>
            <Badge colorScheme='red'>Removed</Badge>
            <Badge colorScheme='purple'>New</Badge>
        </Stack>
        <br></br>
        <br></br>
        <Stack direction='row'>
            <Badge variant='outline' colorScheme='green'>
                Default
            </Badge>
            <Badge variant='solid' colorScheme='green'>
                Success
            </Badge>
            <Badge variant='subtle' colorScheme='green'>
                Removed
            </Badge>
        </Stack>
        <br></br>
        <br></br>
        <Flex>
            <Avatar src='https://bit.ly/sage-adebayo' />
            <Box ml='3'>
                <Text fontWeight='bold'>
                    Segun Adebayo
                    <Badge ml='1' colorScheme='green'>
                        New
                    </Badge>
                </Text>
                <Text fontSize='sm'>UI Engineer</Text>
            </Box>
        </Flex>

        <br></br>


    </Layout>
)

export default BadgesPage
