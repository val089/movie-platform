import { whiten, mode, darken } from '@chakra-ui/theme-tools';

export const ButtonStyles = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: (props: object) => ({
      bg: 'primary',
      color: 'white',
      _hover: {
        // bg: whiten('primary', 20), // rozjaśniamy nasz button, jest też opcja darken
        bg: mode(darken('primary', 20), whiten('primary', 20))(props), //ustawiamy wygląd dla dark mode i light mode, pierwsza wartość jest dla lightmode, druga darkmode
        boxShadow: 'md',
      },
    }),
    secondary: (props: object) => ({
      bg: 'secondary',
      color: 'white',
      _hover: {
        bg: mode(darken('primary', 20), whiten('primary', 20))(props),
        boxShadow: 'md',
      },
    }),
    secondaryOutline: () => ({
      bg: 'transparent',
      border: '1px solid',
      borderColor: 'secondary',
      color: 'secondary',
      _hover: {
        boxShadow: 'md',
        transform: 'scale(1.02)',
      },
    }),
  },
  // default values for `size` and `variant`
  defaultProps: {
    size: '',
    variant: '',
  },
};
