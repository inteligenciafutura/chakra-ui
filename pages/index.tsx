// Importa componentes específicos de Chakra UI: Button, Flex, Heading, Input, useColorMode, useColorModeValue
import { Button, Flex, Heading, Input, useColorMode, useColorModeValue } from '@chakra-ui/react';

//importamos el componente del menu
import Navbar from "../components/NavbarPrincipal";

// Definición del componente funcional IndexPage
const IndexPage = () => {
  // Utiliza el hook useColorMode para manejar el modo de color claro/oscuro
  const { toggleColorMode } = useColorMode();
  // Utiliza el hook useColorModeValue para determinar el fondo del formulario basado en el modo de color
  const formBackground = useColorModeValue("gray.100", "gray.700");

  return (
    <>
    <Navbar />
     {/* Flex container que ocupa toda la altura de la vista, alineado y justificado al centro */}
    <Flex height='100vh' alignItems="center" justifyContent='center'>
      {/* Flex container interno con dirección de columna, fondo gris, espaciado y bordes redondeados */}
      <Flex direction='column' background={formBackground} p={12} rounded={6}>
        {/* Título de la sección de inicio de sesión */}
        <Heading mb={6}>Log in</Heading>

        {/* Campo de entrada para el correo electrónico con borde y color de fuente */}
        <Input
          placeholder='Ingresa tu correo'
          variant="filled"
          mb={3}
          type='email'
          borderColor="teal.500"
          color="black"
        />

        {/* Campo de entrada para la contraseña con borde y color de fuente */}
        <Input
          placeholder='******'
          variant="filled"
          mb={6}
          type='password'
          borderColor="teal.500"
          color="black"
        />

        {/* Botón de inicio de sesión con esquema de color 'teal' */}
        <Button colorScheme='teal' mb={6}>Log in</Button>

        {/* Botón para alternar el modo de color */}
        <Button colorScheme='teal' onClick={toggleColorMode}>Toggle Color Mode</Button>
      </Flex>
    </Flex>
    </>
  );
}

// Exporta el componente IndexPage como el componente por defecto de este archivo
export default IndexPage;
