import React from "react";
import {DivFormulario} from '../style'

function DadosGerais () {

  const titulo1 = "Dados Gerais"

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
      <input type="submit" value="Enviar"/>
    </DivFormulario>

  )
}

export default DadosGerais;