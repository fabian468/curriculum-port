import socialImg1 from "../../image/proyectos/socialPet/social1.png"
import socialImg2 from "../../image/proyectos/socialPet/social2.png"
import socialImg3 from "../../image/proyectos/socialPet/social5.png"
import socialImg4 from "../../image/proyectos/socialPet/social6.png"


import acortadorImg1 from "../../image/proyectos/acortadorUrls/a.png"
import acortadorImg2 from "../../image/proyectos/acortadorUrls/c.png"
import acortadorImg3 from "../../image/proyectos/acortadorUrls/b.png"
import acortadorImg4 from "../../image/proyectos/acortadorUrls/d.png"

// import necesitounservicioImg1 from "../../image/proyectos/necesitoUnServicio/1.png"

export const listProyectos = [
    {
        id: 1,
        nombre: 'SocialPet',
        descripcion: "Red social enfocada a la ayuda de animales que necesitan una cooperación para una mejor vida.",
        imagen: socialImg1,
        tecnologia: ["NodeJs", "ReactJs", "mongoDB"],
        estado: "En desarrollo",
        codigoFront: "https://github.com/fabian468/Front-Social-Pet",
        codigoBack: "https://github.com/fabian468/Back-Social-Pet",
        verMas: [{
            imagen1: socialImg4,
            obstaculos1: "Mi primer obstáculo fue desarrollar el login y el registro, lo cual logré solucionar utilizando Node.js, bcrypt y JWT."
        },
        {
            imagen1: socialImg2,
            obstaculos1: "El siguiente reto fue implementar el sistema de publicaciones, lo que logré con éxito utilizando MongoDB y Express para manejar los datos de manera eficiente."
        },
        {
            imagen1: socialImg3,
            obstaculos1: "Un desafío importante fue implementar el sistema de donaciones, lo cual logré integrar utilizando una plataforma de pago segura y gestionando las transacciones de forma eficiente en la base de datos."
        }
        ]

    },
    {
        id: 2,
        nombre: "Acortador de url con QR",
        descripcion: "Servicio de acortador de url con estadisticas y seguridad de tu url, ademas de creación de codigos QR. ",
        imagen: acortadorImg1,
        tecnologia: ["Tailwind", "NodeJs", "ReactJs", "Firebase", "mongoDB"],
        estado: "Finalizado",
        codigoFront: "https://github.com/fabian468/frontAcortador",
        codigoBack: "https://github.com/fabian468/apiAcortador",
        verMas: [{
            imagen1: acortadorImg3,
            obstaculos1: "El primer desafío fue desarrollar el núcleo del acortador de URL, lo cual logré implementando una lógica eficiente para generar identificadores únicos y almacenarlos en la base de datos."

        }, {
            imagen1: acortadorImg2,
            obstaculos1: "Uno de los pasos clave fue implementar la funcionalidad para generar códigos QR, lo cual conseguí utilizando bibliotecas como qrcode en Node.js y adaptando el diseño para su fácil escaneo."
        },
        {
            imagen1: acortadorImg4,
            obstaculos1: "Otro reto fue añadir seguridad a los enlaces mediante claves de acceso, lo cual logré generando códigos únicos y permitiendo a los usuarios proteger sus URLs con contraseñas encriptadas con bcrypt."
        }
        ]

    },
    {
        id: 3,
        nombre: "necesitoUnServicio.cl",
        descripcion: "Plataforma de servicios en línea que conecta a personas que necesitan un servicio con profesionales que lo ofrecen.",
        imagen: acortadorImg4,
        tecnologia: ["react vite", "node js ", "firebase", "mongoDB", "tailwind"],
        estado: "En desarrollo ",
    },
];
