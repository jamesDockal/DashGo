import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError, FieldErrors } from "react-hook-form";

type InputProps = ChakraInputProps & {
  name: string;
  label?: string;
  error?: FieldErrors;
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={error ? !!error[name] : false}>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        id={name}
        name={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        size="lg"
        _hover={{ bgColor: "gray.900" }}
        ref={ref}
        {...rest}
      />

      {error && !!error[name] && (
        <FormErrorMessage>{error[name].message}</FormErrorMessage>
      )}
    </FormControl>
  );
};

const Input = forwardRef(InputBase);

export default Input;
