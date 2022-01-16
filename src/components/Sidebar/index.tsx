import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import NavLink from "./NavLink";
import NavSection from "./navSection";

const Sidebar: React.FC = ({}) => {
  return (
    <Box as="aside" mr="8">
      <Stack spacing="12" align={"flex-start"}>
        <NavSection title="GERAL">
          <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
          <NavLink icon={RiContactsLine}>Usuários</NavLink>
        </NavSection>

        <NavSection title="AUTOMAÇÃO">
          <NavLink icon={RiInputMethodLine}>Formulários</NavLink>
          <NavLink icon={RiGitMergeLine}>Usuários</NavLink>
        </NavSection>
      </Stack>
    </Box>
  );
};

export default Sidebar;
