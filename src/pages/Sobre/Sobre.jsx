import React ,{useEffect, useState} from 'react';
import './Sobre.css'
import { Footer } from '../Components/footer/Style';
import { App } from '../Components/Navbar/Navbar';
import { Centro, Conteudo, Principal } from './Style';
import { Link } from 'react-router-dom';
import axios from 'axios'

export function Sobre(){

    const [ user, setUser ] = useState([])

    useEffect(() => {
        axios.get("http://localhost:4000/usuario")
        .then((response) => {
            setUser(response.data)
        })
        .catch(() => {
            console.log("deu merda porra!!")
        })
    } )

    function deleteUser(id) {

        axios.delete(`http://localhost:4000/usuario/delete/${id}`)


        return setUser(user.filter(usej => usej.idUser !== id ))

    }

    return(
        <>
        <Conteudo>
        <App />
            <Centro>
                <Principal>
                    <div>
                        <main>
                            <div className="cards">
                                {user.map((use, key) => {
                                    return(

                                        <div className="card" key={key}>

                                            <header>
                                                <h2>Nome: {use.nomeUser}</h2>
                                            </header>

                                            <div className="line"></div>

                                            <p>{use.emailUser}</p>

                                            <div className='botao'>
                                                <Link to={{pathname: `/Login/${use.idUser}`}}>
                                                    <div className="btn-update" >
                                                        <button className="btn-update">Update</button>
                                                    </div>
                                                </Link>

                                                <div className="btn-delete" >
                                                    <button  className="btn-delete" onClick={() => deleteUser(use.idUser) } >Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    )
                                })}
                            </div>
                        </main>
                    </div>
                </Principal>
            </Centro>
        <Footer />
        </Conteudo>
        </>
    )
}