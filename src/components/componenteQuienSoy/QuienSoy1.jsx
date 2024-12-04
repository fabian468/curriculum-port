import quiensoy from "../../image/quienSoy.jpeg"
import Fotos from "../yo/Fotos"

function QuienSoy1() {
    return (
        <section id="quienSoy" className="h-[100vh] w-full flex justify-center items-center ">
            <div className="text-white w-1/2 flex justify-center items-center flex-col text-center space-y-4 p-6 bg-gradient-to-r  to-gray-900 rounded-lg shadow-lg">
                <p className="text-2xl font-bold">Hola, soy <span className="text-indigo-400">Fabián Aranda</span>,</p>
                <p className="text-lg">
                    Egresado de <span className="font-semibold">Analista Programador en INACAP</span> y un apasionado de la
                    tecnología y el desarrollo web.
                </p>
                <p className="text-lg">
                    Mi objetivo es crear soluciones <span className="font-semibold text-green-400">innovadoras</span> y funcionales que mejoren la vida de las personas.
                    Siempre estoy en constante aprendizaje para perfeccionar mis habilidades y asumir nuevos retos.
                </p>
                <p className="text-lg">
                    Me especializo en <span className="text-blue-400 font-semibold">React</span>, <span className="text-yellow-400 font-semibold">Node.js</span>, y <span className="text-green-400 font-semibold">MongoDB</span>. También tengo experiencia en diseño responsivo,
                    APIs REST, y estoy explorando el desarrollo de videojuegos con <span className="font-semibold text-purple-400">Unity</span>.
                </p>
                <p className="text-lg">
                    Creo que la programación no solo se trata de código, sino de <span className="font-semibold text-pink-400">resolver problemas reales</span> y hacer el mundo un lugar mejor.
                </p>
                <p className="text-lg">
                    Si quieres saber más sobre mí o colaborar en un proyecto, <span className="text-yellow-400 font-semibold underline cursor-pointer">no dudes en contactarme.</span>
                </p>
            </div>

            <div className=" w-1/3 ">
                <Fotos clases={"w-4/6 border-white border-4 ml-20 rounded-xl"} imagen={quiensoy} />
            </div>
        </section>
    )
}

export default QuienSoy1