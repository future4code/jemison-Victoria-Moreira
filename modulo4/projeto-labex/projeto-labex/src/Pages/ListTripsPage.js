import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ListTripsPage = () => {
  const navigate = useNavigate()
  
  const backToHome = () => {
    navigate ('/')
  }

  const goToApplicationFormPage = () => {
    navigate ('/trips/application')
  }

  return (
    <div>
      <h1>List Trips Page</h1>
      <button onClick={backToHome}>Página Inicial</button>
      <button onClick={goToApplicationFormPage}>Candidate-se aqui</button>
    </div>
  );
}
