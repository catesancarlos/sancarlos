import { useState, useEffect } from 'react'

import JsLayout from '../../componentes/layout/JsLayout'

import db  from '../../services/dBase'
import { doc, collection, query, where, updateDoc, onSnapshot } from 'firebase/firestore'

export default function JesuscribeContol(){
    const [controles, setControles] = useState(false)
    const [ahora, setAhora] = useState(0)
    const [grupos, setGrupos] = useState([])
    const [name, setName] = useState('')
    const [openName, setOpenName] = useState(false)
    const [openPuntos, setOpenPuntos] = useState(false)

    useEffect(() => {
        onSnapshot(doc(db, 'controles', 'concurso'), (doc) => {
            setControles(doc.data().confirmacion)
            setAhora(doc.data().now)
        }) 
    }, [])

    useEffect(() => {
        const q = query(collection(db, 'concurso1com'), where('nivel', '==', '1com'))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const grupos = []
            querySnapshot.forEach((doc) => {
                grupos.push(doc.data())
            })
            setGrupos(grupos)
        })
    }, [])

    const handleMitad = (e) => {
        updateDoc(doc(db, 'concurso1com', e[0]), { c1: !e[1] })
    }
    
    const handleCall = (e) => {
       updateDoc(doc(db, 'concurso1com', e[0]), { c2: !e[1] })
    }
    
    const handleKts = (e) => {
        updateDoc(doc(db, 'concurso1com', e[0]), { c3: !e[1] })
    }

    const handleChange = e => setName(e.target.value)

    const handleAgregar = async e => {
        const docRef = await updateDoc(doc(db, 'concurso1com', e), { nombre: name })
        setOpenName(false)
    }

    const handlePuntear = async e => {
        const docRef = await updateDoc(doc(db, 'concurso1com', e), { puntos: +name })
        setOpenName(false)
    }

    const handleRonda = (e) => {
        updateDoc(doc(db, 'controles', 'concurso'), { ronda: +name })
    }

    const handleNow = (e) => {
        updateDoc(doc(db, 'controles', 'concurso'), { now: +name })
    }

    const handleMas = (e) => {
        if(ahora < 6) updateDoc(doc(db, 'controles', 'concurso'), { now: ahora+1 })
            else updateDoc(doc(db, 'controles', 'concurso'), { now: 1 })
    }

    const handleConf = (e) => {
        updateDoc(doc(db, 'controles', 'concurso'), { confirmacion: !confirmacion })
    }

    const handleEncerar = (e) => {
        updateDoc(doc(db, 'concurso1com', 'partseg1'), { puntos: +0 })
        updateDoc(doc(db, 'concurso1com', 'partseg2'), { puntos: +0 })
        updateDoc(doc(db, 'concurso1com', 'partseg3'), { puntos: +0 })
        updateDoc(doc(db, 'concurso1com', 'partseg4'), { puntos: +0 })
    }
    
    return(
        <JsLayout 
            titulo='JESUSCRIBE - Control'
            name='Jesuscribe'
            categoria='CONTROL'
            /* onRand={handleRand} */
            back='#B0C0D9'
        >
            <div className='grupo'>
                <p className='label1'>Generales:</p>
                <div className='inpu-gen'>
                    <p className='label2'>Ronda:</p>
                    <input onChange={handleChange} />
                    <p className='boton' onClick={handleRonda}>Cambiar</p>
                </div>
                <div className='inpu-gen'>
                    <p className='label2'>Now:</p>
                    <input onChange={handleChange} />
                    <p className='boton' onClick={handleNow}>Cambiar</p>
                    <p className='boton mas' onClick={handleMas}>+</p>
                </div>
                <div className='inpu-gen'>
                    <p className='label2'>Botones:</p>
                    <p className={`boton ${!controles && 'non' }`} onClick={handleConf}>Confirmación</p>
                    <p className='boton' onClick={handleEncerar}>Encerar tablero</p>
                </div>
            </div>
            {
                grupos?.map((grupo, index) =>
                    <div className='grupo' key={grupo.nombre}>
                        <p className='label1'>Posición {index+1}:</p>
                        <div className='name-cont'>
                            <strong className='nombre' onClick={() => setOpenName(true)}>{grupo.nombre}</strong>
                            {
                                openName &&
                                <div className='inpu'>
                                    <input onChange={handleChange} />
                                    <p className='boton' onClick={() => handleAgregar(grupo.id)}>Cambiar</p>
                                    <p className='boton clos' onClick={() => setOpenName(false)}>X</p>
                                </div>
                            }
                        </div>
                        <div className='bajo'>
                            <div className='comodines'>
                                <p 
                                    onClick={() => handleMitad([grupo.id, grupo.c1])}
                                    style={{ background : grupo.c1 ? '#000000' : '#00000055'}}
                                >50</p>
                                <p 
                                    onClick={() => handleCall([grupo.id, grupo.c2])}
                                    style={{ background : grupo.c2 ? '#000000' : '#00000055'}}
                                >Call</p>
                                <p
                                    onClick={() => handleKts([grupo.id, grupo.c3])}
                                    style={{ background : grupo.c3 ? '#000000' : '#00000055'}}
                                >Kts</p>
                            </div>
                            <div className='punt-cont'>
                                Puntaje:
                                <strong onClick={() => setOpenPuntos(true)}>{grupo.puntos}</strong>
                                {
                                openPuntos &&
                                <div className='inpu'>
                                    <input onChange={handleChange} />
                                    <p className='boton' onClick={() => handlePuntear(grupo.id)}>Cambiar</p>
                                    <p className='boton clos' onClick={() => setOpenPuntos(false)}>X</p>
                                </div>
                            }
                            </div>
                        </div>
                    </div>
                )
            }

            <style jsx>{`
                .grupo{
                    margin: 0 14px;
                    width: calc(100% - 28px);
                    border: 1px solid white;
                    border-radius: 8px;
                    margin-bottom: 10px;
                }

                .label1{
                    padding: 5px 8px;
                    font-weight: 200;
                }

                .label2{
                    font-weight: 200;
                }

                .inpu-gen{
                    margin: 0 8px 8px 8px;
                    width: calc(100% - 16px);
                    display: flex;
                }

                .inpu-gen input{
                    margin-left: 4px;
                }

                .name-cont{
                    position: relative;
                    background: #FFFFFF88;
                    padding: 6px 8px;
                }

                .inpu{
                    position: absolute;
                    top: 0;
                    width: calc(100% - 16px);
                    display: flex;
                }

                input{
                    width: 100%;
                }

                .boton{
                    margin-left: 6px;
                    background: black;
                    padding: 1px 3px 3px 3px;
                    color: white;
                    font-size: 15px;
                    font-weight: 200;
                    border-radius: 4px;
                }

                .mas{
                    padding: 1px 20px 3px 20px;
                }

                .non{
                    background: #00000066;
                }

                .clos{
                    background: #00000088;
                    padding: 1px 6px 3px 6px;
                }

                .bajo{
                    padding: 6px 8px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .comodines{
                    display: flex;
                }

                .comodines p{
                    margin: 3px 8px 3px 0;
                    width: 28px;
                    line-height: 21px;
                    color: white;
                    font-size: 13px;
                    font-weight: 500;
                    text-align: center;
                    border-radius: 4px;
                    cursor: pointer;
                }

                .punt-cont{
                    width: 50%;
                    position: relative;
                    display: flex;
                }

                .punt-cont strong{
                    margin-left: 8px;
                    width: 30px;
                }
            `}</style>
        </JsLayout>
    )
}