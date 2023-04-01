import { useFetch } from '../hooks'
import { UserItemList, LoadingIndicator, TableList } from "../components";
import { Link } from "react-router-dom";


export const Lista = () => {

  const { data : users , isLoading, hasError } = useFetch('http://localhost/crud-empleados/');
  // const {success} = !!data && data[0];

  //todo: refactorizar
  let success = false;
  

  if(users[0] != undefined )
    success = ('success' in users[0]) ? false : true;

  const contenido = hasError
    ? <h4 className='text-center alert alert-danger'>🙊 Hubo un error al conectar a la BD</h4>
    : success
      ? <TableList users={users}/>
      : <h4 className="text-center alert alert-warning">No hay empleados registrados </h4>


  return (
    <>
      <div className="card col-lg-8">
        <div className="card-header">
        <Link 
          className="btn btn-success my-2" 
          to={"/crear"}>
          Crear empleado
        </Link>
          

        </div>
        <div className="card-body">
          <h1>Crud</h1>

          { 
            isLoading ? <LoadingIndicator/> : contenido
          }

        </div>
      </div>      

    </>
  );
}
