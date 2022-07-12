import React from 'react'
import styled from 'styled-components'


const PostFooter = styled.div`
  color: white;
  background-color: gray;
  width: 100vw;
  font-size: small;
  padding: 0.5% 0%;
  text-align: center;
  height: 2%;
  position: end;
  margin-bottom: 0px;
`


function Footer(){
  return(
    <PostFooter>
        Copyright © 2022 Todos os direitos reservados Victoria Moreira. CEP: 21001-007.
    </PostFooter>

  )
}


export default Footer; 