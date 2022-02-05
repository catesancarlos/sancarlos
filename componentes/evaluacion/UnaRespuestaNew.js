import { useState, useEffect } from 'react'
import Pregunta from '../generales/Pregunta'
import BotonNormal from '../generales/BotonNormal'

const UnaRespuestaNew = ({ prueba, number, label1, label2, label3, respuestas1, respuestas2, respuestas3, datos }) => {
    const [enunciado, setEnunciado] = useState('')
    const [respuestas, setRespuestas] = useState([])
    const [seleccion, setSeleccion] = useState(datos ? datos : sessionStorage.getItem(`p${number}`) ? JSON.parse(sessionStorage.getItem(`p${number}`)) : [null, false, false, false, false])

    useEffect(() => {
        if(seleccion && seleccion[0] != null && !datos) sessionStorage.setItem(`p${number}`, JSON.stringify(seleccion))
    }, [seleccion])

    useEffect(() => {
        if(prueba == 1){
            setEnunciado(label1)
            setRespuestas(respuestas1)
        }
        if(prueba == 2){
            setEnunciado(label2)
            setRespuestas(respuestas2)
        }
        if(prueba == 0){
            setEnunciado(label3)
            setRespuestas(respuestas3)
        }
    }, [prueba])

    const handleRevisar = e => {
        if(e[0] == 0) setSeleccion([e[1], true, false, false, false])
        if(e[0] == 1) setSeleccion([e[1], false, true, false, false])
        if(e[0] == 2) setSeleccion([e[1], false, false, true, false])
        if(e[0] == 3) setSeleccion([e[1], false, false, false, true])
    }

    if(!(respuestas && enunciado)) { 
        return <div>Cargando pregunta...</div>
    }

    return (
        <Pregunta no={number} pregunta={enunciado} >
            { 
                respuestas.map((item, index) => 
                    <BotonNormal
                        key={index}
                        name={item}
                        activo={seleccion[index+1]} 
                        onSeleccion={() => handleRevisar([index, item.split('&')[1] == 'x' ? 1 : 0])} 
                    />
                ) 
            }
        </Pregunta>
    )
}

export default UnaRespuestaNew