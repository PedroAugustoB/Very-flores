import React from 'react';
import { Footer, itemAbout, itemPara } from './Style';


export function Foter(){
    return(
            <Footer>
                <div>
                    <itemAbout ><b>&nbsp;&nbsp;Todos os direitos reservados</b></itemAbout>
                    <br></br>
                    <itemPara>Política de Privacidade</itemPara>
                    <br></br>
                </div>
            </Footer>
    )
}