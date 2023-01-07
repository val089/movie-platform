import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';

import { AtSignIcon, LockIcon } from '@chakra-ui/icons';
import {
  Center,
  Stack,
  Heading,
  Text,
  Button,
  Box,
  useToast,
} from '@chakra-ui/react';
import { InputField } from 'components/InputField';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from 'hooks/useAuth';
import { authScheme } from 'utils/zodValidators';
import { login } from 'utils/authByFirebase';

export type LoginFormFields = {
  username: string;
  password: string;
};

export const LoginPage = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const { authenticate } = useAuth();
  const navigate = useNavigate();
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormFields>({
    resolver: zodResolver(authScheme),
  });

  const onSubmit: SubmitHandler<LoginFormFields> = async (
    data: LoginFormFields
  ) => {
    setIsAuthenticating(true);
    try {
      const token = await login(data.username, data.password);
      if (token) {
        authenticate(token);
      }
      navigate('/home');
    } catch (error) {
      setIsAuthenticating(false);
      toast({
        title: `Something went wrong, please try again`,
        status: 'error',
        isClosable: true,
      });
    }
  };

  if (isAuthenticating) {
    return <h1>Logging you in...</h1>;
  }

  return (
    <Center h="100vh">
      <Stack p="10">
        <Heading as="h1" textAlign="center">
          Welcome in React Platfrom
        </Heading>
        <Heading as="h3" textAlign="center">
          Sign In
        </Heading>
        <Text fontSize="sm" textAlign="center">
          Please log in with the data you entered during registration.
        </Text>

        <Box as="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <Stack my="4" spacing="6">
            <InputField<LoginFormFields>
              name="username"
              label="Username:"
              register={register}
              error={errors.username?.message}
              leftAddon={<AtSignIcon />}
            />
            <InputField<LoginFormFields>
              name="password"
              type="password"
              label="Password:"
              register={register}
              error={errors.password?.message}
              leftAddon={<LockIcon />}
            />
            <Button
              isLoading={isSubmitting}
              loadingText="Sending"
              size="lg"
              colorScheme="purple"
              type="submit"
              variant="primary"
            >
              Sign In
            </Button>
          </Stack>
        </Box>
        <Stack justify="center" spacing="3">
          <Button
            colorScheme="purple"
            variant="link"
            onClick={() => navigate('/home')}
            p={2}
          >
            Go without Sign In
          </Button>
        </Stack>
      </Stack>
    </Center>
  );
};
