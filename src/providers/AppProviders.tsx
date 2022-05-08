import React from 'react';
import { ColorModeScript, ChakraProvider } from '@chakra-ui/react';
import { theme } from '../theme';
import { AuthProvider } from 'hooks/useAuth';

interface Props {
  children?: React.ReactNode;
}
export const AppProviders = ({ children }: Props) => {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        {children}
      </AuthProvider>
    </ChakraProvider>
  );
};
