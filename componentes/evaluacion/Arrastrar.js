import { useState, useEffect } from 'react'
import Pregunta from '../generales/Pregunta'
import Board from '../drag/Board'
import Card from '../drag/Card'

const Drop = ({ no, pregunta, respuestas, contenedores, onNota }) => {
    const [enunciado, setEnunciado] = useState(null)
    const [opciones, setOpciones] = useState(null)
    const [cont, setCont] = useState(null)
    const [ua, setUa] = useState(0)
    const [ub, setUb] = useState(0)
    const [uc, setUc] = useState(0)
    const [ud, setUd] = useState(0)

    useEffect(() => {
        setEnunciado(pregunta)
        setOpciones(respuestas)
        setCont(contenedores)
    }, [enunciado, opciones, cont])

    useEffect(() => {
        onNota([no, ua + ub + uc + ud])
    }, [ua, ub, uc, ud])

    if(!(enunciado && opciones && cont)) { 
        return <div>Cargando pregunta...</div>
    }

    const handleNota = e => {
        if(e[0] == 'a') setUa(e[1])
        if(e[0] == 'b') setUb(e[1])
        if(e[0] == 'c') setUc(e[1])
        if(e[0] == 'd') setUd(e[1])
    }

    return (
        <Pregunta no={no} pregunta={enunciado}>
            <Board id='dr-0' className='cont-respuestas' notaU={handleNota}>
                {
                    opciones.map(item => <Card key={item.id} id={`${item.id}-movil`}>{item.name}</Card> )
                }
            </Board>
            {
                cont.map(item => 
                    <div key={item.id} className='container'>
                        <p className='opcion'>{item.name}</p>
                        <Board id={`${item.id}-dr`} className='board' notaU={handleNota} />
                    </div>
                )
            }
                
            <style jsx>{`
                .container{
                    display: flex;
                    margin: 15px 0 0 0;
                }

                .opcion{
                    background: -webkit-linear-gradient(0deg, rgba(255, 255, 255, 0), white);
                    height: 34px;
                    line-height: 34px;
                    width: 400px;
                    padding-right: 20px;
                    text-align: right;
                }

                @media screen and (max-width: 480px){
                }
            `}</style>
        </Pregunta>
    )
}

export default Drop