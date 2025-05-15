import { useState } from 'react'

import TitleSection from '../../sections/TitleSection'
import OptionsSection from '../../sections/OptionsSection'
import GolMasTarde from './GolMasTarde'
import GolFemTarde from './GolFemTarde'
import GolMasManana from './GolMasManana'
import GolFemManana from './GolFemManana'

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

const opcionesArrayCom = [
    {
        no: 3,
        name: 'Masculino'
    },
    {
        no: 4,
        name: 'Femenino'
    }
]

const Goleadores = () => {
    const [select, setSelect] = useState(4)

    return (
        <section>
            <TitleSection
                title='Goleadores Campeonato 2025'
                desc='Tablas de goleadores del Campeonato 2025.'
                color='#245590'
            />
            <div className='cont-cont'>
                <div className='cont-niv' style={{ margin: '0 20px 24px 0' }}>
                    <p>Niveles Tarde</p>
                    <OptionsSection
                        options={opcionesArray}
                        select={select}
                        onSelect={op => setSelect(op)}
                        pos
                    />
                </div>
                <div className='cont-niv' style={{ margin: '0 0 24px 0' }}>
                    <p>Niveles Mañana</p>
                    <OptionsSection
                        options={opcionesArrayCom}
                        select={select}
                        onSelect={op => setSelect(op)}
                        pos
                    />
                </div>
            </div>
            <div className='tablas'>
                {
                    select == 2 ? <GolFemTarde />
                        : select == 3 ? <GolMasManana />
                            : select == 4 ? <GolFemManana />
                                : <GolMasTarde />
                        
                }
            </div>

            <style jsx>{`
                .cont-cont{
                    display: flex;
                    justify-content: center;
                }

                .cont-niv{
                    position: relative;
                    padding: 14px 10px 12px 10px;
                    border: 1px solid black;
                    border-radius: 10px;
                }

                .cont-niv p{
                    position: absolute;
                    top: -12px;
                    background: #F2F8F6;
                    padding: 0 5px;
                    font-weight: 500;
                }

                .tablas{
                    display: flex;
                    justify-content: space-around;
                    align-items: flex-start;
                }

                .tablas table{
                    margin-top: 0;
                }

                td{
                    padding: 1px 5px 2px 5px;
                    font-size: 14px;
                    text-align: center;
                    border: 1px solid black;
                }

                .ita{
                    font-style: italic;
                    font-weight: 300;
                }

                tr td:nth-child(2){
                    text-align: left;
                }

                tr td:nth-child(3){
                    text-align: left;
                }

                tr td:last-child{
                    text-align: center;
                }

                .c-t{
                    background: black;
                    color: white;
                    border: 1px solid black;
                    
                }

                .t1{
                    border-radius: 0 0 0 10px;
                }

                .t2{
                    text-align: center;
                    border-radius: 0 0 10px 0;
                }
                
                .c-t-m{
                    background: #245590;
                    color: white;
                    border: 1px solid #245590;
                    border-radius: 10px 10px 0 0;
                }

                .c-t-f{
                    background: #CC397B;
                    color: white;
                    border: 1px solid #CC397B;
                    border-radius: 10px 10px 0 0;
                }

                .eq{
                    width: 270px;
                    text-align: left;
                }

                .info-inag td{
                    padding: 0;
                    font-size: 13px;
                    text-align: left;
                    border: none;
                }

                @media screen and (max-width: 768px){
                    .tablas{
                        flex-wrap: wrap;
                        justify-content: space-around;
                        align-items: flex-start;
                    }
                    
                    td{
                        font-size: 13px;
                    }
                }
            `}</style>
        </section> 
    )
}

export default Goleadores