import {useState, useEffect} from 'react'

const DosOpciones = ({alumno, no, datos, onNota}) => {
    const [pregunta, setPregunta] = useState(null)
    const [respuestas, setRespuestas] = useState(null)
    const [correcto, setCorrecto] = useState(null)
    const [listo, setListo] = useState(false)

    const [pos, setPos] = useState([null, null, null, null, null, null, null, null])
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
            if(`${pos[0]}${pos[1]}${pos[2]}${pos[3]}${pos[4]}${pos[5]}${pos[6]}${pos[7]}` == correcto){
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
                <div className='depositos'>
                    { (alumno%2 == 0) ? 'Frutos' : 'Dones' }
                    { 
                        respuestas.map(item => 
                            <div className='opciones' key={item.id}>
                                {
                                    pos[item.id] == false &&
                                    <>
                                        <p 
                                            className='nombre-opcion'
                                        >
                                            {item.name}
                                        </p>
                                    </>
                                }
                                
                            </div> 
                        ) 
                    }
                </div>
                <div className='cont-cont'>
                { 
                    respuestas.map(item => 
                        <div className='opciones' key={item.id}>
                            <p 
                                className='eliminar'
                                onClick={() => {
                                    if(item.id == 0) {setPos([false, pos[1], pos[2], pos[3], pos[4], pos[5], pos[6], pos[7]]) }
                                    if(item.id == 1) {setPos([pos[0], false, pos[2], pos[3], pos[4], pos[5], pos[6], pos[7]]) }
                                    if(item.id == 2) {setPos([pos[0], pos[1], false, pos[3], pos[4], pos[5], pos[6], pos[7]]) }
                                    if(item.id == 3) {setPos([pos[0], pos[1], pos[2], false, pos[4], pos[5], pos[6], pos[7]]) }
                                    if(item.id == 4) {setPos([pos[0], pos[1], pos[2], pos[3], false, pos[5], pos[6], pos[7]]) }
                                    if(item.id == 5) {setPos([pos[0], pos[1], pos[2], pos[3], pos[4], false, pos[6], pos[7]]) }
                                    if(item.id == 6) {setPos([pos[0], pos[1], pos[2], pos[3], pos[4], pos[5], false, pos[7]]) }
                                    if(item.id == 7) {setPos([pos[0], pos[1], pos[2], pos[3], pos[4], pos[5], pos[6], false]) }
                                    setCont(cont + 1)
                                }}
                            >{`<<`}</p>
                            <p className='nombre-opcion'>{item.name}</p>
                            <p 
                                className='eliminar'
                                onClick={() => {
                                    if(item.id == 0) {setPos([true, pos[1], pos[2], pos[3], pos[4], pos[5], pos[6], pos[7]])}
                                    if(item.id == 1) {setPos([pos[0], true, pos[2], pos[3], pos[4], pos[5], pos[6], pos[7]]) }
                                    if(item.id == 2) {setPos([pos[0], pos[1], true, pos[3], pos[4], pos[5], pos[6], pos[7]]) }
                                    if(item.id == 3) {setPos([pos[0], pos[1], pos[2], true, pos[4], pos[5], pos[6], pos[7]]) }
                                    if(item.id == 4) {setPos([pos[0], pos[1], pos[2], pos[3], true, pos[5], pos[6], pos[7]]) }
                                    if(item.id == 5) {setPos([pos[0], pos[1], pos[2], pos[3], pos[4], true, pos[6], pos[7]]) }
                                    if(item.id == 6) {setPos([pos[0], pos[1], pos[2], pos[3], pos[4], pos[5], true, pos[7]]) }
                                    if(item.id == 7) {setPos([pos[0], pos[1], pos[2], pos[3], pos[4], pos[5], pos[6], true]) }
                                    setCont(cont + 1)
                                }}
                            >{`>>`}</p>
                        </div> 
                    ) 
                }
                </div>
                <div className='depositos'>
                    { (alumno%2 == 0) ? 'Dones' : 'Frutos' }
                    { 
                        respuestas.map(item => 
                            <div className='opciones' key={item.id}>
                                {
                                    pos[item.id] == true &&
                                    <>
                                        <p 
                                            className='nombre-opcion'
                                        >
                                            {item.name}
                                        </p>
                                    </>
                                }
                                
                            </div> 
                        ) 
                    }
                </div>
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
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    margin-top: 10px;
                }

                .depositos{
                    background: rgba(255, 255, 255, 0.4);
                    width: 22%;
                    text-align: center;
                    border-radius: 20px;
                }

                .cont-cont{
                    margin-top: 20px
                }

                .opciones{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 25px;
                    min-height: 38px;
                }

                .nombre-opcion{
                    margin-top: 10px;
                    background: white;
                    padding: 5px 10px;
                    border-radius: 10px;
                    text-align: center;
                }

                .eliminar{
                    margin: 10px 5px 0 5px;
                    background: brown;
                    padding: 3px 6px 1px 6px;
                    color: white;
                    border-radius: 15px;
                    cursor: pointer;
                }

                .restablecer{
                    margin: 15px 0 0 5px;
                    height: 20px;
                    line-height: 20px;
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
                        margin: 0 15px 0 25px;
                    }

                    .nombre-opcion{
                        border: 1px solid rgba(0, 0, 0, 0.25);
                        font-size: 10px;
                    }

                    .eliminar{
                        margin: 10px 2px 0 2px;
                        padding: 2px 4px 2px 4px;
                        font-size: 15px;
                    }

                    .depositos{
                        background: rgba(0, 0, 0, 0.25);
                    }
                }
            `}</style>
        </div> 
    )
}

export default DosOpciones;