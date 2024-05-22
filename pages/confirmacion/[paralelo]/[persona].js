import {useState, useEffect} from 'react'
import {IoIosCheckmarkCircle} from 'react-icons/io'
import { useRouter } from 'next/router'
import AppLayout from '../../../componentes/layout'
import Footer from '../../../componentes/layout/footer2'
import TempAlert from '../../../componentes/generales/TempAlert'

import db  from '../../../services/dBase'
import { getDoc, doc, updateDoc } from 'firebase/firestore'

const NivelDatos = ({ alumno }) => {
    const router = useRouter()

    const [dos, setDos] = useState(false)
    const [login, setLogin] = useState(false)
    const [mal, setMal] = useState(false)
    const [name, setName] = useState(null)
    const [namePad, setNamePad] = useState(null)
    const [listo, setListo] = useState(false)

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

    const handleActualizarNombre = e => {
        e.preventDefault();
        const { apellidos, nombres } = event.target.elements;
        setName(`
            ${nombres.value == '' ? alumno.nombre : nombres.value} 
            ${apellidos.value == '' ? alumno.apellido : apellidos.value}
        `)
        /* let refNombre = firebase.firestore().collection(router.query.paralelo).doc(alumno.user) */
        
        const productoRef = doc(db, `${router.query.paralelo}`, `${alumno.user}`)

        if((nombres.value != '' && nombres.value != ' ') || (apellidos.value != '' &&  apellidos.value != ' ')) {
            /* refNombre.update({
                nombre: nombres.value == '' ? alumno.nombre : nombres.value,
                apellido: apellidos.value == '' ? alumno.apellido : apellidos.value
            }) */
            updateDoc(productoRef, { 
                nombre: nombres.value == '' ? alumno.nombre : nombres.value,
                apellido: apellidos.value == '' ? alumno.apellido : apellidos.value
            })
        }
    }

    const handleIngresarPadrino = e => {
        e.preventDefault()
        /* let refPadrino = firebase.firestore().collection(router.query.paralelo).doc(alumno.user) */
        const productoRef = doc(db, `${router.query.paralelo}`, `${alumno.user}`)

        if(dos == false) {
            const { apellidosPad, nombresPad } = e.target.elements;
            setNamePad(`${nombresPad.value} ${apellidosPad.value}`)
            /* refPadrino.update({padrino: `${nombresPad.value} ${apellidosPad.value}`})  */
            updateDoc(productoRef, {padrino: `${nombresPad.value} ${apellidosPad.value}`})
            if(alumno.madrina != undefined)  updateDoc(productoRef, {madrina: null}) 
            apellidosPad.value = ''
            nombresPad.value = ''
        } else {
            const { apellidosPad, nombresPad, apellidosPad2, nombresPad2 } = e.target.elements;
            setNamePad(`${nombresPad.value} ${apellidosPad.value} & ${nombresPad2.value} ${apellidosPad2.value}`)
            /* refPadrino.update({padrino: `${nombresPad.value} ${apellidosPad.value}`}) 
            refPadrino.set(
                {madrina: `${nombresPad2.value} ${apellidosPad2.value}`},
                {merge: true}
            ) */
            updateDoc(productoRef, { 
                padrino: `${nombresPad.value} ${apellidosPad.value}`,
                madrina: `${nombresPad2.value} ${apellidosPad2.value}`
            })
            apellidosPad.value = ''
            nombresPad.value = ''
            apellidosPad2.value = ''
            nombresPad2.value = ''
        }
        setListo(true)
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
                    <div className='perfil' >
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
                            </div>    
                        </div>
                        <div className='cont-padrino'>
                            Padrino/Madrina:
                            <p className='nombre-padrino'>
                                {
                                    namePad == null ? (
                                        alumno.padrino == '' ? 'Ingresa el nombre de tu padrino/madrina'
                                        : (alumno.madrina == undefined) ? alumno.padrino : `${alumno.padrino} & ${alumno.madrina}`
                                    ) : namePad
                                }
                                
                            </p>
                            <p 
                                className='salir'
                                onClick={handleSalir}
                            >Salir</p>
                        </div>
                    
                        {
                            /* (alumno.aprobado && !alumno.fe) ? '' : (alumno.aprobado) ? 
                                <div className='info-falta'>
                                    <p>Aprobado, pero</p>
                                    <p>Falta entregar copia de la Fe de Bautismo</p>
                                </div>
                            :   
                                <div className='info-falta'>
                                    <p>Todavía no ha aprobado</p>
                                    { alumno.fe && <p>También falta entregar copia de la Fe de Bautismo</p> }
                                </div> */
                        }
                            
                        <div className='edicion'>
                            <form onSubmit={handleIngresarPadrino} className='item-edicion'>
                                <p className='info-edit padri'>Ingresa el nombre de tus padrinos</p>
                                {
                                    /* (alumno.aprobado && !alumno.fe) */ true ? 
                                    <>
                                        <p className='solo'>Selecciona 2 personas si tendras padrino y madrina, caso contrario elige 1 persona.</p>
                                        <div style={{display: 'flex'}}>
                                            <p className='dos-padrinos' onClick={() => setDos(false)}>1 persona</p>
                                            <p className='dos-padrinos' onClick={() => setDos(true)}>2 personas</p>
                                        </div>
                                        {
                                            !dos ? 
                                            <>
                                                <div className='cont-input'>
                                                    <strong>Apellidos:</strong>
                                                    <input required className='input-edit' name='apellidosPad' placeholder='Ingrese 2 apellidos' />
                                                </div>
                                                <div className='cont-input'>
                                                    <strong>Nombres:</strong>
                                                    <input required className='input-edit' name='nombresPad' placeholder='Ingrese 2 nombres' />
                                                </div>
                                                <button className='boton-edit'>Guardar</button>
                                            </>
                                            :
                                            <>
                                                {/* <p className='solo-se'>
                                                    <strong>Indicación:</strong> Se puede entregar el nombre de 2 personas, siempre y cuando estos sean esposos, 
                                                    los cuales se consideraran los padrinos, pero en el certificado de Confirmación solo se indicara una persona, 
                                                    debido a que en este va un solo nombre.
                                                </p> */}
                                                <strong>Padrino</strong>
                                                <div className='cont-input'>
                                                    <strong>Apellidos:</strong>
                                                    <input required className='input-edit' name='apellidosPad' placeholder='Ingrese 2 apellidos' />
                                                </div>
                                                <div className='cont-input'>
                                                    <strong>Nombres:</strong>
                                                    <input required className='input-edit' name='nombresPad' placeholder='Ingrese 2 nombres' />
                                                </div>
                                                <strong>Madrina</strong>
                                                <div className='cont-input'>
                                                    <strong>Apellidos:</strong>
                                                    <input required className='input-edit' name='apellidosPad2' placeholder='Ingrese 2 apellidos' />
                                                </div>
                                                <div className='cont-input'>
                                                    <strong>Nombres:</strong>
                                                    <input required className='input-edit' name='nombresPad2' placeholder='Ingrese 2 nombres' />
                                                </div>
                                                <button className='boton-edit'>Guardar</button>
                                            </>
                                        }
                                    </>
                                    :
                                    <div className='cont-input nopuede'>
                                        Usted no puede editar su nombre, porque todavía no ha aprobado el año de Catequesis o no ha entregado la copia de fe de bautismo.
                                    </div>
                                }
                            </form>
                            <form onSubmit={handleActualizarNombre} className='item-edicion'>
                                <p className='info-edit'>Edita tu nombre SOLO si está mal escrito.</p>
                                {
                                    /* (alumno.aprobado && !alumno.fe) */ true ? 
                                    <>
                                        <p className='solo solesp'>Solo modificar estos campos y guardar, si su nombre esta mal escrito</p>
                                        <div className='cont-input'>
                                            <strong>Apellidos:</strong>
                                            <input className='input-edit' name='apellidos' placeholder={alumno.apellido} />
                                        </div>
                                        <div className='cont-input'>
                                            <strong>Nombres:</strong>
                                            <input className='input-edit' name='nombres' placeholder={alumno.nombre} />
                                        </div>
                                        <button className='boton-edit'>Guardar</button>
                                    </>
                                    :
                                    <div className='cont-input nopuede'>
                                        Usted no puede editar su nombre, porque todavía no ha aprobado el año de Catequesis o no ha entregado la copia de la fe de bautismo.
                                    </div>
                                }
                            </form>
                        </div>
                    </div>
                    :
                    <form onSubmit={!alumno.padrino ? handleLogin : handleSalir} className='form-clave'>
                        <p className='claves-nombre'>
                            {`${alumno.apellido.substring(0, alumno.apellido.indexOf(' '))} ${alumno.nombre}`}
                        </p>
                        <p className='claves-pulse'>{alumno.padrino ? 'Usted ya ingreso su información' : 'Escriba su segundo apellido y pulse en ingresar'}</p>
                        <p className='claves-pulse chico'>{alumno.padrino && 'Si desea cambiarla comuniqueselo a su catequista'}</p>
                        {!alumno.padrino && <input className='input' name='segundo' /> }
                        {mal && <p className='incorrecto'>Incorrecto</p>}
                        <button className='boton'>{alumno.padrino ? 'Salir' : 'Ingresar'}</button>
                    </form>
                }
                <TempAlert
                    titulo='Nombres de padrinos agregados correctamente'
                    activo={listo}
                    onDesactivar={() => setListo(false)}
                />
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
                    padding: 30px 0 0 30px;
                    display: flex;
                    align-items: center;
                    font-size: 30px;
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
                    padding: 25px 0 30px 0;
                    border-radius: 0 0 30px 30px;
                }

                .item-edicion{
                    width: 50%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    
                }

                .item-edicion:first-child{
                    border-right: 3px solid #ccdae8;
                }

                .info-edit{
                    width: 70%;
                    color: black;
                    font-size: 18px;
                    font-weight: bold;
                }

                .padri{
                    color: brown;
                    font-size: 20px;
                }

                .solo{
                    font-size: 13px;
                    font-weight: 400;
                    width: 70%;
                    margin-bottom: 10px;
                }

                .solesp{
                    margin-bottom: 20px;
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
                    width: calc(70% - 20px);
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
                    color: rgba(0, 0, 0, 0.5);
                }

                .boton-edit{
                    margin-top: 10px;
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

                @media screen and (max-width: 480px){
                    .perfil{
                        width: 100%;
                        margin-bottom: 50px;
                    }
    
                    .cont-nombre{
                        padding: 25px 25px 0 25px;
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
                        padding: 30px 0 20px 0;
                        border-radius: 0 0 30px 30px;
                    }
    
                    .item-edicion{
                        width: 100%;
                        margin-bottom: 30px;
                    }

                    .item-edicion:first-child{
                        padding-bottom: 35px;
                        border-right: none;
                        border-bottom: 3px solid #ccdae8;
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