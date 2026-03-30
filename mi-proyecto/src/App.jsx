import { useState } from 'react'
import Formulario from './componentes/Formulario.jsx'
import './App.css'
import Listado from './componentes/Listado.jsx' 

function App() {
  const [citas, setCitas] = useState([
    {
      mascota: "Nina",
      duenio: "Martin",
      fecha: "2021-08-05",
      hora: "08:20",
      sintomas: "Le duele la pierna"
    }
    
  ])
  return (
    <>
    <head> 
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"></link>
    <link href="https://fonts.googleapis.com/css?family=Staatliches" rel="stylesheet"></link>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"></link>
</head>
<h1>Administrador de pacientes</h1>
      <div class="container">
        <div class="row">
          <div class="one-half column">
        <Formulario/>
        </div>
         <div class="one-half column">
<Listado citas={citas} />
         </div>
        </div>
        </div>

    </>
  )
}


export default App
