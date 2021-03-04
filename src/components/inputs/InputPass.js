import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Input,
  InputItem,
  Placeholer,
  FrontError,
  HidePassword,
  ShowPassword,
} from '../auth/Auth.styles';

const InputPass = ({ name, hOnChange, state, errors }) => {
  const [showPass, setShowPass] = useState(false);
  return (
    <InputItem>
      <Input
        name={name}
        type={showPass ? 'text' : 'password'}
        value={state[name]}
        onChange={hOnChange}
        valid={state[name].trim() !== ''}
        error={errors[name]?.msg}
      />
      <Placeholer>
        {name === 'password' ? 'Password' : 'Confirm Password'}
      </Placeholer>
      {showPass ? (
        <ShowPassword onClick={() => setShowPass(!showPass)} />
      ) : (
        <HidePassword onClick={() => setShowPass(!showPass)} />
      )}
      <FrontError>{errors[name] && errors[name]?.msg}</FrontError>
    </InputItem>
  );
};

InputPass.propTypes = {
  name: PropTypes.string.isRequired,
  state: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  hOnChange: PropTypes.func.isRequired,
};

export default InputPass;
