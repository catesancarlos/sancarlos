import { useState } from 'react'

import TitleSection from '../sections/TitleSection'
import OptionsSection from '../sections/OptionsSection'
import EquiposBiblico from './equipos/EquiposBiblico'
import Equipos1Confir from './equipos/Equipos1Confir'
import Equipos2Confir from './equipos/Equipos2Confir'
import EquiposIniciacion from './equipos/EquiposIniciacion'
import Equipos1Comu from './equipos/Equipos1Comu'
import Equipos2Comu from './equipos/Equipos2Comu'

const opcionesArray = [
    {
        no: 1,
        name: 'Mañana'
    },
    {
        no: 2,
        name: 'Tarde'
    }
]

const EquiposKT25 = () => {
    const [select, setSelect] = useState(2)

    return (
        <div>
            <TitleSection
                title='Equipos participantes'
                desc='Detalle de equipos que participan en este campeonato.'
                color='#245590'
            />
            <OptionsSection
                nogen
                options={opcionesArray}
                select={select}
                onSelect={op => setSelect(op)}
            />
            {
                select==2 ? 
                    <>
                        <EquiposBiblico />
                        <Equipos1Confir />
                        <Equipos2Confir />
                    </>
                :
                    <>
                        <EquiposIniciacion />
                        <Equipos1Comu />
                        <Equipos2Comu />
                    </>
            }
            
            
            <style jsx>{`
                div{
                    font-family: 'Lato', sans-serif;
                }

                .pf1{
                    font-size: 20px;
                    font-weight: bold;
                }

                .pf2{
                    margin-top: 10px;
                    font-size: 17px;
                    font-weight: 200;
                    margin-bottom: 20px;
                }

                strong{
                    background: #245590;
                    padding: 6px 10px 8px 10px;
                    color: white;
                    text-align: center;
                    letter-spacing: 1px;
                    display: block;
                    border-radius: 8px;
                }

                .cont-logos{
                    margin-top: 10px;
                    display: flex;
                    flex-wrap: wrap;
                    margin-bottom: 20px;
                }

                .st{
                    margin-top: 5px;
                }

                .sb{
                    margin-bottom: 0px;
                }

                @media screen and (max-width: 768px){
                    .cont-logos{
                        margin-top: 10px;
                        display: flex;
                        justify-content: space-around;
                        flex-wrap: wrap;
                        margin-bottom: 20px;
                    }
                }
            `}</style>
        </div> 
    )
}

export default EquiposKT25