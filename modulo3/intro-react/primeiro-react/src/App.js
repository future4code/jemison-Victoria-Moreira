import imgPerfil from './img/sloth.png';
import './App.css';

function App() {
  const titulo = 'Olá, me chamo Victoria Moreira.'
  const mandarMensagem =()=>{
    alert('Tenha uma boa noite!')
  }

  return (
    <div className="App">
      <h1>{titulo}</h1>
      <img src={imgPerfil} className='imagem-perfil' alt='Desenho de um bicho preguiça escolhido como perfil.'/>
      <p>Esta é a minha primeira experiência com React.</p>
      <button onClick={mandarMensagem}>Aperte aqui</button>

    </div>
  );
}

export default App;
