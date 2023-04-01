import { UserItemList } from "../components";

export const TableList = ({ users }) => {


  return (
    <table className="table">

      <thead>
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
      
        {
          users.map( (user) => <UserItemList key={user.id} user={user}/> )
        }
        
      </tbody>
    </table>
  )
}
