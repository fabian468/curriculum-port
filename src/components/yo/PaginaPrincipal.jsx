import Fotos from "./Fotos"
import Redes from "./Redes"
import Yo from "./yo"
import yo from "../../image/yo.jpeg"

function PaginaPrincipal() {
    return (
        <div id="home" className="h-[100vh]">
            <div className="  mt-16" >
                <Fotos imagen={yo} clases={'rounded-full size-40 object-cover mb-3 '} />
                <Yo />
                <Redes />
            </div>
        </div>
    )
}

export default PaginaPrincipal