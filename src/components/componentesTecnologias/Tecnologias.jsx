import CardTecnologias from "./CardTecnologias";

function Tecnologias() {


    const technologies = [
        { icon: "html-icon.svg", title: "HTML", description: "Estructura de páginas" },
        { icon: "css-icon.svg", title: "CSS", description: "Estilos visuales" },
        { icon: "tailwind-icon.svg", title: "Tailwind CSS", description: "Estilización rápida" },
        { icon: "javascript-icon.svg", title: "JavaScript", description: "Lenguaje de programación" },
        { icon: "react-icon.svg", title: "React", description: "Frontend moderno" },
        { icon: "nodejs-icon.svg", title: "Node.js", description: "Backend eficiente" },
        { icon: "mongodb-icon.svg", title: "MongoDB", description: "Base de datos NoSQL" },
        { icon: "sql-icon.svg", title: "SQL", description: "Bases de datos relacionales" },
        { icon: "python-icon.svg", title: "Python", description: "Automatización y desarrollo" },
        { icon: "django-icon.svg", title: "Django", description: "Framework web robusto" },
        { icon: "pandas-icon.svg", title: "Pandas", description: "Análisis de datos" },
    ];

    return (
        <div id="tecnologias" className=" py-12 w-full h-[100vh]">
            <h2 className="text-center text-white text-3xl font-bold mb-8 flex justify-center items-center">Tecnologías que domino</h2>
            <div className="flex flex-wrap justify-center gap-6">
                {technologies.map((tech, index) => (
                    <CardTecnologias
                        key={index}
                        icon={tech.icon}
                        title={tech.title}
                        description={tech.description}
                    />
                ))}
            </div>
        </div>

    )
}

export default Tecnologias