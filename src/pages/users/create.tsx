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

const CreateUser: React.FC = ({}) => {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx={"auto"} px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Heading size={"lg"} fontWeight={"normal"}>
            Criar Usuário
          </Heading>

          <Divider my={"6"} borderColor={"gray.700"} />

          <VStack spacing={"8"}>
            <SimpleGrid minChildWidth={"240px"} spacing={"8"} width={"100%"}>
              <Input name="name" label="Nome Completo" />
              <Input name="email" type={"email"} label="E-Mail" />
            </SimpleGrid>

            <SimpleGrid minChildWidth={"240px"} spacing={"8"} width={"100%"}>
              <Input name="password" type={"password"} label="Senha" />
              <Input
                name="password_confirmation"
                type={"password"}
                label="Confirmação da Senha"
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
              <Button colorScheme={"pink"}>Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default CreateUser;
