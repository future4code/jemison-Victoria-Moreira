import React from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const navigate = useNavigate()

  const cancelApplication = () => {
    navigate (-1)
  }

  const goToAdminHomePage = () => {
    navigate ('/admin/trips/list')
  }

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={cancelApplication}>Cancelar</button>
      <button>Esqueci a Senha</button>
      <button onClick={goToAdminHomePage}>Entrar</button>
    </div>
  );
}