import { useState } from 'react'
import Link from 'next/link'
import firebase from '../../services/dBase' 
import AppLayout from '../../componentes/layout/index'

export default function Preguntas({ data }){
    const [pregunta, setPregunta] = useState(null)
    const [enviado, setEnviado] = useState(false)

    const handleOtra = e => {
        setEnviado(false)
    }
    
    const handleSubmit = e => {
        const respuestas  = pregunta.respuestas 
        e.preventDefault()
        respuestas.push(e.target.respuesta.value)
        let refRespuesta = firebase.firestore().collection('2confa').doc(`${pregunta.id}`)
        refRespuesta.update(
            {
                respuestas: respuestas
            }
        )
        setEnviado(true)
    }

    return(
        <AppLayout name='Segundo de Confirmación A' titulo='2 Confirmación A'>
            {
                data.map(pregunta =>
                    <div className='container' key={pregunta.id}>
                        <p className='pregunta'>{pregunta.pregunta}</p>
                        <p className='indicacion'>Escriba su respuesta:</p>
                        {
                            enviado ? 
                                <div className='enviado'>
                                    <p>Respuesta Enviada</p>
                                    <div className='dos-filas'>
                                        <p className='otra' onClick={handleOtra}>Enviar otra</p>
                                        <Link href='/2conf-a/respuestas'>
                                            <a className='otra'>Ver respuestas</a>
                                        </Link>
                                    </div>
                                </div>
                            :
                                <form onSubmit={handleSubmit}>
                                    <textarea className='area' name='respuesta' required></textarea>
                                    <button 
                                        onClick={() => setPregunta({id: pregunta.id, respuestas: pregunta.respuestas})}
                                        className='boton-guardar'
                                    >ENVIAR RESPUESTA</button>
                                </form>
                        }
                    </div>
                )
            }


            <style jsx>{`
                .container{
                    margin: 20px 60px 0 60px;
                    padding: 20px 30px;
                    border: 1px solid white;
                    border-radius: 25px;
                }

                .pregunta{
                    font-size: 30px;
                    font-weight: bold;
                    margin-bottom: 25px;
                }

                .indicacion{
                    color: brown;
                    font-size: 17px;
                    margin-bottom: 12px;
                }

                .enviado{
                    width: 100%;
                    height: 100px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                .dos-filas{
                    display: flex;
                }

                .otra{
                    margin: 10px 5px 0 5px;
                    color: brown;
                    border: 1px solid brown;
                    border-radius: 5px;
                    padding: 5px 10px;
                    cursor: pointer;
                }

                form{
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 15px;
                }

                .area{
                    width: 85%;
                    height: 100px;
                    font-size: 16px;
                    font-family: inherit;
                    outline: none;
                    padding: 5px 8px;
                    border-radius: 5px;
                }

                .boton-guardar{
                    width: 12%;
                    background: #A52A2AAA;
                    padding: 5px 0 3px 0;
                    color: white;
                    font-size: 16px;
                    letter-spacing: 1.5px;
                    border: none;
                    outline: none;
                    border-radius: 10px;
                    cursor: pointer;
                    transition: 0.25s;
                }

                .boton-guardar:hover{
                    background: #A52A2A;
                }


                @media screen and (max-width: 480px){
                    .container{
                        margin: 20px 0;
                        padding: 10px 20px;
                        border: none;
                    }

                    form{
                        display: inline;
                    }
    
                    .area{
                        width: 100%;
                    }
    
                    .boton-guardar{
                        width: auto;
                        margin-top: 10px;
                        padding: 5px 10px;
                        font-size: 15px;
                    }
                }
            `}</style>
        </AppLayout>
    )
}

Preguntas.getInitialProps = async () => {
    const data = await firebase.firestore().collection('2confa').where('activa', '==', true).get()
    .then(snapshota => {
        const preguntas = []
        snapshota.forEach(pregunta => {
            preguntas.push({
                id: pregunta.id,
                pregunta: pregunta.data().pregunta,
                respuestas: pregunta.data().respuestas,
            })
        })
        return preguntas
    })
    return {data}
}  