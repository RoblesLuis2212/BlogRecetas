import { BrowserRouter, Route, Routes, useParams } from "react-router"
import Banner from "./components/Banner"
import Categorias from "./components/Categorias"
import Footer from "./components/Footer"
import NavbarPage from "./components/NavbarPage"
import Recetas from "./components/Recetas"
import RegistroUsuarios from "./components/RegistroUsuarios"
import DetalleRecetas from "./components/DetalleRecetas"
import Administrador from "./components/Administrador"
import FormularioReceta from "./components/FormularioReceta"
import { useState, useEffect, useEffectEvent } from "react"
import { listarRecetasAPI, obtenerRecetaIDAPI } from "./helpers/queries.js"
import ProtectorAdmin from "./routes/ProtectorAdmin.jsx"

function App() {
  const [recetas, setRecetas] = useState([]);

  const sesionUsuario = JSON.parse(sessionStorage.getItem("usuarioKey")) || {};
  const [usuarioLogueado, setUsuarioLogueado] = useState(sesionUsuario);

  useEffect(() => {
    sessionStorage.setItem("usuarioKey", JSON.stringify(usuarioLogueado))
  }, [usuarioLogueado])

  useEffect(() => {
    obtenerRecetas()
  }, [])


  const obtenerRecetas = async () => {
    const respuesta = await listarRecetasAPI();
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setRecetas(datos);
    }
  }

  return (
    <>
      <BrowserRouter>
        <header>
          <NavbarPage usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}></NavbarPage>
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
                  <Recetas recetas={recetas}></Recetas>
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
              path="/detalle/:id"
              element={<DetalleRecetas></DetalleRecetas>}
            ></Route>
            <Route
              path="/administrador"
              element={<ProtectorAdmin usuarioLogueado={usuarioLogueado}></ProtectorAdmin>}
            >
              <Route index
                element={<Administrador></Administrador>}
              ></Route>
              <Route
                path="crear"
                element={<FormularioReceta titulo="Crear Receta"></FormularioReceta>}
              >
              </Route>
              <Route
                path="editar/:id"
                element={<FormularioReceta titulo="Editar Receta"></FormularioReceta>}
              ></Route>
            </Route>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
