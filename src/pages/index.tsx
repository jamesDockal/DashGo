import { Button, Flex, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Input from "../components/Form/Input";

type SignInFormData = {
  email: string;
  password: string;
};

export default function SignIn() {
  const router = useRouter();

  const { handleSubmit, register, formState } = useForm();

  const handleSignIn: SubmitHandler<SignInFormData> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <Flex
      width="100vw"
      height="100vh"
      align="center"
      justify="center"
      direction="column"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        padding="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            name="email"
            label="E-mail"
            type="email"
            {...register("email", {
              required: "E-mail obrigatório",
            })}
            error={formState.errors}
          />
          <Input
            name="password"
            label="Senha"
            type="password"
            {...register("password", {
              required: "Senha obrigatório",
            })}
            error={formState.errors}
          />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
