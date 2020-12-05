import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import firebase from '../../../services/dBase'
import AppLayout from '../../../componentes/layout'
import Tiempo from '../../../componentes/evaluacion/tiempo'
import Flechas from '../../../componentes/evaluacion/flechas'
import UnaOpcion from '../../../componentes/evaluacion/unaOpcion'
import DosOpciones from '../../../componentes/evaluacion/dosOpciones'
import Eliminar from '../../../componentes/evaluacion/eliminar'
/* import PreguntaDrag from '../../../componentes/evaluacion/preguntaDrag' */
import Footer from '../../../componentes/layout/footer'

import preguntas from '../../../datos/leccion'


export default function Persona({data}){
    const router = useRouter()
    const [user, setUser] = useState(null)
    const [ind, setInd] = useState(0)
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

    useEffect(() => {
        /* firebase.auth().onAuthStateChanged(firebaseUser => {
            setUser(firebaseUser)
        }) */
        if(data.id % 3 == 1) setInd(0)
        if(data.id % 3 == 2) setInd(7)
        if(data.id % 3 == 0) setInd(14)
    }, [ind]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [login]);


    const handleLogin = e => {
        e.preventDefault();
        const { segundo } = e.target.elements;
        const pass = segundo.value.toLowerCase().substr(0,4)
        const word = data.apellido.substr(data.apellido.indexOf(' ')+1, 4).toLowerCase()
        
        if(pass === word){
            if(data.leccion >= 7){
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
    }

    const handleTimeOut = e => {
        if(e == true) {
            setFinal(true)
            handleTerminar()
        }
    }

    const handleTerminar = () => {
        if(router.query.persona !== 'catequista'){
            firebase.firestore().collection(`${router.query.paralelo}`).doc(`${router.query.persona}`).update(
                {
                    dio: true,
                    leccion: Math.round((nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7)/2)
                }
            )
        }
    }

    return (
        <AppLayout
            titulo={`${data.nombre} ${data.apellido.substr(0, data.apellido.indexOf(' '))}`}
            name={`${data.nombre} ${data.apellido.substr(0, data.apellido.indexOf(' '))}`}
            flecha={!login}
        >
            <div className='container'>
                {cont && <Tiempo timeOut={handleTimeOut} fin={final} conteo={cont} />}

                {
                    login ?
                    <>
                        <div className='cont-prueba'>
                            <Flechas no={1} datos={preguntas[ind+0]} onNota={handleCalificar} />
                            <Eliminar no={2} datos={preguntas[ind+1]} onNota={handleCalificar} />
                            <UnaOpcion no={3} datos={preguntas[ind+2]} onNota={handleCalificar} />
                            <DosOpciones no={4} datos={preguntas[ind+3]} onNota={handleCalificar} />
                            <UnaOpcion no={5} datos={preguntas[ind+4]} onNota={handleCalificar} />
                            <UnaOpcion no={6} datos={preguntas[ind+5]} onNota={handleCalificar} />
                            <Flechas no={7} datos={preguntas[ind+6]} onNota={handleCalificar} />
                            {/* <PreguntaDrag no={7} onNota={handleCalificar} /> */}
                        </div>
                        {console.log(nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7)}

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
                                            ${Math.round((nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7)/2)}/10`}
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
                                {`${data.nombre} ${data.apellido.substring(0, data.apellido.indexOf(' '))}`}
                            </p>
                            {
                                data.dio ? 
                                <>
                                    <p className='claves-pulse'>Usted ya dio la Evaluación</p>
                                    <p className='claves-pulse' style={{ fontWeight: 'bold'}}>{`Nota: ${data.leccion}/10`}</p>
                                    <div 
                                        className='boton'
                                        onClick={() => router.push('/')}
                                    >Salir</div>
                                </>
                                :
                                <>
                                    {/* <p className='claves-pulse'>Escriba su segundo apellido y pulse en ingresar</p> */}
                                    <p className='claves-pulse'>{data.user == 'catequista' ? 'Escriba 4000 y pulse en ingresar' : 'Escriba su segundo apellido y pulse en ingresar'}</p>
                                    <input className='input' name='segundo' />
                                    {mal && <p className='incorrecto'>Incorrecto</p>}
                                    <button className='boton'>Ingresar</button>
                                </>
                            }
                            
                        </form>
                        :
                        <div className='form-clave'>
                            <p className='claves-pulse'>{`Su nota de ${data.leccion}/10 es superior a la requerida, no es necesario que de la evaluación de recuperacion.`}</p>
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
                    .container{
                        background: ${login ? 'white' : 'transparent'};
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
                        width: 90%;
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
        </AppLayout>
    )
}

Persona.getInitialProps = async ({query}) => {
    if(query.persona !== 'catequista'){
        const data = await firebase.firestore().collection(`${query.paralelo}`).doc(`${query.persona}`).get()
        .then(alumno => {
            return (alumno.data())
        })
        return {data}
    } 
    else {
        const data = {
            id: 3,
            user: 'catequista',
            nombre: 'Catequista',
            apellido: 'Confirmación 4000'

        }
        return {data}
    }
} 