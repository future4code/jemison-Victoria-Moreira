import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ApplicationFormPage = () => {
  const navigate = useNavigate()

  const cancelApplication = () => {
    navigate (-1)
  }


  return (
    <div>
      <h1>Application Form Page</h1>
      <button onClick={cancelApplication}>Cancelar</button>
      <button>Enviar</button>
    </div>

  );
}