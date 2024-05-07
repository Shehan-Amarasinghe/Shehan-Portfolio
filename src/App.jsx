import About from "./Component/About"
import Main from "./Component/Main"
import Project from "./Component/Project"
import Sildenav from "./Component/Sildenav"
import Contact from "./Component/Contact"
import Footer from "./Component/Footer"
import { useEffect } from "react"

function App() {

  return (
    <>
      <Sildenav/>
      <Main/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
