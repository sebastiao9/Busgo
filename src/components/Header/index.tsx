import { BellIcon } from "@chakra-ui/icons";
import { Avatar, Flex, Grid, Text, Wrap, WrapItem } from "@chakra-ui/react";
import Image from "next/image";

export function Header() {
  return (
    <Flex
      w='100vw'
      h={{ base: "10vh", lg: "17vh" }}
      flexFlow='row'
      alignItems='center'
      alignSelf='center'
      padding={{ base: "0 5vw", lg: "0 15vh" }}
      mb={{ base: 0, lg: "3vh" }}
      justifyContent={{
        base: "center",
        lg: "space-between",
      }}>
      <Image src='/logo.svg' alt='representação de um onibus seguido da palavra BUSGO' width={225} height={59} />
      <Grid autoFlow='column' alignItems='center' gap='1vh' display={{ base: "none", lg: "grid" }}>
        <WrapItem>
          <Text>Ada Lovelace</Text>
        </WrapItem>
        <WrapItem>
          <Avatar
            name='Ada Lovelace'
            src='https://s2.glbimg.com/paF5KTEVGzMU-ZcZa2mjYicNDjM=/e.glbimg.com/og/ed/f/original/2015/03/09/ada.jpg'
            size='lg'
            showBorder={false}
          />
        </WrapItem>
      </Grid>
    </Flex>
  );
}
