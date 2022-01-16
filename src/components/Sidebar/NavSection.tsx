import React from "react";
import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine } from "react-icons/ri";

type Props = {
  title: string;
};

const NavSection: React.FC<Props> = ({ title, children }) => {
  return (
    <Box>
      <Text fontWeight={"bold"} color={"gray.400"} fontSize={"small"}>
        {title}
      </Text>
      <Stack spacing="4" mt="8" align={"stretch"}>
        {children}
      </Stack>
    </Box>
  );
};

export default NavSection;
