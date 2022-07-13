import React, {useState} from "react";
import {DivCursoSuperior} from '../style'
import Agradecimentos from "./Agradecimentos";
import CursoSuperiorCompleto from "./CursoSuperiorCompleto";


function CursoSuperiorIncompleto (props) {

  const informacoesGerais = "Informações Gerais de Ensino"
  
  const [nav, setNav] = useState("")

  const handleCursoSuperiorCompleto = ()=> {
    setNav("Voltar")
  }

  const handleAgradecimentos = () => {
    setNav("Seguir")
  }

  switch(nav) {
    case "Voltar":
      return <CursoSuperiorCompleto/>
      break;
    case "Seguir":
      return <Agradecimentos/>
      break;
    default:
      break;
  }

  return (
    <DivCursoSuperior>
      <h1>{informacoesGerais}</h1>
      <label>
        Por que não terminou o curso?
        <input type="text" placeholder="Resuma o motivo"/>
      </label>
      <label>
        Fez algum curso complementar?
        <select>
          <option value=" "></option>
          <option value="CursoTecnico">Curso técnico</option>
          <option value="CrusoDeIngles">Curso de inglês</option>
          <option value="NaoFiz">Não fiz curso complementar</option>
        </select>
      </label>
      <div>
        <span>
          <button onClick={handleCursoSuperiorCompleto}>Voltar</button>
        </span>
        <span>
          <button onClick={handleAgradecimentos}>Seguir</button>
        </span>
      </div>
    </DivCursoSuperior>
  )

}
export default CursoSuperiorIncompleto;