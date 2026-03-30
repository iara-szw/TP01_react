import './Cita.css'

function Cita({cita}){
    return (
        <>
          <div class="cita">
              <p>Mascota: <span>{cita.mascota}</span></p>
              <p>Dueño: <span>{cita.duenio}</span></p>
              <p>Fecha: <span>{cita.fecha}</span></p>
              <p>Hora: <span>{cita.hora}</span></p>
              <p>Sintomas: <span>{cita.sintomas}</span></p>
            <button class="button eliminar">Eliminar ×</button>
            </div>
</>
    )
}
export default Cita 