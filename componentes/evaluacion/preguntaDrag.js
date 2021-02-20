import { useState } from "react";
import Board from '../drag/OldBoard'
import Card from '../drag/Card'

const Drop = ({no, onNota}) => {
    const [note, setNote] = useState(0)

    const handleNota = edrag => {
        if(edrag == 'correcto') setNote(note + 1)
        else setNote(note - 1)
        onNota([no, note])
    }

    return (
        <div className='cont-pregunta'>
            <div className='pregunta'>
                <p className='num'>{`${no}.`}</p>
                <p>Arrastre los elementos a la área correcta, dependiendo si son signos o realidad del bautismo</p>
            </div>
            <div>
                <Board id='dr-0' className='cont-respuestas'>
                    <Card id='realidad-sumergidos'>
                        Sumergidos
                    </Card>
                    <Card id='signo-agua'>
                        Agua
                    </Card>
                    <Card id='nada-padrinos'>
                        Padrinos
                    </Card>
                    <Card id='signo-crisma'>
                        Crisma
                    </Card>
                    <Card id='signo-cirio'>
                        Cirio
                    </Card>
                    <Card id='nada-cruz'>
                        Cruz
                    </Card>
                    <Card id='realidad-injertados'>
                        Injertados
                    </Card>
                    <Card id='signo-ropa'>
                        Ropa blanca
                    </Card>
                </Board>
                <div className='cont-opciones'>
                    <p className='opcion'>Signo</p>
                    <div className='cont-cont'>
                        <Board id='signo-dr' className='board' notaU={handleNota}>

                        </Board>
                        <Board id='signo-dr' className='board' notaU={handleNota}>

                        </Board>
                        <Board id='signo-dr' className='board' notaU={handleNota}>

                        </Board>
                        <Board id='signo-dr' className='board' notaU={handleNota}>

                        </Board>
                    </div>
                    <div className='drop-opcion'></div>
                </div>
                <div className='cont-opciones'>
                    <p className='opcion'>Realidad</p>
                    <div className='cont-cont'>
                        <Board id='realidad-dr' className='board' notaU={handleNota}>

                        </Board>
                        <Board id='realidad-dr' className='board' notaU={handleNota}>

                        </Board>
                    </div>
                </div>
            </div>
            

            <style jsx>{`
                .cont-pregunta{
                    width: 60%;
                    margin: 0 auto;
                    padding: 20px 20px 15px 20px;
                    border: 1px solid white;
                    border-radius: 20px;
                    margin-bottom: 20px;
                }

                .num{
                    padding-right: 8px;
                }

                .pregunta{
                    color: brown;
                    font-weight: bold;
                    font-size: 20px;
                    line-height: 30px;
                    display: flex;
                }

                .cont-cont{
                    display: flex;
                }

                .cont-opciones{
                    display: flex;
                    align-items: center;
                    margin: 10px 0 0 25px;
                }

                .opcion{
                    width: 75px;
                    margin-right: 10px;
                }

                @media screen and (max-width: 480px){
                    .cont-pregunta{
                        width: 100%;
                        padding: 0;
                        border: none;
                        border-radius: 0;
                        margin-bottom: 0;
                        padding-bottom: 20px;
                        border-bottom: 1px solid #ccdae8;
                    }

                    .pregunta{
                        font-size: 16px;
                        line-height: 20px;
                        padding: 15px 15px 0 15px;
                    }
                
                }

            `}</style>
        </div> 
    )
}

export default Drop;