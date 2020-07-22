import {useState, useEffect} from 'react'
import {IoIosCheckmarkCircle} from 'react-icons/io'
import { useRouter } from 'next/router'
import firebase from '../../../services/dBase' 
import Head from 'next/head'
import Header from '../../../componentes/layout/header'
import Footer from '../../../componentes/layout/footer2'

const NivelDatos = ({data}) => {
    const router = useRouter()
    const [dos, setDos] = useState(false)
    const [login, setLogin] = useState(false)
    const [mal, setMal] = useState(false)
    const [name, setName] = useState(null)
    const [namePad, setNamePad] = useState(null)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleLogin = e => {
        e.preventDefault();
        const { segundo } = event.target.elements;
        const pass = segundo.value.toLowerCase().substr(0,2)
        const word = data.apellido.substr(data.apellido.indexOf(' ')+1, 2).toLowerCase()
        
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
            ${nombres.value == '' ? data.nombre : nombres.value} 
            ${apellidos.value == '' ? data.apellido : apellidos.value}`)
        let refNombre = firebase.firestore().collection('segundo-a').doc(`${data.user}`)
        if(apellidos.value == ''){
            refNombre.update({nombre: nombres.value})
        }
        else if(nombres.value == '') {
            refNombre.update({apellido: apellidos.value})
        }
        else{
            refNombre.update({
                nombre: nombres.value,
                apellido: apellidos.value
            })
        }

    }

    const handleIngresarPadrino = e => {
        e.preventDefault();
        let refPadrino = firebase.firestore().collection('segundo-a').doc(`${data.user}`)

        if(dos == false) {
            const { apellidosPad, nombresPad } = event.target.elements;
            setNamePad(`${nombresPad.value} ${apellidosPad.value}`)
            refPadrino.update({padrino: `${nombresPad.value} ${apellidosPad.value}`}) 
            if(data.madrina != undefined)  refPadrino.update({madrina: null}) 
            apellidosPad.value = ''
            nombresPad.value = ''
        } else {
            const { apellidosPad, nombresPad, apellidosPad2, nombresPad2 } = event.target.elements;
            setNamePad(`${nombresPad.value} ${apellidosPad.value} & ${nombresPad2.value} ${apellidosPad2.value}`)
            refPadrino.update({padrino: `${nombresPad.value} ${apellidosPad.value}`}) 
            refPadrino.set(
                {madrina: `${nombresPad2.value} ${apellidosPad2.value}`},
                {merge: true}
            )
            apellidosPad.value = ''
            nombresPad.value = ''
            apellidosPad2.value = ''
            nombresPad2.value = ''
        }
    }

    return (
        <div className='page-eval'>
            <Head>
                <title>Cate San Carlos - Confirmación</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap" rel="stylesheet"></link>
            </Head>

            <Header pagina='' />

            {
                login ?
                <div className='perfil'>
                    <div className='container'>
                        <div className='cont-nombre'>
                            <p className='nombre' >
                                {
                                    name == null ? `${data.nombre} ${data.apellido} `
                                    : `${name} `
                                }
                                {
                                    (data.aprobado && !data.fe && !data.cedula) && <IoIosCheckmarkCircle style={{color: 'green'}} />
                                }
                            </p>
                        </div>    
                    </div>
                    <div className='cont-padrino'>
                        Padrino/Madrina:
                        <p className='nombre-padrino'>
                            {
                                namePad == null ? (
                                    data.padrino == '' ? 'Ingresa el nombre de tu padrino/madrina'
                                    : (data.madrina == undefined) ? data.padrino : `${data.padrino} & ${data.madrina}`
                                ) : namePad
                            }
                            
                        </p>
                        <p 
                            className='salir'
                            onClick={() => {
                                setLogin(false)
                                router.push('/')
                            }}
                        >Salir</p>
                    </div>
                   
                    {
                        (data.aprobado && !data.fe && !data.cedula) ? '' : (data.aprobado) ? 
                            <div className='info-falta'>
                                <p>Aprobado, pero</p>
                                {
                                    data.fe && <p>Falta entregar copia de la Fe de Bautismo</p>
                                }
                                {
                                    data.cedula && <p>Falta entregar copia de la cédula</p>
                                } 
                            </div>
                        :   
                            <div className='info-falta'>
                                <p>Todavía no ha aprobado{ (!data.fe && !data.cedula) ? '' : ', también'}</p>
                                {
                                    data.fe && <p>Falta entregar copia de la Fe de Bautismo</p>
                                }
                                {
                                    data.cedula && <p>Falta entregar copia de la cédula</p>
                                } 
                            </div>
                    }
                        
                    <div className='edicion'>
                        <form onSubmit={handleActualizarNombre} className='item-edicion'>
                            <p className='info-edit'>Edita tu nombre si está mal escrito</p>
                            {
                                (data.aprobado && !data.fe && !data.cedula) ? 
                                <>
                                    <p className='solo'>Solo modificar estos campos y guardar, si su nombre esta mal escrito</p>
                                    <div className='cont-input'>
                                        <strong>Apellidos:</strong>
                                        <input className='input-edit' name='apellidos' placeholder={data.apellido} />
                                    </div>
                                    <div className='cont-input'>
                                        <strong>Nombres:</strong>
                                        <input className='input-edit' name='nombres' placeholder={data.nombre} />
                                    </div>
                                    <button className='boton-edit'>Guardar</button>
                                </>
                                :
                                <div className='cont-input nopuede'>
                                    Usted no puede editar su nombre, porque todavía no ha aprobado el año de Catequesis o no ha entregado la fe de bautismo o copia de la cédula.
                                </div>
                            }
                        </form>
                        <form onSubmit={handleIngresarPadrino} className='item-edicion'>
                            <p className='info-edit'>Ingresa el nombre de tu padrino</p>
                            {
                                (data.aprobado && !data.fe && !data.cedula) ? 
                                <>
                                    <p className='solo'>Solo ingresar y guardar el nombre de su padrino, si este no aparece en la parte blanca de arriba</p>
                                    <div style={{display: 'flex'}}>
                                        <p className='dos-padrinos' onClick={() => setDos(false)}>Una persona</p>
                                        <p className='dos-padrinos' onClick={() => setDos(true)}>Dos personas</p>
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
                                    Usted no puede editar su nombre, porque todavía no ha aprobado el año de Catequesis o no ha entregado la fe de bautismo o copia de la cédula.
                                </div>
                            }
                        </form>
                    </div>
                </div>
                :
                <form onSubmit={handleLogin} className='form-clave'>
                    <p className='claves-nombre'>
                        {`${data.apellido.substring(0, data.apellido.indexOf(' '))} ${data.nombre}`}
                    </p>
                    <p className='claves-pulse'>Escriba su segundo apellido y pulse en ingresar</p>
                    <input className='input' name='segundo' />
                    {mal && <p className='incorrecto'>Incorrecto</p>}
                    <button className='boton'>Ingresar</button>
                </form>
            }

            <Footer /> 

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
                    height: 25px;
                    line-height: 25px;
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
                }

                .info-falta{
                    width: 84%;
                    margin: 10px auto;
                    font-size: 15px;
                }

                .edicion{
                    background: rgba(0, 0, 0, 0.1);
                    display: flex;
                    padding: 30px 0;
                    border-radius: 0 0 30px 30px;
                }

                .item-edicion{
                    width: 50%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .info-edit{
                    width: 65%;
                    color: brown;
                    font-size: 18px;
                    font-weight: bold;
                }

                .solo{
                    font-size: 12px;
                    font-weight: 400;
                    width: 65%;
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
                    background: brown;
                    color: white;
                    font-size: 0.8em;
                    padding: 0.25em 0.35em;
                    border: none;
                    outline:none;
                    border-radius: 5px;
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
                        height: 22px;
                        line-height: 22px;
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
    
                    .info-edit{
                        width: 80%;
                        font-size: 18px;
                    }
    
                    .solo{
                        font-size: 12px;
                        width: 80%;
                        margin-bottom: 15px;
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

NivelDatos.getInitialProps = async ({query}) => {
    const data = await firebase.firestore().collection(`${query.paralelo}`).doc(`${query.personaDatos}`).get()
    .then(alumno => {
        return (alumno.data())
    })
    
    return {data}
}  

export default NivelDatos;