import './Formulario.css'
import Input from './Input.jsx'
import Parrafo from './Parrafos.jsx'
import Boton from './Boton.jsx'
import Titulo from './Titulo.jsx'
function Formulario(){

  return(
    <>
          <Titulo contenido="Crear mi cita"/>
            <form>
    <Input label="Nombre Mascota" nombre="mascota" placeholder="Ingresa el nombre de la mascota"/>
    <Input label="Nombre dueño" nombre="duenio" placeholder="Ingresa el nombre del dueño"/>
    <Input tipo="date" label="Fecha" nombre="fecha"/>
    <Input tipo="time" label="hora" nombre="Hora" />
<Parrafo label="Sintomas"/>
                            <Boton clase="u-full-width button-primary"tipo="submit" nombre="Agregar Cita"/>

            </form>
          </>
)
}

export default Formulario
