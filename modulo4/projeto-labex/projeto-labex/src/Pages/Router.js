import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage';
import { ListTripsPage } from './ListTripsPage';
import { ApplicationFormPage } from './ApplicationFormPage';
import { LoginPage } from './LoginPage';
import { AdminHomePage } from './AdminHomePage/AdminHomePage';
import { TripDetailsPage } from './TripDetailsPage';
import { CreateTripPage } from './CreateTripPage';


export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path='/trips/list' element={<ListTripsPage/>}/>
        <Route path='/trips/application' element={<ApplicationFormPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/admin/trips/list' element={<AdminHomePage/>}/>
        <Route path='/admin/trips/create' element={<CreateTripPage/>}/>
        <Route path='/admin/trips/:id' element={<TripDetailsPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}