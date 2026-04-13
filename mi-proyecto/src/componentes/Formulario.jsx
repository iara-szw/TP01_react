import './Formulario.css'
import Input from './Input.jsx'
import Parrafo from './Parrafos.jsx'
import Boton from './Boton.jsx'
import Titulo from './Titulo.jsx'

function Formulario({setCitas}){

  const agregarCita = (e) =>{
    e.preventDefault();
    // `agregarCita` puede ser llamado desde el formulario (onSubmit)
    // o desde el botón (onClick). Aquí determinamos el <form> correcto.
    let form = e.target;
    if (!form || form.tagName !== 'FORM') {
      form = e.target.form || (e.target.closest ? e.target.closest('form') : null) || (e.currentTarget && e.currentTarget.closest ? e.currentTarget.closest('form') : null);
    }
    if (!form) {
      console.error('Formulario.agregarCita: no se encontró el elemento <form>');
      return;
    }
    const mascota = form.mascota.value.trim();
    const duenio = form.duenio.value.trim();
    const fecha = form.fecha.value;
    const hora = form.hora.value;
    const sintomas = form.sintomas.value.trim();
    if(!mascota || !duenio || !fecha || !hora || !sintomas) {
      alert("No puede haber campos vacíos.");
      return;
    }

    const nuevaCita = {
      id: Date.now(),
      mascota,
      duenio,
      fecha,
      hora,
      sintomas
    }

    setCitas(citas => [...citas, nuevaCita]);
    form.reset();
  }

  return(
    <>
      <Titulo contenido="Crear mi cita"/>
      <form onSubmit={(e) => e.preventDefault()}>
        <Input label="Nombre Mascota" nombre="mascota" placeholder="Ingresa el nombre de la mascota" required/>
        <Input label="Nombre dueño" nombre="duenio" placeholder="Ingresa el nombre del dueño" required/>
        <Input tipo="date" label="Fecha" nombre="fecha" required/>
        <Input tipo="time" label="Hora" nombre="hora" required/>
        <Parrafo label="Sintomas" nombre="sintomas" required/>
        <Boton clase="u-full-width button-primary" tipo="button" nombre="Agregar Cita" onClick={agregarCita}/>
      </form>
    </>
  )
}

export default Formulario
