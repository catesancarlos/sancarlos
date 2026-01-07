import { useState } from 'react'

import TitleSection from '../../sections/TitleSection'
import OptionsSection from '../../sections/OptionsSection'
import PosConfFem from './PosConfFem'
import PosConfMas from './PosConfMas'

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

const Posiciones = () => {
    const [select, setSelect] = useState(2)

    return (
        <section>
            <TitleSection
                title='Posiciones Campeonato 2026'
                desc='Tablas de posiciones'
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
            {
                select == 1 ? <PosConfMas /> : <PosConfFem />
            }

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