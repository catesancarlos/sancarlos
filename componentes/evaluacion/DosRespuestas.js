import {useState, useEffect} from 'react'
import Pregunta from '../generales/Pregunta'
import BotonToggle from '../generales/BotonToggle'

const DosRespuestas = ({ no, pregunta, respuestas, onNota }) => {
    const [enunciado, setEnunciado] = useState(null)
    const [opciones, setOpciones] = useState(null)
    const [nota, setNota] = useState(null)
    
    useEffect(() => {
        setEnunciado(pregunta)
        setOpciones(respuestas)
    }, [enunciado])

    if(!(enunciado && opciones)) { 
        return <div>loading...</div>
    }

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

    return (
        <Pregunta no={no} pregunta={enunciado}>
            { 
                opciones.map(item => <BotonToggle largo key={item.id} {...item} onBien={handleCalificar} />) 
            }
        </Pregunta>
    )
}

export default DosRespuestas