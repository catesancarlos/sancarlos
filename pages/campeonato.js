import { useState } from 'react'

import AppLayout from '../componentes/layout'
import DetallesKT25 from '../componentes/campeonato25/DetallesKT25'
import EquiposKT25 from '../componentes/campeonato25/EquiposKT25'
import FormatoKT25 from '../componentes/campeonato25/FormatoKT25'
import Inauguracion from '../componentes/campeonato25/Inauguracion'
import BiblicoKT25 from '../componentes/campeonato25/BiblicoKT25'
import ConfirmacionKT25 from '../componentes/campeonato25/ConfirmacionKT25'
import Catequistas from '../componentes/campeonato25/Catequistas'
import Reglamento from '../componentes/campeonato25/Reglamento'
import FutbolSala from '../componentes/campeonato25/FutbolSala'
import Calendario from '../componentes/campeonato25/Calendario'
import Posiciones from '../componentes/campeonato25/Posiciones'

export default function Campeonato(){
    const [section, setSection] = useState(10)

    return(
        <AppLayout titulo='San Carlos - Campeonato' name='Campeonato'>
            <section>
                <div className='first'>
                    <img src='/campeonato-logo.jpg' />
                    <div className='cff'>
                        <p className='desc'>CAMPEONATO</p>
                        <p className='desc'>2025</p>
                    </div>
                </div>
                <div className='main' >
                    <div className='menu'>
                        <p className={`op-menu ${section == 10 && 'active'}`} onClick={() => setSection(10)}>Calendario</p>
                        <p className={`op-menu ${section == 11 && 'active'}`} onClick={() => setSection(11)}>Posiciones</p>
                        <p className={`op-menu ${section == 1 && 'active'}`} onClick={() => setSection(1)}>Detalles</p>
                        <p className={`op-menu ${section == 2 && 'active'}`} onClick={() => setSection(2)}>Equipos</p>
                        <p className={`op-menu ${section == 3 && 'active'}`} onClick={() => setSection(3)}>Formato</p>
                        {/* <p className={`op-menu ${section == 5 && 'active'}`} onClick={() => setSection(5)}>Año Bíblico</p>
                        <p className={`op-menu ${section == 6 && 'active'}`} onClick={() => setSection(6)}>Confirmación</p> */}
                        <p className={`op-menu ${section == 7 && 'active'}`} onClick={() => setSection(7)}>Catequistas</p>
                        {/* <p className={`op-menu ${section == 4 && 'active'}`} onClick={() => setSection(4)}>Inauguración</p> */}
                        <p className={`op-menu ${section == 8 && 'active'}`} onClick={() => setSection(8)}>Reglamento</p>
                        <p className={`op-menu sal1 ${section == 9 && 'active'}`} onClick={() => setSection(9)}>Reglas Futbol Sala</p>
                        <p className={`op-menu sal2 ${section == 9 && 'active'}`} onClick={() => setSection(9)}>Futbol Sala</p>
                    </div>
                    <div className='principal'>
                        {
                            section == 1 ? <DetallesKT25 /> :
                                section == 2 ? <EquiposKT25 /> :
                                    section == 3 ? <FormatoKT25 /> :
                                        section == 4 ? <Inauguracion /> :
                                            section == 5 ? <BiblicoKT25 /> :
                                                section == 6 ? <ConfirmacionKT25 /> :
                                                    section == 7 ? <Catequistas /> :
                                                        section == 8 ? <Reglamento /> : 
                                                            section == 9 ? <FutbolSala /> :
                                                                section == 10 ? <Calendario /> :
                                                                    section == 11 ? <Posiciones /> : '.'

                        }
                    </div>
                </div>
            </section>

            <style jsx>{`
                section{
                    margin: 20px 4% 50px 4%;
                    width: 92%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .first{
                    width: 100%;
                    background: white;
                    padding: 10px 100px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 15px;
                    margin-bottom: 20px;
                }

                img{
                    width: 55px;
                }

                .cff{
                    margin-left: 15px;
                }

                .desc{
                    font-size: 16px;
                    font-weight: bold;
                    letter-spacing: 1px;
                }

                .desc:last-child{
                    font-weight: 500;
                }

                .main{
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                }

                .menu{
                    width: 15%;
                }

                .op-menu{
                    background: white;
                    padding: 10px 16px;
                    font-size: 18px;
                    font-family: 'Lato', sans-serif;
                    text-align: center;
                    border-radius: 8px;
                    margin-bottom: 12px;
                    cursor: pointer;
                }

                .sal2{
                    display: none;
                }

                .active{
                    background: #245590;
                    color: white;
                }

                .principal{
                    width: calc(85% - 22px);
                }

                @media screen and (max-width: 768px){
                    section{
                        margin: 0px 15px 50px 15px;
                        width: calc(100% - 30px);
                    }

                    .first{
                        margin-bottom: 10px;
                    }

                    .main{
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                    }

                    .menu{
                        width: 100%;
                        display: flex;
                        flex-wrap: wrap;
                    }

                    .op-menu{
                        width: calc((100% - 10px) / 3);
                        padding: 8px 5px;
                        font-size: 16px;
                        margin-right: 5px;
                        margin-bottom: 10px;
                    }

                    .op-menu:nth-child(3), .op-menu:nth-child(6), .op-menu:nth-child(9), .op-menu:nth-child(10){
                        margin-right: 0;
                    }

                    .sal2{
                        display: block;
                    }

                    .sal1{
                        display: none;
                    }

                    .principal{
                        padding-top: 20px;
                        width: 100%;
                    }
                }
            `}</style>
        </AppLayout>
    )
}