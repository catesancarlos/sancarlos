import {useState, useEffect} from 'react'
import {IoIosCheckmarkCircle} from 'react-icons/io'
import { useRouter } from 'next/router'
import AppLayout from '../../../componentes/layout'
import Footer from '../../../componentes/layout/footer2'

import db  from '../../../services/dBase'
import { getDoc, doc, updateDoc } from 'firebase/firestore'
import UnaOpcionComida from '../../../componentes/evaluacion/UnaOpcionComida'

const respuestas1 = [
    {
        id: 1,
        name: 'Los padres se integraran a la convivencia aproximadamente al medio día, por lo que ellos llevaran el almuerzo a su hijo.',
        estado: false
    },
    {
        id: 2,
        name: 'El alumno llevara su almuerzo desde la mañana.',
        estado: true
    },
    {
        id: 3,
        name: 'Los PPFF cobraran una cuota que servira para preparar el almuerzo de todo el grupo.',
        estado: false
    },
    {
        id: 4,
        name: 'Se preparara el almuerzo de todo el grupo, aceptando donaciones de ingredientes de los PPFF.',
        estado: false
    }
]

const NivelDatos = ({ alumno }) => {
    const router = useRouter()

    const [dos, setDos] = useState(false)
    const [login, setLogin] = useState(false)
    const [mal, setMal] = useState(false)
    const [name, setName] = useState(null)
    const [opcionC, setOpcionC] = useState(null)
    const [final, setFinal] = useState(false)
    const [comi, setComi] = useState(null)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleLogin = e => {
        e.preventDefault();
        const { segundo } = event.target.elements;
        const pass = segundo.value.toLowerCase().substr(0,2)
        const word = alumno.apellido.substr(alumno.apellido.indexOf(' ')+1, 2).toLowerCase()
        
        if(pass === word){
            segundo.value = "Cargando...";
            setMal(false)
            setLogin(true) 
        } else {
            segundo.value = "";
            setMal(true)
        } 
    }

    const handleActualizarComida = e => {
        e.preventDefault()
        setComi(...respuestas1.filter(opcion => opcion.id == opcionC))
        setFinal(true)
    }

    const handleGuardar = () => {
        const productoRef = doc(db, `${router.query.paralelo}`, `${alumno.user}`)

        if(opcionC) {
            updateDoc(productoRef, { 
                comida: opcionC
            })
        }
        router.push('/')
    }

    const handleSalir = e => {
        e.preventDefault()
        setLogin(false)
        /* firebase.auth().signOut() */
        router.push('/')
    }

    return (
        <>
            <AppLayout pagina='' titulo='San Carlos - Confirmación' >
                {
                    login ?
                    <div className='perfil'>
                        <div className='container'>
                            <div className='cont-nombre'>
                                <p className='nombre' >
                                    {
                                        name == null ? `${alumno.nombre} ${alumno.apellido} `
                                        : `${name} `
                                    }
                                    {
                                        /* (alumno.aprobado && !alumno.fe) && <IoIosCheckmarkCircle style={{color: 'green'}} /> */
                                    }
                                </p>
                                <p 
                                    className='salir'
                                    onClick={handleSalir}
                                >Salir</p>
                            </div>    
                        </div>
                            
                        <div className='edicion'>
                            <form onSubmit={handleActualizarComida} className='item-edicion'>
                               {/*  <p className='info-edit'>Elige la que consideres la mejor opción para el almuerzo de nuestra Convivencia</p>
                                    <>
                                        <p className='solo'>1 Los padres se integraran a la convivencia aproximadamente al medio día, por lo que ellos llevaran el almuerzo para su hijo.</p>
                                        <p className='solo'>2 El alumno llevara su almuerzo desde la mañana.</p>
                                        <p className='solo'>3 Los PPFF cobraran una cuota que servira para preparar el almuerzo de todo el grupo.</p>
                                        <p className='solo'>4 Se preparara el almuerzo de todo el grupo, aceptando donaciones de ingredientes de los PPFF.</p>
                                        <button className='boton-edit'>Guardar</button>
                                    </> */}
                                <UnaOpcionComida
                                    prueba={1}
                                    label1='Elige la que consideres la mejor opción para el almuerzo de nuestra Convivencia'
                                    respuestas1={respuestas1}
                                    onOpcion={(e) => setOpcionC(e)}
                                />
                                <button className='boton-edit'>Guardar</button>
                            </form>
                        </div>
                    </div>
                    :
                    <form onSubmit={!alumno.comida ? handleLogin : handleSalir} className='form-clave'>
                        <p className='claves-nombre'>
                            {`${alumno.apellido.substring(0, alumno.apellido.indexOf(' '))} ${alumno.nombre}`}
                        </p>
                        <p className='claves-pulse'>{alumno.comida ? 'Usted ya ingreso su información' : 'Escriba su segundo apellido y pulse en ingresar'}</p>
                        <p className='claves-pulse chico'>{alumno.comida && 'Si desea cambiarlo comuniquselo a su catequista'}</p>
                        {!alumno.comida && <input className='input' name='segundo' /> }
                        {mal && <p className='incorrecto'>Incorrecto</p>}
                        <button className='boton'>{alumno.comida ? 'Salir' : 'Ingresar'}</button>
                    </form>
                }
                {final &&
                    <div className='modal-final'> 
                        <div className='claves'>
                            <p className='indicacion-final'>La informacion a enviar es la siguiente:</p>
                            <div className='label-final'>
                                <p>Nombre:</p>
                                <p className='nombre-final'>{`${alumno.nombre} ${alumno.apellido}`}</p>
                            </div>
                            <div className='label-final'>
                                <p>Opción:</p>
                                <p className='nota-final'>{comi.name}</p>
                            </div>
                            <div className='finalin'> 
                                <p className='finalizar finwait' onClick={() => setFinal(false)}>Cerrar</p>
                                <p className='finalizar' onClick={handleGuardar}>Enviar</p>
                            </div>
                        </div>
                    </div>
                }
                <Footer /> 
            </AppLayout>

            <style jsx>{`
                .page-eval{
                    background-color: #ccdae8;
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                }

                .perfil{
                    background: white;
                    width: 75%;
                    margin: 0 auto 80px auto;
                    border-radius: 30px;
                }

                .cont-nombre{
                    padding: 30px 30px 30px 30px;
                    display: flex;
                    align-items: center;
                    font-size: 30px;
                    border-bottom: 3px solid #ccdae8;
                }

                .salir{
                    position: absolute;
                    right: 14%;
                    width: 50px;
                    height: 26px;
                    line-height: 22px;
                    font-size: 16px;
                    font-weight: bold;
                    color: brown;
                    text-align: center;
                    border: 2px solid brown;
                    border-radius: 5px;
                    cursor: pointer;
                }

                .cont-padrino{
                    padding: 5px 70px 25px 30px;
                    display: flex;
                    font-size: 17px;
                    border-bottom: 3px solid #ccdae8; 
                }

                .nombre-padrino{
                    padding-left: 5px;
                    color: brown;
                    font-weight: 600;
                }

                .info-falta{
                    width: 84%;
                    margin: 10px auto;
                    font-size: 15px;
                }

                .edicion{
                    background: rgba(0, 0, 0, 0.1);
                    display: flex;
                    justify-content: center;
                    padding: 30px 0;
                    border-radius: 0 0 30px 30px;
                }

                .item-edicion{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .info-edit{
                    color: brown;
                    font-size: 17px;
                    font-weight: bold;
                    margin-bottom: 15px;
                }

                .solo{
                    width: 80%;
                    background: white;
                    padding: 5px 10px;
                    font-size: 14px;
                    font-weight: 400;
                    border-radius: 5px;
                    margin-bottom: 10px;
                }

                .dos-padrinos{
                    background: gray;
                    margin: 0 5px 10px 5px;
                    color: white;
                    font-size: 14px;
                    font-weight: 400;
                    padding: 2px 7px;
                    border-radius: 5px;
                    cursor: pointer;
                }

                .solo-se{
                    font-size: 12.5px;
                    font-weight: 400;
                    padding: 0 85px 10px 85px;
                    text-align: justify;
                }

                .cont-input{
                    background: white;
                    width: calc(65% - 20px);
                    font-size: 16px;
                    padding: 3px 5px 3px 15px;
                    border: 1px solid rgba(0, 0, 0, 0.6);
                    border-radius: 20px;
                    margin-bottom: 10px;
                }

                .nopuede{
                    margin-top: 20px;
                    padding: 20px;
                    border: none;
                }

                .input-edit{
                    padding-left: 5px;
                    font-size: 1em;
                    outline:none;
                    border: none;
                }

                ::placeholder {
                    color: rgba(0, 0, 0, 0.6);
                }

                .boton-edit{
                    margin-top: 15px;
                    background: brown;
                    width: 200px;
                    color: white;
                    font-size: 17px;
                    padding: 5px 10px;
                    border: none;
                    outline:none;
                    border-radius: 10px;
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

                .chico{
                    font-size: 16px;
                    font-weight: 200;
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
                    z-index: 5;
                }

                .claves{
                    width: 50%;
                    padding: 30px;
                    background: white;
                    border-radius: 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .indicacion-final{
                    margin-bottom: 10px;
                    font-size: 20px;
                }
                
                .label-final{
                    width: 100%;
                    margin-top: 15px;
                    font-size: 16px;
                    display: flex;
                }

                .nombre-final{
                    font-weight: bold;
                    font-size: 16px;
                    padding-left: 8px;
                }

                .nota-final{
                    font-size: 1.15em;
                    font-weight: bold;
                    padding-left: 8px;
                    color: brown;
                }

                .finalin{
                    display: flex;
                }

                .finalizar{
                    margin-top: 30px;
                    letter-spacing: 1px;
                    padding: 6px 30px;
                    background: brown;
                    color: white;
                    font-size: 18px;
                    font-weight: bold;
                    border-radius: 10px;
                    cursor: pointer;
                }

                .finwait{
                    background: white;
                    color: black;
                    border: 1px solid black;
                    margin-right: 20px;
                }

                @media screen and (max-width: 480px){
                    .perfil{
                        width: 100%;
                        margin-bottom: 50px;
                    }
    
                    .cont-nombre{
                        padding: 25px 25px 25px 25px;
                        font-size: 28px;
                    }
    
                    .salir{
                        right: 3%;
                        width: 40px;
                        height: 24px;
                        line-height: 20px;
                        font-size: 16px;
                    }
    
                    .cont-padrino{
                        padding: 5px 50px 25px 25px;
                        font-size: 13px;
                    }
    
                    .nombre-padrino{
                        padding-left: 5px;
                    }

                    .info-falta{
                        width: 80%;
                        margin: 10px auto;
                        font-size: 15px;
                    }
    
                    .edicion{
                        display: block;
                        padding: 0 0 0 0;
                        border-radius: 0 0 30px 30px;
                    }
    
                    .item-edicion{
                        width: 100%;
                        margin-bottom: 0px;
                    }
    
                    .info-edit{
                        width: 80%;
                        font-size: 18px;
                    }
    
                    .solo{
                        font-size: 12px;
                        width: 80%;
                        margin-bottom: 15px;
                    }

                    .solo-se{
                        width: 80%;
                        padding: 0 0 10px 0;
                    }
    
                    .cont-input{
                        width: calc(80% - 20px);
                        border: 1px solid rgba(0, 0, 0, 1);
                    }
    
                    ::placeholder {
                        color: rgba(0, 0, 0, 0.4);
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
                    
                    .boton-edit{
                        margin-top: 0px;
                        background: brown;
                        width: 100%;
                        height: 60px;
                        color: white;
                        font-size: 18px;
                        font-weight: bold;
                        padding: 0.25em 0.35em;
                        border: none;
                        outline:none;
                        border-radius: 0 0 15px 15px;
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
                    z-index: 5;
                }

                .claves{
                    width: 90%;
                    padding: 30px;
                    background: white;
                    border-radius: 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .indicacion-final{
                    margin-bottom: 10px;
                    font-size: 18px;
                }
                
                .label-final{
                    width: 100%;
                    margin-top: 15px;
                    font-size: 15px;
                    display: flex;
                }

                .nombre-final{
                    font-weight: bold;
                    font-size: 15px;
                    padding-left: 8px;
                }

                .nota-final{
                    font-size: 1.15em;
                    font-weight: bold;
                    padding-left: 8px;
                    color: brown;
                }

                .finalin{
                    display: flex;
                }

                .finalizar{
                    margin-top: 30px;
                    letter-spacing: 1px;
                    padding: 6px 30px;
                    background: brown;
                    color: white;
                    font-size: 16px;
                    font-weight: bold;
                    border-radius: 10px;
                    cursor: pointer;
                }

                .finwait{
                    background: white;
                    color: black;
                    border: 1px solid black;
                    margin-right: 20px;
                }
                }
            `}</style>
        </> 
    )
}

export async function getServerSideProps (context) {
    const { params, res } = context
    const { paralelo, persona } = params

    const alumno = await getDoc(doc(db, paralelo, persona)).then(datos => {
        return (datos.data())
    })

    return {
        props : { alumno }
    }
}

export default NivelDatos