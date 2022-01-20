import React from "react";

import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";

import Profile from "./Profile";
import NotificationNav from "./NotificationsNav";
import SearchBox from "./SearchBox";
import Logo from "./Logo";
import { useSidebar } from "../../context/SidebarContext";
import { RiMenuLine } from "react-icons/ri";

const Header: React.FC = ({}) => {
  const { onOpen } = useSidebar();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize={24}
          variant={"unstyled"}
          onClick={onOpen}
          mr="2"
        />
      )}

      <Logo />
      <SearchBox />

      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile isWideVersion={isWideVersion} />
      </Flex>
    </Flex>
  );
};

export default Header;
