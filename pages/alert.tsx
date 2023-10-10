// Importa el componente Layout, que contiene la estructura básica de la página.
import Layout from '../components/Layout'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
    Button,
    useDisclosure
} from '@chakra-ui/react'
import Navbar from "../components/NavbarPrincipal";
import React from 'react';

// Ejemplo de AlertDialog
function AlertDialogExample() {

    // useDisclosure devuelve un objeto con las propiedades isOpen, onOpen y onClose.
    const { isOpen, onOpen, onClose } = useDisclosure()

    // cancelRef es una referencia que se utiliza para cancelar el AlertDialog.
    const cancelRef = React.useRef()

    return (
        <>
            <Button colorScheme='red' onClick={onOpen}>
                Eliminar cliente
            </Button>

            <AlertDialog
                // isOpen indica si el AlertDialog está abierto.
                isOpen={isOpen}

                // leastDestructiveRef es una referencia al botón que debe tener el foco cuando se abre el AlertDialog.
                leastDestructiveRef={cancelRef}

                // onClose es una función que se llama cuando el AlertDialog se cierra.
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Eliminar cliente
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            ¿Estás seguro? No podrás deshacer esta acción después.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancelar
                            </Button>
                            <Button colorScheme='red' onClick={onClose} ml={3}>
                                Eliminar
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}

// Ejemplo de TransitionExample
function TransitionExample() {

    // useDisclosure devuelve un objeto con las propiedades isOpen, onOpen y onClose.
    const { isOpen, onOpen, onClose } = useDisclosure()

    // cancelRef es una referencia que se utiliza para cancelar el AlertDialog.
    const cancelRef = React.useRef()

    return (
        <>
            <Button onClick={onOpen}>Descartar</Button>
            <AlertDialog
                // motionPreset indica la animación que se utilizará para abrir y cerrar el AlertDialog.
                motionPreset='slideInBottom'

                // leastDestructiveRef es una referencia al botón que debe tener el foco cuando se abre el AlertDialog.
                leastDestructiveRef={cancelRef}

                // onClose es una función que se llama cuando el AlertDialog se cierra.
                onClose={onClose}

                // isOpen indica si el AlertDialog está abierto.
                isOpen={isOpen}

                // isCentered indica si el AlertDialog debe estar centrado en la pantalla.
                isCentered
            >
                <AlertDialogOverlay />

                <AlertDialogContent>
                    <AlertDialogHeader>¿Descartar cambios?</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody>
                        ¿Estás seguro de que quieres descartar todas tus notas? Se eliminarán 44 palabras.
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                            No
                        </Button>
                        <Button colorScheme='red' ml={3}>
                            Sí
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}

// Componente AlertPage
const AlertPage = () => (
    <Layout title="Acerca de | Ejemplo de Next.js + TypeScript">
        <Navbar />
        <h1>AlertPage</h1>

         {/* Aquí se renderizan los ejemplos de AlertDialog. */}
        <AlertDialogExample />
        <br></br>
        <br></br>
        <TransitionExample/>

    </Layout>
)

export default AlertPage