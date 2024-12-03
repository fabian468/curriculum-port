import CardProyectos from "../componentesPequeños/CardProyectos"

function Proyectos() {
    return (
        <section id="proyectos" className="flex items-center justify-evenly h-[100vh] w-full">
            <CardProyectos
                tituloProyectos="SocialPet"
                descripcion="Red social enfocada a la ayuda de animales que necesitan una cooperación para una mejor vida."
            />
            <CardProyectos
                tituloProyectos="Acortador de url con QR"
                descripcion="Servicio de acortador de url con estadisticas y seguridad de tu url, ademas de creación de codigos QR. "
            />
            <CardProyectos
                tituloProyectos={"Ani-Mate RA"}
                descripcion="Juego de realidad aumentada para niños. "

            />
        </section>
    )
}

export default Proyectos