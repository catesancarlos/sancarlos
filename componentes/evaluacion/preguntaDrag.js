import { useState } from "react";
import Board from '../drag/board'
import Card from '../drag/card'

const Drop = ({no, onNota}) => {
    const [note, setNote] = useState(0)

    const handleNota = edrag => {
        if(edrag == 'correcto') setNote(note + 1)
        onNota([no, note])
    }

    return (
        <div className='cont-pregunta'>
            <div className='pregunta'>
                <p className='num'>{`${no}.`}</p>
                <p>Arrastre las virtudes, junto al pecado capital que corresponda</p>
            </div>
            <div>
                <Board id='dr-0' className='cont-respuestas'>
                    <Card id='humildad'>
                        Humildad
                    </Card>
                    <Card id='generosidad'>
                        Generosidad
                    </Card>
                    <Card id='caridad'>
                        Caridad
                    </Card>
                    <Card id='pureza'>
                        Pureza
                    </Card>
                    <Card id='paciencia'>
                        Paciencia
                    </Card>
                    <Card id='diligencia'>
                        Diligencia
                    </Card>
                    <Card id='templanza'>
                        Templanza
                    </Card>
                </Board>
                <div className='cont-opciones'>
                    <p className='opcion'>Ira</p>
                    <Board id='paciencia-dr' className='board' notaU={handleNota}>

                    </Board>
                    <div className='drop-opcion'></div>
                </div>
                <div className='cont-opciones'>
                    <p className='opcion'>Gula</p>
                    <Board id='templanza-dr' className='board' notaU={handleNota}>

                    </Board>
                </div>
                <div className='cont-opciones'>
                    <p className='opcion'>Envidia</p>
                    <Board id='caridad-dr' className='board' notaU={handleNota}>

                    </Board>
                </div>
                <div className='cont-opciones'>
                    <p className='opcion'>Pereza</p>
                    <Board id='diligencia-dr' className='board' notaU={handleNota}>

                    </Board>
                </div>
                <div className='cont-opciones'>
                    <p className='opcion'>Sobervia</p>
                    <Board id='humildad-5' className='board' notaU={handleNota}>

                    </Board>
                </div>
                <div className='cont-opciones'>
                    <p className='opcion'>Avaricia</p>
                    <Board id='generosidad-6' className='board' notaU={handleNota}>

                    </Board>
                </div>
                <div className='cont-opciones'>
                    <p className='opcion'>Lujuria</p>
                    <Board id='pureza-7' className='board' notaU={handleNota}>

                    </Board>
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

                .cont-opciones{
                    display: flex;
                    align-items: center;
                    margin: 10px 0 0 25px;
                }

                .opcion{
                    width: 100px;
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