import React, { useState } from 'react';
import { Container } from '../../GlobalStyled';
import { Title, SectionsButtons, Button } from './styled';
import { Link, useNavigate } from 'react-router-dom';

export const AdminHomePage = () => {
  const navigate = useNavigate()

  const backToLoginPage = () => {
    navigate (-1)
  }

  const createNewTrip = () => {
    navigate ('/admin/trips/create')
  }

  return (
    <div>
      <h1>Adm Home Page</h1>
      <button onClick={backToLoginPage}>Sair</button>
      <button onClick={createNewTrip}>Nova Viagem</button>
    </div>
  );
}