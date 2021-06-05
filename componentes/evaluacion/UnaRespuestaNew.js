import { useState, useEffect } from 'react'
import Pregunta from '../generales/Pregunta'
import BotonNormal from '../generales/BotonNormal'

const UnaRespuestaNew = ({ no, pregunta, respuestas, datos }) => {
    const [enunciado, setEnunciado] = useState(null)
    const [opciones, setOpciones] = useState(null)
    const [seleccion, setSeleccion] = useState(datos ? datos : sessionStorage.getItem(`p${no}`) ? JSON.parse(sessionStorage.getItem(`p${no}`)) : [false, false, false, false, null])

    useEffect(() => {
        if(seleccion && seleccion[0] != null && !datos) sessionStorage.setItem(`p${no}`, JSON.stringify(seleccion))
    }, [seleccion])
    
    useEffect(() => {
        setEnunciado(pregunta)
        setOpciones(respuestas)
    }, [enunciado])

    if(!(enunciado && opciones)) { 
        return <div>Cargando pregunta...</div>
    }

    const handleRevisar = e => {
        if(!datos){
            if(e[0] == 0) setSeleccion([e[1], true, false, false, false])
            if(e[0] == 1) setSeleccion([e[1], false, true, false, false])
            if(e[0] == 2) setSeleccion([e[1], false, false, true, false])
            if(e[0] == 3) setSeleccion([e[1], false, false, false, true])
        }
    }

    return (
        <Pregunta no={no} pregunta={enunciado} >
            { 
                opciones.map(item => 
                    <BotonNormal
                        key={item.id}
                        name={item.name} 
                        activo={seleccion[item.id+1]} 
                        onSeleccion={() => handleRevisar([item.id, item.estado == true ? 1 : 0])} 
                    />
                ) 
            }
        </Pregunta>
    )
}

export default UnaRespuestaNew