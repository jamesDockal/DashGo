import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  isWideVersion: boolean;
};

const Profile: React.FC<Props> = ({ isWideVersion }) => {
  return (
    <Flex aling="center">
      {isWideVersion && (
        <Box mr="4" textAlign={"right"}>
          <Text>James Dockal</Text>
          <Text color={"gray.300"} fontSize={"small"}>
            jamesdockal@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size={"md"}
        name="James Dockal"
        src="https://github.com/jamesDockal.png"
      />
    </Flex>
  );
};

export default Profile;
