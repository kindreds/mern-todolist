import { useState } from 'react';

const useForm = (initialState) => {
  const [state, setState] = useState(initialState);

  const hOnChange = ({ target }) => {
    setState({
      ...state,
      [target.name]: target.value,
    });
  };

  const reset = () => {
    setState(initialState);
  };

  return [state, hOnChange, reset];
};

export default useForm;
