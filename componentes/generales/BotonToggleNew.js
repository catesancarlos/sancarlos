import { useState, useEffect } from 'react'

const BotonToggleNew = ({ no, id, name, estado, largo, eliminar, datos }) => {
    const [activo, setActivo] = useState(datos ? datos[1] : sessionStorage.getItem(`p${no}o${id}`) ? JSON.parse(sessionStorage.getItem(`p${no}o${id}`))[1] : false)
    const [bien, setBien] = useState(datos ? datos : sessionStorage.getItem(`p${no}o${id}`) ? JSON.parse(sessionStorage.getItem(`p${no}o${id}`)) : [0, false])

    useEffect(() => {
        if(!datos) sessionStorage.setItem(`p${no}o${id}`, JSON.stringify(bien))
    }, [activo, bien])
    console.log(datos, id)

    const handleRevisar = e => {
        if(!datos){
            setActivo(e)
            if(estado == e && estado == true) setBien([1, e])
            else if(estado != e && e == true) setBien([-1, e])
            else setBien([0, e])
        }
    }

    return(
        <>
            {
                eliminar ? 
                    <div className='opcion'>
                        { !activo && <p>{name}</p> }
                        <p className='eliminar' onClick={() => handleRevisar(!activo)} >{!activo ? 'X' : '>'}</p>
                    </div>
                :
                    <p onClick={() => handleRevisar(!activo)}>{name}</p>
            }

            <style jsx>{`
                .opcion{
                    width: 100%;
                    font-size: 16.5px;
                    display: flex;
                }

                p{
                    margin-top: 12px;
                    background: ${activo ? 'brown' : 'white'};
                    width: ${largo ? 'auto' : '23.5%'};
                    padding: 6px;
                    color: ${activo ? 'white' : 'black'};
                    font-size: 16.5px;
                    font-weight: ${activo ? 'bold' : '400'};
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: ${eliminar ? 'left' : 'center'};
                    border-radius: ${eliminar ? '8px 0 0 8px' : '8px'};
                    cursor: ${eliminar ? 'auto' : 'pointer'};
                }

                .eliminar{
                    margin-top: 12px;
                    margin-left: ${!activo ? '5px' : '0'};
                    background: ${!activo ? 'red' : 'green'};
                    padding: 6px 12px;
                    color: white;
                    border-radius: 0 8px 8px 0;
                    cursor: pointer;
                }

                @media screen and (max-width: 768px){
                    .opcion{
                        font-size: 14px;
                    }

                    p{
                        margin-top: 10px;
                        width: ${largo ? 'auto' : '32%'};
                        padding: 7px 5px;
                        font-size: 14px;
                        border: 1px solid brown;
                    }

                    .eliminar{
                        margin-top: 10px;
                    }
                }
            `}</style>
        </> 
    )
}

export default BotonToggleNew