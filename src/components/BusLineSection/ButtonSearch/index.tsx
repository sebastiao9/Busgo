import { Button } from "@chakra-ui/react";
import React from "react";

const ButtonSearch = () => {
  return (
    <Button
      background='#293462'
      borderRadius='2.5rem'
      color='whitesmoke'
      border='none'
      h='4vh'
      minW='6vw'
      fontSize='1rem'
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
