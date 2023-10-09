import Layout from '../components/Layout'
import { Spinner, Stack } from '@chakra-ui/react'
import Navbar from "../components/NavbarPrincipal";

const SpinerPage = () => (
    <Layout title="About | Next.js + TypeScript Example">
        <Navbar />
        <h1>SpinerPage</h1>
        <Spinner color='red.500' />
        <Stack direction='row' spacing={4}>
            <Spinner size='xs' />
            <Spinner size='sm' />
            <Spinner size='md' />
            <Spinner size='lg' />
            <Spinner size='xl' />
        </Stack>
        <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
        />
    </Layout>
)

export default SpinerPage
