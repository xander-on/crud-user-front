//solo referencia no se utiliza

export const getDataUsers = async() => {

  const url = `https://jsonplaceholder.typicode.com/users`;

  const resp = await fetch( url );
  const data  = await resp.json();

  const users = data.map( ({id, username, email}) => ({
    id ,
    username,
    email,
  }));

  return users;
}


