/* eslint-disable jsx-a11y/alt-text */
import { Grid, Image } from "@chakra-ui/react";
import React from "react";

const BackgroundElements = () => {
  return (
    <Grid
      background='linear-gradient(0deg, #D3D3D3, #D3D3D3), rgba(102, 100, 100, 0.25)'
      h='101vh'
      w='100vw'
      position='absolute'
      top='0'
      left='0'
      zIndex='-1'
      display={{ base: "none", lg: "block" }}>
      <Image src='/polygon5.svg' position='absolute' left='--6.0625rem' top='9.125rem' />

      <Image src='/polygon6.svg' position='absolute' left='--11.125rem' top='36.25rem' />

      <Image src='/topBar.svg' position='absolute' left='60vw' top='0vh' />
    </Grid>
  );
};

export default BackgroundElements;
