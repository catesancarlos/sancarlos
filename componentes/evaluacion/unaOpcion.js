import {useState, useEffect} from 'react'

const UnaOpcion = ({alumno, no, datos, onNota}) => {
    const [pregunta, setPregunta] = useState(null)
    const [respuestas, setRespuestas] = useState(null)
    const [correcto, setCorrecto] = useState(null)
    const [listo, setListo] = useState(false)

    const [enfasis, setEnfasis] = useState([0, 0, 0, 0])

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
    }, [pregunta])

    if(!listo) { 
        return <div>loading...</div>
    }

    const handleCalificar = seleccion => {
        if(seleccion == correcto) {
            if(no == 14) {onNota([no, 6])}
            else{onNota([no, 1])}
        } else {
            onNota([no, 0])
        }
    }

    return (
        <div className='cont-pregunta'>
            <div className='pregunta'>
                <p className='num'>{`${no}.`}</p>
                <p>{pregunta}</p>
            </div>
            <div className=''>
                { 
                    respuestas.map(item => 
                        <div className='opciones' key={item.id}>
                            <p 
                                className={`nombre-opcion-${enfasis[item.id]}`}
                                onClick={() => {
                                    if(item.id == 0) {setEnfasis([1,0,0,0]); handleCalificar(item.name)}
                                    if(item.id == 1) {setEnfasis([0,1,0,0]); handleCalificar(item.name)}
                                    if(item.id == 2) {setEnfasis([0,0,1,0]); handleCalificar(item.name)}
                                    if(item.id == 3) {setEnfasis([0,0,0,1]); handleCalificar(item.name)}
                                }}
                            >
                                {item.name}
                            </p>
                        </div>   
                    ) 
                }
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

                .opciones{
                    display: flex;
                    margin: 0 25px;
                    padding-top: 10px;
                }

                .nombre-opcion-0{
                    background: white;
                    padding: 5px 10px;
                    border-radius: 10px;
                    cursor: pointer;
                }

                .nombre-opcion-1{
                    background: brown;
                    color: white;
                    padding: 5px 15px;
                    border-radius: 10px;
                    cursor: pointer;
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
                        padding-top: 10px;
                    }

                    .nombre-opcion-0{
                        border: 1px solid rgba(0, 0, 0, 0.25);
                        font-size: 15px;
                    }

                    .nombre-opcion-1{
                        font-size: 15px;
                    }
                }
            `}</style>
        </div> 
    )
}

export default UnaOpcion;