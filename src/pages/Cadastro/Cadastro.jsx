import './Cadastro.css'
import { Footer } from '../Components/footer/style';
import { App } from '../Components/Navbar/Navbar';
import axios from 'axios';
import { MdEmail, MdLock } from "react-icons/md"
import { FaUser } from "react-icons/fa"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from "react-router-dom";




const validarUser  = yup.object().shape({
    Nome: yup.string().required("O Nome é obrigatório").max(40, "O Nome precisa ter menosde 40 caracteres"),
    Email: yup.string().required("O Email é obrigatório").max(30, "O Email precisa ter menosde 30 caracteres"),
    Senha: yup.string().required("A Senha é obrigatório").max(30, "A Senha precisa ter menosde 30 caracteres")
})


export function Cadastro(){

    let navigate = useNavigate();


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validarUser)
    })

    const addUser = data => axios.post("http://localhost:4000/usuario/novo", data)
    .then(() => {
        console.log(addUser.data)
        navigate("/Sobre")
    })
    .catch(() => {
        console.log("DEU ERRADO")
    })

    return(
        <>
        <App />

            <form  onSubmit={handleSubmit(addUser)}>
                <div className='login'>

                    <div className="login-right">
                    <h1>Crie sua conta</h1>

                    <div className="login-loginInputUser">
                        <FaUser />
                        <input
                        placeholder="Nome completo"
                        name="nomeUser" 
                        {...register("nomeUser")}
                        />
                        <p className="error-message">{errors.nomeUser?.message}</p>
                    </div>

                    <div className="login-loginInputEmail">
                        <MdEmail />
                        <input 
                        placeholder="Email"
                        name="emailUser" 
                        {...register("emailUser")}
                        />
                        <p className="error-message">{errors.emailUser?.message}</p>
                    </div>

                    <div className="login-loginInputPassword">
                        <MdLock />
                        <input
                        placeholder="Senha"
                        name="senhaUser" 
                        {...register("senhaUser")}
                        />
                        <p className="error-message">{errors.senhaUser?.message}</p>
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