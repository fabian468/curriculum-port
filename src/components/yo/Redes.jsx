import Boton from "../componentesPequeños/Boton"
import { LuGithub } from "react-icons/lu";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function Redes() {
    return (
        <>
            <ul className="text-white flex justify-evenly mt-6">
                <Boton red={"Facebook"} href={"https://www.facebook.com/fgag.asas?locale=es_LA"} logo={<FaFacebookSquare />} />
                <Boton red={"Github"} href={"https://github.com/fabian468"} logo={<LuGithub />} />
                <Boton red={"Linkedin"} href={"https://www.linkedin.com/in/fabian369/"} logo={<FaLinkedin />
                } />
            </ul>
        </>
    )
}

export default Redes