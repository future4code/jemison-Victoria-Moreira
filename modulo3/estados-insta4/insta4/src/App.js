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

  const arrayDePostagens = [
    {
      nomeUsuario: "Júlia",
      fotoUsuario: "https://picsum.photos/50/13",
      fotoPost: "https://picsum.photos/210/150",
    },

    {
      nomeUsuario: "Dani",
      fotoUsuario: "https://picsum.photos/50/50",
      fotoPost: "https://picsum.photos/210/180",
    },

    {
      nomeUsuario: "Vanessa",
      fotoUsuario: "https://picsum.photos/12/12",
      fotoPost: "https://picsum.photos/230/150"
    }    
  ];  

  const conteudoPost = arrayDePostagens.map((pessoa, index) =>{
    return(
      <Post key={index}
        nomeUsuario= {pessoa.nomeUsuario}
        fotoUsuario= {pessoa.fotoUsuario}
        fotoPost= {pessoa.fotoPost}
      />
    )
  })

  console.log(conteudoPost)

return(
  <MainContainer>
    {conteudoPost}    
  </MainContainer>
)

}

export default App;
