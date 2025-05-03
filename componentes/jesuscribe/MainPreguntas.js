import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import NumPregunta from './NumPregunta'
import Modal from '../layout/Modal'

import db  from '../../services/dBase'
import { doc, onSnapshot } from 'firebase/firestore'

export default function MainPreguntas({
    categoria,
    preguntas,
    preguntasIni
}){
    const router = useRouter()

    const [datos, setDatos] = useState([])
    const [confirmacion, setConfirmacion] = useState(true)
    const [select, setSelect] = useState(null)
    const [sorteo, setSorteo] = useState(false)
    const [ran1, setRan1] = useState(0)
    const [ran2, setRan2] = useState(0)
    const [ran3, setRan3] = useState(0)
    const [ran4, setRan4] = useState(0)
    const [ran5, setRan5] = useState(0)

    useEffect(() => {
        onSnapshot(doc(db, 'controles', 'concurso'), (doc) => {
            setConfirmacion(doc.data().confirmacion)
        }) 
    }, [])

    useEffect(() => {
        if(confirmacion) setDatos(preguntas)
            else setDatos(preguntasIni)
    }, [datos])

    useEffect(() => {
        document.addEventListener('keydown', detectKeyDown, true)
    }, [])

    const detectKeyDown = (e) => {
        if(e.code == 'Enter'){
            setSorteo(!sorteo)
            setSelect(null)
        }
    }

    /* const handleRand = () => {
        setSorteo(!sorteo)
        setSelect(null)
    } */

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
        <section>
            {select &&
                <Modal>
                    <div 
                        onClick={() => router.push(`/jesuscribe/${categoria}/p${select}`)} 
                        className='pro'
                    >
                        <p>{select}</p>
                    </div> 
                </Modal>
            }
            <div className='cont'>
                { 
                        preguntas.map(pregunta => 
                            <NumPregunta 
                                key={pregunta}
                                pregunta={pregunta}
                                categoria={categoria}
                                active={ran1==pregunta || ran2==pregunta || ran3==pregunta || ran4==pregunta || ran5==pregunta}
                            />
                        )
                }
            </div>

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
        </section>
    )
}