import { useState } from 'react'

import TitleSection from '../../sections/TitleSection'
import OptionsSection from '../../sections/OptionsSection'
import PosBiblicoMas from './PosBiblicoMas'
import PosBiblicoFem from './PosBiblicoFem'
import PosConfMas from './PosConfMas'
import PosConfFem from './PosConfFem'
import PosInicMas from './PosInicMas'
import PosInicFem from './PosInicFem'
import PosReconMas from './PosReconMas'
import PosReconFem from './PosReconFem'
import PosComuMas from './PosComuMas'
import PosComuFem from './PosComuFem'

const opcionesArray = [
    {
        no: 1,
        name: 'AB',
        genero: 'M'
    },
    {
        no: 2,
        name: 'AB',
        genero: 'F'
    },
    {
        no: 3,
        name: 'CONF',
        genero: 'M'
    },
    {
        no: 4,
        name: 'CONF',
        genero: 'F'
    },
]

const opcionesArrayCom = [
    {
        no: 5,
        name: 'INIC',
        genero: 'M'
    },
    {
        no: 6,
        name: 'INIC',
        genero: 'F'
    },
    {
        no: 7,
        name: '1COM',
        genero: 'M'
    },
    {
        no: 8,
        name: '1COM',
        genero: 'F'
    },
    {
        no: 9,
        name: '2COM',
        genero: 'M'
    },
    {
        no: 10,
        name: '2COM',
        genero: 'F'
    },
]

const Posiciones = () => {
    const [select, setSelect] = useState(4)

    return (
        <section>
            <TitleSection
                title='Posiciones Campeonato 2025'
                desc='Tablas de posiciones y clasificatorias.'
                color='#245590'
            />
            <div style={{ marginBottom: '24px' }}>
                <p>Niveles Tarde</p>
                <OptionsSection
                    /* options={['Año Biblico (M)', 'Año Biblico (F)', 'Confirmación (M)', 'Confirmación (F)']} */
                    options={opcionesArray}
                    select={select}
                    onSelect={op => setSelect(op)}
                    pos
                />
            </div>
            <div>
                <p>Niveles Mañana</p>
                <OptionsSection
                    options={opcionesArrayCom}
                    select={select}
                    onSelect={op => setSelect(op)}
                    pos
                />
            </div>
            {
                select == 1 ? <PosBiblicoMas />
                    : select == 2 ? <PosBiblicoFem />
                            : select == 4 ? <PosConfFem />
                                : select == 5 ? <PosInicMas />
                                    : select == 6 ? <PosInicFem />
                                        : select == 7 ? <PosReconMas />
                                            : select == 8 ? < PosReconFem />
                                                : select == 9 ? <PosComuMas />
                                                    : select == 10 ? <PosComuFem />
                                                        : <PosConfMas />
            }

            <style jsx>{`
                div{
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

                @media screen and (max-width: 768px){
                    
                }
            `}</style>
        </section> 
    )
}

export default Posiciones