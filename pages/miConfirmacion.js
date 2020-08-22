import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import firebase from '../services/dBase' 
import {IoIosCheckmarkCircle} from 'react-icons/io'
import AppLayout from '../componentes/layout'
import Footer from '../componentes/layout/footer2'

const MiConfirmacion = () => {
    const router = useRouter()
    const [user, setUser] = useState(null)
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

    useEffect(() => {
        window.scrollTo(0, 0);
        firebase.auth().onAuthStateChanged(firebaseUser => {
            setUser(firebaseUser)
        })
    }, [user]);

    const handleLink = grupo => {
        if(!user) firebase.auth().signInAnonymously()
        router.push('/confirmacion/[nivelDatos]', `/confirmacion/${grupo}`)
    }

    return (
        <>
            <AppLayout pagina='sacramento' titulo='San Carlos - Confirmación'>
                <div className='container'>
                    <p className='confi-info'>Revisa si haz cumplido con todos los requisitos para aprobar el año de Catequesis e ingresa el nombre de tu padrino.</p>
                    <div className='menu-proceso'>
                        <div className='proceso'>
                            <p className='titulo'>Aprobar el año de Catequesis</p>
                            <p className='descripcion'>Haber cumplido correctamente con todos los trabajos y evaluaciones.</p>
                        </div>
                        <div className='linea'></div>
                        <div className='proceso'>
                            <p className='titulo'>Cumplir con todos los requisitos</p>
                            <p className='descripcion'>Entregado la copia de la Fe de Bautismo al inscribirse.</p>
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
                            <p style={{paddingTop: '15px'}}>- Verificar que hayas entregado la copia de cedula o fe de bautismo.</p>
                            <p style={{paddingTop: '5px'}}>- Verificar que tu nombre este bien escrito y si no es así corregirlo.</p>
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
            </AppLayout>
            
            <style jsx>{`
                .container{
                    width: 90%;
                    margin: 0 auto;
                }

                .confi-info{
                    width: 85%;
                    margin: 10px auto 50px auto;
                    text-align: center;
                    font-size: 25px;
                    font-weight: bold;
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
                    height: 75px;
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
                    cursor: pointer;
                    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                }

                @media screen and (max-width: 480px){
                    .container{
                        width: 100vw;
                    }

                    .confi-info{
                        width: 90%;
                        margin: 10px auto 30px auto;
                        font-size: 19px;
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
                        height: 90px;
                        padding: 5px;
                        font-size: 10px;
                        color: black;
                        border-radius: 0 0 10px 10px;
                    }
    
                    .linea{
                        width: 3.5vw;
                    }
    
                    .listo{
                        height: 140px;
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
        </> 
    )
}

export default MiConfirmacion;