import { useState } from 'react'

import FormatoConfMas from './FormatoConfMas'
import FormatoConfFem from './FormatoConfFem'
import FormatoBibliMas from './FormatoBibliMas'
import FormatoBibliFem from './FormatoBibliFem'

const FormatoKT25 = () => {
    const [nivel, setNivel] = useState(1)

    return (
        <section>
            <p className='pf1'>Formato Campeonato 2025</p>
            <p className='pf2 st'>
                Detalle de formato que se empleara para el campeonato.
            </p>
            <div>
                <p className={`op-nivel ${nivel == 3 && 'active'}`} onClick={() => setNivel(3)}>Año Biblico (M)</p>
                <p className={`op-nivel ${nivel == 4 && 'active'}`} onClick={() => setNivel(4)}>Año Biblico (F)</p>
                <p className={`op-nivel ${nivel == 1 && 'active'}`} onClick={() => setNivel(1)}>Confirmación (M)</p>
                <p className={`op-nivel ${nivel == 2 && 'active'}`} onClick={() => setNivel(2)}>Confirmación (F)</p>
            </div>
            {
                nivel == 1 ? <FormatoConfMas sin /> :
                    nivel == 2 ? <FormatoConfFem sin /> : 
                        nivel == 3 ? <FormatoBibliMas sin /> : 
                            nivel == 4 ? <FormatoBibliFem sin /> : ''
            }
            
            <style jsx>{`
                section{
                    font-family: 'Lato', sans-serif;
                }

                .pf1{
                    font-size: 20px;
                    font-weight: bold;
                }

                .pf2{
                    margin-top: 5px;
                    font-size: 17px;
                    font-weight: 200;
                    margin-bottom: 15px;
                }

                div{
                    display: flex;
                    justify-content: center;
                }

                .op-nivel{
                    margin: 0 15px;
                    background: white;
                    padding: 9px 18px 10px 18px;
                    color: black;
                    font-size: 17px;
                    letter-spacing: 1px;
                    border-radius: 10px;
                    cursor: pointer;
                }

                .active{
                    background: #245590;
                    color: white;
                }

                @media screen and (max-width: 768px){
                    div{
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                    }

                    .op-nivel{
                        margin: 4px 4px 0 4px;
                        background: white;
                        padding: 9px 10px 10px 10px;
                        color: black;
                        font-size: 16px;
                        letter-spacing: 1px;
                        border-radius: 10px;
                        cursor: pointer;
                    }

                    .active{
                        background: #245590;
                        color: white;
                    }
                }
            `}</style>
        </section> 
    )
}

export default FormatoKT25