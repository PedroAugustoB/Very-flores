import React from 'react';

import './style.jsx'
import { Footer } from '../Components/footer/style';
import { App } from '../Components/Navbar/Navbar';



export function Login(){



    return(
        <>
        <App />
            <div className='login'>

                <div className="login-right">
                <h1>Login</h1>

                </div>

            </div>
        <Footer />
        </>
    )
}