import React from 'react';
import { useState } from 'react'
import './Login.css'
import { Footer } from '../Components/footer/style';
import { App } from '../Components/Navbar/Navbar';

import { MdEmail, MdLock } from "react-icons/md"

export function Login(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)

    return(
        <>
        <App />
            <div className='login'>

                <div className="login-right">
                <h1>Login</h1>
                <div className="login-loginInputEmail">
                    <MdEmail />
                    <input 
                    type="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className="login-loginInputPassword">
                <MdLock />
                <input
                  placeholder="Digite sua senha"
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
               />

                </div>

                <button type="submit">
                ENTRAR
                </button>

                <h4>Ainda não tem cadastro?</h4> <a type="submit" href="/Cadastro">Crie uma conta</a>
                </div>

            </div>
        <Footer />
        </>
    )
}