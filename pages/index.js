import { useState, useEffect } from 'react'
import AppLayout from '../componentes/layout'
import Link from 'next/link'

const Home = () => {
    const [ev, setEv] = useState(false)
    const [libro, setLibro] = useState(false)
    const arrayLibros = [
        {
            id: 'iniciacion',
            nombre: 'Iniciación'
        },
        {
            id: '1ro-comunion',
            nombre: '1ro Comunión'
        },
        {
            id: '2do-comunion',
            nombre: '2do Comunión'
        },
        {
            id: 'biblico',
            nombre: 'Año Biblico'
        },
        {
            id: '1ro-confirmacion',
            nombre: '1ro Confirmación'
        },
        {
            id: '2do-confirmacion',
            nombre: '2do Confirmación'
        }
    ]

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <AppLayout name='inicio'  titulo='Cate San Carlos'>
                <div className='menu-cont'>
                    {/* <p className='titulo-menu'>CONFIRMACIÓN</p> */}
                    <div className='menu'>
                        
                        <div className='option'>
                            {/* <Link href='/informacion'>
                                <a className='name-option'>Libros Catequesis</a>
                            </Link> */}
                            <p className='name-option' onClick={() => setLibro(true)}>Libros Catequesis</p>
                            <p className='descripcion'>
                                Visualiza o descarga los libros para la Catequesis.
                            </p>
                        </div>
                        {
                            libro ? 
                                <div className='libro-biblia'>
                                    <p onClick={() => setLibro(false)} className='cerrar-libros'>X</p>
                                    <div className='libros'>
                                        {
                                            arrayLibros.map(item => 
                                                <Link href={`/libros/${item.id}.pdf`} key={item.id}>
                                                    <a target='_blank' className='name-libro'>{item.nombre}</a>
                                                </Link>
                                            )
                                        }
                                    </div>
                                    <a 
                                        href='https://www.sanpablo.es/biblia-latinoamericana'
                                        className='name-libro biblia-boton'
                                        target='_blank'
                                    >
                                        Biblia<br/>Latinoamericana
                                    </a>
                                </div>
                            :
                                <>
                                    {
                                        !ev &&
                                        <div className='option'>
                                                {/* <div className='name-option recupera' onClick={() => setEv(true)}> */}
                                                <Link href='/confirmacion'>
                                                    <a className='name-option recupera'>
                                                        <p className='nuevo'>Evaluación</p>
                                                        2 Confirmación
                                                    </a>
                                                </Link> 
                                                {/* </div> */}
                                            <p className='descripcion'>
                                                Espacio dedicado para el nivel se Segundo de Confirmación
                                            </p>
                                        </div>
                                    }
                                    {
                                        ev &&
                                        <div className='option'>
                                            <p onClick={() => setEv(false)} className='cerrar-libros'>X</p>
                                            <Link href='/confirmacion'>
                                                <a className='name-option sub-option sub-arriba'>Dar la Evaluación</a>
                                            </Link> 
                                            <Link href='/recuperacion'>
                                                <a className='name-option sub-option'>Clases de recuperación</a>
                                            </Link> 
                                        </div>
                                    }
                                </>
                        }
                    </div>
                    
                    <div className='cont-foto'>
                        <div className='footer'>en-Ricaurte</div>
                    </div>
                </div>  
            </AppLayout>

            <style jsx>{`
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
                    margin-top: 25px;
                    display: flex;
                    justify-content: center;
                }

                .option{
                    display: flex;
                    padding: 50px 0;
                    width: 40%;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                }

                .name-option{
                    position: relative;
                    background-color: white;
                    width: 70%;
                    font-size: 2vw;
                    font-weight: bold;
                    line-height: 90px;
                    border-radius: 40px;
                    transition: .2s ease;
                    cursor: pointer;
                }

                .recupera{
                    border-radius: 40px 8px 40px 40px;
                }

                .descripcion{
                    width: 80%;
                    padding-top: 20px;
                    font-size: 16px;
                    line-height: 22px;
                }

                .libro-biblia{
                    width: 65%;
                    display: flex;
                }

                .libros{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .name-libro{
                    background-color: white;
                    min-width: 275px;
                    text-align: center;
                    padding: 5px 10px;
                    font-size: 2vw;
                    border-radius: 15px;
                    margin: 0 10px 10px 10px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .biblia-boton{
                    height: 80px;
                }

                .cerrar-libros{
                    position: absolute;
                    margin: -25px 0 0 600px;
                    background: brown;
                    color: white;
                    font-size: 20px;
                    font-weight: bold;
                    padding: 6px 12px 7px 12px;
                    border-radius: 20px;
                    cursor: pointer;
                }

                .nuevo{
                    position: absolute;
                    right: 0;
                    background: brown;
                    color: white;
                    font-size: 15.5px;
                    font-weight: 400;
                    line-height: 1em;
                    padding: 4px 7px;
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
                }

                .foto-san-carlos{
                    position: absolute;
                    bottom: 0;
                    right: 30px;
                    height: 210px;
                    pointer-events: none;
                }

                @media screen and (max-width: 768px){ 
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

                    .libro-biblia{
                        width: 100%;
                        display: inline;
                    }
    
                    .name-libro{
                        min-width: 200px;
                        padding: 10px 15px;
                        font-size: 20px;
                        border-radius: 20px;
                        margin: 0 0 10px 0;
                    }
    
                    .biblia-boton{
                        height: auto;
                        width: 200px;
                        margin: 0 auto;
                    }
    
                    .cerrar-libros{
                        margin: 0;
                        right: 5%;
                    }

                    .nuevo{
                        font-size: 14px;
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
        </> 
    )
}

export default Home;
