import { useState } from 'react'

const BotonToggle = ({ name, estado, largo, eliminar, onBien }) => {
    const [activo, setActivo] = useState(false)

    const handleRevisar = e => {
        setActivo(!activo)
        if(estado == e) onBien(true)
        else onBien(false)
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

export default BotonToggle