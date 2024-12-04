import BotonNavegador from "../componentesPequeños/BotonNavegador"
import { FaHome } from "react-icons/fa";


function Navegador() {
    return (
        <ul className="flex w-1/3 m-auto font-mono top-4 justify-between items-center sticky z-50 ">
            <BotonNavegador ad={<FaHome />} href={"#home"} />
            <BotonNavegador ad={"Proyectos"} href={"#proyectos"} />
            <BotonNavegador ad={"Quien soy"} href={"#quienSoy"} />
            <BotonNavegador ad={"Tecnologias"} href={"#tecnologias"} />
            <BotonNavegador ad={"Contacto"} href={"#contacto"} />
        </ul>
    )
}


export default Navegador