import { useState, useEffect } from 'react'

import db  from '../../../services/dBase'
import { collection, doc, query, where, onSnapshot } from 'firebase/firestore'

import TitleSection from '../../sections/TitleSection'
import OptionsSection from '../../sections/OptionsSection'
import CalendarioSemanal from './CalendarioSemanal'

export default function Calendario(){
    const [select, setSelect] = useState(1)
    const [datosSemana, setDatosSemana] = useState(null)

    useEffect(() => {
        onSnapshot(doc(db, 'controles', 'pagina'), (doc) => {
            setSelect(doc.data().fecha)
        })
    }, [])


    useEffect(() => {
        const qSemana = query(collection(db, 'semanas2026'))

        const unsubSemana = onSnapshot(qSemana, (snapshot) => {
            if (!snapshot.empty) {
                const detalleSemanas = snapshot.docs.map(doc => doc.data())
                setDatosSemana(detalleSemanas)
            }
        })

        return () => unsubSemana()
    }, [])

    useEffect(() => {
        
    }, [select])

    return (
        <section>
            <TitleSection
                title='CALENDARIO'
                color='#245590'
            />
            <div className='op-label' >
                <p className='sobre'>Semana:</p>
                <OptionsSection
                    options={datosSemana}
                    select={select}
                    onSelect={op => setSelect(op)}
                    pos
                    fec
                />
            </div>
            <div className='fecha-label'>
                <p className='semana'><strong className='now-fec'>Semana {select}:</strong> [{datosSemana?.[select-1].rango}]</p>
                <CalendarioSemanal select={select} />
            </div>

            <style jsx>{`
                section{
                    flex: 1;
                }

                .semana{
                    margin-top: 5px;
                    color: #000000;
                    width: 100%;
                    font-size: 18px;
                    font-weight: 200;
                    margin-bottom: 18px;
                }

                strong{
                    width: 100%;
                    font-size: 20px;
                    font-weight: bold;
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

                .sobre{
                    position: absolute;
                    top: -12px;
                    background: #F2F8F6;
                    padding: 0 5px;
                    font-weight: 500;
                }

                @media screen and (max-width: 768px){
                    .semana{
                        font-size: 15px;
                    }
                    
                    strong{
                        font-size: 16px;
                    }
                }
            `}</style>
        </section> 
    )
}