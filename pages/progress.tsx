import Link from 'next/link'
import Layout from '../components/Layout'
import { Progress, Stack } from '@chakra-ui/react'
import Navbar from "../components/NavbarPrincipal";

const ProgressPage = () => (
    <Layout title="About | Next.js + TypeScript Example">
        <Navbar />
        <h1>ProgressPage</h1>
        <Progress value={80} />
        <br></br>
        <Progress hasStripe value={64} />
        <br></br>
        <Stack spacing={5}>
            <Progress colorScheme='green' size='sm' value={20} />
            <Progress colorScheme='green' size='md' value={20} />
            <Progress colorScheme='green' size='lg' value={20} />
            <Progress colorScheme='green' height='32px' value={20} />
        </Stack>
        <br></br>
        <Progress value={20} size='xs' colorScheme='pink' />
        <br></br>
        <Progress size='xs' isIndeterminate />

    </Layout>
)

export default ProgressPage
