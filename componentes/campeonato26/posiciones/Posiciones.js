import { useState } from 'react'

import TitleSection from '../../sections/TitleSection'
import OptionsSection from '../../sections/OptionsSection'
import PosConfMas from './PosConfMas'
import PosConfFem from './PosConfFem'
import PosSegMas from './PosSegMas'
import PosSegFem from './PosSegFem'
import PosBiblicoMas from './PosBiblicoMas'
import PosBiblicoFem from './PosBiblicoFem'
import PosComuMas from './PosComuMas'
import PosComuFem from './PosComuFem'
import PosRecMas from './PosRecMas'
import PosRecFem from './PosRecFem'
import PosInicMas from './PosInicMas'
import PosInicFem from './PosInicFem'

const niveles = [
    { id: 'confirmacion', label: 'Confirmación' },
    { id: 'seguimiento', label: 'Seguimiento' },
    { id: 'biblico', label: 'Año Bíblico' },
    { id: 'comunion', label: 'Comunión' },
    { id: 'reconciliacion', label: 'Reconciliación' },
    { id: 'iniciacion', label: 'Iniciación' },
]

const opcionesArray = [
    {
        no: 1,
        name: 'Masculino'
    },
    {
        no: 2,
        name: 'Femenino'
    }
]

const componentes = {
    confirmacion: {
        1: <PosConfMas />,
        2: <PosConfFem />
    },
    seguimiento: {
        1: <PosSegMas />,
        2: <PosSegFem />
    },
    biblico: {
        1: <PosBiblicoMas />,
        2: <PosBiblicoFem />
    },
    comunion: {
        1: <PosComuMas />,
        2: <PosComuFem />
    },
    reconciliacion: {
        1: <PosRecMas />,
        2: <PosRecFem />
    },
    iniciacion: {
        1: <PosInicMas />,
        2: <PosInicFem />
    },
};

const Posiciones = ({ nivel }) => {
    const [select, setSelect] = useState(1)

    // Buscamos el objeto que coincide con el ID que viene en la prop 'nivel'
    const nivelEncontrado = niveles.find(item => item.id === nivel)

    // Definimos el título
    const titulo = (nivelEncontrado 
        ? `${nivelEncontrado.label} 2026` 
        : 'Posiciones Campeonato 2026'
    ).toUpperCase()

    const ComponenteSeleccionado = componentes[nivel]?.[select] || 'Hola'

    return (
        <section>
            <TitleSection
                title={titulo}
                /* desc='Tablas de posiciones' */
                color='#245590'
            />
            <div className='cont-cont'>
                <OptionsSection
                    options={opcionesArray}
                    select={select}
                    onSelect={op => setSelect(op)}
                    pos
                />          
            </div>
            {ComponenteSeleccionado}

            <style jsx>{`
                .cont-cont{
                    display: flex;
                    justify-content: center;
                }

                @media screen and (max-width: 768px){
                    
                }
            `}</style>
        </section> 
    )
}

export default Posiciones