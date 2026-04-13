import './Cita.css'
import Boton from './Boton.jsx'
import Info from './Informacion.jsx'

function Cita({cita, setCitas}){
    return (
        <>
          <div class="cita">
            <Info nombre="Mascota" infor={cita.mascota}></Info>
                        <Info nombre="Dueño" infor={cita.duenio}></Info>
            <Info nombre="Fecha" infor={cita.fecha}></Info>
            <Info nombre="Hora" infor={cita.hora}></Info>
            <Info nombre="Sintomas" infor={cita.sintomas}></Info>
              <Boton clase="button eliminar" nombre="Eliminar x" onClick={eliminarCita(setCitas,cita)} />
            </div>
</>
    )
}

function eliminarCita(setCitas, cita) {
  const handleDelete = () => {
    const confirmacion = window.confirm("¿Estás seguro que queres eliminar esta cita?");
    if (confirmacion) {
      setCitas(lista => lista.filter(c => c.id !== cita.id));  
      } else {
        alert("Eliminación cancelada");
      }
  };

  return handleDelete;
}
export default Cita 