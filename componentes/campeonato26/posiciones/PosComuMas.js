import { useState, useEffect } from 'react'

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

    const RenderEquipo = ({ id, goles, golesRival }) => {
        const eq = equipos.find(e => e.id === id)
        if (!eq) return null

        // Lógica para el color: 
        // Si goles > golesRival es Verde, si es menor es Rojo, si es empate o 0-0 no pintamos nada (o negro)
        let colorTexto = undefined; // O 'black' si prefieres

        // Solo aplicamos color si hubo un resultado real (ej. al menos un gol en total)
        // o si prefieres aplicar color siempre que haya un ganador:
        if (goles > golesRival) {
            colorTexto = 'green';
        } else if (goles < golesRival) {
            colorTexto = 'red';
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
                ctext={colorTexto} // Aquí pasamos la nueva prop
            />
        )
    }

    return (
        <section>
            {console.log(partidos)}
            <strong className='title'>Fixture Masculino:</strong>
            {/* <p className='info'>{`<< Mueve el cuadro a la izquierda para ver más <<`}</p> */}
            <div className='cont'>
                <div className='primera'>
                    {partidos.map(p => (
                        <div key={p.id} className='partido'>
                            <strong className='id'>{p.letra}</strong>

                            {/* Renderizamos los equipos usando el helper que moviste adentro */}
                            <RenderEquipo
                                id={p.idLocal}
                                goles={p.golesLocal || 0}
                                golesRival={p.golesVisitante || 0}
                            />

                            <div className='marcador'>
                                <strong className='meq'>{p.golesLocal || 0}</strong>
                                <p className='vs'>vs</p>
                                <strong className='meq'>{p.golesVisitante || 0}</strong>
                            </div>

                            <RenderEquipo
                                id={p.idVisitante}
                                goles={p.golesVisitante || 0}
                                golesRival={p.golesLocal || 0}
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
                            <div className='partido'>
                                <strong className='id'>1</strong>
                                <Equipo
                                    pos
                                    nombre=''
                                    paralelo='Ganador A'
                                    genero='M'
                                    logo=''
                                    color='gray'
                                    borde='gray'
                                    letter='white'
                                />
                                <div className='marcador'>
                                    <strong className='meq'>0</strong>
                                    <p className='vs'>vs</p>
                                    <strong className='meq'>0</strong>
                                </div>
                                <Equipo
                                    pos
                                    nombre=''
                                    paralelo='Ganador B'
                                    genero='M'
                                    logo=''
                                    color='gray'
                                    borde='gray'
                                    letter='white'
                                />
                            </div>
                            <div className='partido'>
                                <strong className='id'>2</strong>
                                <Equipo
                                    pos
                                    nombre=''
                                    paralelo='Ganador C'
                                    genero='M'
                                    logo=''
                                    color='gray'
                                    borde='gray'
                                    letter='white'
                                />
                                <div className='marcador'>
                                    <strong className='meq'>0</strong>
                                    <p className='vs'>vs</p>
                                    <strong className='meq'>0</strong>
                                </div>
                                <Equipo
                                    pos
                                    nombre=''
                                    paralelo='Ganador D'
                                    genero='M'
                                    logo=''
                                    color='gray'
                                    borde='gray'
                                    letter='white'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='segunda-cont nobot'>
                        <div className='line l2'>
                            <p>[0 - <span style={{ color: 'red' }}>1</span>]</p>
                        </div>
                        <div className='segunda sl2'>
                            <div className='partido'>
                                <strong className='id'>3</strong>
                                <Equipo
                                    pos
                                    nombre=''
                                    paralelo='Perdedor A'
                                    genero='M'
                                    logo=''
                                    color='gray'
                                    borde='gray'
                                    letter='white'
                                />
                                <div className='marcador'>
                                    <strong className='meq'>0</strong>
                                    <p className='vs'>vs</p>
                                    <strong className='meq'>0</strong>
                                    {/* <p className='pen'>Penal. (3 - 1)</p> */}
                                </div>
                                <Equipo
                                    pos
                                    nombre=''
                                    paralelo='Perdedor B'
                                    genero='M'
                                    logo=''
                                    color='gray'
                                    borde='gray'
                                    letter='white'
                                />
                            </div>
                            <div className='partido'>
                                <strong className='id'>4</strong>
                                <Equipo
                                    pos
                                    nombre=''
                                    paralelo='Perdedor C'
                                    genero='M'
                                    logo=''
                                    color='gray'
                                    borde='gray'
                                    letter='white'
                                />
                                <div className='marcador'>
                                    <strong className='meq'>0</strong>
                                    <p className='vs'>vs</p>
                                    <strong className='meq'>0</strong>
                                </div>
                                <Equipo
                                    pos
                                    nombre=''
                                    paralelo='Perdedor D'
                                    genero='M'
                                    logo=''
                                    color='gray'
                                    borde='gray'
                                    letter='white'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='tercera-cont' ref={board}>
                    <div className='segunda-cont'>
                        <div className='line t31'>
                            <p>[<span style={{ color: 'green' }}>2</span> - 0]</p>
                        </div>
                        <div className='segunda terc'>
                            <Equipo
                                pos
                                nombre='Confirmación F.C.'
                                paralelo='2do Confir. 2 (M)'
                                logo='22M'
                                color='black'
                                borde='black'
                                letter='white'
                            />
                            <Equipo
                                pos
                                nombre='Fuerza Divina'
                                paralelo='2 Confir. Ángeles (M)'
                                logo='2AM'
                                color='white'
                                borde='black'
                                letter='black'
                            />
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
                            <div className='partido'>
                                <Equipo
                                    pos
                                    nombre='GDL'
                                    paralelo='2do Confir. 4 (M)'
                                    logo='24M'
                                    color='white'
                                    borde='black'
                                    letter='black'
                                    ctext='green'
                                />
                                <div className='marcador'>
                                    <strong className='meq'>8</strong>
                                    <p className='vs'>vs</p>
                                    <strong className='meq'>0</strong>
                                </div>
                                <Equipo
                                    pos
                                    nombre='Traicioneros como Judas'
                                    paralelo='2do Confir. 5 (M)'
                                    logo='25M'
                                    color='black'
                                    borde='black'
                                    letter='white'
                                    ctext='red'
                                />
                            </div>
                            <div className='partido'>
                                <Equipo
                                    pos
                                    nombre='Los Angeles Negros'
                                    paralelo='1ro Confir. 3 (M)'
                                    logo='13M'
                                    color='black'
                                    borde='black'
                                    letter='white'
                                    ctext='green'
                                />
                                <div className='marcador'>
                                    <strong className='meq'>2</strong>
                                    <p className='vs'>vs</p>
                                    <strong className='meq'>0</strong>
                                </div>
                                <Equipo
                                    pos
                                    nombre='Los Angelicales'
                                    paralelo='AB Conf. Molinopamba (M)'
                                    logo='1MM'
                                    color='white'
                                    borde='black'
                                    letter='black'
                                    ctext='red'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='segunda-cont nobot'>
                        <div className='line l2 t31'>
                            <p>[0 - <span style={{ color: 'red' }}>2</span>]</p>
                        </div>
                        <div className='segunda terc sl2'>
                        <Equipo
                            pos
                            nombre='Santos y Religiosos F.C.'
                            paralelo='2do Confir. 1 (M)'
                            logo='21M'
                            color='white'
                            borde='black'
                            letter='black'
                        />
                        <Equipo
                            pos
                            nombre='Santa Fé (M)'
                            paralelo='1ro Confir. 2 (M)'
                            logo='12M'
                            color='black'
                            borde='black'
                            letter='white'
                        />
                        </div>
                    </div>
                </div> */}
            </div>

            <style jsx>{`
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