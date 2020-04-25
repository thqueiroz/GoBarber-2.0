/* eslint-disable react/jsx-indent */
import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
    <Container>
        <Content>
            <img src={logo} alt="goBarber" />

            <form>
                <h1>Faça seu Logon</h1>
                <input type="text" placeholder="Digite seu email" />
                <input type="password" placeholder="Senha" />
                <button type="submit"> Entrar</button>

                <a href="forgot">Esqueci minha senha</a>
            </form>

            <a href="SignUp">
                <FiLogIn />
                Criar conta
            </a>
        </Content>
        <Background />
    </Container>
);

export default SignIn;
