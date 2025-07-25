import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import JoinWap from './pages/JoinWap';
import Header from './components/Header';
import Register from './pages/Register';
import HowItWorks from './pages/HowItWorks';



// import './App.css'

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

export default App
