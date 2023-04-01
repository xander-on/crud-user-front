import { Link } from "react-router-dom";

export const UserItemList  = ({ user }) => {

  const {id, name, email} = user;

  return (
    <>
      <tr>
        <td>{ id }</td>
        <td>{ name }</td>
        <td>{ email }</td>
        <td>
          <div className="btn-group" role="group">
            <Link to={'/editar'} className="btn btn-warning">Editar</Link>
            <button type="button" className="btn btn-danger">Borrar</button>
          </div>
        </td>
      </tr>
    </>
  )
}
