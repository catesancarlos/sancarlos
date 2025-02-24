import { useState, useEffect } from 'react'

const numB = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const numI = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
const numN = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45]
const numG = [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60]
const numO = [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75]

import AppLayout from '../componentes/layout'
import NumBingo from '../componentes/home/NumBingo'

export default function Paasmal(){
    const [erase, setErase] = useState(false)
    
    return(
        <AppLayout name='Segundos de Confirmación' titulo='2 Confirmación - Cate San Carlos'>
            <section>
                <div className='bucket0'>
                    <p>B</p>
                    <div className='bucket'>
                        { numB.map(n => <NumBingo key={n} num={n} erase={erase} /> )}
                    </div>
                </div>
                <div className='bucket0'>
                    <p>I</p>
                    <div className='bucket'>
                        { numI.map(n => <NumBingo key={n} num={n} erase={erase} /> )}
                    </div>
                </div>
                <div className='bucket0'>
                    <p>N</p>
                    <div className='bucket'>
                        { numN.map(n => <NumBingo key={n} num={n} erase={erase} /> )}
                    </div>
                </div>
                <div className='bucket0'>
                    <p>G</p>
                    <div className='bucket'>
                        { numG.map(n => <NumBingo key={n} num={n} erase={erase} /> )}
                    </div>
                </div>
                <div className='bucket0'>
                    <p onClick={() => setErase(!erase)}>O</p>
                    <div className='bucket'>
                        { numO.map(n => <NumBingo key={n} num={n} erase={erase} /> )}
                    </div>
                </div>
            </section>

            <style jsx>{`
                section{
                    font-family: 'Lato', sans-serif;
                    margin: 0 4% 0 4%;
                    width: 92%;
                    
                }

                p{
                    background: brown;
                    margin: 5px 20px 5px 5px;
                    width: 60px;
                    height: 60px;
                    color: white;
                    font-size: 40px;
                    font-weight: bold;
                    text-align: center;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: 3px solid brown;
                    border-radius: 10px;
                }

                .bucket0{
                    margin-top: 15px;
                    padding: 10px;
                    display: flex;
                    justify-content: center;
                    border: 3px solid brown;
                    border-radius: 10px;
                }

                .bucket{
                    display: flex;
                }
            `}</style>
        </AppLayout>
        
    )
}
