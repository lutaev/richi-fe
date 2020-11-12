import { useState } from 'react';

const useAuthForm = (initialState) => {
  const [state, setState] = useState({
    ...initialState,
    error: null
  });

  const onChange = (key) => (e) => {
    setState(currentState => ({
      ...currentState,
      [key]: e.target.value.trim()
    }))
  };

  const onError = (err) => {
    setState(currentState => ({
      ...currentState,
      error: err
    }))
  }

  return {
    state,
    onChange,
    onError
  }
};

export default useAuthForm;