import { BrowserRouter, Routes, Route, useLocation, BrowserRouter as Router } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';

import Home from './pages/Home';
import JoinWap from './pages/JoinWap';
import Registerclient from './pages/RegisterClient';
import Registerintervenant from './pages/Registerintervenant';
import HowItWorks from './pages/HowItWorks';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import RequestforgetPassword from './pages/RequestforgetPassword';
import Resetpassword from './pages/Resetpassword';
import Confirmregisterpopup from './pages/Confirmregisterpopup';

// 👉 Wrapper pour masquer Header/Footer sur certaines routes
function LayoutWrapper() {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/Dashboard';

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/JoinWap" element={<JoinWap />} />
        <Route path="/Registerintervenant" element={<Registerintervenant />} />
        <Route path="/Registerclient" element={<Registerclient />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/RequestforgetPassword" element={<RequestforgetPassword />} />
        <Route path="/Resetpassword" element={<Resetpassword />} />
        <Route path="/Confirmregisterpopup" element={<Confirmregisterpopup />} />
        <Route path="/HowItWorks" element={<HowItWorks />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

// ✅ Composant principal
function App() {
  return (
    <Router>
      <LayoutWrapper />
    </Router>
  );
}

export default App;
