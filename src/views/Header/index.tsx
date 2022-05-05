import { Box, Flex, Link, Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { ColorModeToggle } from 'components/ColorModeToggle';
import { useAuth } from 'hooks/useAuth';

export const Header = () => {
  const { logout } = useAuth();

  return (
    <Box width="100%" pt={5}>
      <Flex maxW={1000} justifyContent="space-between" margin="0 auto">
        <Flex as="nav">
          <Link mx={2} p={2} as={NavLink} to="/home">
            Home
          </Link>
          <Link mx={2} p={2} as={NavLink} to="/">
            Login
          </Link>
        </Flex>

        <Box>
          <Button
            size="md"
            colorScheme="purple"
            type="button"
            variant="primary"
            mx={6}
            onClick={logout}
          >
            Logout
          </Button>
          <ColorModeToggle />
        </Box>
      </Flex>
    </Box>
  );
};
