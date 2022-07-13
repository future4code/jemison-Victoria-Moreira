import React from "react";
import {DivAgradecimentos} from '../style'

function Agradecimentos (props) {

  const tituloEncerramento = "O formulário acabou!";

  return (
    <DivAgradecimentos>
      <h1>{tituloEncerramento}</h1>
      <p>Agradecemos sua participação.</p>
    </DivAgradecimentos>
  )
}

export default Agradecimentos;