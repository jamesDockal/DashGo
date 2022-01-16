import React, { ElementType } from "react";
import { Icon, Link, Text, LinkProps } from "@chakra-ui/react";

interface Props extends LinkProps {
  icon: ElementType;
}

const NavLink: React.FC<Props> = ({ icon, children, ...rest }) => {
  return (
    <Link display="flex" align={"center"} {...rest}>
      <Icon as={icon} fontSize={"20"} />
      <Text ml={"4"} fontWeight={"medium"}>
        {children}
      </Text>
    </Link>
  );
};

export default NavLink;
