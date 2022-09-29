import React from 'react';
import { Container, Navbar, ProfileContainer, Image, Title, Link, Links } from './Style.jsx';
import { NavLink } from 'react-router-dom';
import Logo from '../../../assets/logo_flor.png';

// Navbar com o nome App por causa do styled-components que dava dando erro por causa do mesmo nome
export function App() {
    return (

            <Navbar>
                <ProfileContainer>
                    <Image src={Logo} />
                    <Title>
                        VERY FLORES
                    </Title> 
                </ProfileContainer>
                <Links>
                    <Link>
                        <a href='/' className='link'>HOME</a>
                    </Link>
                    <Link>
                        <a href='/Sobre' className='link'>SOBRE</a>
                    </Link>
                    <Link>
                        <a href='/Login' className='link'>LOGIN</a>
                    </Link>
                    <Link>
                        <a href='/Cadastro' className='link'>CADASTRO</a>
                    </Link>
                </Links>
            </Navbar>

    );
}
