import { Text } from "@chakra-ui/react";
import React from "react";
import BusListDownload from "../../../data/BusListDownload";

const ListBusStop = () => {
  const { busList } = BusListDownload();

  return (
    <>
      {busList.length > 0 ? (
        <>
          {busList.map((l, i) => (
            <div key={i}>
              <p>{l.lineName}</p>
              <span>{l.distance}</span>
            </div>
          ))}
        </>
      ) : (
        <Text color='#283559'>Nenhuma informação encontrada.</Text>
      )}
    </>
  );
};

export default ListBusStop;
