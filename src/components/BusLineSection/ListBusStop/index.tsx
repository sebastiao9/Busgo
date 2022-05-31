import { Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React, { useEffect } from "react";
import BusListDownload from "../../../data/BusListDownload";

const ListBusStop = () => {
  const { busList } = BusListDownload();

  return (
    <>
      {busList.length > 0 ? (
        <UnorderedList w='100%' margin='0'>
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
                {/* <Text marginLeft='1vw' w='5vw' textAlign='center' fontWeight='bold'>
                  {l.lineCode}
                </Text> */}
                <Text w='25vw' textAlign='center'>
                  {l.lineName}
                </Text>
                <Text textAlign='right' w='10vw' paddingRight='2vw'>
                  {l.distance} mts
                </Text>
              </ListItem>
            )
          )}
        </UnorderedList>
      ) : (
        <Text color='#283559'>Nenhuma informação encontrada.</Text>
      )}
    </>
  );
};

export default ListBusStop;
