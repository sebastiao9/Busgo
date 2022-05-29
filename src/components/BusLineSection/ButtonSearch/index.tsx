import { Button } from "@chakra-ui/react";
import React from "react";

const ButtonSearch = () => {
  return (
    <Button
      background='#293462'
      borderRadius='2.5rem'
      color='whitesmoke'
      padding='0 1.25rem'
      border='none'
      h='4rem'
      w='10vw'
      fontSize='1.7rem'
      _hover={{ background: "#F24C4C" }}
      _focus={{ outline: "none" }}
      _active={{
        bg: "#EC9B3B",
        borderColor: "#F7D716",
        outline: "none",
      }}>
      Pesquisar
    </Button>
  );
};

export default ButtonSearch;
