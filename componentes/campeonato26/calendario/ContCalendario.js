import { useState } from 'react'

import TitleSection from '../../sections/TitleSection'
import OptionsSection from '../../sections/OptionsSection'

const optionsArray = [
    {
        no: 1,
        name: 'S.1'
    },
]

export default function Calendario({ datos, children }){
    const [select, setSelect] = useState(18)

    return (
        <section>
            <TitleSection
                title='Calendario Campeonato 2026'
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
                    fec
                />
            </div>
            {
                <div className='fecha-label'>
                    <strong className='now-fec'>Semana 1</strong>
                    <i>[10-11 enero 2026]</i>
                        { children }
                </div>
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