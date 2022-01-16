import { Box, Button, Stack } from "@chakra-ui/react";
import React from "react";
import PaginationButton from "./PaginationButton";

const Pagination: React.FC = ({}) => {
  return (
    <Stack
      direction={"row"}
      spacing={"6"}
      mt={8}
      justify={"space-between"}
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction={"row"} spacing={"2"}>
        <PaginationButton isCurrent>1</PaginationButton>
        <PaginationButton>2</PaginationButton>
        <PaginationButton>3</PaginationButton>
        <PaginationButton>4</PaginationButton>
      </Stack>
    </Stack>
  );
};

export default Pagination;
