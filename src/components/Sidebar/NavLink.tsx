import React, { ElementType } from "react";
import { Icon, Link as ChakraLink, Text, LinkProps } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props extends LinkProps {
  icon: ElementType;
  href: string;
}

const NavLink: React.FC<Props> = ({ icon, children, href, ...rest }) => {
  const { asPath } = useRouter();

  let isActive = false;

  if (asPath.startsWith(href) || asPath.startsWith(String(rest.as))) {
    isActive = true;
  }

  return (
    <Link href={href} passHref>
      <ChakraLink display="flex" align={"center"} {...rest}>
        <Icon
          as={icon}
          fontSize={"20"}
          color={isActive ? "pink.400" : "gray.50"}
        />
        <Text
          ml={"4"}
          fontWeight={"medium"}
          color={isActive ? "pink.400" : "gray.50"}
        >
          {children}
        </Text>
      </ChakraLink>
    </Link>
  );
};

export default NavLink;
