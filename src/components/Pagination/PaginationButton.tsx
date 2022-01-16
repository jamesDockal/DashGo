import { Button } from "@chakra-ui/react";
import React from "react";

type Props = {
  isCurrent?: boolean;
};

const PaginationButton: React.FC<Props> = ({ isCurrent = false, children }) => {
  return isCurrent ? (
    <Button
      size={"sm"}
      fontSize={"xs"}
      width={4}
      colorScheme={"pink"}
      disabled
      _disabled={{
        bg: "pink.500",
        cursor: "default",
      }}
    >
      {children}
    </Button>
  ) : (
    <Button
      size={"sm"}
      fontSize={"xs"}
      width={4}
      bg={"gray.700"}
      _hover={{
        bg: "gray.500",
      }}
    >
      {children}
    </Button>
  );
};

export default PaginationButton;
