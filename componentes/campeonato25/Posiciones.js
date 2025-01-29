import { useState } from 'react'

import TitleSection from '../sections/TitleSection'
import OptionsSection from '../sections/OptionsSection'
import PosBiblicoMas from './posiciones/PosBiblicoMas'
import PosBiblicoFem from './posiciones/PosBiblicoFem'
import PosConfMas from './posiciones/PosConfMas'
import PosConfFem from './posiciones/PosConfFem'

const Posiciones = () => {
    const [select, setSelect] = useState(3)

    return (
        <section>
            <TitleSection
                title='Posiciones Campeonato 2025'
                desc='Tablas de posiciones y clasificatorias.'
                color='#245590'
            />
            <OptionsSection
                /* options={['Año Biblico (M)', 'Año Biblico (F)', 'Confirmación (M)', 'Confirmación (F)']} */
                options={['AB (M)', 'AB (F)', 'CONF (M)', 'CONF (F)']}
                select={select}
                onSelect={op => setSelect(op)}
                pos
            />
            {
                select == 1 ? <PosBiblicoMas />
                    : select == 2 ? <PosBiblicoFem />
                        : select == 4 ? <PosConfFem />
                            : <PosConfMas />
            }

            <style jsx>{`

                @media screen and (max-width: 768px){
                    
                }
            `}</style>
        </section> 
    )
}

export default Posiciones