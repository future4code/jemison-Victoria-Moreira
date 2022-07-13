import React, {useState} from "react";
import {DivFormulario} from '../style'
import CursoSuperiorCompleto from "./CursoSuperiorCompleto";

function DadosGerais (props) {

  const titulo1 = "Dados Gerais"

  const [nav, setNav] = useState("")

  const handleCursoSuperiorCompleto = ()=> {
    setNav("Enviar")
  }

  switch(nav) {
    case "Enviar":
      return <CursoSuperiorCompleto/>
      break;
    default:
      break;
  }

  return (
    <DivFormulario>
      <h1>{titulo1}</h1>
      <label>
        Nome:
        <input type="text" placeholder="Insira seu nome"/>
      </label>
      <label>
        Idade:
        <input type="text" placeholder="Insira sua idade"/>
      </label>
      <label>
        Email:
        <input type="text" placeholder="Insira seu email"/>
      </label>
      <label>Grau de escolaridade:
      <select>
        <option value="EnsinoMedioIncompleto">Ensino Médio Incompleto</option>
        <option value="EnsinoMedioCompleto">Ensino Médio Completo</option>
        <option value="EnsinoSuperiorIncompleto">Ensino Superior Incompleto</option>
        <option value="EnsinoSuperiorIncompleto">Ensino Superior Completo</option>
      </select>
      </label>
      <button onClick={handleCursoSuperiorCompleto}>Enviar</button>
    </DivFormulario>

  )
}

export default DadosGerais;