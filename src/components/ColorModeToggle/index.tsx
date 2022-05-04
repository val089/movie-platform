import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useColorMode, IconButton } from '@chakra-ui/react';

interface Props {
  variant?: string;
  colorScheme?: string;
  size?: string;
}

export const ColorModeToggle = ({
  variant = 'outline',
  colorScheme = 'cyan',
  size = 'md',
  ...props
}: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      as="button"
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      aria-label={'Color mode switcher'}
      onClick={toggleColorMode}
      variant={variant}
      colorScheme={colorScheme}
      size={size}
      {...props}
    />
  );
};
