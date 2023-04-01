import { useEffect, useState } from "react";

export const useFetch = (url) => {

  const [state, setState] = useState({
    data      : [],
    isLoading : true,
    hasError  : false,
  });
  
  const getFetch = async() => {

    setState({
      ...state,
      isLoading: true,
    });


    try{

      const resp = await fetch(url);
      const data = await resp.json();
      setState({
        data,
        isLoading: false,
      });

    }catch(error){
      setState({
        ...state,
        isLoading: false,
        hasError: true,
      });
    }
  }

  useEffect(() => {
    getFetch();
  }, [url])


  return {
    data      : state.data,
    isLoading : state.isLoading,
    hasError  : state.hasError
  };
}
