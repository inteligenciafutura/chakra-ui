import Layout from '../components/Layout'
import { useToast, Button, Box, Wrap, WrapItem } from '@chakra-ui/react'
import Navbar from "../components/NavbarPrincipal";

function ToastExample() {

    const toast = useToast()
    return (
        <Button
            onClick={() =>
                toast({
                    title: 'Account created.',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                })
            }
        >
            Show Toast1
        </Button>
    )
}

function CustomToastExample2() {
    const toast = useToast()
    return (
        <Button
            onClick={() =>
                toast({
                    position: 'bottom-left',
                    render: () => (
                        <Box color='white' p={3} bg='blue.500'>
                            Hello World
                        </Box>
                    ),
                })
            }
        >
            Show Toast2
        </Button>
    )
}

function ToastStatusExample() {
    const toast = useToast()
    const statuses = ['success', 'error', 'warning', 'info']

    return (
        <Wrap>
            {statuses.map((status, i) => (
                <WrapItem key={i}>
                    <Button
                        onClick={() =>
                            toast({
                                title: `${status} toast`,
                                status: 'error',
                                isClosable: true,
                            })
                        }
                    >
                        Show {status} toast
                    </Button>
                </WrapItem>
            ))}
        </Wrap>
    )
}

function ToastVariantsExample() {
    const toast = useToast()
    const variants = ['solid', 'subtle', 'left-accent', 'top-accent']

    return (
        <Wrap>
            {variants.map((variant, i) => (
                <WrapItem key={i}>
                    <Button
                        onClick={() =>
                            toast({
                                title: `${variant} toast`,
                                variant: variant,
                                isClosable: true,
                            })
                        }
                    >
                        Show {variant} toast
                    </Button>
                </WrapItem>
            ))}
        </Wrap>
    )
}

function Example() {
    // Via instantiation
    const toast = useToast({
        position: 'top',
        title: 'Container style is updated',
        containerStyle: {
            width: '800px',
            maxWidth: '100%',
        },
    })
    // Or via trigger
    // Style here will overwrite the entire style above
    return (
        <Button
            onClick={() => {
                toast({
                    containerStyle: {
                        border: '20px solid red',
                    },
                })
            }}
        >
            Click me to show toast with custom container style.
        </Button>
    )
}

function PositionExample() {
    const toast = useToast()
    const positions = [
        'top',
        'top-right',
        'top-left',
        'bottom',
        'bottom-right',
        'bottom-left',
    ]

    return (
        <Wrap>
            {positions.map((position, i) => (
                <WrapItem key={i}>
                    <Button
                        onClick={() =>
                            toast({
                                title: `${position} toast`,
                                position: 'bottom',
                                isClosable: true,
                            })
                        }
                    >
                        Show {position} toast
                    </Button>
                </WrapItem>
            ))}
        </Wrap>
    )
}

const ToastPage = () => (
    <Layout title="About | Next.js + TypeScript Example">
        <Navbar />
        <h1>ToastPage</h1>
        <ToastExample />
        <br></br>
        <br></br>
        <CustomToastExample2 />
        <br></br>
        <br></br>
        <ToastStatusExample />
        <br></br>
        <br></br>
        <ToastVariantsExample />
        <br></br>
        <br></br>
        <Example />
        <br></br>
        <br></br>
        <PositionExample />

    </Layout>
)

export default ToastPage
