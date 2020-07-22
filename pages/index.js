import { useState, useEffect } from 'react'
import Header from '../componentes/layout/header'
import Head from 'next/head'
import Link from 'next/link'

const Home = () => {
    const [ev, setEv] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='page-home'>
            <Head>
                <title>Cate San Carlos</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet"></link>
            </Head>

            <Header pagina='index' />

           <div className='menu-cont'>
                <p className='titulo-menu'>CONFIRMACIÓN</p>
                <div className='menu'>
                    
                    <div className='option'>
                        <Link href='/sacramentos'>
                            <a className='name-option'>Información</a>
                        </Link>
                        <p className='descripcion'>
                            Información necesaria, referente a la Confirmación para este año (2020).
                        </p>
                    </div>
                    {
                        ev ? 
                        <div className='option'>
                            <p className='nuevo recu'>Recuperación</p>
                            <Link href='/evaluacion'>
                                <a className='name-option sub-option sub-arriba'>Dar la Evaluación</a>
                            </Link> 
                            <Link href='/evaluacion/notas'>
                                <a className='name-option sub-option'>Calificaciones</a>
                            </Link> 
                        </div>
                        :
                        <div className='option' onClick={() => setEv(true)}>
                            <p className='name-option'>Evaluaciones</p>
                            <p className='descripcion'>
                                Evaluaciones para los niveles de Segundo Confirmación.
                            </p>
                        </div>
                    }
                    <div className='option'>
                        <p className='nuevo'>Nuevo</p>
                        <Link href='/miConfirmacion'>
                            <a className='name-option'>Mi Sacramento</a>
                        </Link>
                        <p className='descripcion'>
                            ¿Aprobé? Quiero ingresar el nombre de mi padrino.
                        </p>
                    </div>
                </div>
                
            </div>  

            <div className='cont-foto'>
                <div className='footer'>en-Ricaurte</div>
                <img src='/san-carlos.gif' alt='San Carlos' className='foto-san-carlos'/> 
            </div>

            <style jsx>{`
                .page-home{
                    background-color: #ccdae8;
                    font-family: 'Lato', sans-serif;
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                }

                .menu-cont{
                    width: 75%;
                    margin: 10px auto 50px auto;
                    display: flex;
                    flex-direction: column;
                }

                .titulo-menu{
                    width: 100%;
                    padding: 10px 0;
                    text-align: center;
                    font-size: 30px;
                    font-weight: bold;
                    letter-spacing: 5px;
                    border-radius: 25px 25px 0 0;
                }

                .menu{
                    display: flex;
                }

                .option{
                    display: flex;
                    padding: 50px 0;
                    width: 33.33%;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                }

                .name-option{
                    background-color: white;
                    width: 80%;
                    font-size: 2vw;
                    font-weight: bold;
                    line-height: 90px;
                    border-radius: 40px;
                    transition: .2s ease;
                }

                .descripcion{
                    width: 80%;
                    padding-top: 20px;
                    font-size: 16px;
                    line-height: 22px;
                }

                .nuevo{
                    position: absolute;
                    margin: -0.75% 0 0 -7.75%;
                    background: brown;
                    color: white;
                    font-weight: bold;
                    padding: 2px 7px;
                    border-radius: 7px;
                    animation-name: new;
                    animation-duration: 2s;
                    animation-iteration-count: infinite;
                    mix-blend-mode: multiply;
                }

                .recu{
                    margin-left: -5.75%;
                    mix-blend-mode: normal;
                }

                @keyframes new{
                   50% {
                       background-color: transparent;
                       color: transparent;
                    } 
                }

                .sub-option{
                    background-color: #ccdae8;
                    font-size: 1.8vw;
                    border: 1px dashed black;
                }

                .sub-arriba{
                    margin-bottom: 20px;
                }

                .name-option:hover{
                    background-color: rgba(255, 255, 255, 0.75);
                    color: brown;
                }

                .footer{
                    background-color: #ccdae8;
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    padding-left: 15px;
                    width: 100%;
                    height: 40px;
                    line-height: 40px;
                    font-size: 18px;
                    color: rgba(0, 0, 0, 0.4);
                    font-family: 'Kaushan Script', Geneva, Verdana, sans-serif;
                    border-top: 1px solid white;
                }

                .foto-san-carlos{
                    position: absolute;
                    bottom: 0;
                    right: 30px;
                    height: 210px;
                    pointer-events: none;
                }

                @media screen and (max-width: 480px){ 
                    .menu-cont{
                        width: 100%;
                        margin: 0 auto;
                    }
    
                    .titulo-menu{
                        font-size: 20px;
                        color: rgba(0, 0, 0, 0.6);
                        letter-spacing: 2.5px;
                    }
                    
                    .menu{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }

                    .option{
                        padding: 25px 0 20px 0;
                        width: 70%;
                    }
    
                    .name-option{
                        width: 100%;
                        font-size: 22.5px;
                        line-height: 75px;
                    }
    
                    .descripcion{
                        width: 100%;
                        padding-top: 15px;
                        font-size: 15px;
                        line-height: 20px;
                    }

                    .nuevo{
                        margin: -3% 0 0 -27%;
                        font-size: 15px;
                    }

                    .recu{
                        margin-left: -20%;
                    }

                    .sub-option{
                        font-size: 20px;
                    }

                    .footer{
                        padding-left: 10px;
                        height: 30px;
                        line-height: 30px;
                        font-size: 13px;
                        border-top: 0.5px solid white;
                    }

                    .cont-foto{
                        display: flex;
                        justify-content: flex-end;
                    }

                    .foto-san-carlos{
                        right: 20px;
                        position: relative;
                        height: 125px;
                    }
                }
            `}</style>

            <style jsx global>{`
                body {
                    margin: 0;
                    padding: 0;
                    font-family: 'Lato', sans-serif;
                }

                a{
                    color: black;
                    text-decoration: none;
                    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                }

                p{
                    margin: 0;
                }
            `}</style>
        </div> 
    )
}

export default Home;