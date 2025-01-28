import { Link, useParams } from "react-router-dom";
import { listProyectos } from "./listProyectos";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";


function ProyectosUnitarios() {
    const { id } = useParams();
    const proyectoSeleccionado = listProyectos.find(
        (proyecto) => proyecto.id === parseInt(id)
    );

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        if (currentSlide < slides.length - 1) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    const slides = [
        // Slide 1: Nombre del proyecto
        <section key="slide1" className="w-full flex-shrink-0 flex items-center justify-evenly h-[100vh]">
            <article className=" relative w-full md:w-10/12 h-4/5 flex flex-col items-center gap-4 p-3 justify-evenly bg-gray-200 rounded-xl shadow-md shadow-white font-serif">
                <Link to={"../"} className="md:text-3xl absolute top-0 items-center md:top-6 right-6 text-blue-800 flex"><FaArrowLeft />Volver</Link>
                <h2 className="text-center text-3xl">{proyectoSeleccionado?.nombre}</h2>
                <p className="text-center">{proyectoSeleccionado?.descripcion}</p>
                <div className="flex justify-center aspect-auto">
                    {<img src={proyectoSeleccionado?.imagen} className="md:w-2/3 rounded-md md:max-h-80 max-h-40" alt="" />}
                </div>
                {proyectoSeleccionado?.tecnologia && (
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                        {proyectoSeleccionado.tecnologia.map((tecno, i) => (
                            <span
                                key={i}
                                className="bg-gray-300 text-sm font-medium px-2 py-1 rounded-lg shadow-sm"
                            >
                                {tecno}
                            </span>
                        ))}
                    </div>
                )}
                <div className="flex gap-10 items-center">
                    <p className="text-xl">{proyectoSeleccionado.estado}</p>

                    {proyectoSeleccionado?.codigoFront && <a href={proyectoSeleccionado.codigoFront} target="_blank" className="flex items-center" ><LuGithub />Front</a>}
                    {proyectoSeleccionado?.codigoBack && <a href={proyectoSeleccionado?.codigoBack} target="_blank" className="flex items-center "><LuGithub />Back</a>}
                </div>
            </article>
        </section>,

        ...(proyectoSeleccionado?.verMas && Array.isArray(proyectoSeleccionado.verMas) && proyectoSeleccionado.verMas.length > 0
            ? proyectoSeleccionado.verMas.map((e, i) => (
                <div key={i} className="w-full flex-shrink-0 flex items-center justify-evenly h-[100vh]">
                    <article className={`relative flex flex-col ${i % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"}  w-10/12 h-4/5 p-2 justify-center items-center rounded-xl shadow-md shadow-white font-serif bg-gray-200`}>
                        <Link to={"../"} className="text-3xl absolute top-6 right-6 items-center flex"><FaArrowLeft />Volver</Link>
                        <p className="text-center p-2 text-lg font-serif">{e.obstaculos1}</p>
                        {<img className="md:w-1/2 rounded-lg object-cover " src={e?.imagen1} alt="" />}
                    </article>
                </div>
            ))
            : []
        ),
    ];

    return (
        <section
            id="proyectos"
            className="flex items-center justify-center h-[100vh] w-full"
        >
            <div className="relative w-10/12 overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {slides}
                </div>

                <div className="absolute bottom-7 md:bottom-1/2 md:top-1/2 left-0 transform -translate-y-1/2">
                    <button
                        onClick={prevSlide}
                        className={`bg-white px-4 py-2 ${currentSlide === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                        disabled={currentSlide === 0}
                    >
                        Anterior
                    </button>
                </div>
                <div className="absolute bottom-7 md:bottom-1/2 md:top-1/2 right-0 transform -translate-y-1/2">
                    <button
                        onClick={nextSlide}
                        className={`bg-white px-4 py-2 ${currentSlide === slides.length - 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                        disabled={currentSlide === slides.length - 1}
                    >
                        Siguiente
                    </button>
                </div>
            </div>
        </section>
    );
}

export default ProyectosUnitarios;
