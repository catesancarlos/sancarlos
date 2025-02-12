import { useState, useEffect } from 'react'

import NumPregunta from '../jesuscribe/NumPregunta'
import RespOpcion from '../jesuscribe/RespOpcion'

const preguntas = [
     1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 
    16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45,
    46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75,
    76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
    91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104,
    105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 
    117, 118, 119, 120, 121, 122, 123, 124, 125
]

export default function OneQuestionBanner({ datos, onNumRandom, onCerrar }){
    const [sorteo, setSorteo] = useState(true)
    const [select, setSelect] = useState([false, false, false, false])
    const [result, setResult] = useState(null)
    const [ran1, setRan1] = useState(0)
    const [ran2, setRan2] = useState(0)
    const [ran3, setRan3] = useState(0)
    const [ran4, setRan4] = useState(0)
    const [ran5, setRan5] = useState(0)

    const handleCerrar = () => {
        setSelect([false, false, false, false])
        setResult(null)
        setSorteo(false)
        onCerrar()
    }

    const handleSelect = (e) => {
        if(e==0) setSelect([true, false, false, false])
        else if(e==1) setSelect([false, true, false, false])
        else if(e==2) setSelect([false, false, true, false])
        else if(e==3) setSelect([false, false, false, true])

        if(datos?.respuestas[e] == datos?.correcto){
            setResult('CORRECTO')
            setTimeout(handleCerrar, 3000)
        } else{
            setResult('INCORRECTO')
            setTimeout(handleCerrar, 3000)
        }
    }

    useEffect(() => {
        let i = 0
        if(sorteo){
            const timer = setInterval(() => {
                if(i<50){
                    setRan1(Math.floor(Math.random() * 100))
                    setRan2(Math.floor(Math.random() * 100))
                    setRan3(Math.floor(Math.random() * 100))
                    setRan4(Math.floor(Math.random() * 100))
                    setRan5(Math.floor(Math.random() * preguntas.length))
                    i=i+1
                } else{
                    clearInterval(timer)
                    setRan1(0)
                    setRan2(0)
                    setRan3(0)
                    setRan4(0)
                    setRan5(0)
                    const rand = Math.random() * preguntas.length
                    const index = Math.floor(rand)
                    onNumRandom(preguntas[index])
                    setSorteo(false)
                }
            }, 50)
      
            return () => clearInterval(timer)
        }
    }, [sorteo])

    return(
        <section className={datos ? 'cont-pregunta' : 'cont-matriz'} >
            {datos ?
                <>
                    <div className='div0'>
                        <div className='line'></div>
                        <div className='pregunta'>
                            <strong>{datos?.pregunta}</strong>
                        </div>
                    </div>
                    <div className='respuestas'>
                        {datos && datos?.respuestas.map((opcion, index) => 
                            <RespOpcion 
                                key={index}
                                dato={opcion}
                                index={index}
                                select={select[index]}
                                onSelect={handleSelect}
                            />
                        )}
                    </div>
                    <div className='califica'>{result}</div>
                </>
            :
                preguntas && preguntas.map(pregunta => 
                    <NumPregunta
                        home
                        key={pregunta}
                        pregunta={pregunta}
                        categoria='vd'
                        active={ran1==pregunta || ran2==pregunta || ran3==pregunta || ran4==pregunta || ran5==pregunta}
                    />
                )
            }   

            <style jsx>{`
                section{
                    background: #CBD5DF;
                    height: 500px;
                    display: flex;
                }

                .cont-pregunta{
                    flex-direction: column;
                    align-items: center;
                }

                .cont-matriz{
                    flex-wrap: wrap;
                    justify-content: space-around;
                }

                .div0{
                    position: relative;
                    margin-top: 50px;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 10px;
                }

                .line{
                    position: absolute;
                    width: 100%;
                    border: ${!result ?  '4px solid white' : result == 'CORRECTO' ? '4px solid #00BB2D' : '4px solid red'};
                }

                .pregunta{
                    position: relative;
                    background: white;
                    min-height: 110px;
                    width: 70%;
                    padding: 5px 12px 7px 12px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: ${!result ?  '6px solid white' : result == 'CORRECTO' ? '6px solid #00BB2D' : '6px solid red'};
                    border-radius: 30px;
                }

                strong{
                    font-size: 28px;
                    text-align: center;
                }

                .respuestas{
                    pointer-events: ${result ? 'none' : 'auto'};
                    width: 70%;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                }

                .califica{
                    display: ${result ? 'block' : 'none'};
                    position: relative;
                    background: ${result == 'CORRECTO' ? '#00BB2D' : 'red'};
                    margin-top: 40px;
                    width: 70%;
                    line-height: 50px;
                    color: white;
                    font-size: 20px;
                    font-weight: bold;
                    letter-spacing: 1px;
                    text-align: center;
                    border-radius: 30px;
                }

                @media screen and (max-width: 768px){
                    section{
                        height: 300px;
                    }

                    .cont-matriz{
                        justify-content: center;
                    }

                    .div0{
                        margin-top: 25px;
                        margin-bottom: 5px;
                    }

                    .line{
                        border: ${!result ?  '3px solid white' : result == 'CORRECTO' ? '3px solid #00BB2D' : '3px solid red'};
                    }

                    .pregunta{
                        min-height: 50px;
                        width: 85%;
                        padding: 4px 10px 6px 10px;
                        border: ${!result ?  '5px solid white' : result == 'CORRECTO' ? '5px solid #00BB2D' : '5px solid red'};
                        border-radius: 15px;
                    }

                    strong{
                        font-size: 14px;
                    }

                    .respuestas{
                        width: 85%;
                    }

                    .califica{
                        margin-top: 25px;
                        width: 85%;
                        line-height: 45px;
                        font-size: 18px;
                        border-radius: 30px;
                    }
                }
            `}</style>
        </section>
    )
}