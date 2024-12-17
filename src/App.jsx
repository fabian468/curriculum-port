import './App.css'
import Navegador from './components/componenteNavegador/Navegador'
import QuienSoy1 from './components/componenteQuienSoy/QuienSoy1'
import FormularioContactos from './components/componentesContactos/FormularioContactos'
import Proyectos from './components/ComponentesProyectos/Proyectos'
import ProyectosUnitarios from './components/ComponentesProyectos/ProyectosUnitarios'
import Tecnologias from './components/componentesTecnologias/Tecnologias'
import PaginaPrincipal from './components/yo/PaginaPrincipal'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



function App() {
  return (
    <div className="absolute overflow-x-hidden top-0 z-[-2] scroll-smooth h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
      <nav className=' fixed top-4 left-0 w-full z-50'>
        <Navegador />
      </nav>
      <main className='flex justify-center items-center flex-col  '>
        <PaginaPrincipal />
        <Router>
          <Routes>
            <Route path="/" element={<Proyectos />} />
            <Route path="/uproyecto/:id" element={<ProyectosUnitarios />} />
          </Routes>
        </Router>
        <QuienSoy1 />
        <Tecnologias />
        <FormularioContactos />
      </main>
    </div>
  )
}

export default App
