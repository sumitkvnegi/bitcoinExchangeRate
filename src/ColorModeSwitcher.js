import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      size="md"
      fontSize="lg"
      position={'fixed'}
      top={'4'}
      right={'4'}
      variant="ghost"
      color={'blackAlpha.900'}
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
      zIndex={99}
      borderRadius={'full'}
      bgColor={'whiteAlpha.100'}
    />
  );
};

export default ColorModeSwitcher;