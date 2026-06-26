import { useState, useEffect, useRef } from 'react'

import { useRouter } from 'next/router'

import AppLayout from '../componentes/layout'
import InfoSalida from '../componentes/home/InfoSalida'
import InfoHoy from '../componentes/home/InfoHoy'
import PartidoNow from '../componentes/home/PartidoNow'
import Feliz2026 from '../componentes/banners/Feliz2026'
import MiniAgenda from '../componentes/home/MiniAgenda'
import CampSection from '../componentes/home/CampSection'
import CalendarioSemanal from '../componentes/campeonato26/calendario/CalendarioSemanal'
import BannerCampeones from '../componentes/campeonato25/BannerCampeones'
import JesuscribeNext from '../componentes/banners/JesuscribeNext'
import OneQuestionBanner from '../componentes/banners/OneQuestionBanner'
import Finales from '../componentes/home/Finales'
import FotosConfirmacion from '../componentes/home/FotosConfirmacion'

import db  from '../services/dBase'
import { getDoc, doc, onSnapshot } from 'firebase/firestore'

const Home = () => {
    const router = useRouter()
    const [section, setSection] = useState(false)
    const [first, setFirst] = useState(true)
    const [datos, setDatos] = useState(null)
    const [toggle, setToggle] = useState(true)
    const [now, setNow] = useState(false)
    const [open9, setOpen9] = useState(false)
    const [open11, setOpen11] = useState(false)
    const [fechaNow, setFechaNow] = useState([])

    const videoRef = useRef(null);

    const videoList = ['/video1.mp4', '/video2.mp4', '/video3.mp4'];
    const [current, setCurrent] = useState(0);

    const nextVideo = () => {
        setCurrent((prev) => (prev + 1) % videoList.length);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                videoRef.current?.play();
                } else {
                videoRef.current?.pause();
                }
            },
            { threshold: 0.5 } // Se dispara cuando al menos el 50% del video es visible
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(() =>  {
            setToggle((toggle) => !toggle)
        }, 5000);
    
        return () => clearInterval(intervalID);
    }, []);
    

    useEffect(() => {
        onSnapshot(doc(db, 'controles', 'pagina'), (doc) => {
            setNow(doc.data())
        })
        onSnapshot(doc(db, 'campeonato26', 'fecha1'), (doc) => {
            setFechaNow(doc.data())
        })
    }, [])

    const handleFetchQuestion = async e => {
        const docRef = doc(db, 'js-vida', `js-vd-p${e}`)
        const docSnap = await getDoc(docRef)
        if(docSnap.exists()) setDatos(docSnap.data())
    }
    

    return (
        <AppLayout name='Inicio'  titulo='Cate San Carlos'>
            <div className='aux'>
                <div className='portada'>
                    <img className='imgp' src='/portada-conf.jpg' />
                </div>
                <div className='main-cont'>
                    <div className='pagename'>
                        <p className='name-1'>Catequesis</p>
                        <p className='name-2'>SAN CARLOS</p>
                        <div className='name-3-cont'>
                            <p className='name-3'>Ricaurte</p>
                        </div>
                    </div>
                    <p className='tit'>FOTOGRAFIAS CONFIRMACIÓN</p>
                    <div className='menu-op'>
                        <div className='misa-banner' onClick={() => setOpen9(!open9)}>
                            <img src='/portada9.jpg' />
                            <div className="text-overlay">
                                <span>CONFIRMACIONES 09H00</span>
                            </div>
                        </div>
                        {
                            open9 &&
                            <div className='fototipo'>
                                <div onClick={() => router.push('https://photos.app.goo.gl/54UbJ7R5zsRdQ7jk6')}>Fotos Entrada</div>
                                <div onClick={() => router.push('https://photos.app.goo.gl/87SkKoyjuLwWKywy6')}>Fotos Crismación</div>
                                <div onClick={() => router.push('https://photos.app.goo.gl/HE2Cp5yeGNr7kVhs6')}>Otras</div>
                            </div>
                        }
                        <div className='misa-banner' onClick={() => setOpen11(!open11)}>
                            <img src='/portada11.jpeg' />
                            <div className="text-overlay">
                                <span>CONFIRMACIONES 11H00</span>
                            </div>
                        </div>
                        {
                            open11 &&
                            <div className='fototipo'>
                                <div onClick={() => router.push('https://photos.app.goo.gl/V9ukgXMV45UUYido8')}>Fotos Entrada</div>
                                <div onClick={() => router.push('https://photos.app.goo.gl/s9nqYv6jFuT2fZLR9')}>Fotos Crismación</div>
                                <div onClick={() => router.push('https://photos.app.goo.gl/3jbtV5F38y3Hwr3Z8')}>Otras</div>
                            </div>
                        }
                    
                        <div className="video-container">
                            <video
                                ref={videoRef}
                                src='/videores1.mp4'
                                autoPlay
                                muted
                                playsInline
                                loop // Esta es la propiedad que hace que se repita solo
                                controls={false}
                                disablePictureInPicture
                                onContextMenu={(e) => e.preventDefault()}
                            />
                        </div>
                    </div>
                    <p className='foot'>paasmal</p>
                </div>
                {/* <InfoSalida misa />
                <InfoHoy
                    now={now} 
                    link={['Información y compra de tablas', 'https://wa.me/593992648663']}
                />
                <PartidoNow select={now?.fecha ?? 1} home />
                <Feliz2026 />
                <MiniAgenda />
                <CampSection title='Partidos de la semana:' >
                    <CalendarioSemanal select={now?.fecha ?? 1} home />
                </CampSection>
                <BannerCampeones/>
                
                <div className='cont-jes'>
                    <div className='divo'></div>
                    <p className='title'>¿Quiéres probar tus conocimientos?</p>
                    <JesuscribeNext
                        first={first}
                        section={section}
                        onSection={() => setSection(true)}
                    >
                        <OneQuestionBanner
                            onNumRandom={handleFetchQuestion}
                            datos={datos}
                            onCerrar={() => {
                                setFirst(false),
                                setSection(false),
                                setDatos(null)}
                            }
                        />
                    </JesuscribeNext>
                </div> */}
                {/* <FotosConfirmacion />
                <Finales /> 
                <div className='banner'>
                    <PartidoIda />
                    <img src='/main_banner.jpg' />
                    <div className='hover_now'>
                        <p className='now_now'>En este momento:</p>
                        <p className='now_tittle'>
                            {toggle ? 'Catequesis Familiar 2do Confirmación' :
                            'Catequesis Familiar Iniciación'}
                        </p>
                    </div>
                </div> */}
            </div>

            <style jsx>{`
                .aux{
            
                }

                .portada{
                    position: absolute;
                    width: 100%;
                    /* El degradado va de negro (visible) a transparente */
                    -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
                    mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
                    z-index: 0;
                }

                .imgp{
                    width: 100%;
                }

                .main-cont{
                    position: absolute;
                    width: 100%;
                    top: 200px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    z-index: 1;
                }

                @media (min-width: 768px) {
                    .portada{
                        top: 40px;
                        width: 30%;
                        margin: 0 35%;
                        border-radius: 20px 20px 0 0;
                    }

                    .main-cont{
                        top: 280px;
                        width: 30%;
                        margin: 0 35%;
                    }

                    .fototipo div{
                        flex: 1;
                    }
                }

                .pagename{
                    text-align: center;
                }

                .name-1{
                    font-size: 1.6vw;
                    font-weight: bold;
                }

                .name-2{
                    margin-top: -5px;
                    color: brown;
                    font-size: 2.6vw;
                    line-height: 100%;
                    font-weight: bold;
                    text-shadow: 3px 3px #888;
                }

                .name-3-cont{
                    margin-top: 2px;
                    display: flex;
                    opacity: 0;
                }

                .name-3{
                    background: #888;
                    padding: 0px 6px 2px 6px;
                    font-size: 1.2vw;
                    font-weight: bold;
                    color: white;
                    border-radius: 8px;
                }

                .tit{
                    margin-top: 20px;
                    text-align: center;
                }

                .menu-op{
                    width: 100%;
                    padding: 0 25px;
                    display: flex;
                    flex-direction: column;
                }

                .misa-banner{
                    margin-top: 35px;
                    position: relative;
                    width: 100%;
                    height: 180px;
                    border-radius: 15px;
                    overflow: hidden;
                    cursor: pointer;
                }

                .misa-banner img{
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                }

                .text-overlay {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    padding: 50px 15px 15px 15px; /* El padding superior ayuda a que el degradado sea más alto */
                    
                    /* El degradado: de transparente arriba a negro sólido abajo */
                    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
                    
                    color: white;
                    text-align: center;
                    font-weight: 600;
                }

                .video-container {
                    width: 100%;
                    margin-top: 60px;
                    border-radius: 15px;
                    overflow: hidden;
                    margin-bottom: 80px;
                    /* ESTO SOLUCIONA EL PARPADEO */
                    aspect-ratio: 9 / 14; 
                    
                    background-color: #ccc; /* Fondo negro mientras carga el siguiente */
                    overflow: hidden;
                    display: flex; /* Ayuda a centrar el video si la relación no es perfecta */
                    /* ESTA LÍNEA ES LA CLAVE PARA MÓVIL Y DESKTOP */
                    pointer-events: none; 
                    
                    /* Previene selección de texto accidental */
                    user-select: none;
                    -webkit-user-select: none;
                }

                video {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: opacity 0.3s ease;
                    filter: brightness(100%) contrast(120%) saturate(120%);
                }

                .fototipo{
                    margin-top: 10px;
                    padding: 6px;
                    display: flex;
                    gap: 12px;
                    border: 1px dotted #555;
                    border-radius: 10px;
                }

                .fototipo div{
                    background: #a32a2a;
                    color: white;
                    padding: 4px 10px;
                    flex: 0 1 auto;
                    display: flex;         
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    border-radius: 6px;
                    cursor: pointer;
                }

                /* Al pasar el cursor (Hover) */
                .fototipo div:hover {
                    background: #777; /* Un tono un poco más claro */
                }

                /* Al hacer click/pulsar (Active) */
                .fototipo div:active {
                    background: #333; /* Un tono más oscuro para indicar presión */
                    transform: scale(0.98); /* Un pequeño efecto de profundidad */
                }

                @media (min-width: 768px) {
                    .portada{
                        top: 40px;
                        width: 30%;
                        margin: 0 35%;
                        border-radius: 20px 20px 0 0;
                    }

                    .main-cont{
                        top: 280px;
                        width: 30%;
                        margin: 0 35%;
                    }

                    .fototipo div{
                        flex: 1;
                    }
                }




                .foot{
                    margin-bottom: 10px;
                    color: #999;
                    font-style: italic;
                    font-weight: 200;
                }



                .imge{
                    margin: 0px 4% 60px 4%;
                    width: 92%;
                    height: 360px;
                    border-radius: 20px;
                }

                .cont-jes{
                    margin: 0px 4% 60px 4%;
                    width: 92%;
                }

                .divo{
                    margin-top: 18px;
                    width: 100%;
                    border: 2px solid brown;
                }

                .title{
                    margin: -17px auto 0 auto;
                    width: 380px;
                    background: #F2F8F6;
                    color: brown;
                    font-size: 22px;
                    font-weight: bold;
                    text-align: center;
                    margin-bottom: 30px;
                }

                .banner{
                    position: relative;
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

                @media screen and (max-width: 768px){
                    .name-1{
                        font-size: 20px;
                        font-weight: 600;
                    }
    
                    .name-2{
                        margin-top: -2px;
                        font-size: 38px;
                        text-shadow: 2px 2px #888;
                    }
    
                    .name-3-cont{
                        margin-top: 4px;
                    }
    
                    .name-3{
                        padding: 1px 10px 2px 10px;
                        font-size: 13px;
                        border-radius: 10px;
                    }


                    .cont-jes{
                        margin: 10px 0 30px 0;
                        width: 100%;
                    }

                    .divo{
                        margin: 0 15px 0 15px;
                        width: calc(100% - 30px);
                        border: 1px solid brown;
                    }

                    .title{
                        width: 315px;
                        margin: -13px auto 0 auto;
                        font-size: 19px;
                        margin-bottom: 20px;
                    }

                    .imge{
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
                }
            `}</style>
        </AppLayout>
    )
}

export default Home;
