import { useState, useEffect } from 'react'

import db  from '../../services/dBase'
import { doc, collection, query, where, updateDoc, onSnapshot } from 'firebase/firestore'

export default function FooterPoints({ una, mul, onNext, onMitad, onView }){
    const [grupos, setGrupos] = useState([])
    const [now, setNow] = useState(5)
    const [ronda, setRonda] = useState(1)

    useEffect(() => {
        /* const q = query(collection(db, 'concursoab'), where('nivel', '==', 'ab')) */
        const q = query(collection(db, 'concurso2conf'), where('nivel', '==', '2conf'))
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
            setRonda(doc.data().ronda)
        }) 
    }, [])

    const handleNext = (e) => {
        updateDoc(doc(db, 'controles', 'concurso'), { now: e })
        if(e == 1) updateDoc(doc(db, 'controles', 'concurso'), { ronda: ronda + 1 })
        if(una || mul) onNext()
    }

    const handleMitad = (e) => {
        if(una && grupos[now-1].c1){
            updateDoc(doc(db, 'concurso2conf', grupos[now-1].id), { c1: false })
            onMitad()
        }
    }

    const handleCall = (e) => {
        if(una || mul){
            updateDoc(doc(db, 'concurso2conf', grupos[now-1].id), { c2: false })
        }
    }

    const handleKts = (e) => {
        if(una || mul){
            updateDoc(doc(db, 'concurso2conf', grupos[now-1].id), { c3: false })
        }
    }

    const handleCorrecto = (e) => {
        var audio = document.getElementById('ac')
        audio.play()
        if(footer) updateDoc(doc(db, 'concurso2conf', grupos[now-1].id), { puntos: +grupos[now-1].puntos + 25 })
    }

    const handleIncorrecto = (e) => {
        var audio = document.getElementById('ae')
        audio.play()
        if(footer) updateDoc(doc(db, 'concurso2conf', grupos[now-1].id), { puntos: +grupos[now-1].puntos + 0 })
    }
    
    return(
        <>
            <div className='nivel'>
                <div className='ronda'>
                    <strong className='label-nivel'>2DO CONFIRMACIÓN</strong>
                    <p className='label-ronda'>Ronda</p>
                    <strong className='nron'>{ronda}</strong>
                </div>  
            </div>
            <footer>
                {
                    mul &&
                    <div className='mitad'>
                        <p onClick={onView}>R</p>
                        <p onClick={handleCorrecto}>C</p>
                        <p onClick={handleIncorrecto}>I</p>
                    </div>
                }
                <audio id='ac' src='/correct.mp3'></audio>
                <audio id='ae' src='/error.mp3'></audio>
                <audio id='ab' src='/bubble.mp3'></audio>
                {
                    grupos?.map((grupo, index) =>
                        <div className='cont-grupo' key={grupo.nombre}>
                            <div className={`grupo ${now == index+1 ? 'active' : ''}`}>
                                <div
                                    onClick={() => handleNext(index+1)}
                                    className='left'
                                >
                                    <strong className='nombre' style={{ color: '#EE1C21' }}>{grupo.nombre}</strong>
                                    <strong className='puntaje'>{grupo.puntos}</strong>
                                </div>
                                <div className='right'>
                                    <p
                                        onClick={handleMitad}
                                        style={{ opacity : grupo.c1 ? '1' : '0'}}
                                    >
                                        50
                                    </p>
                                    <p
                                        onClick={handleCall}
                                        style={{ opacity : grupo.c2 ? '1' : '0'}}
                                    >
                                        Call
                                    </p>
                                    <p
                                        onClick={handleKts}
                                        style={{ opacity : grupo.c3 ? '1' : '0'}}
                                    >
                                        Kts
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </footer>

            <style jsx>{`
                .nivel{
                    position: fixed;
                    top: 25px;
                    right: 6.5%;
                }

                .ronda{
                    display: flex;
                    align-items: center;
                }

                .label-nivel{
                    padding-right: 20px;
                    font-size: 24px;
                }

                .label-ronda{
                    font-weight: 200;
                    writing-mode: vertical-rl;
                    transform: rotate(180deg);
                }

                .nron{
                    margin-left: 4px;
                    background: #000000;
                    background-image: repeating-linear-gradient(-45deg, hsla(0, 0%, 100%, .1), hsla(0, 0%, 100%, .1) 15px, transparent 0, transparent 20px);
                    width: 100px;
                    padding: 0 0 1px 0;
                    color: white;
                    font-size: 40px;
                    font-family: 'Lato', sans-serif;
                    text-align: center;
                    border-radius: 0 12px 12px 0;
                }

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
                    width: 100%;
                    padding: 10px 8px;
                }

                .mitad{
                    position: absolute;
                    top: -50px;
                    right: 25px;
                    display: flex;
                }

                .mitad p{
                    margin-left: 6px;
                    width: 38px;
                    background: #00000099;
                    color: white;
                    font-size: 17px;
                    font-weight: bold;
                    text-align: center;
                    padding: 9px;
                    border-radius: 10px;
                    cursor: pointer;
                }

                .mitad p:nth-child(2){
                    background: green;
                }

                .mitad p:nth-child(3){
                    background: red;
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
                    cursor: pointer;
                }

                .right{
                    width: 30px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }

                .nombre{
                    font-size: 20px;
                }

                .puntaje{
                    font-size: 44px;
                }

                .right p{
                    background: #000000CC;
                    margin: 3px 0;
                    width: 28px;
                    line-height: 21px;
                    color: white;
                    font-size: 13px;
                    font-weight: 500;
                    text-align: center;
                    border-radius: 4px;
                    cursor: pointer;
                }

                @media screen and (max-width: 768px){
                    .nivel{
                        display: none;
                    }
                }
            `}</style>
        </>
    )
}