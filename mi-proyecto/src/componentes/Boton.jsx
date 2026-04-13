function Boton({nombre, tipo = "button", clase, onClick}){
    return (
        <>
            <button type={tipo} className={clase} onClick={onClick}>{nombre}</button>
        </>
    )
}

export default Boton