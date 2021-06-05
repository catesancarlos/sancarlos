import {useState, useEffect} from 'react'
import Pregunta from '../generales/Pregunta'
import BotonToggleNew from '../generales/BotonToggleNew'

const DosRespuestasNew = ({ no, pregunta, respuestas, datos }) => {
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
            if((nota + 1) >= 0) console.log([no, nota + 1])
            else console.log([no, 0])
        } else {
            setNota(nota - 1)
            if((nota - 1) >= 0) console.log([no, nota - 1])
            else console.log([no, 0])
        }
    }

    return (
        <Pregunta no={no} pregunta={enunciado}>
            { 
                opciones.map(item => <BotonToggleNew no={no} largo key={item.id} {...item} onBien={handleCalificar} datos={datos && datos[item.id]}/>) 
            }
        </Pregunta>
    )
}

export default DosRespuestasNew