import React, {useState} from "react";
import {DivAgradecimentos} from '../style'
import DadosGerais from "./DadosGerais";
import CursoSuperiorIncompleto from "./CursoSuperiorIncompleto";

function Agradecimentos (props) {

  const tituloEncerramento = "O formulário acabou!";

  const [nav, setNav] = useState("")

  const handleCursoSuperiorIncompleto = () => {
    setNav("Voltar")
  }

  const handleDadosGerais = ()=> {
    setNav("Finalizar")
  }

  switch(nav) {
    case "Voltar":
      return <CursoSuperiorIncompleto/>
      break;
    case "Finalizar":
      return <DadosGerais/>
      break;
    default:
      break;
  }

  return (
    <DivAgradecimentos>
      <h1>{tituloEncerramento}</h1>
      <p>Agradecemos sua participação.</p>
      <div>
        <span>
          <button onClick={handleCursoSuperiorIncompleto}>Voltar</button>
        </span>
        <span>
          <button onClick={handleDadosGerais}>Finalizar</button>
        </span>
      </div>
    </DivAgradecimentos>
  )
}

export default Agradecimentos;