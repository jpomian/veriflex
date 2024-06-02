import { Button, Flex, HStack, Image, Stack, Text, Box } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";

import { Layout } from "@/components/Layout";
import { routes } from "@/config/routes";

import configJsonFile from "../../config.json";

const IssuePage: NextPage = () => {
  const router = useRouter();

  return (
    <Layout>
      <Stack px="4" py="4" spacing="6">
        <Image src="/assets/veriflex-logo.svg" maxW={"sm"} mx="auto" alt="hero" filter="drop-shadow(2px 4px 12px rgba(0, 0, 0, 0.1))" />
        <Stack spacing={"0"}>
          <Text fontSize={"4xl"} textAlign={"center"} fontWeight={"bold"} color={configJsonFile.style.color.homeTop}>
            Platform for issuing and verifying Soul Bound Tokens.
          </Text>
          <Text fontSize={"2xl"} textAlign={"center"} fontWeight={"bold"} color={configJsonFile.style.color.homeBottom}>
            VeriFlex helps to maintain private On-Chain Identity.
          </Text>
          <Box mt="10px">
            <Text fontSize={"md"} textAlign={"center"} color={configJsonFile.style.color.black.text.primary}>
              Press one of the buttons to get started!
            </Text>
          </Box>
        </Stack>
        <Flex justifyContent="center">
          <HStack spacing="4">
            {routes.map(({ path, name }) => {
              return (
                <Button
                  key={path}
                  w="200px"
                  onClick={() => {
                    router.push(path);
                  }}
                >
                  {name} App
                </Button>
              );
            })}
          </HStack>
        </Flex>
      </Stack>
    </Layout>
  );
};

export default IssuePage;
