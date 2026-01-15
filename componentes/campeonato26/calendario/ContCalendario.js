import { useState, useEffect } from 'react'

import db  from '../../../services/dBase'
import { collection, doc, query, where, onSnapshot } from 'firebase/firestore'

import TitleSection from '../../sections/TitleSection'
import OptionsSection from '../../sections/OptionsSection'
import CalendarioSemanal from './CalendarioSemanal'

const optionsArray = [
    {
        no: 1,
        name: 'S1'
    },
    {
        no: 2,
        name: 'S2'
    },
    {
        no: 3,
        name: 'S3'
    },
]

export default function Calendario(){
    const [select, setSelect] = useState(1)
    const [datosSemana, setDatosSemana] = useState(null)

    useEffect(() => {
        onSnapshot(doc(db, 'controles', 'pagina'), (doc) => {
            setSelect(doc.data().fecha)
        })
    }, [])


    useEffect(() => {
        const qSemana = query(collection(db, 'semanas2026'), where('no', '==', select))

        const unsubSemana = onSnapshot(qSemana, (snapshot) => {
            if (!snapshot.empty) {
                setDatosSemana(snapshot.docs[0].data())
            }
        })

        return () => unsubSemana()
    }, [select])

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
                    <strong className='now-fec'>Semana {select}</strong>
                    <i>[{datosSemana ? datosSemana.rango : 'Cargando...'}]</i>
                        <CalendarioSemanal select={select} />
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