import React from 'react'
import {DivFormulario} from './style'


function App() {
  return (
    <DivFormulario>
      <h1>Etapa 1 - Dados Gerais</h1>
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
  );
}

export default App;
