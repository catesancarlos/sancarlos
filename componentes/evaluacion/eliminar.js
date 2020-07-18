import {useState, useEffect} from 'react'

const DosOpciones = ({alumno, no, datos, onNota}) => {
    const [pregunta, setPregunta] = useState(null)
    const [respuestas, setRespuestas] = useState(null)
    const [correcto, setCorrecto] = useState(null)
    const [listo, setListo] = useState(false)

    const [eli, setEli] = useState([false, false, false, false])
    const [cont, setCont] = useState(0)

    
    useEffect(() => {
        if(alumno%2 != 0) {
            setPregunta(datos.preguntaa)
            setRespuestas(datos.respuestasa)
            setCorrecto(datos.correctoa)
        } else {
            setPregunta(datos.preguntab)
            setRespuestas(datos.respuestasb)
            setCorrecto(datos.correctob)
        }
        if(pregunta && respuestas && correcto){
            setListo(true)
        }
        if(cont > 1){
            if(`${eli[0]}${eli[1]}${eli[2]}${eli[3]}` == correcto){
                onNota([no, 1])
            } else {
                onNota([no, 0])
            }
        }
    })

    if(!listo) { 
        return <div>loading...</div>
    }

    return (
        <div className='cont-pregunta'>
            <div className='pregunta'>
                <p className='num'>{`${no}.`}</p>
                <p>{pregunta}</p>
            </div>
            <div className='cont-opciones'>
                <div>
                { 
                    respuestas.map(item => 
                        <div className='opciones' key={item.id}>
                            {
                                !eli[item.id] &&
                                <>
                                    <p 
                                        className='nombre-opcion'
                                    >
                                        {item.name}
                                    </p>

                                    <p 
                                        className='eliminar'
                                        onClick={() => {
                                            if(item.id == 0) {setEli([true, eli[1], eli[2], eli[3]]) }
                                            if(item.id == 1) {setEli([eli[0], true, eli[2], eli[3]]) }
                                            if(item.id == 2) {setEli([eli[0], eli[1], true, eli[3]]) }
                                            if(item.id == 3) {setEli([eli[0], eli[1], eli[2], true]) }
                                            setCont(cont + 1)
                                        }}
                                    >X</p>
                                </>
                            }
                            
                        </div> 
                    ) 
                }
                </div>
                <p 
                    className='eliminar restablecer'
                    onClick={() => setEli([false, false, false, false])}
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

                .cont-opciones{
                    display: flex;
                }

                .opciones{
                    display: flex;
                    align-items: center;
                    margin: 0 10px 0 25px;
                }

                .nombre-opcion{
                    margin-top: 10px;
                    background: white;
                    padding: 5px 10px;
                    border-radius: 10px;
                }

                .eliminar{
                    margin: 10px 0 0 5px;
                    background: red;
                    padding: 3px 6px 1px 6px;
                    color: white;
                    border-radius: 15px;
                    cursor: pointer;
                }

                .restablecer{
                    margin: 10px 0 0 5px;
                    height: 20px;
                    line-height: 20px;
                    text-align: center;
                }

                @media screen and (max-width: 480px){
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

                    .restablecer{
                        width: 100px;
                        height: 40px;
                    }
                }
            `}</style>
        </div> 
    )
}

export default DosOpciones;