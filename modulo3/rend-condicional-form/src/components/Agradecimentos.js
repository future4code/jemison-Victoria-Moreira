import React from "react";
import {DivAgradecimentos} from '../style'

function Agradecimentos () {

  const tituloEncerramento = "O formulário acabou!"

  return (
    <DivAgradecimentos>
      <h1>{tituloEncerramento}</h1>
      <p>Agradecemos sua participação.</p>
      <div>
        <span>
          <input type="submit" value="Voltar"/>
        </span>
        <span>
          <input type="submit" value="Finalizar"/>
        </span>
      </div>
    </DivAgradecimentos>
  )
}

export default Agradecimentos;