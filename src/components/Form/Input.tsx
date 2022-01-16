import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

interface props extends ChakraInputProps {
  name: string;
  label?: string;
}

const Input: React.FC<props> = ({ name, label, ...rest }) => {
  return (
    <FormControl>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        id={name}
        name={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        size="lg"
        _hover={{ bgColor: "gray.900" }}
        {...rest}
      />
    </FormControl>
  );
};

export default Input;
