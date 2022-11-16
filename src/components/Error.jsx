import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

const Error = () => {
  return <Alert status='error' position={'fixed'} top={'20'} left={'50%'} transform={'translateX(-50%)'} w={'container.sm'}>
    <AlertIcon/>
    Fetching Fail...
  </Alert>
}

export default Error