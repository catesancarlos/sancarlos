import { useState, useEffect } from 'react'

import AppLayout from '../componentes/layout'
/* import InfoSalida from '../componentes/home/InfoSalida' */
import InfoHoy from '../componentes/home/InfoHoy'
import PartidoIda from '../componentes/banners/PartidoIda'
import MiniAgenda from '../componentes/home/MiniAgenda'
import CampSection from '../componentes/home/CampSection'
/* import PartidosSemanaF2 from '../componentes/home/PartidosSemanaF2' */
import PartidosSemana from '../componentes/home/PartidosSemana'
/* import PartidosPasadosF1 from '../componentes/home/PartidosPasadosF1' */
import PartidosPasados from '../componentes/home/PartidosPasados'

import db  from '../services/dBase'
import { doc, onSnapshot } from 'firebase/firestore'

const Home = () => {
    const [toggle, setToggle] = useState(true)
    const [now, setNow] = useState(false)
    /* const [fecha1, setFecha1] = useState([])
    const [fecha2, setFecha2] = useState([]) */
    const [fecha3, setFecha3] = useState([])
    const [fecha4, setFecha4] = useState([])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(() =>  {
            setToggle((toggle) => !toggle)
        }, 3000);
    
        return () => clearInterval(intervalID);
    }, []);

    useEffect(() => {
        onSnapshot(doc(db, 'campeonato25', 'fecha3'), (doc) => {
            setFecha3(doc.data())
        })
        onSnapshot(doc(db, 'controles', 'pagina'), (doc) => {
            setNow(doc.data().now1)
        })
        /* onSnapshot(doc(db, 'campeonato25', 'fecha2'), (doc) => {
            setFecha2(doc.data())
        }) */
    }, [])
    

    return (
        <>
            <AppLayout name='Inicio'  titulo='Cate San Carlos'>
                {/* <InfoSalida misa /> */}
                <InfoHoy
                    now={now}
                    ev='Catequesis Familiar'
                    dev='Primero de Comunión'
                    place='Teatro'
                    hour='19H00'
                />
                <div className='banner'>
                    <PartidoIda />
                    {/* <img src='/main_banner.jpg' /> */}
                    {/* <div className='hover_now'>
                        <p className='now_now'>En este momento:</p>
                        <p className='now_tittle'>
                            {toggle ? 'Catequesis Familiar 2do Confirmación' :
                            'Catequesis Familiar Iniciación'}
                        </p>
                    </div> */}
                </div>
                <MiniAgenda />
                <CampSection>
                    <PartidosSemana
                        title='Partidos de la semana:'
                        fecha={fecha4}
                        home
                    />
                    <PartidosPasados
                        title='Resultados semana pasada:'
                        fecha={fecha3}
                        home
                    />
                    {/* <PartidosSemanaF2
                        title='Partidos de la semana:'
                        fecha={fecha2}
                        home
                    />
                    <PartidosPasadosF1
                        title='Resultados semana pasada:'
                        fecha={fecha1}
                        home
                    /> */}
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
