"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    brand: {
      100: "#baf241",
      // ...
      900: "#1a202c",
    },
  },
})

export const Providers = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {" "}
      <ChakraProvider theme={theme}>{children} </ChakraProvider>
    </QueryClientProvider>
  );
};

export const queryClient = new QueryClient();