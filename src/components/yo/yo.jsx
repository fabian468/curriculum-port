import { FaFileDownload } from "react-icons/fa";
import a from "../../curriculum/a.pdf"


function Yo() {
    return (
        <div className="font-serif text-white">
            <div className="flex justify-between">
                <p className="text-2xl md:text-6xl m-3">Hola, soy</p>
                <a className="flex mr-16 md:mr-20 " href={a} download={"Fabián-Aranda.pdf"}><FaFileDownload className="animate-bounce" /> Curriculum </a>
            </div>
            <h1 className="text-6xl md:text-8xl m-3"> Fabián Aranda</h1>
            <p className="text-4xl md:text-6xl m-3">Analista programador</p>
        </div>
    )
}

export default Yo