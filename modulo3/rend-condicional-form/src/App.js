import React from 'react'
import Agradecimentos from './components/Agradecimentos';
import CursoSuperiorCompleto from './components/CursoSuperiorCompleto';
import DadosGerais from './components/DadosGerais';
import CursoSuperiorIncompleto from './components/CursoSuperiorIncompleto'



function App() {
  
  return (
    <div>
      <DadosGerais/>
      <CursoSuperiorCompleto/>
      <CursoSuperiorIncompleto/>
      <Agradecimentos/>
    </div>
    
  )
}

export default App;
