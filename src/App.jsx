import { Container } from "react-bootstrap"
import Formulario from "./components/Formulario"
import ListadoBebidas from "./components/ListadoBebidas"
import MordalBebida from "./components/MordalBebida"
import { CategoriasProvider } from "./context/CategoriasProvider"
import { BebidasProvider } from "./context/BebidasProvider"

function App() {

  return (
    <CategoriasProvider>
      <BebidasProvider>
        <header className="py-5 bg-black">
          <h1>Drink Finder</h1>
        </header>

        <Container className="mt-5">
          <Formulario />
          <ListadoBebidas />
          <MordalBebida />
        </Container>
      </BebidasProvider>
    </CategoriasProvider>
  )
}

export default App
