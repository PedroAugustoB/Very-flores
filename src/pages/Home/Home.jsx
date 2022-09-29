import React from 'react';
import { Foter } from '../Components/footer/Footer.jsx';
import { App } from '../Components/Navbar/Navbar.jsx';
import { Alinha, Centro, Conteudo, Principal, Secundario } from './Style.jsx';

export function Home(){
    return(
            <Conteudo >
                <App />
                <Centro>
                    
                    <Principal>
                        
                    </Principal>
                    
                    <Alinha>
                        <Secundario>
                            
                        </Secundario>

                        <Secundario>
                            
                        </Secundario>

                        <Secundario>
                            
                        </Secundario>
                    </Alinha>
                </Centro>
                <Foter />
           </Conteudo>
        
    )
}