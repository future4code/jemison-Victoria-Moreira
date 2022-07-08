import React, { useState } from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  label {
    //screen reader only
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0;
  }

  input {
    padding: 10px 5px;
    border: 1px solid shadow;
    border-radius: 5px;
    margin: 15px;
    width: 45%;
  }

  button {
    width: 35%;
    border: none;
    border-radius: 10px;
    padding: 10px;
    background-color: #a245d1;
  }

  button:hover {
    cursor: pointer;
    color: white;
    font-weight: bold;
    background-color: #b855ed;
  }
`

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
function App() {

  const [inputUser, setInputUser] = useState("")
  const [inputProfilePicture, setInputProfilePicture] = useState("")
  const [inputPostPicture, setInputPostPicture] = useState("")

  const [postList, setPostList] = useState([
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
  ])

  // eventos
  const handleInputUser = (event) => {
    setInputUser(event.target.value)
  }

  const handleInputProfilePicture = (event) => {
    setInputProfilePicture(event.target.value)
  }

  const handleInputPostPicture = (event) => {
    setInputPostPicture(event.target.value)
  }

  const creatPost = (event) => {
    event.preventDefault();

    const post = {nomeUsuario: inputUser, fotoUsuario: inputProfilePicture, fotoPost: inputPostPicture}

    const newPost = [...postList, post]
    setPostList(newPost)
  }

  const socialMediaPosts = postList.map((pessoa, index) =>{
    return(
      <Post key={index}
        nomeUsuario= {pessoa.nomeUsuario}
        fotoUsuario= {pessoa.fotoUsuario}
        fotoPost= {pessoa.fotoPost}
      />
    )
  })

  console.log(socialMediaPosts)

return(
  <MainContainer>
    <Form>
      <label>User:</label>
      <input
      placeholder='Insert your user name.'
      value={inputUser}
      onChange={handleInputUser}
      />

      <label>Profile Picture</label>
      <input
      placeholder='Insert your profile picture'
      value={inputProfilePicture}
      onChange={handleInputProfilePicture}
      />

      <label>Post Picture</label>
      <input
      placeholder='Insert your post'
      value={inputPostPicture}
      onChange={handleInputPostPicture}
      />
      <button onClick={creatPost}>New Post</button>
    </Form>
    {socialMediaPosts}    
  </MainContainer>
)

}

export default App;
