import FetchData from "./components/BuscarDados"
import MeuContador from "./components/MeuContador"
import MinhaLista from "./components/MinhaLista"
import './styles.css'

function App() {
  return (
    <>
      <h1>Olá, Mundo</h1>
      <MeuContador />
      <MinhaLista />
      <FetchData />
    </>
  )
}

export default App
