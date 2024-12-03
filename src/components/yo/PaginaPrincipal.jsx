import Fotos from "./Fotos"
import Redes from "./Redes"
import Yo from "./yo"
import yo from "../../image/yo.jpeg"

function PaginaPrincipal() {
    return (
        <div className="h-[100vh] mt-16" >
            <Fotos imagen={yo} clases={'rounded-full size-40 object-cover m-3'} />
            <Yo />
            <Redes />

        </div>
    )
}

export default PaginaPrincipal