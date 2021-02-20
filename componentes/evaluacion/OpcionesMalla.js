import {useState, useEffect} from 'react'
import Pregunta from '../generales/Pregunta'
import BotonToggle from '../generales/BotonToggle'

const OpcionesMalla = ({ no, pregunta, respuestas, onNota }) => {
    const [enunciado, setEnunciado] = useState(null)
    const [opciones, setOpciones] = useState(null)
    const [nota, setNota] = useState(null)

    useEffect(() => {
        setEnunciado(pregunta)
        setOpciones(respuestas)
    }, [enunciado])

    if(!(enunciado && opciones)) { 
        return <div>Cargando pregunta...</div>
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
        <Pregunta no={no} pregunta={enunciado} >
            <div className='opciones'>
                { 
                    opciones.map(item => <BotonToggle key={item.id} {...item} onBien={handleCalificar} />) 
                }
            </div>
               
            <style jsx>{`
                .opciones{
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                }
            `}</style>
        </Pregunta>
    )
}

export default OpcionesMalla