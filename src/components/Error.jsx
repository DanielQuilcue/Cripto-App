import React from "react";
import styled from "@emotion/styled";

const Texto = styled.div`
  background-color: #b7322c;
  color: #fff;
  padding: 15px;
  font-size: 19px;
  text-transform: uppercase;
  font-family: "Lato" sans-serif;
  font-weight: 700;
  text-align: center;
  border-radius: 8px;
`;

const Error = ({ children }) => {
  return <Texto>{children}</Texto>;
};

export default Error;
