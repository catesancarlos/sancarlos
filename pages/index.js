import { useState, useEffect } from 'react'

import AppLayout from '../componentes/layout'
import InfoSalida from '../componentes/home/InfoSalida'
import InfoHoy from '../componentes/home/InfoHoy'
import PartidoNow from '../componentes/home/PartidoNow'
import MiniAgenda from '../componentes/home/MiniAgenda'
import CampSection from '../componentes/home/CampSection'
import PartidosSemana from '../componentes/campeonato25/calendario/PartidosSemana'
import PartidosPasadosF13 from '../componentes/campeonato25/calendario/pasados/PartidosPasadosF13'
import JesuscribeNext from '../componentes/banners/JesuscribeNext'
import OneQuestionBanner from '../componentes/banners/OneQuestionBanner'

import db  from '../services/dBase'
import { getDoc, doc, onSnapshot } from 'firebase/firestore'

const Home = () => {
    const [section, setSection] = useState(false)
    const [first, setFirst] = useState(true)
    const [datos, setDatos] = useState(null)
    const [toggle, setToggle] = useState(true)
    const [now, setNow] = useState(false)
    const [fechaNow, setFechaNow] = useState([])
    const [fechaAnt, setFechaAnt] = useState([])

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
        onSnapshot(doc(db, 'campeonato25', 'fecha913'), (doc) => {
            setFechaAnt(doc.data())
        })
        onSnapshot(doc(db, 'campeonato25', 'fecha914'), (doc) => {
            setFechaNow(doc.data())
        })
    }, [])

    const handleFetchQuestion = async e => {
        const docRef = doc(db, 'js-vida', `js-vd-p${e}`)
        const docSnap = await getDoc(docRef)
        if(docSnap.exists()) setDatos(docSnap.data())
    }
    

    return (
        <>
            <AppLayout name='Inicio'  titulo='Cate San Carlos'>
                {/* <InfoSalida misa /> */}
                <InfoHoy
                    now={now} /* link={['Información y compra de tablas', 'https://wa.me/593992648663']} */
                />
                <PartidoNow fecha={fechaNow} />
                <MiniAgenda />
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
                {/* <div className='banner'>
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
                <CampSection>
                    <PartidosSemana
                        title1='Partidos sábado:'
                        title2='Partidos domingo:'
                        fecha={fechaNow}
                        home
                    />
                    <PartidosPasadosF13
                        /* noTop */
                        title='Resultados semana pasada:'
                        fecha={fechaAnt}
                        home
                    />
                </CampSection>
            </AppLayout>

            <style jsx>{`
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
                }
            `}</style>
        </> 
    )
}

export default Home;
