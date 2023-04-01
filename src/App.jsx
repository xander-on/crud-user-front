import { AppRouter } from "./router/AppRouter"
import { Header } from "./components";


const App = () => {
  return (
    <>
      <div className="container">
        <Header />
        <AppRouter />
      </div>  
    </>
  )
}

export default App;