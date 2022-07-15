import React from 'react'
import styled from 'styled-components'

const PostHeader = styled.div`
  background-color: #80898e;
  height: 9%;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img{
    height: 100%;
    
  }
  p{
    font-size: xx-large;
    font-weight: bold;
  }
`

function Header(){
return(
  <PostHeader>
    <img src="https://i.ytimg.com/an/_cy2msyfX-I6vXt0oxRGEg/featured_channel.jpg?v=62829fba" alt="Logo"/>
    <p>WhatsLab</p>
  </PostHeader>
)
}


export default Header 