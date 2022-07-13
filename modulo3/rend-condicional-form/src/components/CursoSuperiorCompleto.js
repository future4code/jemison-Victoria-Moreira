import React from "react";
import {DivCursoSuperior} from '../style'

function CursoSuperiorCompleto () {

  const informacaoEnsino = "Informação do Ensino Superior"
  
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
          <input type="submit" value="Voltar"/>
        </span>
        <span>
          <input type="submit" value="Próximo"/>
        </span>
      </div>
    </DivCursoSuperior>
  )
}

export default CursoSuperiorCompleto;