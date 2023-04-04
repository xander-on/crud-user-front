import { useState } from 'react';

export const usePost = (url, data) => {

  const [state, setState] = useState({
    response   : null,
    isLoading  : false,
    hasError   : false,
  });

  const postRequest = async () => {
    // console.log({url, data});
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

      // console.log(response);

    } catch (error) {
      console.log('hay un error', error)
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
