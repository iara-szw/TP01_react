import { useState } from 'react'
import Formulario from './componentes/Formulario.jsx'
import './App.css'
import Listado from './componentes/Listado.jsx' 
import TituloHeader from './componentes/tituloHeader.jsx'
function App() {

  const [citas, setCitas] = useState([]);
  return (
    <>
    <head> 
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"></link>
    <link href="https://fonts.googleapis.com/css?family=Staatliches" rel="stylesheet"></link>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"></link>
</head>
<TituloHeader contenido="Administrador de pacientes"/>
      <div class="container">
        <div class="row">
          <div class="one-half column">
<Formulario setCitas={setCitas}></Formulario>     
   </div>
         <div class="one-half column">
<Listado citas={citas} setCitas={setCitas}></Listado>
         </div>
        </div>
        </div>

    </>
  )
}


export default App
