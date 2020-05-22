import React from 'react';
import { FiArrowUpLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logo from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logo} alt="goBarber" />

      <form>
        <h1>Faça seu Cadastro</h1>
        <Input
          name="name"
          type="text"
          icon={FiUser}
          placeholder="Digite seu Nome"
        />
        <Input
          name="email"
          type="text"
          icon={FiMail}
          placeholder="Digite seu email"
        />
        <Input
          name="password"
          type="password"
          icon={FiLock}
          placeholder="Senha"
        />
        <Button type="submit">Cadastrar</Button>
      </form>

      <a href="SignUp">
        <FiArrowUpLeft />
        Voltar para logon
      </a>
    </Content>
  </Container>
);

export default SignUp;
