import { useState } from 'react'

const GrupoVerdadero = ({ id, name, estado, onBien }) => {
    const [verdad, setVerdad] = useState(null)

    const handleRevisar = e => {
        setVerdad(e)
        if(estado == e) onBien([id, 1])
        else onBien([id, 0])
    }

    return(
        <div className='opciones'>
            <p className='texto'>{name}</p>
            <p className='verdadero' onClick={() => handleRevisar(true)} >V</p>
            <p className='falso' onClick={() => handleRevisar(false)} >F</p>
            

            <style jsx>{`
                .opciones{
                    margin-top: 10px;
                    display: flex;
                }

                .opciones p{
                    display: flex;
                    align-items: center;
                    padding: 6px 10px;
                    border-radius: 8px;
                }

                .texto{
                    background: ${verdad == true ? 'green' : verdad == false ? 'red' : 'white'};
                    color: ${(verdad == null ) ? 'black' : 'white'};
                    font-weight: ${(verdad == null ) ? '400' : 'bold'};
                    padding: 6px 10px;
                }

                .verdadero{
                    margin: 0 6px 0 10px;
                    padding: 6px 12px;
                    color: green;
                    border: 1px solid green;
                }

                .falso{
                    padding: 6px 12px;
                    color: red;
                    border: 1px solid red;
                }
            `}</style>
        </div>
    )
}

export default GrupoVerdadero