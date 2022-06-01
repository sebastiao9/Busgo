import React from "react";
import { css } from "@emotion/react";

export const GlobalStyles = () => css`
  @import url("https://fonts.googleapis.com/css2?family=Manrope&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: "border-box";
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
      "Helvetica Neue", sans-serif;
    overflow: hidden;
  }
  ul,
  ol {
    list-style: none;
  }
  html,
  body,
  #__next {
    height: 100%;
  }
`;
