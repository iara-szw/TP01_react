function parrafo({label, nombre}){
    return (<> <label>{label}</label>
    <textarea name={nombre || label} class="u-full-width"></textarea></>)
}

export default parrafo 