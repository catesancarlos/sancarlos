import { useRouter } from 'next/router'
import Head from 'next/head'
import {IoIosCheckmarkCircle} from 'react-icons/io'
import Header from '../componentes/layout/header'
import Footer from '../componentes/layout/footer2'
import Atras from '../componentes/layout/atras'

const MiConfirmacion = () => {
    const router = useRouter()
    const paralelos = [
        {
            id: 'segundo-a',
            nombre: 'Paralelo A'
        },
        {
            id: 'segundo-b',
            nombre: 'Paralelo B'
        },
        {
            id: 'segundo-c',
            nombre: 'Paralelo C'
        },
        {
            id: 'segundo-d',
            nombre: 'Paralelo D'
        },
        {
            id: 'segundo-molinopamba',
            nombre: 'Molinopamba'
        },
        {
            id: 'segundo-angeles',
            nombre: 'Los Ángeles'
        },
        {
            id: 'segundo-dolorosa',
            nombre: 'La Dolorosa'
        },
        {
            id: 'segundo-auxiliadora',
            nombre: 'Auxuliadora'
        }
    ]

    const handleLink = grupo => {
        router.push('/confirmacion/[nivelDatos]', `/confirmacion/${grupo}`)
    }

    return (
        <div className='page-eval'>
            <Head>
                <title>Cate San Carlos - Evaluación</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap" rel="stylesheet"></link>
            </Head>

            <Header pagina='sacramento' />

            <div className='container'>
                <div className='menu-proceso'>
                    <div className='proceso'>
                        <p className='titulo'>Aprobar el año de Catequesis</p>
                        <p className='descripcion'>Haber cumplido correctamente con todos los trabajos y evaluaciones del presente año.</p>
                    </div>
                    <div className='linea'></div>
                    <div className='proceso'>
                        <p className='titulo'>Cumplir con todos los requisitos</p>
                        <p className='descripcion'>Haber ya entregado la Fe de Bautismo y la copia de la cédula del alumno.</p>
                    </div>
                    <div className='linea'></div>
                    <div className='proceso'>
                        <p className='titulo'>Ingresar el nombre del Padrino</p>
                        <p className='descripcion'>Ingrese en nombre de su padrino, pulsando en su respectivo paralelo.</p>
                    </div>
                    <div className='linea'></div>
                    <div className='proceso listo'>
                        <IoIosCheckmarkCircle style={{fontSize: '3.5em', color: 'brown', paddingBottom:'10px'}} />
                        <p>Listo</p>
                    </div>
                </div>
                <div className='menu-niveles'>
                    <div className='subcontainer'>
                        <strong>Pulsa en tu paralelo para:</strong>
                        <p style={{paddingTop: '15px'}}>- Verificar que hayas entregado la copia de cedula o fe de bautizmo.</p>
                        <p style={{paddingTop: '5px'}}>- Verificar que tu nombre este bien escrito y si no es asi corregirlo.</p>
                        <p style={{paddingTop: '5px'}}>- Ingresar el nombre de tu padrino.</p>
                    </div>
                    <div className='subcontainer niveles'>
                        {
                            paralelos.map(item => 
                                <p 
                                    className='nivel' 
                                    key={item.id}
                                    onClick={() => handleLink(item.id) }
                                >
                                    {item.nombre}
                                </p>
                            ) 
                        }
                    </div>
                </div>
            </div>

            <Footer /> 

            <style jsx>{`
                .page-eval{
                    background-color: #ccdae8;
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                }

                .container{
                    width: 90%;
                    margin: 0 auto;
                }

                .menu-proceso{
                    margin: 10px 0 70px 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .proceso{
                    width: 15%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .titulo{
                    background: brown;
                    padding: 0 5px;
                    height: 45px;
                    font-size: 14px;
                    font-weight: bold;
                    color: white;
                    text-align: center;
                    border-radius: 20px 20px 0 0;
                    display: flex;
                    align-items: center;
                }

                .descripcion{
                    background: white;
                    height: 60px;
                    padding: 10px 10px 10px 10px;
                    font-size: 12px;
                    font-weight: 400;
                    color: black;
                    border-radius: 0 0 20px 20px;
                }

                .linea{
                    background: gray;
                    height: 5px;
                    width: 7%;
                }

                .listo{
                    background: white;
                    height: 127px;
                    font-size: 16px;
                    font-weight: bold;
                    text-align: center;
                    border-radius: 20px;
                    justify-content: center;
                }

                .menu-niveles{
                    width: 80%;
                    margin: 0 auto 60px auto;
                    display: flex;
                }

                .subcontainer{
                    width: 50%;
                }

                .niveles{
                    display: flex;
                    justify-content: flex-end;
                    flex-wrap: wrap;
                }

                .nivel{
                    background: white;
                    width: 35%;
                    height: 50px;
                    margin: 0 0 20px 20px;
                    text-align: center;
                    font-size: 20px;
                    line-height: 50px;
                    border-radius: 10px;
                    cursor: pointer
                    margin-bottom: 50px
                }

                @media screen and (max-width: 480px){
                    .container{
                        width: 100vw;
                    }
    
                    .menu-proceso{
                        margin: 10px 0 40px 0;
                    }
    
                    .proceso{
                        width: 21vw;
                    }
    
                    .titulo{
                        font-size: 10px;
                        font-weight: normal;
                        border-radius: 10px 10px 0 0;
                    }
    
                    .descripcion{
                        height: 95px;
                        padding: 5px;
                        font-size: 10px;
                        color: black;
                        border-radius: 0 0 10px 10px;
                    }
    
                    .linea{
                        width: 3.5vw;
                    }
    
                    .listo{
                        height: 155px;
                        width: 19vw;
                        font-size: 14px;
                        border-radius: 10px;
                    }

                    .menu-niveles{
                        width: 90%;
                        margin: 0 auto 60px auto;
                        display: block;
                    }
    
                    .subcontainer{
                        width: 100%;
                    }
    
                    .niveles{
                        margin-top: 40px;
                        justify-content: center;
                    }
    
                    .nivel{
                        width: 40%;
                        margin: 0 10px 20px 10px;
                        font-size: 16px;
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

export default MiConfirmacion;