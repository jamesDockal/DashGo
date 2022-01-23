import React, { useEffect } from "react";

import { useQuery } from "react-query";

import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import Sidebar from "../../components/Sidebar";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { api } from "../../services/api";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

const UserList: React.FC = ({}) => {
  const { isLoading, error, data } = useQuery(
    "users",
    async () => {
      const { data } = await api.get("/users");

      const users = data.map(({ id, email, name, createdAt }: User) => {
        return {
          id,
          name,
          email,
          createdAt: new Date(createdAt).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          }),
        };
      });

      return users;
    },
    {
      staleTime: 1000 * 5,
    }
  );

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex direction={"column"} h="100vh">
      <Header />

      <Flex w={"100%"} my={"6"} maxWidth={1480} mx={"auto"} px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size={"lg"} fontWeight={"normal"}>
              Usuários
            </Heading>

            <Link href="/users/create" passHref>
              <Button
                as="a"
                size={"sm"}
                fontSize={"sm"}
                colorScheme={"pink"}
                leftIcon={<Icon as={RiAddLine} fontSize={20} />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          {isLoading ? (
            <Flex justify={"center"}>
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify={"center"}>
              <Text>Flaha ao obeter dados dos usuários.</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme={"whiteAlpha"}>
                <Thead>
                  <Tr>
                    <Th px="6" color="gray.300" width="8">
                      <Checkbox colorScheme={"pink"} />
                    </Th>
                    <Th>Usuário</Th>
                    {isWideVersion && <Th>Data de Cadastro</Th>}
                    <Th width="8"></Th>
                  </Tr>
                </Thead>

                <Tbody>
                  {data.map(({ name, email, createdAt }: User) => (
                    <Tr key={email}>
                      <Td px={["4", "4", "6"]}>
                        <Checkbox colorScheme={"pink"} />
                      </Td>
                      <Td>
                        <Box>
                          <Text fontWeight="bold">{name}</Text>
                          <Text fontSize="sm" color="gray.300">
                            {email}
                          </Text>
                        </Box>
                      </Td>
                      {isWideVersion && <Td>{createdAt}</Td>}
                      <Td>
                        <Button
                          as="a"
                          size={"sm"}
                          fontSize={"sm"}
                          colorScheme={"orange"}
                          leftIcon={<Icon as={RiPencilLine} fontSize={16} />}
                        >
                          {isWideVersion ? "Editar" : ""}
                        </Button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
              <Pagination />
            </>
          )}
        </Box>
      </Flex>
    </Flex>
  );
};

export default UserList;
