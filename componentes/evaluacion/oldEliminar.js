import {useState, useEffect} from 'react'
import ItemOpcion from './ItemOpcion'

const DosOpciones = ({ no, datos, onNota }) => {
    const [pregunta, setPregunta] = useState(null)
    const [respuestas, setRespuestas] = useState(null)
    const [correcto, setCorrecto] = useState(null)

    const [op1, setOp1] = useState(true)
    const [op2, setOp2] = useState(true)
    const [op3, setOp3] = useState(true)
    const [op4, setOp4] = useState(true)
    
    useEffect(() => {
        setPregunta(datos.pregunta)
        setRespuestas(datos.respuestas)
        setCorrecto(datos.correcto)
    }, [pregunta])

    useEffect(() => {
        if(correcto && correcto[0] == op1 && correcto[1] == op2 && correcto[2] == op3 && correcto[3] == op4) {
            onNota([no, 2])
        }
        else onNota([no, 0])

    }, [op1, op2, op3, op4])

    const handleEliminar = nu => {
        if(nu == 0) setOp1(false)
        if(nu == 1) setOp2(false)
        if(nu == 2) setOp3(false)
        if(nu == 3) setOp4(false)
    }

    if(!(pregunta && respuestas && correcto)) { 
        return <div>loading...</div>
    }

    return (
        <div className='cont-pregunta'>
            <div className='pregunta'>
                <p className='num'>{`${no}.`}</p>
                <p>{pregunta}</p>
            </div>
            <div className='dos-columnas'>
                <div className='cont-opciones'>
                    <ItemOpcion opcion={respuestas[0]} visible={op1} onEliminar={handleEliminar} />
                    <ItemOpcion opcion={respuestas[1]} visible={op2} onEliminar={handleEliminar} />
                    <ItemOpcion opcion={respuestas[2]} visible={op3} onEliminar={handleEliminar} />
                    <ItemOpcion opcion={respuestas[3]} visible={op4} onEliminar={handleEliminar} />
                </div>
                <p 
                    className='eliminar restablecer'
                    onClick={() => {setOp1(true), setOp2(true), setOp3(true), setOp4(true)}}
                >Restablecer opciones</p>
            </div>
               
            <style jsx>{`
                .cont-pregunta{
                    width: 60%;
                    margin: 0 auto;
                    padding: 20px 20px 15px 20px;
                    border: 1px solid white;
                    border-radius: 20px;
                    margin-bottom: 20px;
                }

                .pregunta{
                    color: brown;
                    font-weight: bold;
                    font-size: 20px;
                    line-height: 30px;
                    display: flex;
                }

                .num{
                    padding-right: 8px;
                }

                .dos-columnas{
                    display: flex;
                }

                .cont-opciones{
                    margin-left: 25px;
                    display: flex;
                    flex-direction: column;
                }

                .eliminar{
                    margin: 10px 0 0 15px;
                    background: red;
                    width: 170px;
                    height: 26px;
                    line-height: 26px;
                    color: white;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 13px;
                    cursor: pointer;
                }


                @media screen and (max-width: 480px){
                    .dos-columnas{
                        display: inline;
                    }

                    .cont-pregunta{
                        width: 100%;
                        padding: 0;
                        border: none;
                        border-radius: 0;
                        margin-bottom: 0;
                        padding-bottom: 20px;
                        border-bottom: 1px solid #ccdae8;
                    }

                    .pregunta{
                        font-size: 16px;
                        line-height: 20px;
                        padding: 15px 15px 0 15px;
                    }

                    .opciones{
                        max-width: 200px;
                    }

                    .nombre-opcion{
                        border: 1px solid rgba(0, 0, 0, 0.25);
                        font-size: 15px;
                    }

                    .eliminar{
                        margin: 10px 0 0 35px;
                    }
                }
            `}</style>
        </div> 
    )
}

export default DosOpciones;