import React, { useEffect, useState } from "react";

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
  Link,
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
import NextLink from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { api } from "../../services/api";
import { queryClient } from "../../services/queryClient";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

const UserList: React.FC = ({}) => {
  const [page, setPage] = useState(1);

  const { isLoading, error, data } = useQuery(
    ["users", page],
    async () => {
      const { data } = await api.get("/users", {
        params: {
          _page: page,
          _limit: 10,
          _sort: "createdAt",
          _order: "desc",
        },
      });

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

  async function handlePreFetchUserver(id: string) {
    await queryClient.prefetchQuery(
      ["user", id],
      async () => {
        const response = await api.get(`/users/${id}`);
        return response.data;
      },
      {
        staleTime: 1000 * 60 * 10,
      }
    );
  }

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

            <NextLink href="/users/create" passHref>
              <Button
                as="a"
                size={"sm"}
                fontSize={"sm"}
                colorScheme={"pink"}
                leftIcon={<Icon as={RiAddLine} fontSize={20} />}
              >
                Criar novo
              </Button>
            </NextLink>
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
                  {data.map(({ id, name, email, createdAt }: User) => (
                    <Tr key={id}>
                      <Td px={["4", "4", "6"]}>
                        <Checkbox colorScheme={"pink"} />
                      </Td>
                      <Td>
                        <Box>
                          <Link
                            color="purple.400"
                            onMouseEnter={() => handlePreFetchUserver(id)}
                          >
                            <Text fontWeight="bold">{name}</Text>
                          </Link>
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
              <Pagination
                totalCountOfRegisters={200}
                currentPage={page}
                onPageChange={setPage}
              />
            </>
          )}
        </Box>
      </Flex>
    </Flex>
  );
};

export default UserList;
