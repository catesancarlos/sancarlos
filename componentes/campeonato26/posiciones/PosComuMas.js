import { useState, useEffect } from 'react'

import ItemCalendario from '../calendario/ItemCalendario'
import FinalComuMas from './FinalComuMas'
import Equipo from '../Equipo'

import db from '../../../services/dBase'
import { collection, query, where, onSnapshot } from 'firebase/firestore'

export default function PosComuMas() {
    const [equipos, setEquipos] = useState([])
    const [partidos, setPartidos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const q = query(collection(db, 'equipos2026'), where('nivel', '==', 'comunion'), where('genero', '==', 'M'))

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const todosLosEquipos = snapshot.docs.map(doc => doc.data())
            setEquipos(todosLosEquipos)
        })

        return () => unsubscribe()
    }, [])

    useEffect(() => {
        setLoading(true)
        const qPartidos = query(collection(db, 'partidos2026'), where('grupo', '==', 'Com'), where('genero', '==', 'M'))

        const unsubPartidos = onSnapshot(qPartidos, (snapshot) => {
            const partidosData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))

            const partidosOrdenados = [...partidosData].sort((a, b) => {
                return a.letra.localeCompare(b.letra)
            })

            setPartidos(partidosOrdenados)
            setLoading(false)
        })

        return () => unsubPartidos()
    }, [])

    const RenderEquipo = ({ id, goles, golesRival, penales }) => {
        const eq = equipos.find(e => e.id === id)
        if (!eq) return null

        let colorTexto = undefined;

        // 1. Victoria en tiempo reglamentario
        if (goles > golesRival) {
            colorTexto = 'green';
        }
        // 2. Derrota en tiempo reglamentario
        else if (goles < golesRival) {
            colorTexto = 'red';
        }
        // 3. Caso de empate: miramos si hubo penales
        else if (penales !== undefined && penales !== null) {
            // Si penales es true -> Verde, si es false -> Rojo
            colorTexto = penales ? 'green' : 'red';
        }

        return (
            <Equipo
                pos
                com
                nombre={eq.name}
                paralelo={eq.paralelo}
                genero={eq.genero}
                logo={eq.id}
                color={eq.colors[0]}
                borde={eq.colors[1]}
                letter={eq.colors[2]}
                ctext={colorTexto}
            />
        )
    }

    return (
        <section>
            <div className='tables'>
                {/* <strong className='title'>FINAL:</strong>
                <div style={{ width: '100%' }}>
                    {partidos?.filter(f => f.fase === 'FINAL' && f.grupo === 'Con').map(p => (
                        <ItemCalendario
                            key={p.id}
                            com={['Ini', 'Rec', 'Com'].includes(p.grupo)}
                            nivel={p.grupo}
                            control={control}
                            idJuego={p.id}
                            fase={p.fase}
                            now={p.status}
                            fecha={[p.dia, p.date, p.hora]}
                            genero={p.genero}
                            equipos={[
                                getEquipoArray(p.idLocal, grupoConfirLista) || equipoDefault(p.genero, p.grupo),
                                getEquipoArray(p.idVisitante, grupoConfirLista) || equipoDefault(p.genero, p.grupo)
                            ]}
                            res={[p.golesLocal, p.golesVisitante]}
                            jugador={p.jugador}
                            extra={p.extra}
                            pen={p.penales}
                            home={home}
                            onStatus={onStatus}
                            onGoles={onGoles}
                            onAgregar={onAgregar}
                            onFinalizar={onFinalizar}
                        />
                    ))}
                </div> */}
                <strong className='title'>Fase Final:</strong>
                <div className='final'>
                    <FinalComuMas />
                </div>
            </div>
            <strong className='title'>Fixture Masculino:</strong>
            {/* <p className='info'>{`<< Mueve el cuadro a la izquierda para ver más <<`}</p> */}
            <div className='cont'>
                <div className='primera'>
                    {partidos.filter(p => p.fecha === 1).map(p => (
                        <div key={p.id} className='partido'>
                            <strong className='id'>{p.letra}</strong>

                            {/* Renderizamos los equipos usando el helper que moviste adentro */}
                            <RenderEquipo
                                id={p.idLocal}
                                goles={p.golesLocal || 0}
                                golesRival={p.golesVisitante || 0}
                                penales={p.penales && (Number(p.penales.split(' - ')[0]) - Number(p.penales.split(' - ')[1]) > 0)}
                            />

                            <div className='marcador'>
                                <strong className='meq'>{p.golesLocal || 0}</strong>
                                <p className='vs'>vs</p>
                                <strong className='meq'>{p.golesVisitante || 0}</strong>
                                {p.penales && <p className='pen'>{`Pen (${p.penales})`}</p>}
                            </div>

                            <RenderEquipo
                                id={p.idVisitante}
                                goles={p.golesVisitante || 0}
                                golesRival={p.golesLocal || 0}
                                penales={p.penales && (Number(p.penales.split(' - ')[1]) - Number(p.penales.split(' - ')[0]) > 0)}
                            />
                        </div>
                    ))}
                </div>
                <div>
                    <div className='segunda-cont'>
                        <div className='line'>
                            <p>[<span style={{ color: 'green' }}>1</span> - 0]</p>
                        </div>
                        <div className='segunda'>
                            {partidos.filter(p => p.fecha === 2 && ["1", "2"].includes(p.letra)).map(p => (
                                <div key={p.id} className='partido'>
                                    <strong className='id'>{p.letra}</strong>

                                    {/* Renderizamos los equipos usando el helper que moviste adentro */}
                                    <RenderEquipo
                                        id={p.idLocal}
                                        goles={p.golesLocal || 0}
                                        golesRival={p.golesVisitante || 0}
                                        penales={p.penales && (Number(p.penales.split(' - ')[0]) - Number(p.penales.split(' - ')[1]) > 0)}
                                    />

                                    <div className='marcador'>
                                        <strong className='meq'>{p.golesLocal || 0}</strong>
                                        <p className='vs'>vs</p>
                                        <strong className='meq'>{p.golesVisitante || 0}</strong>
                                        {p.penales && <p className='pen'>{`Pen (${p.penales})`}</p>}
                                    </div>

                                    <RenderEquipo
                                        id={p.idVisitante}
                                        goles={p.golesVisitante || 0}
                                        golesRival={p.golesLocal || 0}
                                        penales={p.penales && (Number(p.penales.split(' - ')[1]) - Number(p.penales.split(' - ')[0]) > 0)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='segunda-cont nobot'>
                        <div className='line l2'>
                            <p>[0 - <span style={{ color: 'red' }}>1</span>]</p>
                        </div>
                        <div className='segunda sl2'>
                            {partidos.filter(p => p.fecha === 2 && ["3", "4"].includes(p.letra)).map(p => (
                                <div key={p.id} className='partido'>
                                    <strong className='id'>{p.letra}</strong>

                                    {/* Renderizamos los equipos usando el helper que moviste adentro */}
                                    <RenderEquipo
                                        id={p.idLocal}
                                        goles={p.golesLocal || 0}
                                        golesRival={p.golesVisitante || 0}
                                        penales={p.penales && (Number(p.penales.split(' - ')[0]) - Number(p.penales.split(' - ')[1]) > 0)}
                                    />

                                    <div className='marcador'>
                                        <strong className='meq'>{p.golesLocal || 0}</strong>
                                        <p className='vs'>vs</p>
                                        <strong className='meq'>{p.golesVisitante || 0}</strong>
                                        {p.penales && <p className='pen'>{`Pen (${p.penales})`}</p>}
                                    </div>

                                    <RenderEquipo
                                        id={p.idVisitante}
                                        goles={p.golesVisitante || 0}
                                        golesRival={p.golesLocal || 0}
                                        penales={p.penales && (Number(p.penales.split(' - ')[1]) - Number(p.penales.split(' - ')[0]) > 0)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='tercera-cont'>
                    <div className='segunda-cont'>
                        <div className='line t31'>
                            <p>[<span style={{ color: 'green' }}>2</span> - 0]</p>
                        </div>
                        <div className='segunda terc'>
                            <p className='hov'>Clasificados</p>
                            <RenderEquipo id='c22M' />
                            <RenderEquipo id='c26M' />
                        </div>
                    </div>
                    <div className='segunda-cont'>
                        <div className='empate'>
                            <div className='line-em'>
                                <p>[1 - 1]</p>
                            </div>
                            <div className='line-em'>
                                <p>[1 - 1]</p>
                            </div>
                        </div>
                        <div className='segunda slem'>
                            <p className='hov'>Repechaje</p>
                            {partidos.filter(p => p.fecha === 3).map(p => (
                                <div key={p.id} className='partido'>
                                    {/* Renderizamos los equipos usando el helper que moviste adentro */}
                                    <RenderEquipo
                                        id={p.idLocal}
                                        goles={p.golesLocal || 0}
                                        golesRival={p.golesVisitante || 0}
                                        penales={p.penales && (Number(p.penales.split(' - ')[0]) - Number(p.penales.split(' - ')[1]) > 0)}
                                    />

                                    <div className='marcador'>
                                        <strong className='meq'>{p.golesLocal || 0}</strong>
                                        <p className='vs'>vs</p>
                                        <strong className='meq'>{p.golesVisitante || 0}</strong>
                                        {p.penales && <p className='pen'>{`Pen (${p.penales})`}</p>}
                                    </div>

                                    <RenderEquipo
                                        id={p.idVisitante}
                                        goles={p.golesVisitante || 0}
                                        golesRival={p.golesLocal || 0}
                                        penales={p.penales && (Number(p.penales.split(' - ')[1]) - Number(p.penales.split(' - ')[0]) > 0)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='segunda-cont nobot'>
                        <div className='line l2 t31'>
                            <p>[0 - <span style={{ color: 'red' }}>2</span>]</p>
                        </div>
                        <div className='segunda terc sl2'>
                            <p className='hov'>Eliminados</p>
                            <RenderEquipo id='c21M' />
                            <RenderEquipo id='c25M' />
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .pen{
                    position: absolute;
                    bottom: 14px;
                    color: black;
                    font-size: 13px;
                    font-weight: 400;
                }

                section{
                    display: flex;
                    flex-direction: column;
                }

                .title{
                    margin-top: 28px;
                    width: 100%;
                    font-size: 20px;
                    margin-bottom: 25px;
                }

                .final{
                    margin-top: 0px;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-bottom: 15px;
                }

                .info2{
                    display: none;
                }

                .info{
                    color: red;
                    font-size: 16px;
                    display: block;
                    margin-bottom: 15px;
                    text-align: center;
                }

                .tables{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .cont{
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    /* overflow-x: scroll; */
                }

                .primera{
                    border: 3px solid #444;
                    border-radius: 6px;
                }

                .segunda-cont{
                    display: flex;
                    align-items: center;
                    margin-bottom: 20px;
                }

                .segunda{
                    border: 3px solid green;
                    border-radius: 6px;
                    position: relative;
                }

                .tercera-cont{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }

                .terc{
                    padding: 8px 0;
                    display: flex;
                }

                .sl2{
                    border: 3px solid red;
                    position: relative;
                }

                .hov{
                    position: absolute;
                    top: -10px;
                    left: 6px;
                    background: #F2F8F6;
                    padding: 0 6px;
                    font-size: 13px;
                    font-weight: bold;
                }

                .slem{
                    border: 3px solid yellow;
                }

                .nobot{
                    margin-bottom: 0;
                }

                .line{
                    position: relative;
                    width: 60px;
                    height: 3px;
                    border: 2px solid green;
                }

                .empate{
                    position: relative;
                    height: 120px;
                    width: 70px;
                    display: flex;
                    flex-direction: column;
                    align-items: space-between;
                }

                .line-em{
                    width: 70px;
                    height: 3px;
                    border: 2px solid yellow;
                }

                .line-em:first-child{
                    position: absolute;
                    top: 0;
                }

                .line-em:last-child{
                    position: absolute;
                    bottom: 0;
                }

                .l2{
                    border: 2px solid red;
                }

                .line p, .line-em p{
                    margin-top: -28px;
                    text-align: center;
                    font-weight:  bold;
                }

                .t31{
                    width: 70px;
                }

                .partido{
                    padding: 4px 0 6px 0;
                    display: flex;
                    align-items: center;
                    border-bottom: 1px solid #CCC;
                }

                .partido:last-child{
                    border-bottom: none;
                }

                .id{
                    padding-left: 15px;
                    font-size: 20px;
                }

                .marcador{
                    position: relative;
                    width: 80px;
                    display: flex;
                    justify-content: center;
                }

                .meq{
                    width: 30px;
                    color: #245590;
                    font-size: 18px;
                    text-align: center;
                }

                .vs{
                    width: 20px;
                    color: #00000099;
                    font-size: 18px;
                    text-align: center;
                }

                .tercera-cont{
                    padding-right: 4%;
                }

                .pen{
                    position: absolute;
                    bottom: -18px;
                    color: black;
                    font-size: 12px;
                    font-weight: 200;
                }

                @media screen and (max-width: 768px){
                    .title{
                        margin-top: 24px;
                        font-size: 16px;
                        margin-bottom: 12px;
                    }

                    .final{
                        margin-top: 8px;
                        width: calc(100% + 28px);
                        margin-left: -14px;
                        align-items: flex-start;
                        margin-bottom: 10px;
                        overflow: scroll;
                    }

                    .info2{
                        margin: 10px 0 0 14px;
                        color: red;
                        font-size: 14px;
                        display: block;
                        text-align: center;
                    }

                    .info{
                        color: red;
                        font-size: 14px;
                        display: block;
                        margin-bottom: 10px;
                        text-align: center;
                    }

                    .cont{
                        justify-content: flex-start;
                        margin: 0 -15px 0 -15px;
                        padding-left: 15px;
                        overflow-x: scroll;
                    }

                    .tercera-cont{
                        padding-right: 15px;
                    }
                }
            `}</style>
        </section>
    )
}