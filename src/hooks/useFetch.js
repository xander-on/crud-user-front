import { useEffect, useState } from 'react';

export const useFetch = (tipo, url, data) => {

  // console.log({tipo, url, data});

  const [state, setState] = useState({
    response   : [],
    isLoading  : true,
    hasError   : false,
  });


  const getFetch = async () => {

    setState({
      ...state,
      isLoading: true,
    });

    try {
      const resp = (tipo == 'GET') 
      ? await fetch(url)
      : await fetch(url, {
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
      console.log('hay un error', error)
      setState({
        ...state,
        isLoading: false,
        hasError: true,
      });
    }
  };


  const executeFetch = () => {
    getFetch();
  };

  if(tipo == 'GET'){
    useEffect(() => {
      getFetch();
    }, [url])
  }
    


  return {
    executeFetch,
    response: state.response,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
