import Banner from "./components/Banner"
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
      </main>
      <Footer />
    </>
  )
}

export default App
