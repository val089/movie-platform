import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { ButtonStyles as Button } from './components/buttonStyles';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const myNewTheme = {
  colors: {
    primary: '#845EC2',
    secondary: '#FF6F91',
    highlight: '#00C9A7',
    warning: '#FFC75F',
    danger: '#C34A36',
  },
  components: {
    Button,
  },
};

export const theme = extendTheme(config, myNewTheme);
