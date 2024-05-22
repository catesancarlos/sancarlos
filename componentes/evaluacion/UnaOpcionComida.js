import { useState, useEffect } from 'react'
import Pregunta from '../generales/Pregunta'
import BotonNormal from '../generales/BotonNormal'

const UnaOpcionComida = ({ prueba, number, label1, respuestas1, datos, onOpcion }) => {
    const [enunciado, setEnunciado] = useState('')
    const [respuestas, setRespuestas] = useState([])
    const [seleccion, setSeleccion] = useState([null, false, false, false, false]/* datos ? datos : sessionStorage.getItem(`p${number}`) ? JSON.parse(sessionStorage.getItem(`p${number}`)) : [null, false, false, false, false] */)

    /* useEffect(() => {
        if(seleccion && seleccion[0] != null && !datos) sessionStorage.setItem(`p${number}`, JSON.stringify(seleccion))
    }, [seleccion]) */

    useEffect(() => {
        if(prueba == 1){
            setEnunciado(label1)
            setRespuestas(respuestas1)
        }
    }, [prueba])

    /* const handleRevisar = e => {
        if(e[0] == 0) setSeleccion([e[1], true, false, false, false])
        if(e[0] == 1) setSeleccion([e[1], false, true, false, false])
        if(e[0] == 2) setSeleccion([e[1], false, false, true, false])
        if(e[0] == 3) setSeleccion([e[1], false, false, false, true])
    } */

    const handlePintar = e => {
        if(e[0] == 0) setSeleccion([e[1], true, false, false, false])
        if(e[0] == 1) setSeleccion([e[1], false, true, false, false])
        if(e[0] == 2) setSeleccion([e[1], false, false, true, false])
        if(e[0] == 3) setSeleccion([e[1], false, false, false, true])
        onOpcion(e[1])
    }

    if(!(respuestas && enunciado)) { 
        return <div>Cargando pregunta...</div>
    }

    return (
        <Pregunta pregunta={enunciado} >
            { 
                respuestas.map((item, index) => 
                    <BotonNormal
                        key={index}
                        name={item.name}
                        activo={seleccion[index+1]} 
                        onSeleccion={() => handlePintar([index, item.id])/* handleRevisar([index, item.name.split('&')[1] == 'x' ? 1 : 0]) */} 
                    />
                ) 
            }
        </Pregunta>
    )
}

export default UnaOpcionComida