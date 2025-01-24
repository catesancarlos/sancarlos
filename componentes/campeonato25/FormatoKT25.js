import { useState } from 'react'

import TitleSection from '../sections/TitleSection'
import OptionsSection from '../sections/OptionsSection'
import FormatoConfMas from './FormatoConfMas'
import FormatoConfFem from './FormatoConfFem'
import FormatoBibliMas from './FormatoBibliMas'
import FormatoBibliFem from './FormatoBibliFem'

export default function FormatoKT25(){
    const [select, setSelect] = useState(3)

    return (
        <section>
            <TitleSection
                title='Formato Campeonato 2025'
                desc='Detalle de formato que se empleará para el campeonato.'
            />
            <OptionsSection
                options={['Año Biblico (M)', 'Año Biblico (F)', 'Confirmación (M)', 'Confirmación (F)']}
                select={select}
                onSelect={op => setSelect(op)}
            />
            {
                select == 1 ? <FormatoBibliMas sin /> : 
                    select == 2 ? <FormatoBibliFem sin /> :
                        select == 3 ? <FormatoConfMas sin /> :
                            select == 4 ? <FormatoConfFem sin /> :  ''
            }
        </section> 
    )
}