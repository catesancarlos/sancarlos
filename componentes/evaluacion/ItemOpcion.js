const ItemOpciones = ({ opcion, visible, onEliminar }) => {
    const handleEliminar = e => {
        onEliminar(e)
    }

    return(
        <>
            {
                visible &&
                <div className='container'>
                    <p className='opcion'>{opcion.name}</p>
                    <p className='eliminar' onClick={() => handleEliminar(opcion.id)}>X</p>
                </div>
            }

            <style jsx>{`
                .container{
                    margin-top: 10px;
                    width: 100%;
                    display: flex;
                    justify-content: right;
                    align-items: center;
                }

                .opcion{
                    margin-right: 10px;
                    background: white;
                    padding: 5px 10px;
                    border-radius: 10px;
                }

                .eliminar{
                    background: red;
                    padding: 1px 6px 3px 6px;
                    color: white;
                    border-radius: 15px;
                    cursor: pointer;
                }


                @media screen and (max-width: 480px){
                    .container{
                        margin-top: 10px;
                        width: 100%;
                        display: flex;
                        justify-content: right;
                        align-items: center;
                    }
    
                    .opcion{
                        margin-right: 10px;
                        background: white;
                        padding: 5px 10px;
                        border-radius: 10px;
                    }
    
                    .eliminar{
                        background: red;
                        padding: 1px 6px 3px 6px;
                        color: white;
                        border-radius: 15px;
                        cursor: pointer;
                    }
                }
            `}</style>
        </>
    )
}

export default ItemOpciones