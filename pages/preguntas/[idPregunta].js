import { useEffect, useState } from 'react'
import firebase from '../../services/dBase' 
import AppLayout from '../../componentes/layout/index'
import { useRouter } from 'next/router'

export default function Respuestas(){
    const router = useRouter()
    const [datos, setDatos] = useState(null)
    const [ver, setVer] = useState(false)
    const [enviado, setEnviado] = useState(false)

    const getDatos = async () => {
        try{
            firebase.firestore().collection('2confa').doc(`${router.query.idPregunta}`).onSnapshot(
                (doc) => {
                    setDatos(doc.data())
            })
        } catch(error){
            
        }
    }

    useEffect(() => {
        getDatos()
    }, [datos])

    const handleSubmit = e => {
        const respuestas  = datos.respuestas ? datos.respuestas : []
        e.preventDefault()
        respuestas.push(e.target.respuesta.value)
        let refRespuesta = firebase.firestore().collection('2confa').doc(`${router.query.idPregunta}`)
        refRespuesta.update({ respuestas: respuestas })
        setVer(true)
    }

    return(
        <AppLayout titulo='App Preguntas - Cate San Carlos' name='Cate Preguntas' auth>
            {
                datos && 
                <div className='container'>
                    <p className='pregunta'>{datos.pregunta}</p>
                    <div className='dos-filas'>
                        <p className='opcion op-res' onClick={() => {
                            setVer(false)
                            setEnviado(false)
                        }}>Responder</p>
                        <p className='opcion op-ver' onClick={() => setVer(true)}>Ver respuestas</p>
                    </div>
                    {
                        ver ?
                            <>
                                {
                                    (datos.respuestas && datos.respuestas.length > 0) ?
                                        <>
                                            {
                                                datos.respuestas.map(respuesta =>
                                                    <p className='respuesta' key={respuesta}>{respuesta}</p>
                                                )
                                            }
                                        </>
                                    :
                                        <p className='respuesta'>Todavia no hay respuestas.</p>
                                }
                            </>
                        :
                            <>
                                <p className='indicacion'>Escriba su respuesta:</p>
                                        {/* enviado ? 
                                            <div className='enviado'>
                                                <p>Respuesta Enviada</p>
                                                <div className='dos-filas'>
                                                    <p className='otra' onClick={() => setEnviado(false)} >Enviar otra</p>
                                                    <p className='otra' onClick={() => setVer(true)}>Ver respuestas</p>
                                                </div>
                                            </div>
                                        : */}
                                <form onSubmit={handleSubmit} >
                                    <textarea className='area' name='respuesta' required></textarea>
                                    <button className='boton-guardar'>ENVIAR RESPUESTA</button>
                                </form>
                            </>
                        }
                    </div>
            }


            <style jsx>{`
                .container{
                    margin: 20px 60px 50px 60px;
                    padding: 20px 30px;
                    border: 1px solid white;
                    border-radius: 25px;
                }

                .pregunta{
                    font-size: 30px;
                    font-weight: bold;
                    margin-bottom: 25px;
                }

                .dos-filas{
                    width: 300px;
                    display: flex;
                    margin: 0 auto 15px auto;
                }

                .opcion{
                    width: 140px;
                    margin: 0 5px;
                    padding: 7px 10px;
                    color: white;
                    font-size: 18px;
                    text-align: center;
                    border-radius: 10px 10px 0 0;
                    cursor: pointer;
                }

                .op-res{
                    background: ${ver ? '#A52A2A66' : '#A52A2A'};
                }

                .op-ver{
                    background: ${ver ? '#A52A2A' : '#A52A2A66'};
                }

                .respuesta{
                    margin: 10px 0;
                    padding: 5px 10px;
                    background: white;
                    border-radius: 5px;
                }

                .indicacion{
                    font-size: 17px;
                    line-height: 1em;
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

                .otra{
                    width: 130px;
                    margin: 10px 5px 0 5px;
                    color: brown;
                    text-align: center;
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
                    background: #ccdae8;
                    padding: 5px 0 3px 0;
                    color: #A52A2A;
                    font-size: 16px;
                    font-weight: bold;
                    letter-spacing: 1.5px;
                    border: 2px solid #A52A2A;
                    outline: none;
                    border-radius: 10px;
                    cursor: pointer;
                    transition: 0.3s;
                }

                .boton-guardar:hover{
                    background: #A52A2A;
                    color: white;
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
                        padding: 7px 10px 5px 10px;
                        font-size: 15px;
                    }
            `}</style>
        </AppLayout>
    )
}