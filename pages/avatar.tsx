import Layout from '../components/Layout'
import {
    Avatar,
    AvatarGroup,
    Stack,
    Wrap,
    WrapItem
} from '@chakra-ui/react'
import Navbar from "../components/NavbarPrincipal";
import React from 'react';

// Componente AvatarPage
const AvatarPage = () => (
    <Layout title="About | Next.js + TypeScript Example">
        <Navbar />
        <h1>AvatarPage</h1>
         {/* Wrap es un componente que organiza sus hijos en una disposición de envoltura flexible. */}
        <Wrap>
            <WrapItem>
            {/* Avatar es un componente que muestra la imagen de un usuario. */}
                <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
            </WrapItem>
            <WrapItem>
                <Avatar name='Kola Tioluwani' src='https://bit.ly/tioluwani-kolawole' />
            </WrapItem>
            <WrapItem>
                <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
            </WrapItem>
            <WrapItem>
                <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
            </WrapItem>
            <WrapItem>
                <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
            </WrapItem>
            <WrapItem>
                <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
            </WrapItem>
            <WrapItem>
                <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
            </WrapItem>
        </Wrap>

        <br></br>
        <br></br>

        <Wrap>
            <WrapItem>
            {/* El prop size indica el tamaño del Avatar */}
                <Avatar size='2xs' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
            </WrapItem>
            <WrapItem>
                <Avatar
                    size='xs'
                    name='Kola Tioluwani'
                    src='https://bit.ly/tioluwani-kolawole'
                />{' '}
            </WrapItem>
            <WrapItem>
                <Avatar size='sm' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />{' '}
            </WrapItem>
            <WrapItem>
                <Avatar size='md' name='Ryan Florence' src='https://bit.ly/ryan-florence' />{' '}
            </WrapItem>
            <WrapItem>
                <Avatar
                    size='lg'
                    name='Prosper Otemuyiwa'
                    src='https://bit.ly/prosper-baba'
                />{' '}
            </WrapItem>
            <WrapItem>
                <Avatar size='xl' name='Christian Nwamba' src='https://bit.ly/code-beast' />{' '}
            </WrapItem>
            <WrapItem>
                <Avatar size='2xl' name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />{' '}
            </WrapItem>
        </Wrap>

        <br></br>
        <br></br>
        {/* Stack es un componente que organiza sus hijos en una pila. */}
        <Stack direction='row'>
            <Avatar name='Oshigaki Kisame' src='https://bit.ly/broken-link' />
            <Avatar name='Sasuke Uchiha' src='https://bit.ly/broken-link' />
            <Avatar src='https://bit.ly/broken-link' />
        </Stack>

        <br></br>
        <br></br>

        {/* AvatarGroup es un componente que muestra un grupo de avatars. */}
        <AvatarGroup size='md' max={2}>
            <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
            <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
            <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
            <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
            <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
        </AvatarGroup>

        <br></br>
        <br></br>

    </Layout>
)

export default AvatarPage
