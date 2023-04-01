import Swal from 'sweetalert2';

export const postDataUser = (dataUser) => {

  const datosEnviar = { ...dataUser };

  fetch('http://localhost/crud-empleados/?insertar=1',{
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

