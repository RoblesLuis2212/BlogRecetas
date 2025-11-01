import Banner from "./components/Banner"
import Categorias from "./components/Categorias"
import Footer from "./components/Footer"
import NavbarPage from "./components/NavbarPage"

function App() {
  return (
    <>
      <header>
        <NavbarPage></NavbarPage>
      </header>
      <main>
        <Banner></Banner>
        <Categorias></Categorias>
      </main>
      <Footer />
    </>
  )
}

export default App
