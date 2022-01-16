import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Profile: React.FC = ({}) => {
  return (
    <Flex aling="center">
      <Box mr="4" textAlign={"right"}>
        <Text>James Dockal</Text>
        <Text color={"gray.300"} fontSize={"small"}>
          jamesdockal@gmail.com
        </Text>
      </Box>

      <Avatar
        size={"md"}
        name="James Dockal"
        src="https://github.com/jamesDockal.png"
      />
    </Flex>
  );
};

export default Profile;
