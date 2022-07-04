import React from "react";
import styled from "styled-components";

const AppHeader = styled.header`
  display: flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
`
const Title = styled.h1`
  font-size:1.5rem;
`
const Logo = styled.img`
  width: 10vw;
  margin: 0;
`
export const Header = (props)=>{
  return(
    <AppHeader>
      <Logo src={props.img} alt=''/>
      <Title>{props.titulo}</Title>
    </AppHeader>
  )
}