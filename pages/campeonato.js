import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import AppLayout from '../componentes/layout'
import Container from '../componentes/sections/Container'
import Calendario from '../componentes/campeonato25/Calendario'
import PartidosSemana from '../componentes/home/PartidosSemana'
import Posiciones from '../componentes/campeonato25/Posiciones'
import Goleadores from '../componentes/campeonato25/Goleadores'
import FormatoKT25 from '../componentes/campeonato25/FormatoKT25'
import DetallesKT25 from '../componentes/campeonato25/DetallesKT25'
import EquiposKT25 from '../componentes/campeonato25/EquiposKT25'
import Catequistas from '../componentes/campeonato25/Catequistas'

import db  from '../services/dBase'
import { doc, onSnapshot } from 'firebase/firestore'

export default function Campeonato(){
    const [section, setSection] = useState(1)
    const [fecha1, setFecha1] = useState([])
    const [fecha2, setFecha2] = useState([])
    const [fecha3, setFecha3] = useState([])

    const router = useRouter()

    useEffect(() => {
        onSnapshot(doc(db, 'campeonato25', 'fecha1'), (doc) => {
            setFecha1(doc.data())
        })
        onSnapshot(doc(db, 'campeonato25', 'fecha2'), (doc) => {
            setFecha2(doc.data())
        })    
    }, [])

    useEffect(() => {
        if(router.query.s){
            setSection(router.query.s)
            router.replace('/campeonato')
        }   
    }, [router.query.s])

    const handleChangeSection = e => setSection(e)

    return(
        <AppLayout titulo='San Carlos - Campeonato' name='Campeonato'>
            <Container
                title='CAMPEONATO'
                subtitle='2025'
                img='/campeonato-logo.jpg'
            >
                <aside>
                    <p className={`op-menu ${section == 1 && 'active'}`} onClick={() => handleChangeSection(1)}>Calendario</p>
                    <p className={`op-menu ${section == 2 && 'active'}`} onClick={() => handleChangeSection(2)}>Posiciones</p>
                    <p className={`op-menu ${section == 3 && 'active'}`} onClick={() => handleChangeSection(3)}>Goleadores</p>
                    <p className={`op-menu ${section == 4 && 'active'}`} onClick={() => handleChangeSection(4)}>Formato</p>
                    <p className={`op-menu ${section == 5 && 'active'}`} onClick={() => handleChangeSection(5)}>Reglas</p>
                    <p className={`op-menu ${section == 6 && 'active'}`} onClick={() => handleChangeSection(6)}>Equipos</p>
                    {/* <p className={`op-menu ${section == 7 && 'active'}`} onClick={() => setSection(7)}>Catequistas</p> */}
                </aside>
                <div className='principal'>
                    {
                        section == 1 ? 
                            <Calendario fecha1={fecha1} fecha2={fecha2}>
                                <PartidosSemana fecha={fecha3} />
                            </Calendario> :
                                section == 2 ? <Posiciones /> :
                                    section == 3 ? <Goleadores /> :
                                        section == 4 ? <FormatoKT25 /> :
                                            section == 5 ? <DetallesKT25 /> :
                                                section == 6 ? <EquiposKT25 /> :
                                                    section == 7 ? <Catequistas /> : ''
                    }
                </div>
            </Container>

            <style jsx>{`
                aside{
                    width: 15%;
                }

                .op-menu{
                    background: white;
                    padding: 10px 16px;
                    font-size: 18px;
                    font-family: 'Lato', sans-serif;
                    text-align: center;
                    border-radius: 8px;
                    box-shadow: -2px 2px 5px 0px #888;
                    -webkit-tap-highlight-color: rgba(0,0,0,0);
                    cursor: pointer;
                    margin-bottom: 12px;
                    
                }

                .active{
                    background: #245590;
                    color: white;
                }

                .principal{
                    width: 85%;
                    padding: 18px 0 18px 35px;
                }

                @media screen and (max-width: 768px){
                    aside{
                        width: 100%;
                        display: flex;
                        flex-wrap: wrap;
                    }

                    .op-menu{
                        width: calc((100% - 12px) / 3);
                        padding: 6px 5px;
                        font-size: 15px;
                        margin-right: 6px;
                        margin-bottom: 10px;
                    }

                    .op-menu:nth-child(3), .op-menu:nth-child(6), .op-menu:nth-child(9), .op-menu:nth-child(10){
                        margin-right: 0;
                    }

                    .principal{
                        width: 100%;
                        padding: 15px 0 0 0;
                    }
                }
            `}</style>
        </AppLayout>
    )
}