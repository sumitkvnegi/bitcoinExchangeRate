import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import btcSrc from '../assets/pngwing.com.png'
import {motion} from 'framer-motion'

const Home = () => {
  return <Box bgColor={'blackAlpha.900'} w={'full'} h={'90vh'} backgroundColor={'black'}>
    <motion.div style={{
      height: '80vh',
    }}
    animate={{
      translateY:'20px'
    }}
    transition={{
      duration:2,
      repeat:Infinity,
      repeatType:'reverse'
    }}>
    <Image w={'full'} h={'full'} p={'100px'} objectFit={'contain'} src={btcSrc} filter={'grayscale(1)'} />
    </motion.div>
    <Text fontSize={'5xl'} textAlign={'center'} fontWeight={'thin'} color={'whiteAlpha.700'}  mt={'-20'} backgroundColor={'black'}>Cryptics</Text>
  </Box>
}

export default Home