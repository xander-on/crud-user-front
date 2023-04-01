import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light mb-4">
      <div className="nav navbar-nav">
        <Link className="nav-item nav-link active" to={"/"}>Sistema</Link>
        <Link className="nav-item nav-link" to={"/crear"}>Crear empleado</Link>
      </div>
    </nav>
  )
}
