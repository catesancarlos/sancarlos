import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import firebase from '../../services/dBase' 
import Link from 'next/link'
import Head from 'next/head'
import Header from '../../componentes/layout/header'
import Footer from '../../componentes/layout/footer2'
import UnaOpcion from '../../componentes/evaluacion/unaOpcion'
import DosOpciones from '../../componentes/evaluacion/dosOpciones'
import PreguntaDrag from '../../componentes/evaluacion/preguntaDrag'
import Eliminar from '../../componentes/evaluacion/eliminar'
import Flechas from '../../componentes/evaluacion/flechas'
import Tiempo from '../../componentes/evaluacion/tiempo'

import preguntas from '../../datos/preguntas'

const Person = ({data}) => {
    const router = useRouter()
    const [login, setLogin] = useState(false)
    const [mal, setMal] = useState(false)
    const [cont, setCont] = useState(false)
    const [veri, setVeri] = useState(false)
    const [final, setFinal] = useState(false)
    
    const [nota1, setNota1] = useState(null)
    const [nota2, setNota2] = useState(null)
    const [nota3, setNota3] = useState(null)
    const [nota4, setNota4] = useState(null)
    const [nota5, setNota5] = useState(null)
    const [nota6, setNota6] = useState(null)
    const [nota7, setNota7] = useState(null)
    const [nota8, setNota8] = useState(null)
    const [nota9, setNota9] = useState(null)
    const [nota10, setNota10] = useState(null)
    const [nota11, setNota11] = useState(null)
    const [nota12, setNota12] = useState(null)
    const [nota13, setNota13] = useState(null)
    const [nota14, setNota14] = useState(null)
    const [nota15, setNota15] = useState(null)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const handleLogin = e => {
        e.preventDefault();
        const { segundo } = event.target.elements;
        const pass = segundo.value.toLowerCase().substr(0,2)
        const word = data.apellido.substr(data.apellido.indexOf(' ')+1, 2).toLowerCase()
        
        if(pass === word){
            if(data.prueba >= 7){
                setMal(false)
                setVeri(true)
            } else {
                segundo.value = "Cargando...";
                setMal(false)
                setLogin(true)
                setCont(true) 
            }
        } else {
            segundo.value = "";
            setMal(true)
        } 
    }

    const handleCalificar = e => {
        if(e[0] == 1){setNota1(e[1])}
        if(e[0] == 2){setNota2(e[1])}
        if(e[0] == 3){setNota3(e[1])}
        if(e[0] == 4){setNota4(e[1])}
        if(e[0] == 5){setNota5(e[1])}
        if(e[0] == 6){setNota6(e[1])}
        if(e[0] == 7){setNota7(e[1])}
        if(e[0] == 8){setNota8(e[1])}
        if(e[0] == 9){setNota9(e[1])}
        if(e[0] == 10){setNota10(e[1])}
        if(e[0] == 11){setNota11(e[1])}
        if(e[0] == 12){setNota12(e[1])}
        if(e[0] == 13){setNota13(e[1])}
        if(e[0] == 14){setNota14(e[1])}
        if(e[0] == 15){setNota15(e[1])}
    }

    const handleTimeOut = e => {
        if(e == true) {
            setFinal(true)
            handleTerminar()
        }
    }

    const handleTerminar = e => {
        firebase.firestore().collection(`${router.query.evaluacion}`).doc(`${router.query.person}`).set(
            {
                recuperacion: Math.round((nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7 + 
                    nota8 + nota9 + nota10 + nota11 + nota12 + nota13 + nota14 + nota15)/2), 
            },
            {merge: true}
        )
        firebase.firestore().collection(`${router.query.evaluacion}`).doc(`${router.query.person}`).update(
            {dio: true}
        )
    }

    return (
        <div className='page-eval' id={final ? 'cont-fixed' : ''}>
            <Head>
                <title>Cate San Carlos - Evaluación</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap" rel="stylesheet"></link>
            </Head>

            <Header name={`${data.nombre} ${data.apellido}`} />

            {cont && <Tiempo timeOut={handleTimeOut} fin={final} conteo={cont} />}

            {
                login ?
                <>
                    <div className='cont-prueba'>
                        <Flechas alumno={data.id} no={1} datos={preguntas[13]} onNota={handleCalificar} />
                        <Eliminar alumno={data.id} no={2} datos={preguntas[11]} onNota={handleCalificar} />
                        <UnaOpcion alumno={data.id} no={3} datos={preguntas[0]} onNota={handleCalificar} />
                        <UnaOpcion alumno={data.id} no={4} datos={preguntas[1]} onNota={handleCalificar} />
                        <DosOpciones alumno={data.id} no={5} datos={preguntas[4]} onNota={handleCalificar} />
                        <UnaOpcion alumno={data.id} no={6} datos={preguntas[2]} onNota={handleCalificar} />
                        <UnaOpcion alumno={data.id} no={7} datos={preguntas[3]} onNota={handleCalificar} />
                        <UnaOpcion alumno={data.id} no={8} datos={preguntas[5]} onNota={handleCalificar} />
                        <Eliminar alumno={data.id} no={9} datos={preguntas[6]} onNota={handleCalificar} />
                        <UnaOpcion alumno={data.id} no={10} datos={preguntas[7]} onNota={handleCalificar} />
                        <DosOpciones alumno={data.id} no={11} datos={preguntas[8]} onNota={handleCalificar} />
                        <UnaOpcion alumno={data.id} no={12} datos={preguntas[9]} onNota={handleCalificar} />
                        <UnaOpcion alumno={data.id} no={13} datos={preguntas[10]} onNota={handleCalificar} />
                        {
                            (screen.availWidth > 480) ? 
                            <PreguntaDrag no={14} onNota={handleCalificar} />
                            :
                            <UnaOpcion alumno={data.id} no={14} datos={preguntas[14]} onNota={handleCalificar} />
                        } 
                        <UnaOpcion alumno={data.id} no={15} datos={preguntas[12]} onNota={handleCalificar} />
                    </div>

                    <div 
                        className='enviar-boton'
                        onClick={() => {
                            setFinal(true)
                            handleTerminar()
                        }}
                    >
                        Terminar y Enviar
                    </div>

                    {final &&
                        <div className='modal-final'> 
                            <div className='claves'>
                                <p className='indicacion-final'>Su evaluación a finalizado</p>
                                <div className='label-final'>
                                    <p>Nombre:</p>
                                    <p className='nombre-final'>{`${data.nombre} ${data.apellido}`}</p>
                                </div>
                                <div className='label-final'>
                                    <p>Calificación:</p>
                                    <p className='nota-final'>{`
                                        ${Math.round((nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7 + nota8 + nota9 + nota10 + nota11 + nota12 
                                        + nota13 + nota14 + nota15)/2)}/10`}
                                    </p>
                                </div>
                                <Link href='/'>
                                <a><p className='finalizar'>Finalizar</p></a>
                                </Link>
                            </div>
                        </div>
                    }
                </>
                :   !veri ?
                    <form onSubmit={handleLogin} className='form-clave'>
                        <p className='claves-nombre'>
                            {`${data.apellido.substring(0, data.apellido.indexOf(' '))} ${data.nombre}`}
                        </p>
                        {
                            data.dio ? 
                            <>
                                <p className='claves-pulse'>Usted ya dio la Evaluación</p>
                                <p className='claves-pulse'>{`Nota: ${data.recuperacion}/10`}</p>
                                <div 
                                    className='boton'
                                    onClick={() => router.push('/')}
                                >Salir</div>
                            </>
                            :
                            <>
                                <p className='claves-pulse'>Escriba su segundo apellido y pulse en ingresar</p>
                                <input className='input' name='segundo' />
                                {mal && <p className='incorrecto'>Incorrecto</p>}
                                <button className='boton'>Ingresar</button>
                            </>
                        }
                        
                    </form>
                    :
                    <div className='form-clave'>
                        <p className='claves-pulse'>{`Su nota de ${data.prueba}/10 es superior a la requerida, no es necesario que de la evaluación de recuperacion.`}</p>
                        <div style={{display: 'flex'}}>
                            <p 
                                className='verif'
                                onClick={() => router.push('/')}
                            >Salir</p>
                            <p 
                                className='verif'
                                onClick={() => {
                                    setLogin(true)
                                    setCont(true) 
                                }}
                            >Quiero mejorar mi nota</p>
                        </div>
                    </div>
            }

            

            <Footer />

            <style jsx>{`
                .page-eval{
                    background-color: #ccdae8;
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                }

                #cont-fixed{
                    position: fixed;
                    width: 100%
                }

                .nota{
                    position: fixed;
                }

                .enviar-boton{
                    width: 62%;
                    background: brown;
                    font-size: 25px;
                    font-weight: bold;
                    margin: 30px auto 100px auto;
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
                    font-size: 1.2em;
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

                .form-clave{
                    background: white;
                    width: 30%;
                    margin: 30px auto;
                    font-size: 26px;
                    padding: 30px;
                    border-radius: 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }              

                .claves-nombre{
                    color: brown;
                    font-weight: bold;
                    padding-bottom: 20px;
                }

                .claves-pulse{
                    font-size: 18px;
                    padding-bottom: 20px;
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
                    padding: 10px 80px;
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


                @media screen and (max-width: 480px){
                    .cont-prueba{
                        background: white;
                        border-radius: 20px;
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

                    .form-clave{
                        width: 60%;
                        margin: 20px auto;
                        font-size: 22px;
                        padding: 25px;
                    }              
    
                    .claves-pulse{
                        font-size: 16px;
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

            <style jsx global>{`
                body {
                    margin: 0;
                    padding: 0;
                    font-family: 'Lato', sans-serif;
                    font-weight: 300;
                }

                a{
                    color: black;
                    text-decoration: none;
                }

                p{
                    margin: 0;
                }
            `}</style>
        </div> 
    )
}

Person.getInitialProps = async ({query}) => {
    const data = await firebase.firestore().collection(`${query.evaluacion}`).doc(`${query.person}`).get()
    .then(alumno => {
        return (alumno.data())
    })
    
    return {data}
} 

export default Person;