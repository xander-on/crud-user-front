import { useState } from 'react';

export const usePost = (url, data) => {

  const [state, setState] = useState({
    response   : null,
    isLoading  : false,
    hasError   : false,
  });

  const postRequest = async () => {

    setState({
      ...state,
      isLoading: true,
    });

    try {
      const resp = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const response = await resp.json();
      setState({
        response,
        isLoading: false,
      });

    } catch (error) {
      setState({
        ...state,
        isLoading: false,
        hasError: true,
      });
    }
  };

  const executePost = () => {
    postRequest();
  };

  return {
    executePost,
    response: state.response,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
