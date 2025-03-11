import { useState } from 'react'

import TitleSection from '../../sections/TitleSection'
import OptionsSection from '../../sections/OptionsSection'
import PartidoSoloResultado from './PartidoSoloResultado'
import PartidosPasadosF1 from './pasados/PartidosPasadosF1'
import PartidosPasadosF2 from './pasados/PartidosPasadosF2'
import PartidosPasadosF3 from './pasados/PartidosPasadosF3'
import PartidosPasadosF4 from './pasados/PartidosPasadosF4'
import PartidosPasadosF5 from './pasados/PartidosPasadosF5'
import PartidosPasadosF6 from './pasados/PartidosPasadosF6'
import PartidosPasados from './PartidosPasados'

const optionsArray = [
    {
        no: 1,
        name: 'S.1'
    },
    {
        no: 2,
        name: 'S.2'
    },
    {
        no: 3,
        name: 'S.3'
    },
    {
        no: 4,
        name: 'S.4'
    },
    {
        no: 5,
        name: 'S.5'
    },
    {
        no: 6,
        name: 'S.6'
    },
    {
        no: 7,
        name: 'S.7'
    },
    {
        no: 8,
        name: 'S.8'
    },
    {
        no: 9,
        name: 'S.9'
    }
]

export default function Calendario({ datos, children }){
    const [select, setSelect] = useState(8)

    return (
        <section>
            <TitleSection
                title='Calendario Campeonato 2025'
                desc='Fecha y hora de los partidos del campeonato.'
                color='#245590'
            />
            <div className='op-label' >
                <p>Semana:</p>
                <OptionsSection
                    options={optionsArray}
                    select={select}
                    onSelect={op => setSelect(op)}
                    pos
                />
            </div>
            {
                select == 8 ?
                    <div className='fecha-label'>
                        <strong className='now-fec'>Octava semana</strong>
                        <i>[15-16 marzo 2025] Esta semana</i>
                        {children}
                    </div>
                : select == 9 ?
                    <div className='fecha-label'>
                        <strong className='now-fec'>Novena semana</strong>
                        <i>[22-23 marzo 2025]</i>
                        <PartidoSoloResultado
                            com
                            dia='Sábado'
                            fecha='22 Mar'
                            hora='11h40'
                            genero='F'
                            equipos={['Las Milagrosas', 'Ángeles']}
                            paralelos={['1ro Comun. 4 (F)', '1ro Comun. 5 (F)']}
                            logos={['14F', '15F']}
                            colores={{
                                eq1: ['black', 'black', 'white'],
                                eq2: ['white', 'black', 'black']
                            }}
                        />
                        <PartidoSoloResultado
                            com
                            dia='Sábado'
                            fecha='22 Mar'
                            hora='12h10'
                            genero='M'
                            equipos={['Los hijos de Dios', 'Guerreros de Dios']}
                            paralelos={['1ro Comun. 4 (M)', '1ro Comun. 5 (M)']}
                            logos={['14M', '15M']}
                            colores={{
                                eq1: ['blue', 'blue', 'white'],
                                eq2: ['white', 'black', 'black']
                            }}
                        />
                        <PartidoSoloResultado
                            dia='Sábado'
                            fecha='22 Mar'
                            hora='16h40'
                            genero='M'
                            equipos={['Los Hermanos de Jesus', 'Equipo de Dios']}
                            paralelos={['Año Bíblico 1 (M)', 'Año Bíblico 4 (M)']}
                            logos={['A1M', 'A4M']}
                            colores={{
                                eq1: ['white', 'black', 'black'],
                                eq2: ['red', 'red', 'white']
                            }}
                            mas={[, 1]}
                        />
                        <PartidoSoloResultado
                            dia='Sábado'
                            fecha='22 Mar'
                            hora='17h20'
                            genero='M'
                            equipos={['Los Misioneros', 'Equipo Glorioso']}
                            paralelos={['Año Bíblico 2 (M)', 'Año Bíblico 4 (M)']}
                            logos={['A2M', 'A4M']}
                            colores={{
                                eq1: ['white', 'black', 'black'],
                                eq2: ['blue', 'blue', 'white']
                            }}
                            mas={[, 2]}
                        />
                        <PartidoSoloResultado
                            dia='Domingo'
                            fecha='23 Mar'
                            hora='08h30'
                            genero='F'
                            equipos={['Las Misioneras', 'Mujeres de Nazareth']}
                            paralelos={['Año Bíblico 2 (F)', 'Año Bíblico 4 (F)']}
                            logos={['A2F', 'A4F']}
                            colores={{
                                eq1: ['white', 'black', 'black'],
                                eq2: ['red', 'red', 'white']
                            }}
                        />
                        <PartidoSoloResultado
                            dia='Domingo'
                            fecha='23 Mar'
                            hora='09h20'
                            genero='F'
                            equipos={['Las Herederas de Dios', 'Camino a la Tierra Prometída']}
                            paralelos={['Año Bíblico 1 (F)', 'Año Bíblico 5 (F)']}
                            logos={['A1F', 'A5F']}
                            colores={{
                                eq1: ['white', 'black', 'black'],
                                eq2: ['white', 'black', 'black']
                            }}
                        />
                        <PartidoSoloResultado
                            com
                            dia='Domingo'
                            fecha='23 Mar'
                            hora='10h10'
                            genero='F'
                            equipos={['Pueblo de Israel', 'Los historicos']}
                            paralelos={['2do Comun. 1 (F)', '2do Comun. 2 (F)']}
                            logos={['21F', '22F']}
                            colores={{
                                eq1: ['white', 'black', 'black'],
                                eq2: ['blue', 'blue', 'white']
                            }}
                        />
                        <PartidoSoloResultado
                            com
                            dia='Domingo'
                            fecha='23 Mar'
                            hora='11h00'
                            genero='M'
                            equipos={['Pueblo de Israel', 'Las historicas']}
                            paralelos={['2do Comun. 1 (M)', '2do Comun. 2 (M)']}
                            logos={['21M', '22M']}
                            colores={{
                                eq1: ['white', 'black', 'black'],
                                eq2: ['blue', 'blue', 'white']
                            }}
                        />
                        <PartidoSoloResultado
                            com
                            dia='Domingo'
                            fecha='23 Mar'
                            hora='11h50'
                            genero='F'
                            equipos={['Hijas de Maria', 'El Maná']}
                            paralelos={['2do Comun. 4 (F)', '2do Comun. 5 (F)']}
                            logos={['24F', '25F']}
                            colores={{
                                eq1: ['black', 'red', 'white'],
                                eq2: ['white', 'black', 'black']
                            }}
                        />
                        <PartidoSoloResultado
                            com
                            dia='Domingo'
                            fecha='23 Mar'
                            hora='12h30'
                            genero='M'
                            equipos={['Gerreros contra el mal', 'El Maná']}
                            paralelos={['2do Comun. 4 (M)', '2do Comun. 5 (M)']}
                            logos={['24M', '25M']}
                            colores={{
                                eq1: ['black', 'red', 'white'],
                                eq2: ['white', 'black', 'black']
                            }}
                        />
                        {/* <strong className='ct'>Los demas partidos, se iran publicando paulatinamente...</strong> */}
                    </div>
                : select == 1 ?
                    <div className='fecha-label'>
                        <PartidosPasadosF1
                            title='Resultados Semana 1:'
                            fec='[19 enero 2025]'
                            fecha={datos[0]}
                        />
                    </div>
                : select == 2 ?
                    <div className='fecha-label'>
                        <PartidosPasadosF2
                            title='Resultados Semana 2:'
                            fec='[26 enero 2025]'
                            fecha={datos[1]}
                        />
                    </div>
                : select == 3 ?
                    <div className='fecha-label'>
                        <PartidosPasadosF3
                            title='Resultados Semana 3:'
                            fec='[1-2 febrero 2025]'
                            fecha={datos[2]}
                        />
                    </div>
                : select == 4 ?
                    <div className='fecha-label'>
                        <PartidosPasadosF4
                            title='Resultados Semana 4:'
                            fec='[8 febrero 2025]'
                            fecha={datos[3]}
                        />
                        <strong className='ct'>[Fin de la Primera Ronda]</strong>
                    </div>
                : select == 5 ?
                    <div className='fecha-label'>
                        <PartidosPasadosF5
                            title='Resultados Semana 5:'
                            fec='[16 febrero 2025]'
                            fecha={datos[4]}
                        />
                    </div>
                : select == 6 ?
                    <div className='fecha-label'>
                        <PartidosPasadosF6
                            title='Resultados Semana 6:'
                            fec='[22-23 febrero 2025]'
                            fecha={datos[5]}
                        />
                    </div>
                : select == 7 ?
                    <div className='fecha-label'>
                        <PartidosPasados
                            title='Resultados Semana 7:'
                            fec='[9 marzo 2025]'
                            fecha={datos[6]}
                        />
                    </div>
                : ''
            }

            <style jsx>{`
                strong{
                    width: 100%;
                    font-size: 20px;
                    margin-bottom: 12px;
                }

                .ct{
                    text-align: center;
                }

                .fecha-label{
                    margin-top: 20px;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .op-label{
                    position: relative;
                    padding: 14px 10px 12px 10px;
                    border: 1px solid black;
                    border-radius: 10px;
                }

                p{
                    position: absolute;
                    top: -12px;
                    background: #F2F8F6;
                    padding: 0 5px;
                    font-weight: 500;
                }

                .now-fec{
                    margin-top: 5px;
                    margin-bottom: 2px;
                }

                i{
                    color: #000000;
                    width: 100%;
                    font-size: 17px;
                    font-weight: 200;
                    margin-bottom: 12px;
                }

                @media screen and (max-width: 768px){
                    strong{
                        font-size: 16px;
                    }

                    .now-fec{
                        margin-top: 0;
                    }

                    i{
                        font-size: 15px;
                    }
                }
            `}</style>
        </section> 
    )
}