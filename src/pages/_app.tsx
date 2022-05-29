import { AppProps } from "next/app";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
