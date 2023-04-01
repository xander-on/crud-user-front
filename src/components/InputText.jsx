
export const InputText = ({ label, placeholder, type, inputChange, name}) => {
  return (
    <div className="form-group mb-2">
      <label htmlFor="">{ label }</label>
      <input 
        type        = {type} 
        className   = "form-control" 
        placeholder = { placeholder } 
        onChange    = { inputChange }
        name        = { name }
      />
    </div>
  )
}
