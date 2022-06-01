import { Flex, Grid, GridItem, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React, { useEffect } from "react";
import BusListDownload from "../../../data/BusListDownload";

const ListBusStop = () => {
  const { busList } = BusListDownload();

  return (
    <>
      {busList.length > 0 ? (
        <UnorderedList w={{ base: "90vw", lg: "24vw" }} margin='0'>
          {busList.map(
            (
              l: {
                lineCode: string | number;

                lineName: string | number;

                distance: string | number;
              },
              i: React.Key
            ) => (
              <ListItem key={i} as={Flex}>
                <Text w='50%' textAlign='left'>
                  {l.lineName}
                </Text>
                <Text
                  textAlign='right'
                  w='50%'
                  fontWeight={l.distance <= 1 ? "600" : null}
                  color={l.distance <= 1 ? "green.300" : null}>
                  {l.distance <= 1 ? "menos de um minuto" : l.distance + " minutos"}
                </Text>
              </ListItem>
            )
          )}
        </UnorderedList>
      ) : (
        <Grid>
          <Grid
            h={{ base: "4vh", lg: "22vh" }}
            background={{ base: "white", lg: "#283559E5" }}
            w={{ base: "70vw", lg: "20vw" }}
            p='1vw'
            borderRadius={{ base: 0, lg: "1.5625rem" }}
            marginTop='1.25rem'
            alignItems='center'
            justifyItems='center'>
            <Image src='/sad.svg' alt='Carinha triste (emoji)' width={75} height={75} m='2vh' />
            <GridItem>
              <Text
                textAlign='center'
                color={{ base: "#283559E5", lg: "white" }}
                fontFamily="'Manrope', sans-serif"
                fontWeight={{ base: "500", lg: "600" }}
                fontSize='1rem'
                letterSpacing='-0.02em'
                lineHeight='1.875rem'>
                Poxa! Não tem ônibus previstos para essa parada. Que tal tentar mais tarde?
              </Text>
            </GridItem>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default ListBusStop;
