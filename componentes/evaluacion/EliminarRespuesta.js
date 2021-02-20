import {useState, useEffect} from 'react'
import Pregunta from '../generales/Pregunta'
import BotonToggle from '../generales/BotonToggle'

const EliminarRespuesta = ({ no, pregunta, respuestas, onNota }) => {
    const [enunciado, setEnunciado] = useState(null)
    const [opciones, setOpciones] = useState(null)
    const [nota, setNota] = useState(null)
    
    useEffect(() => {
        setEnunciado(pregunta)
        setOpciones(respuestas)
    }, [enunciado, opciones])

    const handleCalificar = e => {
        if(e == true) {
            setNota(nota + 1)
            if((nota + 1) >= 0) onNota([no, nota + 1])
            else onNota([no, 0])
        } else {
            setNota(nota - 1)
            if((nota - 1) >= 0) onNota([no, nota - 1])
            else onNota([no, 0])
        }
    }

    if(!(enunciado && opciones)) { 
        return <div>Cargando pregunta...</div>
    }

    return (
        <Pregunta no={no} pregunta={enunciado}>
            { 
                opciones.map(item => <BotonToggle eliminar largo key={item.id} {...item} onBien={handleCalificar} />) 
            }
        </Pregunta>
    )
}

export default EliminarRespuesta