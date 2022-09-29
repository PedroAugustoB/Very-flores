import React from 'react';
import { Footer, itemAbout, itemPara } from './style';


export function Foter(){
    return(
            <Footer>
                <div>
                    <itemAbout ><b>&nbsp;&nbsp;SOBRE NÓS</b></itemAbout>
                    <br></br>
                    <itemPara>Very Flores é um site de...</itemPara>
                    <br></br>
                </div>
            </Footer>
    )
}