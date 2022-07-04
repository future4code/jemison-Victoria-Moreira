import React from 'react';
import {Header} from './components/Header/Header';
import {Container} from './components/Containers/Container';
import {AppFooter, TextoFooter} from './components/Footer/Footer';
import logo from './/img/logo.png';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0;
`;

function App() {
  return (
    <Wrapper>
      <Header img={logo} titulo='WhatsLab'/>
      <Container CaixaEnviar='Remetente:' CaixaMensagem='Mensagem:' buttonTexto='Enviar'/>
      <AppFooter footerTexto='Todos os direitor reservados a @vdsmoreira. Rua da Republica, 1602, Rio de Janeiro, RJ - 10101-001'/>
    </Wrapper>
  );
}

export default App;
