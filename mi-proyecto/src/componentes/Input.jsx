function input({tipo="text",label,nombre,placeholder="",}){
return(<>
 <label>{label}</label>
 <input type={tipo} name={nombre} placeholder={placeholder}></input>
</>)
} 

export default input 
