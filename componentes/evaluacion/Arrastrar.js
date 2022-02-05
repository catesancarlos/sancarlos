import { useState, useEffect } from 'react'
import Pregunta from '../generales/Pregunta'
import Board from '../drag/board'
import Card from '../drag/card'

const Drop = ({ number, label1, respuestas1, contenedores1, datos }) => {
    const [enunciado, setEnunciado] = useState(null)
    const [respuestas, setRespuestas] = useState([])
    const [cont, setCont] = useState(null)

    useEffect(() => {
        setEnunciado(label1)
        setRespuestas(respuestas1)
        setCont(contenedores1)
    }, [enunciado, respuestas, cont])

    if(!(enunciado && respuestas && cont)) { 
        return <div>Cargando pregunta...</div>
    }

    return (
        <Pregunta no={number} pregunta={enunciado}>
                <Board id='dr-0' className='cont-respuestas' >
                    {
                        respuestas.map(item => <Card key={item} id={item} >{item}</Card> )
                    }
                </Board>
                {
                    cont.map((item, index) => 
                        <div key={item} className='container'>
                            <p className='opcion'>{item.split('&')[0]}</p>
                            <Board no={number} id={item} index={index} className='board' datos={datos && datos[index]} />
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