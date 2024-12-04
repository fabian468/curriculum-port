import CardProyectos from "../componentesPequeños/CardProyectos"
import acortadorImg1 from "../../image/proyectos/acortadorUrls/a.png"
import socialImg1 from "../../image/proyectos/socialPet/social1.png"

function Proyectos() {
    return (
        <section id="proyectos" className="flex items-center justify-evenly h-[100vh] w-full">
            <CardProyectos
                tituloProyectos="SocialPet"
                descripcion="Red social enfocada a la ayuda de animales que necesitan una cooperación para una mejor vida."
                imagen1={socialImg1}
                tecnologia={["NodeJs", "ReactJs", "mongoDB"]}
            />
            <CardProyectos
                tituloProyectos="Acortador de url con QR"
                descripcion="Servicio de acortador de url con estadisticas y seguridad de tu url, ademas de creación de codigos QR. "
                imagen1={acortadorImg1}
                tecnologia={["Tailwind", "NodeJs", "ReactJs", "Firebase", "mongoDB"]}
            />
            <CardProyectos
                tituloProyectos={"Ani-Mate RA"}
                descripcion="Juego de realidad aumentada para niños. "
                tecnologia={["C#", "Unity", "Vuforia"]}

            />

        </section>
    )
}

export default Proyectos