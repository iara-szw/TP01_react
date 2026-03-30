import Cita from './Cita.jsx'
import './Listado.css'

function Listado({citas}){
    return(
        <>
            <h2>Administra tus citas</h2>
            {citas.map((cita, index) => (
        <Cita key={index} cita={cita} />
      ))}
        </>
    )
}
export default Listado