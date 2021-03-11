import React from 'react';
import PropTypes from 'prop-types';

import { Input, InputItem, Placeholer, FrontError } from '../auth/Auth.styles';

const InputText = ({ name, type, hOnChange, state, errors, placeholder }) => {
  return (
    <InputItem>
      <Input
        name={name}
        type={type}
        onChange={hOnChange}
        value={state[name]}
        error={errors[name]?.msg}
        valid={state[name].trim() !== ''}
        autoComplete="off"
      />
      <Placeholer>{placeholder}</Placeholer>
      <FrontError>{errors[name] && errors[name]?.msg}</FrontError>
    </InputItem>
  );
};

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  state: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  hOnChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default InputText;
