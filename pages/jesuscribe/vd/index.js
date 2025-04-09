import { useState, useEffect } from 'react'

import { useRouter } from 'next/router'

import JsLayout from '../../../componentes/layout/JsLayout'
import NumPregunta from '../../../componentes/jesuscribe/NumPregunta'
import Modal from '../../../componentes/layout/Modal'

const preguntas = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
    71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
    81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
    91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
    101, 102, 103, 104, 105, 106, 107, 108, 109, 110,
    111, 112, 113, 114, 115, 116, 117, 118, 119, 120,
    121, 122, 123, 124, 125
]

export default function JesuscribeVd(){
    const router = useRouter()
    const [datos, setDatos] = useState([])
    const [select, setSelect] = useState(null)
    const [sorteo, setSorteo] = useState(false)
    const [ran1, setRan1] = useState(0)
    const [ran2, setRan2] = useState(0)
    const [ran3, setRan3] = useState(0)
    const [ran4, setRan4] = useState(0)
    const [ran5, setRan5] = useState(0)

    const handleRand = () => {
        setSorteo(!sorteo)
        setSelect(null)
    }

    useEffect(() => {
        setDatos(preguntas)
    }, [datos])

    useEffect(() => {
        let i = 0
        if(sorteo){
            const timer = setInterval(() => {
                if(i<50){
                    setRan1(Math.floor(Math.random() * 100))
                    setRan2(Math.floor(Math.random() * 100))
                    setRan3(Math.floor(Math.random() * 100))
                    setRan4(Math.floor(Math.random() * 100))
                    setRan5(Math.floor(Math.random() * datos.length))
                    i=i+1
                } else{
                    setRan1(0)
                    setRan2(0)
                    setRan3(0)
                    setRan4(0)
                    setRan5(0)
                    clearInterval(timer)
                    setSorteo(false)
                    const rand = Math.random() * datos.length
                    const index = Math.floor(rand)
                    setSelect(datos[index])
                    var newo = datos
                    newo.splice(index, 1)
                    setDatos(newo)
                }
            }, 50)
      
            return () => clearInterval(timer)
        }
    }, [sorteo])

    return(
        <JsLayout 
            titulo='JESUSCRIBE - Vida de Jesús'
            name='Jesuscribe'
            categoria='VIDA DE JESÚS'
            onRand={handleRand}
            back='#B0C0D9'
            preg
        >
            <section>
                {select &&
                    <Modal>
                        <div 
                            onClick={() => router.push(`/jesuscribe/vd/p${select}`)} 
                            className='pro'
                        >
                            <p>{select}</p>
                        </div> 
                    </Modal>
                }
                <div className='cont'>
                    {
                        preguntas && preguntas.map(pregunta => 
                            <NumPregunta
                                key={pregunta}
                                pregunta={pregunta}
                                categoria='vd'
                                active={ran1==pregunta || ran2==pregunta || ran3==pregunta || ran4==pregunta || ran5==pregunta}
                            />
                        )
                    }
                </div>
            </section>

            <style jsx>{`
                section{
                    position: relative;
                }

                .cont{
                    width: 91%;
                    margin: 0 5%;
                    display: flex;
                    flex-wrap: wrap;
                }

                .pro{
                    background: white;
                    width: 448px;
                    height: 448px;
                    color: black;
                    font-size: 180px;
                    font-weight: bold;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 20px;
                    cursor: pointer;
                }
            `}</style>
        </JsLayout>
    )
}