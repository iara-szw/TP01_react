import Cita from './Cita.jsx'
import './Listado.css'
import Titulo from './Titulo.jsx'

function Listado({citas}){
    return(
        <>
            <Titulo contenido="Administra tus citas"/>
            {citas.map((cita, index) => (
        <Cita key={index} cita={cita} />
      ))}
        </>
    )
}
export default Listado