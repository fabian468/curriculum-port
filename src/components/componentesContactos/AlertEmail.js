
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


export const showSwal = (nombre) => {
  withReactContent(Swal).fire({
    title: "¡Correo enviado!",
    text: `¡Gracias por contactarme, ${nombre}! Me comunicaré a la brevedad contigo.`,
    icon: "success"
  })
}


