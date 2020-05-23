import React, { useCallback, useRef } from 'react';
import { FiArrowUpLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logo from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handeSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('Email é obrigatório')
          .email('Digite um email válido'),
        password: Yup.string().min(6, 'No mínimo 6 digitos'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  }, []);
  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="goBarber" />

        <Form ref={formRef} onSubmit={handeSubmit}>
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
        </Form>

        <a href="SignUp">
          <FiArrowUpLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
