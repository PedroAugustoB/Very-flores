import React from 'react';import { useState } from 'react'
import './Cadastro.css'
import { Footer } from '../Components/footer/style';
import { App } from '../Components/Navbar/Navbar';

import { MdEmail, MdLock } from "react-icons/md"
import { FaUser } from "react-icons/fa"


export function Cadastro(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [show, setShow] = useState(false)

    return(
        <>
        <App />
            <div className='login'>

                <div className="login-right">
                <h1>Crie sua conta</h1>

                <div className="login-loginInputUser">
                    <FaUser />
                    <input 
                    type="email"
                    placeholder="Nome completo"
                    value={name}
                    onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className="login-loginInputEmail">
                    <MdEmail />
                    <input 
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className="login-loginInputPassword">
                    <MdLock />
                    <input
                    placeholder="Senha"
                    type={show ? "text" : "password"}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit">
                CADASTRAR
                </button>

                </div>

            </div>
        <Footer />
        </>
    )
}