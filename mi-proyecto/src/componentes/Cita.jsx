import './Cita.css'
import Boton from './Boton.jsx'
import Info from './Informacion.jsx'
function Cita({cita}){
    return (
        <>
          <div class="cita">
            <Info nombre="Mascota" infor={cita.mascota}></Info>
                        <Info nombre="Dueño" infor={cita.duenio}></Info>
            <Info nombre="Fecha" infor={cita.fecha}></Info>
            <Info nombre="Hora" infor={cita.hora}></Info>
            <Info nombre="Sintomas" infor={cita.sintomas}></Info>
              <Boton clase="button eliminar" nombre="Eliminar x"/>
            </div>
</>
    )
}
export default Cita 