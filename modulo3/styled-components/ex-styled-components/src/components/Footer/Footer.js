import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  width:100vw;
  height:8vh;
  background-color: white;
`;

const TextoFooter = styled.p`
  font-size: 0.6rem;
  text-align: center;
  padding: 1vh 0 1vh 0;
`;

export const AppFooter = (props)=> {
  return(
    <Footer>
      <TextoFooter>{props.footerTexto}</TextoFooter>
    </Footer>
  )
}