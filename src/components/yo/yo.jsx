import { FaFileDownload } from "react-icons/fa";


function Yo() {
    return (
        <div className="font-serif text-white">
            <div className="flex justify-between">
                <p className="text-6xl m-3">Hola, soy</p>
                <a className="flex mr-20" href=""><FaFileDownload /> Curriculum </a>
            </div>
            <p className="text-8xl m-3"> Fabián Aranda</p>
            <p className="text-6xl m-3">Analista programador</p>
        </div>
    )
}

export default Yo