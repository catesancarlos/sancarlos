import { useState, useEffect } from 'react'
import Pregunta from '../generales/Pregunta'
import BotonNormal from '../generales/BotonNormal'

const Verdadero = ({ no, pregunta, respuestas, onNota }) => {
    const [enunciado, setEnunciado] = useState(null)
    const [opciones, setOpciones] = useState(null)
    const [seleccion, setSeleccion] = useState(null)

    useEffect(() => {
        setEnunciado(pregunta)
        setOpciones(respuestas)
    }, [enunciado])

    if(!(enunciado && opciones != null)) { 
        return <div>Cargando pregunta...</div>
    }

    const handleRevisar = e => {
        setSeleccion(e)
        if(e == opciones) onNota([no, 1])
        else onNota([no, 0])
    }

    return (
        <Pregunta no={no} pregunta={enunciado} >
            <div className='opciones'>
                <BotonNormal
                    vf
                    name='Verdadero' 
                    activo={seleccion != null && seleccion}
                    onSeleccion={() => handleRevisar(true)} 
                />
                <BotonNormal
                    vf
                    name='Falso' 
                    activo={seleccion != null && !seleccion}
                    onSeleccion={() => handleRevisar(false)} 
                />
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

export default Verdadero