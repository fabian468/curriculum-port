import BotonNavegador from "../componentesPequeños/BotonNavegador"
import { FaHome } from "react-icons/fa";


function Navegador() {
    return (
        <ul className="flex text-sm w-11/12 md:text-md md:w-1/3 m-auto font-mono  justify-between items-center  ">
            <BotonNavegador ad={<FaHome />} href={"#home"} />
            <BotonNavegador ad={"Proyectos"} href={"#proyectos"} />
            <BotonNavegador ad={"Quien soy"} href={"#quienSoy"} />
            <BotonNavegador ad={"Tecnologías"} href={"#tecnologias"} />
            <BotonNavegador ad={"Contacto"} href={"#contacto"} />
        </ul>
    )
}


export default Navegador