import Link from 'next/link'
import Layout from '../components/Layout'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
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
    FormControl
} from '@chakra-ui/react'
import Navbar from "../components/NavbarPrincipal";
import React from 'react';

function BasicUsage() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos ut debitis, quia sed accusamus voluptates magnam modi quo beatae hic eveniet recusandae aspernatur excepturi quibusdam nihil deserunt quis distinctio perspiciatis.
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  function InitialFocus() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
        <Button ml={4} ref={finalRef}>
          I'll receive focus on close
        </Button>
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>First name</FormLabel>
                <Input ref={initialRef} placeholder='First name' />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Last name</FormLabel>
                <Input placeholder='Last name' />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  function ScrollingExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [scrollBehavior, setScrollBehavior] = React.useState('inside')
  
    const btnRef = React.useRef(null)
    return (
      <>
        <RadioGroup value={scrollBehavior} onChange={setScrollBehavior}>
          <Stack direction='row'>
            <Radio value='inside'>inside</Radio>
            <Radio value='outside'>outside</Radio>
          </Stack>
        </RadioGroup>
  
        <Button mt={3} ref={btnRef} onClick={onOpen}>
          Trigger modal
        </Button>
  
        <Modal
          onClose={onClose}
          finalFocusRef={btnRef}
          isOpen={isOpen}
          scrollBehavior={scrollBehavior}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, amet dicta? Vel ratione iure quia esse ipsa dolorum expedita sequi ex quae iste dignissimos consectetur dicta, tempore voluptates quos porro.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, repellendus. Repellat, dicta nisi possimus, corporis repudiandae magnam minus explicabo aspernatur, veniam exercitationem doloremque ab placeat! Veniam quas assumenda a eaque?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quidem facere tenetur illum nostrum quos officia voluptatibus debitis consequuntur inventore repellendus neque, error ut porro enim quia, incidunt delectus dolore?
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis ad quibusdam tempora numquam, harum, cumque voluptatem atque explicabo id blanditiis ea cupiditate culpa. Quasi et sed quam, earum quibusdam dicta!
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum iste velit obcaecati architecto corporis adipisci numquam quae? Ducimus dolores possimus praesentium maxime debitis! Voluptatem cum quae accusantium alias maiores asperiores?
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel iste excepturi aspernatur veritatis placeat asperiores, inventore ipsum voluptatem voluptatum voluptas quo itaque quae cum deserunt rem distinctio ipsam nihil! Veritatis.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus amet libero deleniti odio facilis reprehenderit modi magni ipsam aspernatur alias exercitationem rerum reiciendis corporis consectetur provident, quidem, adipisci non architecto.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eius praesentium, nihil, reiciendis accusamus vel inventore similique iure dolore tenetur modi voluptate. In quo voluptatem corrupti natus autem laborum maxime.
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  function SizeExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [size, setSize] = React.useState('md')
  
    const handleSizeClick = (newSize) => {
      setSize(newSize)
      onOpen()
    }
  
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full']
  
    return (
      <>
        {sizes.map((size) => (
          <Button
            onClick={() => handleSizeClick(size)}
            key={size}
            m={4}
          >{`Open ${size} Modal`}</Button>
        ))}
  
        <Modal onClose={onClose} size={size} isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ad expedita voluptas beatae reiciendis consectetur! Ipsum aliquid odit voluptates iste nulla nobis veniam ullam debitis aut deleniti? Ipsa, molestiae pariatur.
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  function BackdropExample() {
    const OverlayOne = () => (
      <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
      />
    )
  
    const OverlayTwo = () => (
      <ModalOverlay
        bg='none'
        backdropFilter='auto'
        backdropInvert='80%'
        backdropBlur='2px'
      />
    )
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)
  
    return (
      <>
        <Button
          onClick={() => {
            setOverlay(<OverlayOne />)
            onOpen()
          }}
        >
          Use Overlay one
        </Button>
        <Button
          ml='4'
          onClick={() => {
            setOverlay(<OverlayTwo />)
            onOpen()
          }}
        >
          Use Overlay two
        </Button>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Custom backdrop filters!</Text>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

const ModalPage = () => (
    <Layout title="About | Next.js + TypeScript Example">
        <Navbar />
        <h1>ModalPage</h1>
        <BasicUsage />
        <br></br>
        <br></br>
        <InitialFocus />
        <br></br>
        <br></br>
        <ScrollingExample />
        <br></br>
        <br></br>
        <SizeExample />
        <br></br>
        <br></br>
        <BackdropExample />

    </Layout>
)

export default ModalPage
