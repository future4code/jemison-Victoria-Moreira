import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C5603AQG5EnnkqLfUYw/profile-displayphoto-shrink_200_200/0/1574717015676?e=1661385600&v=beta&t=uWa_9qMazm1U3C0R5WXObTLLe8PVfGaJph9MsWzok8k" 
          nome="Victoria Moreira" 
          descricao="Olá, me chamo Victoria Moreira. Sou aluna Labenu, iniciante na carreira dev. Apaixonada por tecnologia, sou formada em Engenharia Elétrica, intrusa nas áreas de modelagem 3D e desenho."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno 
          imagem="https://cdn-icons-png.flaticon.com/512/1782/1782765.png"
          nome="Email: " 
          descricao="talk-to-me@outlook.com"          
        />
      </div>

      <div className="page-section-container">
        <CardPequeno 
          imagem="https://img2.gratispng.com/20180830/bww/kisspng-the-daily-dot-internet-logo-online-newspaper-5b8824be044753.2560879215356489580175.jpg"
          nome="Endereço:" 
          descricao="Rua dos Bobos, número 0 - Rio de Janeiro"          
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://portalfacilarquivos.blob.core.windows.net/uploads/CAMPOALEGREDELOURDES/imgOrig/%7BDE5BC0A3-5BDC-C25B-CCD4-DDDDBA7DA22E%7D.png" 
          nome="ACS - IBGE" 
          descricao="Realizar contratação de recenseadores, treinamento, acompanhamento e/ou suporte e supervisão dos questionários aplicados." 
        />
        
        <CardGrande 
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtt4MLGfdrSMw-UW6JmlM2QUe3BKOG7O8ZLjA4y0KTiMCsXGgD2-x9u16kE6L6moLA03s&usqp=CAU" 
          nome="Estagiária - TIM SA" 
          descricao="Análise de indicadores, controle de acesso e implantação de tecnologias de rede móvel 2G, 3G e 4G." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
