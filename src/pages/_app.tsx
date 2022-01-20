import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import SidebarProvider from "../context/SidebarContext";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarProvider>
        <Component {...pageProps} />
      </SidebarProvider>
    </ChakraProvider>
  );
}

export default MyApp;
2;
