import BotonNavegador from "../componentesPequeños/BotonNavegador"


function Navegador() {
    return (
        <ul className="flex w-1/3 m-auto font-mono top-4 justify-between sticky ">
            <BotonNavegador ad={"Proyectos"} href={"#proyectos"} />
            <BotonNavegador ad={"Quien soy"} />
            <BotonNavegador ad={"Tecnologias"} />
            <BotonNavegador ad={"Contacto"} />
        </ul>
    )
}


export default Navegador