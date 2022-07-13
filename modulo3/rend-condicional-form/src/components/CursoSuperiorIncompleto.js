import React from "react";
import {DivCursoSuperior} from '../style'

function CursoSuperiorIncompleto () {

  const informacoesGerais = "Informações Gerais de Ensino"
  
  return (
    <DivCursoSuperior>
      <h1>{informacoesGerais}</h1>
      <label>
        Por que não terminou o curso?
        <input type="text" placeholder="Resuma o motivo"/>
      </label>
      <label>
        Fez algum curso complementar?
        <input type="text" placeholder="Nome do curso"/>
      </label>
      <div>
        <span>
          <input type="submit" value="Voltar"/>
        </span>
        <span>
          <input type="submit" value="Próximo"/>
        </span>
      </div>
    </DivCursoSuperior>
  )

}
export default CursoSuperiorIncompleto;