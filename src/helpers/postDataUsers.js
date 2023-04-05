//solo referencia no se utiliza

import Swal from 'sweetalert2';

export const postDataUser = (dataUser) => {

  const {name:nombre, email:correo} = dataUser;

  const datosEnviar = { nombre, correo };

  const url = 'http://localhost/?insertar=1';

  fetch(url,{
    method:"POST",
    body: JSON.stringify(datosEnviar)
  })
  .then(respuesta => respuesta.json())
  .then( resp =>{
    console.log(resp);
    showMessage(resp);
  })
  .catch( console.log );

}



const showMessage = (resp) => {

  if(resp.success){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Registro exitoso 🎉',
      showConfirmButton: false,
      timer: 4000
    })
  }
  
}

