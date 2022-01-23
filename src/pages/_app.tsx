import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import SidebarProvider from "../context/SidebarContext";
import { theme } from "../styles/theme";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarProvider>
          <Component {...pageProps} />
        </SidebarProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
