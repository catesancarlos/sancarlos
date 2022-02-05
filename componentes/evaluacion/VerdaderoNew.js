import { useState, useEffect } from 'react'
import Pregunta from '../generales/Pregunta'
import BotonNormal from '../generales/BotonNormal'

const VerdaderoNew = ({ prueba, number, label1, label2, label3, respuestas1, respuestas2, respuestas3, datos }) => {
    const [enunciado, setEnunciado] = useState(null)
    const [respuestas, setRespuestas] = useState(null)
    const [seleccion, setSeleccion] = useState(datos ? datos : sessionStorage.getItem(`p${number}`) ? JSON.parse(sessionStorage.getItem(`p${number}`)) : [null, null])

    useEffect(() => {
        if(seleccion && seleccion[0] != null && !datos) sessionStorage.setItem(`p${number}`, JSON.stringify(seleccion))
    }, [seleccion])

    useEffect(() => {
        if(prueba == 1){
            setEnunciado(label1)
            setRespuestas(respuestas1)
        }
        if(prueba == 2){
            setEnunciado(label2)
            setRespuestas(respuestas2)
        }
        if(prueba == 0){
            setEnunciado(label3)
            setRespuestas(respuestas3)
        }
    }, [prueba])

    if(!(enunciado && respuestas != null)) { 
        return <div>Cargando pregunta...</div>
    }

    const handleRevisar = e => {
        console.log(e)
        if(!datos){
            if(e == respuestas) setSeleccion([1, e])
            else setSeleccion([0, e])
        }
    }

    return (
        <Pregunta no={number} pregunta={enunciado} >
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