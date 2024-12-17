import CardProyectos from "../componentesPequeños/CardProyectos"
import { listProyectos } from "./listProyectos"


function Proyectos() {
    return (
        <section id="proyectos" className="flex flex-col md:mt-0 md:flex-row md:p-0 p-2 items-center justify-evenly md:h-[100vh] w-full">
            {
                listProyectos.map((data) => {
                    return (
                        <CardProyectos
                            key={data.id}
                            id={data.id}
                            tituloProyectos={data.nombre}
                            descripcion={data.descripcion}
                            imagen1={data.imagen}
                            tecnologia={data.tecnologia}
                        />
                    );
                })
            }
        </section>
    )
}

export default Proyectos