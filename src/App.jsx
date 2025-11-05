import { BrowserRouter, Route, Routes } from "react-router"
import Banner from "./components/Banner"
import Categorias from "./components/Categorias"
import Footer from "./components/Footer"
import NavbarPage from "./components/NavbarPage"
import Recetas from "./components/Recetas"
import RegistroUsuarios from "./components/RegistroUsuarios"
import DetalleRecetas from "./components/DetalleRecetas"

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <NavbarPage></NavbarPage>
        </header>
        <main>
          {/* Pagina principal */}
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Banner></Banner>
                  <Categorias></Categorias>
                  <Recetas></Recetas>
                </>
              }
            >
            </Route>
            {/* Pagina de registro */}
            <Route
              path="/registro"
              element={<RegistroUsuarios />}
            ></Route>
            {/* Pagina detalle de recetas */}
            <Route
              path="/detalle"
              element={<DetalleRecetas></DetalleRecetas>}
            ></Route>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
