import Fotos from "./Fotos"
import Redes from "./Redes"
import Yo from "./yo"
import yo from "../../image/yo.webp"

function PaginaPrincipal() {
    return (
        <div id="home" className="h-[100vh] ">
            <section className="p-1 md:p-0 mt-20 md:mt-24 " >
                <Fotos imagen={yo} clases={'rounded-full size-36 md:size-40 object-cover mb-3 '} />
                <Yo />
                <Redes />
            </section>
        </div>
    )
}

export default PaginaPrincipal