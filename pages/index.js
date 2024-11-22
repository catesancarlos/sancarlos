import { useState, useEffect } from 'react'
import AppLayout from '../componentes/layout'
import Link from 'next/link'

const Home = () => {
    const [toggle, setToggle] = useState(true)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(() =>  {
            setToggle((toggle) => !toggle)
        }, 3000);
    
        return () => clearInterval(intervalID);
    }, []);

    return (
        <>
            <AppLayout name='Inicio'  titulo='Cate San Carlos'>
                <div className='banner'>
                    <img src='/main_banner.jpg' />
                    <div className='hover_now'>
                        <p className='now_now'>Hoy:</p>
                        <p className='now_tittle'>
                            {toggle ? 'Catequesis Familiar 2do Confirmación' :
                            'Catequesis Familiar Iniciación'}
                        </p>
                    </div>
                </div>
                <div className='menu-cont'>
                    <article>
                        <div className='event_header'>
                            <p className='title'>Catequesis</p>
                            <p className='subtitle'>Clases Normales (Todos)</p>
                        </div>
                        <div className='event_info'>
                            <p>Sábado 23 noviembre 2024</p>
                            <p>Segun horario</p>
                            <p>Centros catequeticos</p>
                        </div>
                    </article>
                    <article>
                        <div className='event_header'>
                            <p className='title'>Catequesis Familiar</p>
                            <p className='subtitle'>Iniciación</p>
                        </div>
                        <div className='event_info'>
                            <p>Viernes 22 noviembre 2024</p>
                            <p>19H00</p>
                            <p>Teatro Catequesis</p>
                        </div>
                    </article>
                    <article>
                        <div className='event_header'>
                            <p className='title'>Catequesis Familiar</p>
                            <p className='subtitle'>2do Confirmación</p>
                        </div>
                        <div className='event_info'>
                            <p>Viernes 22 noviembre 2024</p>
                            <p>19H00</p>
                            <p>Templo Parroquial</p>
                        </div>
                    </article>
                    <article>
                        <div className='event_header'>
                            <p className='title'g>Catequesis Familiar</p>
                            <p className='subtitle'>1ro Comunión</p>
                        </div>
                        <div className='event_info'>
                            <p>Sábado 23 noviembre 2024</p>
                            <p>19H00</p>
                            <p>Teatro Catequesis</p>
                        </div>
                    </article>
                    <article>
                        <div className='event_header'>
                            <p className='title'>Catequesis Familiar</p>
                            <p className='subtitle'>Comunidades</p>
                        </div>
                        <div className='event_info'>
                            <p>Sábado 23 noviembre 2024</p>
                            <p>19H00</p>
                            <p>Cada Comunidad</p>
                        </div>
                    </article>
                </div>  
            </AppLayout>

            <style jsx>{`
                .banner{
                    position: relative;
                }

                img{
                    margin-left: 4%;
                    width: 92%;
                    height: 350px;
                    border-radius: 20px;
                    filter: brightness(1.5);
                    box-shadow: 2px 2px 4px 0px #777;
                }

                .hover_now{
                    position: absolute;
                    bottom: 30px;
                    right: calc(4% + 35px);
                    background: white;
                    min-width: 290px;
                    padding: 6px 10px 8px 10px;
                    text-align: right;
                    border-radius: 10px;
                    cursor: pointer;
                }

                .now_now{
                    color: brown;
                    font-size: 200;
                    animation-name: newo;
                    animation-duration: 3s;
                    animation-iteration-count: infinite;
                }

                @keyframes newo{
                   50% {
                       color: white;
                    } 
                }

                .now_tittle{
                    color: black;
                    font-weight: bold;
                }

                .menu-cont{
                    margin: 20px 4% 50px 4%;
                    width: 92%;
                    display: flex;
                }

                .menu-cont article{
                    background: white;
                    width: 20%;
                    font-size: 13px;
                    font-family: 'Lato', sans-serif;
                    border-radius: 10px;
                    margin-right: 20px;
                    box-shadow: 2px 2px 4px 0px #777;
                    overflow: hidden;
                }

                .menu-cont article:first-child .event_header{
                    background: brown;
                }

                .menu-cont article:last-child{
                    margin-right: 0;
                }

                .event_header{
                    background: #000000AA;
                    padding: 5px 10px 7px 10px;
                    color: white;
                    font-weight: bold;
                }

                .title{
                    font-size: 14px;
                    font-weight: 200;
                }

                .subtitle{
                    font-size: 12px;
                    letter-spacing: 1px;
                }

                .event_info{
                    padding: 5px 10px 7px 10px;
                    font-size: 200;
                }

                @media screen and (max-width: 768px){
                    img{
                        margin: 0;
                        width: 100%;
                        height: 240px;
                        border-radius: 0;
                        box-shadow: none;
                    }

                    .hover_now{
                        bottom: 15px;
                        right: 15px;
                        min-width: 220px;
                        padding: 6px 10px 8px 10px;
                        font-size: 12px;
                        border-radius: 10px;
                    }

                    .menu-cont{
                        margin: 18px 3% 50px 3%;
                        width: 94%;
                        display: flex;
                        justify-content: space-between;
                        flex-wrap: wrap;
                    }

                    .menu-cont article{
                        width: calc(50% - 10px);
                        font-size: 13px;
                        margin-right: 0px;
                        box-shadow: 2px 2px 2px 0px #777;
                        margin-bottom: 15px;
                    }

                    .event_header{
                        padding: 5px 10px 7px 10px;
                    }

                    .title{
                        font-size: 13px;
                    }

                    .subtitle{
                        font-size: 12px;
                    }

                    .event_info{
                        padding: 5px 10px 7px 10px;
                        font-size: 12px;
                    }

                    .event_info p{
                        margin-top: 2px;
                    }
                }
            `}</style>
        </> 
    )
}

export default Home;
