import { useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Footer from './components/Footer';
import Home from './pages/Home';
import JoinWap from './pages/JoinWap';
import Header from './components/Header';
import Register from './pages/Register';
import HowItWorks from './pages/HowItWorks';
import Registerintervenant from './pages/Registerintevenant';
import RegisterClient from './pages/RegisterClient';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import RequestforgetPassword from './pages/RequestforgetPassword';
import ResetPassword from './pages/Resetpassword';
import Confirmregisterpopup from './pages/Confirmregisterpopup';

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
        <Route path='/Confirmregisterpopup' element={<Confirmregisterpopup />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

function App() {
  return (


<> 
 <Header/>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/JoinWap' element={<JoinWap/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/HowItWorks' element={<HowItWorks/>}/>
    </Routes>
    </BrowserRouter>
    <Footer/>
  </> 
  )

}

export default App;
