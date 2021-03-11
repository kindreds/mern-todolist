import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

import useForm from '../hooks/useForm';
import { fieldTrim, regValid } from '../helpers/formValidation';

import {
  AuthLink,
  Container,
  Form,
  Headline,
  InputsWrapper,
  LinkItems,
} from '../components/auth/Auth.styles';
import InputPass from '../components/inputs/InputPass';
import InputText from '../components/inputs/InputText';
import { AuthButton } from '../components/buttons/Button.styles';
import { useDispatch } from 'react-redux';
import { authentication } from '../actions/auth';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [isDirty, setIsDirty] = useState(false);
  const [errors, setErrors] = useState({ ok: true });
  const [state, hOnChange] = useForm({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  useEffect(() => {
    if (isDirty) {
      const validation = regValid(state);
      setErrors(validation);
    }
  }, [state]);

  const hOnSubmit = (e) => {
    e.preventDefault();

    const validation = regValid(state);
    setErrors(validation);

    setIsDirty(true);
    if (validation.ok)
      return dispatch(authentication(state, 'register', setErrors));
  };

  return (
    <Container>
      <Form onSubmit={hOnSubmit}>
        <Headline>Registro</Headline>
        <InputsWrapper>
          <InputText
            name="name"
            type="text"
            state={state}
            errors={errors}
            hOnChange={hOnChange}
            placeholder="Nombre"
          />
          <InputText
            name="email"
            type="email"
            state={state}
            errors={errors}
            hOnChange={hOnChange}
            placeholder="Correo"
          />
          <InputPass
            name="password"
            state={state}
            errors={errors}
            hOnChange={hOnChange}
          />
          <InputPass
            name="password2"
            state={state}
            errors={errors}
            hOnChange={hOnChange}
          />
        </InputsWrapper>
        <AuthButton type="submit" disabled={fieldTrim(state, 'register')}>
          <FaArrowRight />
        </AuthButton>
        <LinkItems>
          <AuthLink to="/auth/login">¿Problemas para ingresar?</AuthLink>
          <AuthLink to="/auth/login">Crear Cuenta</AuthLink>
        </LinkItems>
      </Form>
    </Container>
  );
};

export default RegisterPage;
