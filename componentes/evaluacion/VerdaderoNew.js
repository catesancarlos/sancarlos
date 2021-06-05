import { useState, useEffect } from 'react'
import Pregunta from '../generales/Pregunta'
import BotonNormal from '../generales/BotonNormal'

const VerdaderoNew = ({ no, pregunta, respuestas, datos }) => {
    const [enunciado, setEnunciado] = useState(null)
    const [opciones, setOpciones] = useState(null)
    const [seleccion, setSeleccion] = useState(datos ? datos : sessionStorage.getItem(`p${no}`) ? JSON.parse(sessionStorage.getItem(`p${no}`)) : [null, null])

    useEffect(() => {
        if(seleccion && seleccion[0] != null && !datos) sessionStorage.setItem(`p${no}`, JSON.stringify(seleccion))
    }, [seleccion])

    useEffect(() => {
        setEnunciado(pregunta)
        setOpciones(respuestas)
    }, [enunciado])

    if(!(enunciado && opciones != null)) { 
        return <div>Cargando pregunta...</div>
    }

    const handleRevisar = e => {
        if(!datos){
            if(e == opciones) setSeleccion([1, e])
            else setSeleccion([0, e])
        }
    }

    return (
        <Pregunta no={no} pregunta={enunciado} >
            <div className='opciones'>
                <BotonNormal
                    vf
                    name='Verdadero' 
                    activo={seleccion[1] != null && seleccion[1]}
                    onSeleccion={() => handleRevisar(true)}
                />
                <BotonNormal
                    vf
                    name='Falso' 
                    activo={seleccion[0] != null && !seleccion[1]}
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

export default VerdaderoNew