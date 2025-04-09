import { useState, useEffect } from 'react'

import db  from '../../services/dBase'
import { doc, collection, query, where, updateDoc, onSnapshot } from 'firebase/firestore'

export default function FooterPoints({ una, onNext, onMitad }){
    const [grupos, setGrupos] = useState([])
    const [now, setNow] = useState(5)

    useEffect(() => {
        const q = query(collection(db, 'concursoab'), where('nivel', '==', 'ab'))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const grupos = []
            querySnapshot.forEach((doc) => {
                grupos.push(doc.data())
            })
            setGrupos(grupos)
        })
    }, [])

    useEffect(() => {
        onSnapshot(doc(db, 'controles', 'concurso'), (doc) => {
            setNow(doc.data().now)
        }) 
    }, [])

    const handleNext = (e) => {
        updateDoc(doc(db, 'controles', 'concurso'), { now: e })
        if(una) onNext()
    }

    const handleMitad = (e) => {
        updateDoc(doc(db, 'concursoab', grupos[now-1].id), { c1: false })
        onMitad()
    }
    
    return(
        <footer>
            {
                (una && grupos[now-1]?.c1) &&
                <div className='mitad' onClick={handleMitad}>
                    50
                </div>
            }
            {
                grupos?.map((grupo, index) =>
                    <div className='cont-grupo' key={grupo.nombre}>
                        <div
                            onClick={() => handleNext(index+1)}
                            className={`grupo ${now == index+1 ? 'active' : ''}`}
                        >
                            <div className='left'>
                                <strong style={{ color: '#EE1C21' }}>{grupo.nombre}</strong>
                                <strong className='puntaje'>{grupo.puntos}</strong>
                            </div>
                            <div className='right'>
                                <p style={{ opacity : grupo.c1 ? '1' : '0'}}>50</p>
                                <p style={{ opacity : grupo.c2 ? '1' : '0'}}>Call</p>
                                <p style={{ opacity : grupo.c3 ? '1' : '0'}}>Kts</p>
                            </div>
                        </div>
                    </div>
                )
            }

            <style jsx>{`
                footer{
                    background: #B0C0D9;
                    position: fixed;
                    bottom: 0;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                }

                .cont-grupo{
                    position: relative;
                    width: calc((100vw - 30px)/5);
                    padding: 10px 8px;
                }

                .mitad{
                    position: absolute;
                    top: -50px;
                    right: 25px;
                    background: #00000099;
                    color: white;
                    font-size: 18px;
                    font-weight: bold;
                    padding: 10px;
                    border-radius: 10px;
                    cursor: pointer;
                }

                .grupo{
                    background: white;
                    width: 100%;
                    height: 100px;
                    padding: 6px 6px;
                    display: flex;
                    justify-content: space-between;
                    border: 3px solid transparent;
                    border-radius: 10px;
                }

                .active{
                    border: 3px solid #EE1C21;
                }

                .left{
                    width: calc(100% - 30px);
                    padding-top: 5px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .right{
                    width: 30px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }

                .puntaje{
                    font-size: 40px;
                }

                .right p{
                    background: #00000099;
                    margin: 3px 0;
                    width: 28px;
                    line-height: 21px;
                    color: white;
                    font-size: 13px;
                    font-weight: 500;
                    text-align: center;
                    border-radius: 4px;
                }

                @media screen and (max-width: 768px){
                    
                }
            `}</style>
        </footer>
    )
}