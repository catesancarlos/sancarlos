import {useState, useEffect} from 'react'
import Pregunta from '../generales/Pregunta'
import BotonToggleNew from '../generales/BotonToggleNew'

const EliminarRespuesta = ({ prueba, number, label1, label2, label3, respuestas1, respuestas2, respuestas3, datos }) => {
    const [enunciado, setEnunciado] = useState(null)
    const [respuestas, setRespuestas] = useState(null)
    
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

    if(!(enunciado && respuestas)) { 
        return <div>Cargando pregunta...</div>
    }

    return (
        <Pregunta no={number} pregunta={enunciado}>
            { 
                respuestas.map((item, index) => <BotonToggleNew no={number} key={item} id={index} name={item} datos={datos && datos[index]} eliminar largo />) 
            }
        </Pregunta>
    )
}

export default EliminarRespuesta