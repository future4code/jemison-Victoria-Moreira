import React, {useState} from 'react'
import styled from 'styled-components'


const PostMain = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  
`
const Form = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5%;
  
  .menor{
    width: 25%;
  }
  .maior{
    width: 65%;
  }
`
const Conversa = styled.div`
    border: solid .04vw;
    border-radius: 1vw;
    box-shadow: 0.2vw grey;
    margin: 0.5vw;
    padding: 0.2vw;
    .negrito{
      font-weight: bold;
    }
`

function Main(){

  const [inputMensagem, setInputMensagem] = useState ("")
  const [inputNome, setInputNome] = useState ("")
  const [listaMsg, setListaMsg] = useState ([])
  
  function handleInputNome (e){
    setInputNome(e.target.value)
  }
  function handleInputMensagem (e){
    setInputMensagem(e.target.value)
  }

  const addMsg = (e) => {
    e.preventDefault()

    setListaMsg ([{nome:inputNome, mensagem:inputMensagem}, ...listaMsg])
    setInputMensagem("")
    setInputNome("")
  }
  
  const mensagemPost = listaMsg.map((msg, index) => {

    return(
      <Conversa key={index}>
        <p><span className='negrito'>{msg.nome}:</span> {msg.mensagem}</p>
      </Conversa>
    )
  })

  return(
    <PostMain>
      {mensagemPost}
      <Form>
        <input className="menor"
          placeholder='Remetente'
          value={inputNome}
          onChange={handleInputNome}
        />
        <input className="maior"
          placeholder='Mensagem'
          value = {inputMensagem}
          onChange = {handleInputMensagem}
        />
        <button onClick={addMsg}>Enviar</button>
      </Form>
    </PostMain>
  )
}


export default Main 