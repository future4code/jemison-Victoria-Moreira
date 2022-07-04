import React from "react";
import styled from "styled-components";

const ContainerBackGround = styled.main`
  width:100vw;
  height:90vh;
  background-color: #0c0f0a;
`;

const CaixaEnviar = styled.div`
  display:flex;
  flex-direction:row;
  align-items:flex-start;
  justify-content:center;
  padding:0.5vh 0;
`;

const CaixaMensagem = styled(CaixaEnviar)`
  width: 95vw;
  height:85vh;
  align-items:flex-end;
  margin: 0 auto;
  padding: 0;
  background-color: #FFFFFF;
`;

const Labels = styled.label`
  color: #FFFFFF;
`;

const Button = styled.button`
  font-weight:500;
`;

export const Container = (props)=>{
  return (
    <ContainerBackGround>
      <CaixaEnviar>
        <Labels>{props.labelMensagem}</Labels>
        <input></input>
        <Button>{props.buttonText}</Button>
      </CaixaEnviar>
      <CaixaMensagem>
        <Labels>{props.labelMensagem}</Labels>
        <input></input>
        <Button>{props.buttonText}</Button>
      </CaixaMensagem>
    </ContainerBackGround>
  )
}