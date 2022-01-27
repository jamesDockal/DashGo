import React from "react";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Input from "../../components/Form/Input";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { useMutation } from "react-query";
import { api } from "../../services/api";
import { useForm } from "react-hook-form";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

const CreateUser: React.FC = ({}) => {
  const createUser = useMutation(async (user: User) => {
    const response = await api.post("users", {
      user: {
        ...user,
        createdAt: new Date(),
      },
    });

    return response.data.user;
  });

  const { handleSubmit, register, formState } = useForm();

  const handleCreateUser = async (values: any) => {
    await createUser.mutateAsync(values);
  };

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx={"auto"} px="6">
        <Sidebar />

        <Box
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p="8"
          as={"form"}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size={"lg"} fontWeight={"normal"}>
            Criar Usuário
          </Heading>

          <Divider my={"6"} borderColor={"gray.700"} />

          <VStack spacing={"8"}>
            <SimpleGrid minChildWidth={"240px"} spacing={"8"} width={"100%"}>
              <Input
                name="name"
                label="Nome Completo"
                {...register("name", {
                  required: "Nome obrigatório",
                })}
                error={formState.errors}
              />

              <Input
                name="email"
                type={"email"}
                label="E-Mail"
                {...register("email", {
                  required: "E-Mail obrigatório",
                })}
                error={formState.errors}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth={"240px"} spacing={"8"} width={"100%"}>
              <Input
                name="password"
                type={"password"}
                label="Senha"
                {...register("password", {
                  required: "Senha obrigatório",
                })}
                error={formState.errors}
              />
              <Input
                name="password_confirmation"
                type={"password"}
                label="Confirmação da Senha"
                {...register("confirmation_password", {
                  required: "Confirmação de Senha obrigatório",
                })}
                error={formState.errors}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt={"8"} justify={"flex-end"}>
            <HStack spacing={"4"}>
              <Link href="/users" passHref>
                <Button as="a" colorScheme={"whiteAlpha"}>
                  Cancelar
                </Button>
              </Link>
              <Button
                colorScheme={"pink"}
                isLoading={formState.isSubmitting}
                type="submit"
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default CreateUser;
