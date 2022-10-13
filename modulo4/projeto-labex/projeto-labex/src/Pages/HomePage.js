import React from 'react';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const navigate = useNavigate()
  
  const goToListTripsPage = () => {
    navigate ('/trips/list')
  }

  const goToLoginPage = () => {
    navigate ('/login')
  }

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={goToListTripsPage}>Lista de Viagens</button>
      <button onClick={goToLoginPage}>Área Administrativa</button>
    </div>
  );
}