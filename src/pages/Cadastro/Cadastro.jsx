
import './Cadastro.css'
import { Footer } from '../Components/footer/style';
import { App } from '../Components/Navbar/Navbar';

import { MdEmail, MdLock } from "react-icons/md"
import { FaUser } from "react-icons/fa"


export function Cadastro(){

    

    return(
        <>
        <App />

            <form>
                <div className='login'>

                    <div className="login-right">
                    <h1>Crie sua conta</h1>

                    <div className="login-loginInputUser">
                        <FaUser />
                        <input
                        placeholder="Nome completo"

                        />
                    </div>

                    <div className="login-loginInputEmail">
                        <MdEmail />
                        <input 

                        placeholder="Email"

                        />
                    </div>

                    <div className="login-loginInputPassword">
                        <MdLock />
                        <input
                        placeholder="Senha"

                        />
                    </div>

                    <button type="submit">
                    CADASTRAR
                    </button>

                    </div>

                </div>
            </form>
        <Footer />
        </>
    )
}