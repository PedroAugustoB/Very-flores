import React from 'react';
import { Foter } from '../Components/footer/Footer.jsx';
import { App } from '../Components/Navbar/Navbar.jsx';
import flor from '../../assets/orquideas.jpg'
import { Centro, Conteudo, Principal } from './Style.jsx';

export function Home(){
    return(
            <Conteudo >
                <App />
                <Centro>
                    
                    <Principal>
                        <h1>Um pouco sobre a história das orquídeas</h1>
                        <br/>
                        <p>Supõe-se que a história da cultura das orquídeas tenha começado no extremo oriente, sobretudo no Japão e na China, há cerca de 3.000/4.000 anos. A palavra chinesa para 
                        orquídea (lan) já aparece no herbário chinês desde então. Entretanto, não se sabe ao certo quando ela passou a ser cultivada pelo homem e nem se este cultivo foi motivado por razões 
                        estéticas ou apenas medicinais. A primeira referência direta à orquídea encontrada foi feita pelo imperador chinês Sheng Nung, ao dar alguns conselhos sobre o uso do Dendobrium com finalidade medicinal.</p>
                        <p>No século 3, um manuscrito chinês de botânica menciona duas espécies que hoje são conhecidas como Cymbidium ensifolium e Dendrobium moniliforme.
                        Em outros livros chineses, datados de 290 a 370 de nossa era, há referências diretas às orquídeas. Apesar das inúmeras citações também feitas aos gêneros 
                        Vanda e Dendrobium, o Cymbidium foi sempre o mais citado dos três.</p>
                        <br/>
                        <img src={flor} width="450"/>
                    </Principal>
                    
                </Centro>
                <Foter />
           </Conteudo>
        
    )
}