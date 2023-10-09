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
    Avatar,
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,
    Progress
} from '@chakra-ui/react'
import Navbar from "../components/NavbarPrincipal";
import React from 'react';

const steps = [
    { title: 'First', description: 'Contact Info' },
    { title: 'Second', description: 'Date & Time' },
    { title: 'Third', description: 'Select Rooms' },
  ]
  
  function Example() {
    const { activeStep } = useSteps({
      index: 1,
      count: steps.length,
    })
  
    return (
      <Stepper index={activeStep}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>
  
            <Box flexShrink='0'>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>
  
            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    )
  }

  function Example2() {
    const { activeStep } = useSteps({
      index: 1,
      count: steps.length,
    })
  
    return (
      <Stepper index={activeStep} orientation='vertical' height='400px' gap='0'>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>
  
            <Box flexShrink='0'>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>
  
            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    )
  }

  function Example3() {
    const { activeStep, setActiveStep } = useSteps({
      index: 1,
      count: steps.length,
    })
  
    const activeStepText = steps[activeStep].description
  
    const max = steps.length - 1
    const progressPercent = (activeStep / max) * 100
  
    return (
      <Box position='relative'>
        <Stepper size='sm' index={activeStep} gap='0'>
          {steps.map((step, index) => (
            <Step key={index} gap='0'>
              <StepIndicator bg='white'>
                <StepStatus complete={<StepIcon />} />
              </StepIndicator>
            </Step>
          ))}
        </Stepper>
        <Progress
          value={progressPercent}
          position='absolute'
          height='3px'
          width='full'
          top='10px'
          zIndex={-1}
        />
      </Box>
    )
  }

  function Example4() {
    const { activeStep, setActiveStep } = useSteps({
      index: 1,
      count: steps.length,
    })
  
    const activeStepText = steps[activeStep].description
  
    return (
      <Stack>
        <Stepper size='sm' index={activeStep} gap='0'>
          {steps.map((step, index) => (
            <Step key={index} gap='0'>
              <StepIndicator>
                <StepStatus complete={<StepIcon />} />
              </StepIndicator>
              <StepSeparator _horizontal={{ ml: '0' }} />
            </Step>
          ))}
        </Stepper>
        <Text>
          Step {activeStep + 1}: <b>{activeStepText}</b>
        </Text>
      </Stack>
    )
  }

const StepperPage = () => (
    <Layout title="About | Next.js + TypeScript Example">
        <Navbar />
        <h1>StepperPage</h1>
        <br></br>

        <Example />

        <br></br>
        <br></br>

        <br></br>

        <Example2 />

        <br></br>
        <br></br>

        <Example3 />

        <br></br>
        <br></br>

        <Example4 />

        <br></br>
        <br></br>


    </Layout>
)

export default StepperPage
