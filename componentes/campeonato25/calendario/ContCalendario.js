import { useState } from 'react'

import TitleSection from '../../sections/TitleSection'
import OptionsSection from '../../sections/OptionsSection'
import ItemCalendario from './ItemCalendario'
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
                        <strong>Novena semana</strong>
                        <strong className='ct'>Los demas partidos, se iran publicando paulatinamente...</strong>
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