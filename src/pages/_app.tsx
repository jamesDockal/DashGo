import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import SidebarProvider from "../context/SidebarContext";
import { theme } from "../styles/theme";
import { makeServer } from "../services/mirage";

// if (process.env.NODE_ENV === "development") {
makeServer();
// }

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

