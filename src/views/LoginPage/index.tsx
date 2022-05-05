import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';

import { AtSignIcon, LockIcon } from '@chakra-ui/icons';
import { Center, Stack, Heading, Text, Button, Box } from '@chakra-ui/react';
import { ColorModeToggle } from 'components/ColorModeToggle';
import { InputField } from 'components/InputField';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from 'hooks/useAuth';
import { authScheme } from 'utils/zodValidators';

export type LoginFormFields = {
  username: string;
  password: string;
};

export const LoginPage = () => {
  const { signIn, goWithoutLogin } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormFields>({
    resolver: zodResolver(authScheme),
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginFormFields> = async (
    data: LoginFormFields
  ) => {
    await signIn(data);
    navigate('/home');
  };

  const loginAnonymously = async () => {
    await goWithoutLogin();
    navigate('/home');
  };

  return (
    <Center h="100vh">
      <Box position="absolute" right={5} top={5}>
        <ColorModeToggle />
      </Box>
      <Stack boxShadow="lg" p="10" rounded="md">
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
            onClick={loginAnonymously}
          >
            Go without Sign In
          </Button>
        </Stack>
      </Stack>
    </Center>
  );
};
