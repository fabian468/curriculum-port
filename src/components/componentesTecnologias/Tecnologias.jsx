import CardTecnologias from "./CardTecnologias";
import { BsFiletypeHtml } from "react-icons/bs";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJs } from "react-icons/fa";
import { FaReact, FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import { FaPython } from "react-icons/fa";
import { SiDjango, SiPandas } from "react-icons/si";
import { FaGitAlt, FaGithub } from 'react-icons/fa';


function Tecnologias() {

    const technologies = [
        { icon: <BsFiletypeHtml />, title: "HTML", description: "Estructura de páginas" },
        { icon: <FaCss3Alt />, title: "CSS", description: "Estilos visuales" },
        { icon: <RiTailwindCssFill />, title: "Tailwind CSS", description: "Estilización rápida" },
        { icon: <FaJs />, title: "JavaScript", description: "Lenguaje de programación" },
        { icon: <FaReact />, title: "React", description: "Frontend moderno" },
        { icon: <FaNode />, title: "Node.js", description: "Backend eficiente" },
        { icon: <SiMongodb />, title: "MongoDB", description: "Base de datos NoSQL" },
        { icon: <BsFiletypeSql />, title: "SQL", description: "Bases de datos relacionales" },
        { icon: <FaPython />, title: "Python", description: "Automatización y desarrollo" },
        { icon: <SiDjango />, title: "Django", description: "Framework web robusto" },
        { icon: <SiPandas />, title: "Pandas", description: "Análisis de datos" },
        { icon: <FaGitAlt />, title: "Git", description: "Control de versiones" },
        { icon: <FaGithub />, title: "GitHub", description: "Colaboración en repositorios" },
    ];


    return (
        <section id="tecnologias" className="md:w-4/5 lg:w-full py-12 md:h-[100vh]">
            <h2 className="text-center text-white text-3xl font-bold mt-7 mb-8 flex justify-center items-center">Tecnologías que domino</h2>
            <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-6">
                {technologies.map((tech, index) => (
                    <CardTecnologias
                        key={index}
                        icon={tech.icon}
                        title={tech.title}
                        description={tech.description}
                    />
                ))}
            </div>
        </section>

    )
}

export default Tecnologias