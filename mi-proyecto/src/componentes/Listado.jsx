import Cita from './Cita.jsx'
import './Listado.css'
import Titulo from './Titulo.jsx'

function Listado({citas, setCitas}){
    return(
        <>
            <Titulo contenido="Administra tus citas"/>
            {citas.map((cita) => (
        <Cita key={cita.id} cita={cita} setCitas={setCitas} />
      ))}
        </>
    )
}
export default Listado