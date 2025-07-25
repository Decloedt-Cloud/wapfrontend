import { useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Footer from './components/Footer';
import Home from './pages/Home';
import JoinWap from './pages/JoinWap';
import Header from './components/Header';
import Registerintervenant from './pages/Registerintevenant';
import RegisterClient from './pages/RegisterClient';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import RequestforgetPassword from './pages/RequestforgetPassword';
import ResetPassword from './pages/Resetpassword';

// Création d'un wrapper pour gérer la logique d'affichage de Header/Footer
function LayoutWrapper() {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/Dashboard';

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/JoinWap' element={<JoinWap />} />
        <Route path='/Registerintervenant' element={<Registerintervenant />} />
        <Route path='/RegisterClient' element={<RegisterClient />} />
        <Route path='/Dashboard' element={<Dashboard />} />
           <Route path='/RequestforgetPassword' element={<RequestforgetPassword />} />
        <Route path='/Resetpassword' element={<ResetPassword />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <LayoutWrapper />
    </BrowserRouter>
  );
}

export default App;
