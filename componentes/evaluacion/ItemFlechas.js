import { useState } from 'react'

const ItemFlechas = ({ depositos, opcion, onCalificar }) => {
    const [der, setDer] = useState(null)

    const handleDerecha = right => {
        setDer(right)
        if(right == opcion.derecha) onCalificar([opcion.id, 1])
        else onCalificar([opcion.id, 0])
    }

    return(
        <div className='container'>
            <div className='deposito'>
                {
                    opcion ? 
                    der == false ? <p className='opcion'>{opcion.name}</p> : <p className='blanco'></p>
                    : <p className='nombre-deposito'>{depositos[0]}</p>
                }
            </div>
            <div className='central'>
                {
                    opcion &&
                    <>
                        <p className='flecha' onClick={() => handleDerecha(false)}>{`<<`}</p>
                        <p className='opcion'>{opcion.name}</p>
                        <p className='flecha' onClick={() => handleDerecha(true)}>{`>>`}</p>
                    </>
                }
            </div>
            <div className='deposito'>
                {
                    opcion ? 
                    der == true ? <p className='opcion'>{opcion.name}</p> : <p className='blanco'></p>
                    : <p className='nombre-deposito'>{depositos[1]}</p>
                }
            </div>

            <style jsx>{`
                .container{
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .deposito{
                    padding: 5px 0;
                    background: #FFFFFF55;
                    width: 180px;
                    text-align: center;
                    display: flex;
                    justify-content: center;
                }

                .nombre-deposito{
                    font-weight: bold;
                    border-bottom: 1px solid black;
                }

                .blanco{
                    height: 29px;
                }

                .central{
                    width: 225px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .opcion{
                    margin: 0 8px;
                    background: white;
                    padding: 5px 10px;
                    text-align: center;
                    border-radius: 10px;
                }

                .flecha{
                    background: brown;
                    padding: 3px 6px 5px 6px;
                    color: white;
                    border-radius: 15px;
                    cursor: pointer;
                }


                @media screen and (max-width: 480px){
                    .container{
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
    
                    .deposito{
                        padding: 5px 0;
                        background: #FFFFFF55;
                        width: 170px;
                        text-align: center;
                        display: flex;
                        justify-content: center;
                    }
    
                    .opcion{
                        padding: 5px 5px;
                        border: 1px solid brown;
                        border-radius: 8px;
                    }
    
                    .flecha{
                        padding: 3px 5px 5px 5px;
                    }
                }
            `}</style>
        </div>
    )
}

export default ItemFlechas