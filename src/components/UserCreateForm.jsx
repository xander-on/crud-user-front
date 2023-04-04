import { InputText } from "./"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { postDataUser } from "../helpers";
import { usePost } from "../hooks/usePost";

export const UserCreateForm = () => {

  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name  :'',
    email :''
  });

  const url = 'http://localhost/?insertar=1';
  const { name, email } = userData;
  const {executePost} = usePost(url, {'nombre':name, 'correo':email});
  
  const onSubmit = (e) => {
    e.preventDefault();
    executePost(userData);
    //todo mostrar modal ok
    setTimeout(() => {
      navigate("/");
    }, 4001);
  }

  const onInputChange = (e) => {
    const {name, value} = e.target;
    setUserData({ 
      ...userData, 
      [name]: value
    });
  }

  return (
    <>
      <div className="card col-xl-6 col-lg-8">
        <div className="card-header">Empleados</div>
        <div className="card-body">

          <form onSubmit={onSubmit}>
            <InputText 
              label      = 'Nombre:' 
              placeholder= 'Nombre del empleado'
              type       = 'text'
              value      = { name }
              inputChange= { onInputChange }
              name       = 'name'
            />

            <InputText 
              label      = 'Correo:' 
              placeholder= 'Correo del empleado'
              type       = 'email'
              value      = { email }
              inputChange= { onInputChange }
              name       = 'email'
            />

            <div className="form-group mt-4">
              <button type='submit' className="btn btn-primary">
                Registrar
              </button>

              <Link className="mx-2 btn btn-outline-danger" to={"/"}>
                Cancelar
              </Link>
            </div>

          </form>
        </div>
      </div>

      {/* <div className="alert alert-success" role="alert">
        This is a success alert—check it out!
      </div> */}

    </>
    
  )
}
