import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import AppLayout from '../../../componentes/layout'
import Footer from '../../../componentes/layout/footer'
import Card from '../../../componentes/layout/Card'
import Evaluacion from '../../../componentes/evaluacion/Evaluacion'

import db  from '../../../services/dBase'
import { doc, collection, getDoc, getDocs, updateDoc } from 'firebase/firestore'


export default function Persona({ alumno, preguntas }){
    const router = useRouter()
    const [sesion, setSesion] = useState(false)
    const [mal, setMal] = useState(false)
    const [final, setFinal] = useState(false)
    const [envio, setEnvio] = useState(null)
    const [nota, setNota] = useState(0)
    const [cont, setCont] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0);
        var hoy = new Date()
        var hora = hoy.getHours() < 10 ? `0${hoy.getHours()}` : hoy.getHours()
        var min = hoy.getMinutes() < 10 ? `0${hoy.getMinutes()}` : hoy.getMinutes()
        sessionStorage.setItem(`inicio`, `${hora}:${min}`)
    }, [])

    useEffect(() => {
        if((sessionStorage.getItem('sesion') && sessionStorage.getItem('sesion') == router.query.persona) || sessionStorage.getItem('sesion') == 'catequista'){
            setSesion(sessionStorage.getItem('sesion'))
        } 
    }, [sesion])


    const handleLogin = e => {
        e.preventDefault();
        const { segundo } = e.target.elements;
        const pass = segundo.value.toLowerCase().substr(0,4)
        const word = alumno.clave.substr(0, 4).toLowerCase()
        
        if(pass === word){
            segundo.value = "Cargando...";
            setMal(false)
            setSesion(router.query.persona)
            sessionStorage.setItem('sesion', router.query.persona)
            const productoRef = doc(db, `${router.query.paralelo}`, `${router.query.persona}`)
            updateDoc(productoRef, { curso: true })
        } else {
            segundo.value = "";
            setMal(true)
        } 
    }

    const handleTerminar = e => {
        var hoy = new Date()
        var hora = hoy.getHours() < 10 ? `0${hoy.getHours()}` : hoy.getHours()
        var min = hoy.getMinutes() < 10 ? `0${hoy.getMinutes()}` : hoy.getMinutes()
        setFinal(true)
        setEnvio(`${hora}:${min}`)
        setNota((/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) ? Math.round(e*10/20) : Math.round(e*10/22))
        if(router.query.persona !== 'catequista') {
            const productoRef = doc(db, `${router.query.paralelo}`, `${router.query.persona}`)
            updateDoc(productoRef, { 
                curso: false, 
                ev1: Math.round((/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) ? Math.round(e*10/20) : Math.round(e*10/22)),
                inicioev1: sessionStorage.getItem('inicio') && sessionStorage.getItem('inicio'),
                envioev1: `${hora}:${min}`,
                mobile1: (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) ? true : false
            })
        }
    }

    const handleFinalizar = e => {
        sessionStorage.clear()
        router.push('/')
    }

    return (
        <AppLayout
            titulo={`${alumno.nombre} ${alumno.apellido.substr(0, alumno.apellido.indexOf(' '))}`}
            name={`${alumno.nombre} ${alumno.apellido.substr(0, alumno.apellido.indexOf(' '))}`}
            flecha={sesion == false || sesion == 'catequista'}
        >
            <div className='container'>
                {
                    ((sesion && !(alumno.ev1 || alumno.ev2 == 0)) || sesion == 'catequista') ?
                    <>
                        <Evaluacion
                            preguntas={preguntas}
                            alumno={alumno}
                            prueba={alumno.no % 3}
                            sesion={sesion}
                            fin={final}
                            onTerminar={handleTerminar} 
                            paralelo={router.query.paralelo}
                            persona={router.query.persona}
                        />

                        {final &&
                            <div className='modal-final'> 
                                <div className='claves'>
                                    <p className='indicacion-final'>Su evaluación a finalizado</p>
                                    <p className='indicacion-final'>{`Enviada a las: ${envio}`}</p>
                                    <div className='label-final'>
                                        <p>Nombre:</p>
                                        <p className='nombre-final'>{`${alumno.nombre} ${alumno.apellido}`}</p>
                                    </div>
                                    <div className='label-final'>
                                        <p>Calificación:</p>
                                        <p className='nota-final'>{`${nota}/10`}</p>
                                    </div>
                                    <p className='finalizar' onClick={handleFinalizar}>Finalizar</p>
                                </div>
                            </div>
                        }
                    </>
                    :
                        <Card
                            nombre={`${alumno.nombre} ${alumno.apellido.substring(0, alumno.apellido.indexOf(' '))}`}
                            info={
                                (alumno.ev1 || alumno.ev1 == 0) ? 
                                    `Usted ya dio la Evaluación: ${alumno.ev1}/10` :  
                                'Escriba su segundo apellido y pulse en ingresar'
                            }
                        >
                            {
                                (alumno.ev1 || alumno.ev1 == 0) ?
                                    <div 
                                        className='boton'
                                        onClick={() => router.push('/')}
                                    >Salir</div>
                                :
                                    <form onSubmit={handleLogin}>
                                        <input className='input' name='segundo' />
                                        {mal && <p className='incorrecto'>Incorrecto</p>}
                                        <button className='boton'>Ingresar</button>
                                    </form>   
                            }
                        </Card>
                        
                }
            </div> 

            <Footer />

            <style jsx>{`
                .container{
                    display: flex;
                    position: ${final ? 'fixed' : 'relative'};
                    flex-direction: column;
                    min-height: calc(100vh - 205px);
                    width: 100%;
                }

                .enviar-boton{
                    width: 62%;
                    background: brown;
                    font-size: 25px;
                    font-weight: bold;
                    margin: 30px auto 70px auto;
                    text-align: center;
                    color: white;
                    padding: 15px 0;
                    border-radius: 30px;
                    cursor: pointer;
                }

                .modal-final{
                    position: fixed;
                    top: 0;
                    left: 0;
                    background: rgba(0, 0, 0, 0.75);
                    width: 100%;
                    height: 100vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    font-size: 26px;
                    z-index: 5;
                }

                .claves{
                    padding: 30px;
                    background: white;
                    border-radius: 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    font-size: 25px;
                }

                .indicacion-final{
                    margin-bottom: 10px;
                    font-size: 1em;
                }
                
                .label-final{
                    margin-top: 10px;
                    display: flex;
                }

                .nombre-final{
                    font-weight: bold;
                    padding-left: 8px;
                }

                .nota-final{
                    font-size: 1.15em;
                    font-weight: bold;
                    padding-left: 8px;
                    color: brown;
                }

                .finalizar{
                    margin-top: 30px;
                    letter-spacing: 2px;
                    padding: 10px 40px;
                    background: brown;
                    color: white;
                    border-radius: 30px;
                    cursor: pointer;
                }

                form{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .input{
                    height: 35px;
                    width: 70%;
                    font-size: 22px;
                    text-align: center;
                    border: none;
                    outline:none;
                    border-bottom: 2px solid black;
                    margin-bottom: 10px;
                }

                .incorrecto{
                    color: red;
                    font-size: 20px;
                }

                .boton{
                    margin-top: 20px;
                    font-size: 25px;
                    color: white;
                    padding: 8px 60px;
                    background: brown;
                    border-radius: 30px;
                    border: none;
                    outline:none;
                    cursor: pointer;
                    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                }

                .verif{
                    background: brown;
                    margin: 0 10px;
                    padding: 5px 10px;
                    min-width: 100px;
                    color: white;
                    font-size: 18px;
                    border-radius: 30px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    cursor: pointer;
                    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                }


                @media screen and (max-width: 768px){
                    .container{
                        background: ${sesion ? 'white' : 'transparent'};
                        border-radius: 20px 20px 25px 25px;
                        margin-bottom: 40px;
                    }

                    .claves{
                        margin: 0 30px;
                        padding: 30px;
                        font-size: 20px;
                    }

                    .indicacion-final{
                        font-size: 1em;
                    }

                    .enviar-boton{
                        width: 90%;
                    }
    
                    .input{
                        height: 35px;
                        width: 70%;
                        font-size: 22px;
                    }
    
                    .incorrecto{
                        color: red;
                        font-size: 20px;
                    }
    
                    .boton{
                        font-size: 20px;
                        padding: 10px 50px;
                    }

                    .verif{
                        margin: 0 5px;
                        padding: 5px 10px;
                        min-width: 60px;
                        font-size: 12px;
                        border-radius: 15px;
                    }
                }
            `}</style>
        </AppLayout>
    )
}

export async function getServerSideProps (context) {
    const { params, res } = context
    const { paralelo, persona } = params

    if(persona !== 'catequista'){
        const alumno = await getDoc(doc(db, paralelo, persona))
        .then(alum => {
            return (alum.data())
        })

        const preguntas = await getDocs(collection(db, 'evmitad22'))
        .then(snapshota => {
            const questions = [];
            snapshota.forEach(preg => {
                questions.push(preg.data())
            })
            return (questions)
        })

        return {
            props : { alumno, preguntas }
        }
    } else {
        const data = {
            id: 3,
            user: 'catequista',
            nombre: 'Catequista',
            apellido: 'Confirmación 4000'
        }
        return {
            props : { data }
        }
    }
}