import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
function App() {
return(
  <MainContainer>
          <Post
            nomeUsuario={'Júlia'}
            fotoUsuario={'https://picsum.photos/50/13'}
            fotoPost={'https://picsum.photos/210/150'}
          />

          <Post
            nomeUsuario={'Dani'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/220/150'}
          />

          <Post
            nomeUsuario={'Vanessa'}
            fotoUsuario={'https://picsum.photos/12/12'}
            fotoPost={'https://picsum.photos/230/150'}
          />
        </MainContainer>
)

}


export default App;
