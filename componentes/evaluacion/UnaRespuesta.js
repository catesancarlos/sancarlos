import { useState, useEffect } from 'react'
import Pregunta from '../generales/Pregunta'
import BotonNormal from '../generales/BotonNormal'

const UnaRespuesta = ({ no, pregunta, respuestas, onNota }) => {
    const [enunciado, setEnunciado] = useState(null)
    const [opciones, setOpciones] = useState(null)
    const [seleccion, setSeleccion] = useState([false, false, false, false, null])

    useEffect(() => {
        setEnunciado(pregunta)
        setOpciones(respuestas)
    }, [enunciado])

    if(!(enunciado && opciones)) { 
        return <div>Cargando pregunta...</div>
    }

    const handleRevisar = e => {
        if(e[0] == 0) setSeleccion([true, false, false, false, e[1]])
        if(e[0] == 1) setSeleccion([false, true, false, false, e[1]])
        if(e[0] == 2) setSeleccion([false, false, true, false, e[1]])
        if(e[0] == 3) setSeleccion([false, false, false, true, e[1]])
        onNota([no, e[1]])
    }

    return (
        <Pregunta no={no} pregunta={enunciado} >
            { 
                opciones.map(item => 
                    <BotonNormal
                        key={item.id}
                        name={item.name} 
                        activo={seleccion[item.id]} 
                        onSeleccion={() => handleRevisar([item.id, item.estado == true ? 1 : 0])} 
                    />
                ) 
            }
        </Pregunta>
    )
}

export default UnaRespuesta