import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';



const MainContainer = styled.div`
  background-color: white;
  margin-left: 20%;
  margin-right: 20%;
  height: 86.8%;
`

const Geral = styled.div`
  background-color: #80898e;
  height: 100vh;
  width: 100vw;
`

function App() {
return(
  <Geral>
    <Header/>
    <MainContainer>
      <Main/>
    </MainContainer>
    <Footer/>
  </Geral>

);

}

export default App;
