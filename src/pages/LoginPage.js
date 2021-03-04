import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaArrowRight } from 'react-icons/fa';

import useForm from '../hooks/useForm';
import { authentication } from '../actions/auth';
import { fieldTrim, logValid } from '../helpers/formValidation';

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

const LoginPage = () => {
  const dispatch = useDispatch();
  const [isDirty, setIsDirty] = useState(false);
  const [errors, setErrors] = useState({ ok: true });
  const [state, hOnChange] = useForm({
    email: 'cris@cris.com',
    password: 'vhnq2tsx',
  });

  useEffect(() => {
    if (isDirty) {
      const validation = logValid(state);
      setErrors(validation);
    }
  }, [state]);

  const hOnSubmit = (e) => {
    e.preventDefault();

    const validation = logValid(state);
    setErrors(validation);

    setIsDirty(true);
    if (validation.ok)
      return dispatch(authentication(state, 'login', setErrors));

    console.log(validation);
  };

  return (
    <Container>
      <Form onSubmit={hOnSubmit}>
        <Headline>Login</Headline>
        <InputsWrapper>
          <InputText
            name="email"
            type="email"
            state={state}
            errors={errors}
            hOnChange={hOnChange}
          />
          <InputPass
            name="password"
            state={state}
            errors={errors}
            hOnChange={hOnChange}
          />
        </InputsWrapper>
        <AuthButton type="submit" disabled={fieldTrim(state, 'login')}>
          <FaArrowRight />
        </AuthButton>
        <LinkItems>
          <AuthLink to="/auth/register">¿Problemas para ingresar?</AuthLink>
          <AuthLink to="/auth/register">Crear Cuenta</AuthLink>
        </LinkItems>
      </Form>
    </Container>
  );
};

export default LoginPage;
