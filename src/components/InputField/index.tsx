import {
  RegisterOptions,
  UseFormRegister,
  Path,
  FieldErrors,
  FieldValues,
} from 'react-hook-form';
import {
  FormControl,
  FormLabel,
  InputGroup,
  FormHelperText,
  InputLeftElement,
  Input,
} from '@chakra-ui/react';
import { ReactElement } from 'react';

interface Props<TFormValues> {
  name: Path<TFormValues>;
  type?: string;
  label: string;
  rules?: RegisterOptions;
  errors?: FieldErrors<TFormValues>;
  error?: string;
  leftAddon?: ReactElement;
  register?: UseFormRegister<TFormValues>;
}

export const InputField = <TFormValues extends FieldValues>({
  register,
  name,
  type,
  label,
  leftAddon,
  error,
  rules,
  ...rest
}: Props<TFormValues>) => {
  return (
    <FormControl id={name}>
      {label && (
        <FormLabel mb="1" htmlFor={name}>
          {label}
        </FormLabel>
      )}
      <InputGroup>
        {leftAddon && <InputLeftElement>{leftAddon}</InputLeftElement>}
        <Input
          type={type}
          focusBorderColor="purple.500"
          aria-invalid={error ? 'true' : 'false'}
          {...(register && register(name, rules))}
          {...rest}
          autoComplete={type === 'password' ? 'current-password' : ''}
        />
      </InputGroup>
      {error && <FormHelperText color="red">{error}</FormHelperText>}
    </FormControl>
  );
};
