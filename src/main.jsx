import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home/Home.jsx'
import GlobalStyle from './Style/Global'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Sobre } from './pages/Sobre/Sobre.jsx'
import { Login } from './pages/Login/Login.jsx'
import { Cadastro } from './pages/Cadastro/Cadastro.jsx'


//App = Navbar

ReactDOM.createRoot(document.getElementById('root')).render(


    
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Home />}></Route>
      <Route path="/Sobre" element={<Sobre />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/Cadastro" element={<Cadastro />}></Route>
    </Routes>
    <GlobalStyle />
  </BrowserRouter>

)
