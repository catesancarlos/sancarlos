import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import JsLayout from '../../../componentes/layout/JsLayout'
import RespOpcion from '../../../componentes/jesuscribe/RespOpcion'

import db  from '../../../services/dBase'
import { getDoc, doc, query, collection, where, updateDoc, onSnapshot } from 'firebase/firestore'
import FooterPoints from '../../../componentes/jesuscribe/FooterPoints'

export default function CatGeneral({ datos }){
    const router = useRouter()
    const [select, setSelect] = useState([false, false, false, false])
    const [revisar, setRevisar] = useState(null)
    const [grupos, setGrupos] = useState([])
    const [now, setNow] = useState(0)
    const [footer, setFooter] = useState(false)
    const [mitad, setMitad] = useState([])

    useEffect(() => {
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
            setFooter(doc.data().footer)
        }) 
    }, [])

    const handleSelect = (e) => {
        if(e==0) setSelect([true, false, false, false])
        else if(e==1) setSelect([false, true, false, false])
        else if(e==2) setSelect([false, false, true, false])
        else if(e==3) setSelect([false, false, false, true])

        if(datos?.respuestas[e] == datos?.correcto){
            var audio = document.getElementById('ac')
            audio.play()
            if(footer) updateDoc(doc(db, 'concurso2conf', grupos[now-1].id), { puntos: +grupos[now-1].puntos + 10 })
            setRevisar('CORRECTO')
        }
        else{
            var audio = document.getElementById('ae')
            audio.play()
            if(footer) updateDoc(doc(db, 'concurso2conf', grupos[now-1].id), { puntos: +grupos[now-1].puntos + 0 })
            setRevisar('INCORRECTO')
        }
    }

    const handleCerrar = () => {
        setSelect([false, false, false, false])
        setRevisar(null)
        router.back()
    }

    const handle50 = () => {
        var arreglo = [0, 1, 2, 3]
        var indice = datos.respuestas.indexOf(datos.correcto)
        arreglo.splice(indice, 1)
        var n = Math.trunc(Math.random()*(3-0)+0)
        var audio = document.getElementById('ab')
        audio.play()
        setMitad([indice, arreglo[n]])
    }

    return(
        <JsLayout 
            titulo='JESUSCRIBE - General'
            name='Jesuscribe'
            categoria='GENERAL'
            back='#B0C0D9'
        >
            <section>
                <div className='div0'></div>
                <div className='pregunta'>
                    <strong>{datos?.pregunta}</strong>
                </div>
                <div className='respuestas'>
                    {
                        datos && datos?.respuestas.map(
                            (opcion, index) => 
                                <RespOpcion 
                                    key={index}
                                    dato={opcion}
                                    index={index}
                                    mitad={mitad}
                                    select={select[index]}
                                    onSelect={handleSelect}
                                />
                        )
                    }
                </div>
                <div className='califica'>
                    <p className='r'>{revisar}</p>
                    <p className='cerrar' onClick={handleCerrar}>X</p>
                </div>
                {
                    !footer &&
                    <div className='retorno'>
                        <p onClick={handleCerrar}>Escoger otra pregunta</p>
                        <p onClick={() => router.push('/jesuscribe')}>Cambiar de categoría</p>
                    </div>
                }
            </section>
            { footer && <FooterPoints una onNext={handleCerrar} onMitad={handle50} /> }
            <audio id='ac' src='/correct.mp3'></audio>
            <audio id='ae' src='/error.mp3'></audio>
            <audio id='ab' src='/bubble.mp3'></audio>

            <style jsx>{`
                section{
                    width: 100%;
                    height: calc(100vh - 175px);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .div0{
                    margin-top: 85px;
                    width: 100%;
                    border: ${!revisar ?  '3px solid white' : revisar == 'CORRECTO' ? '3px solid #00BB2D' : '3px solid red'};
                    box-shadow: 0px 3px 10px 0px #777;
                }

                .pregunta{
                    margin-top: -56px;
                    background: white;
                    min-height: 110px;
                    width: 70%;
                    padding: 5px 12px 7px 12px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: ${!revisar ?  '6px solid white' : revisar == 'CORRECTO' ? '6px solid #00BB2D' : '6px solid red'};
                    border-radius: 30px;
                    margin-bottom: 10px;
                }

                strong{
                    font-size: 28px;
                    text-align: center;
                }

                .respuestas{
                    pointer-events: ${revisar ? 'none' : 'auto'};
                    width: 70%;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                }

                .califica{
                    display: ${revisar ? 'block' : 'none'};
                    position: relative;
                    background: ${revisar == 'CORRECTO' ? '#00BB2D' : 'red'};
                    margin-top: 40px;
                    width: 70%;
                    line-height: 50px;
                    text-align: center;
                    border-radius: 30px;
                }

                .r{
                    color: white;
                    font-size: 24px;
                    font-weight: bold;
                    letter-spacing: 3px;
                }

                .cerrar{
                    position: absolute;
                    top: 0;
                    right: 25px;
                    color: white;
                    cursor: pointer;
                }

                .retorno{
                    display: ${revisar ? 'flex' : 'none'};
                    margin-top: 30px;
                }

                .retorno p{
                    margin: 0 12px;
                    text-decoration: underline;
                    cursor: pointer;
                }

                @media screen and (max-width: 480px){
                    .pregunta{
                        width: 90%;
                        border: ${!revisar ?  '5px solid white' : revisar == 'CORRECTO' ? '5px solid #00BB2D' : '5px solid red'};
                        border-radius: 25px;
                        margin-bottom: 15px;
                    }

                    strong{
                        font-size: 22px;
                    }

                    .respuestas{
                        width: 90%;
                    }

                    .califica{
                        width: 90%;
                    }
                }
            `}</style>
        </JsLayout>
    )
}

export async function getServerSideProps (context) {
    const { params, res } = context
    const { pregunta } = params

    const datos = await getDoc(doc(db, 'js-general', `js-gn-${pregunta}`)).then(datos => {
        return (datos.data())
    })

    return {
        props : { datos }
    }
}