import React, {useState} from "react";
import {DivCursoSuperior} from '../style'
import CursoSuperiorIncompleto from "./CursoSuperiorIncompleto";
import DadosGerais from "./DadosGerais";

function CursoSuperiorCompleto (props) {

  const informacaoEnsino = "Informação do Ensino Superior"

  const [nav, setNav] = useState("")

  const handleDadosGerais = ()=> {
    setNav("Voltar")
  }

  const handleCursoSuperiorIncompleto = () => {
    setNav("Seguir")
  }

  switch(nav) {
    case "Voltar":
      return <DadosGerais/>
      break;
    case "Seguir":
      return <CursoSuperiorIncompleto/>
      break;
    default:
      break;
  }
  
  return (
    <DivCursoSuperior>
      <h1>{informacaoEnsino}</h1>
      <label>
        Qual curso?
        <input type="text" placeholder="Insira o nome"/>
      </label>
      <label>
        Qual unidade de ensino?
        <input type="text" placeholder="Insira o campus"/>
      </label>
      <div>
        <span>
          <button onClick={handleDadosGerais}>Voltar</button>
        </span>
        <span>
        <button onClick={handleCursoSuperiorIncompleto}>Seguir</button>
        </span>
      </div>
    </DivCursoSuperior>
  )
}

export default CursoSuperiorCompleto;