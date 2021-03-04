import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';

export const fieldTrim = (state, mode) => {
  if (mode === 'register') {
    const { name, email, password, password2 } = state;
    return (
      name.trim() === '' ||
      email.trim() === '' ||
      password.trim() === '' ||
      password2.trim() === ''
    );
  }
  if (mode === 'login') {
    const { email, password } = state;
    return email.trim() === '' || password.trim() === '';
  }
};

export const logValid = ({ email, password }) => {
  let errors = { ok: true };

  if (!isEmail(email)) {
    errors = {
      ...errors,
      ok: false,
      email: { msg: 'Debe colocar un formato de correo correcto' },
    };
  }

  if (isEmpty(password)) {
    errors = {
      ...errors,
      ok: false,
      password: { msg: 'La contraseña es un campo obligatorio' },
    };
  }

  return errors;
};

export const regValid = ({ name, email, password, password2 }) => {
  let errors = { ok: true };

  if (isEmpty(name)) {
    errors = {
      ...errors,
      ok: false,
      name: { msg: 'El nombre es un campo obligatorio' },
    };
  }
  if (!isEmail(email)) {
    errors = {
      ...errors,
      ok: false,
      email: { msg: 'Debe colocar un formato de correo correcto' },
    };
  }
  if (isEmpty(password)) {
    errors = {
      ...errors,
      ok: false,
      password: { msg: 'La contraseña es un campo obligatorio' },
    };
  }
  if (password !== password2) {
    errors = {
      ...errors,
      ok: false,
      password2: { msg: 'Las contraseñas deben ser iguales' },
    };
  }

  if (!/(?=.*[\d])(?=.*[\w]).{8,}/g.test(password)) {
    errors = {
      ...errors,
      ok: false,
      password: {
        msg: 'Debe tener una letra, un numero y ser mayor a 8 caracteres',
      },
    };
  }

  return errors;
};
