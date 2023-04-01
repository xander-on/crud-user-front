import { Route, Routes } from "react-router-dom";
import { Lista, UserCreateForm, UserEditForm } from "../components";


export const AppRouter = () => {
  return (
    
    <Routes>
      <Route exact path="/" element={ <Lista/> } />
      <Route path="/crear"  element={ <UserCreateForm/> } />
      <Route path="/editar" element={ <UserEditForm/> } />
    </Routes>
    
  )
}
