import './App.css'
import Navegador from './components/componenteNavegador/Navegador'
import Proyectos from './components/ComponentesProyectos/Proyectos'
import PaginaPrincipal from './components/yo/PaginaPrincipal'



function App() {


  return (
    <div className="absolute overflow-x-hidden top-0 z-[-2] scroll-smooth h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
      <Navegador />
      <div className='flex justify-center items-center flex-col  '>
        <PaginaPrincipal />
        <Proyectos />
      </div>
    </div>
  )
}

export default App
