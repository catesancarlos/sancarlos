import { useState, useEffect } from 'react'
import Pregunta from '../generales/Pregunta'
import GrupoVerdadero from '../generales/GrupoVerdadero'

const Verdadero = ({ no, pregunta, respuestas, onNota }) => {
    const [enunciado, setEnunciado] = useState(null)
    const [opciones, setOpciones] = useState(null)
    
    const [ua, setUa] = useState(0)
    const [ub, setUb] = useState(0)
    const [uc, setUc] = useState(0)
    const [ud, setUd] = useState(0)

    useEffect(() => {
        setEnunciado(pregunta)
        setOpciones(respuestas)
    }, [enunciado])

    useEffect(() => {
        onNota([no, ua + ub + uc + ud])
    }, [ua, ub, uc, ud])

    if(!(enunciado && opciones != null)) { 
        return <div>Cargando pregunta...</div>
    }

    const handleNota = e => {
        if(e[0] == '0') setUa(e[1])
        if(e[0] == '1') setUb(e[1])
        if(e[0] == '2') setUc(e[1])
        if(e[0] == '3') setUd(e[1])
    }

    return (
        <Pregunta no={no} pregunta={enunciado} >
            {
                opciones.map(item => <GrupoVerdadero key={item.id} {...item} onBien={handleNota} /> )
            }
        </Pregunta>
    )
}

export default Verdadero