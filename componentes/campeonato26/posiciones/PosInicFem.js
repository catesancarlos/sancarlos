import { useState, useEffect } from 'react'

import db from '../../../services/dBase'
import { collection, query, where, onSnapshot } from 'firebase/firestore'

/* import BannerCampeon from '../BannerCampeon' */
import ItemCalendario from '../calendario/ItemCalendario'

export default function PosInicFem(
    home,
    select,
    control,
    onStatus,
    onGoles,
    onAgregar,
    onFinalizar
) {
    const [equipos, setEquipos] = useState([])
    const [partidos, setPartidos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const q = query(collection(db, 'equipos2026'))

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const todosLosEquipos = snapshot.docs.map(doc => doc.data())
            setEquipos(todosLosEquipos)
        })

        return () => unsubscribe()
    }, [])

    useEffect(() => {
        setLoading(true)
        const qPartidos = query(collection(db, 'partidos2026'), where('grupo', '==', 'Ini'), where('genero', '==', 'F'))

        const unsubPartidos = onSnapshot(qPartidos, (snapshot) => {
            const partidosData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))

            const partidosOrdenados = partidosData.sort((a, b) => {
                // 1. Ordenar por Día
                if (a.date !== b.date) {
                    return a.date > b.date ? 1 : -1;
                }

                // 2. Si es el mismo día, ordenar por Hora
                return a.hora.localeCompare(b.hora)
            })

            setPartidos(partidosOrdenados)
            setLoading(false)
        })

        return () => unsubPartidos()
    }, [])

    // Función para obtener datos de un equipo por su ID desde tus estados actuales
    const getEquipoInfo = (id, lista) => {
        return lista.find(e => e.id === id)
    }

    // Si está cargando, mostramos un indicador en lugar de nada
    if (loading) {
        return <div>Cargando partidos...</div>
    }

    // Si no hay partidos para esa fecha después de cargar
    if (partidos.length === 0) {
        return <div>No hay partidos programados todavia para esta semana.</div>
    }

    return (
        <section>
            <div className='tables'>
                {/* <strong className='title'>Iniciación - Campeonas:</strong>
                <BannerCampeon
                    img='/campeonato/campeonIniciacionM.jpg'
                    name='Niñas Guerreras de Dios'
                    group='Iniciación 1'
                    genre='F'
                /> */}
                <strong className='title'>Final Iniciación:</strong>
                {partidos?.map((p, index) => (
                    <ItemCalendario
                        com
                        final
                        key={p.id}
                        control={control}
                        idJuego={p.id}
                        now={p.status}
                        fecha={[p.dia, p.date, p.hora]}
                        genero={p.genero}
                        equipos={[
                            getEquipoInfo(p.idLocal, equipos),
                            getEquipoInfo(p.idVisitante, equipos)
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
            </div>

            <style jsx>{`
                .title{
                    margin-top: 28px;
                    width: 100%;
                    font-size: 20px;
                    margin-bottom: 25px;
                }

                .tables{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                table{
                    margin-bottom: 25px;
                }

                table:last-child{
                    margin-bottom: 0;
                }

                .title-table{
                    background: #CC397B;
                    color: white;
                    font-size: 14px;
                }

                .label td{
                    background: #00000033;
                }

                td{
                    padding: 1px 5px 2px 5px;
                    font-size: 14px;
                    font-weight: 200;
                    text-align: center;
                    border: 1px solid black;
                }

                .tp{
                    width: 40px;
                }

                .eq{
                    width: 270px;
                    text-align: left;
                }

                .title-fecha{
                    background: #00000044;
                    color: black;
                }

                .info-inag td{
                    padding: 0;
                    font-size: 13px;
                    text-align: left;
                    border: none;
                }

                @media screen and (max-width: 768px){
                    .title{
                        margin-top: 24px;
                        font-size: 16px;
                        margin-bottom: 12px;
                    }
                    
                    table{
                        width: 100%;
                        margin-bottom: 15px;
                    }

                    .title-table{
                        font-size: 13px;
                    }

                    td{
                        padding: 1px 3px 2px 3px;
                        font-size: 13px;
                    }

                    .tp{
                        width: auto;
                    }

                    .label td{
                        font-size: 12px;
                    }

                    .eq{
                        width: 270px;
                    }

                    .info-inag td{
                        font-size: 12px;
                    }
                }
            `}</style>
        </section>
    )
}