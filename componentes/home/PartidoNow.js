import { useState, useEffect } from 'react'

import db  from '../../services/dBase'
import { collection, query, where, onSnapshot } from 'firebase/firestore'

import ItemCalendario from '../campeonato26/calendario/ItemCalendario'

export default function PartidoNow({ fecha, home = true, select }) {
    const [equipos, setEquipos] = useState([])
    const [partidos, setPartidos] = useState([])

    useEffect(() => {
        const q = query(collection(db, 'equipos2026'))

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const todosLosEquipos = snapshot.docs.map(doc => doc.data())
            setEquipos(todosLosEquipos)
        })

        return () => unsubscribe()
    }, [])

    useEffect(() => {
        const qPartidos = query(collection(db, 'partidos2026'), where('semana', '==', select))

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
        })

        return () => unsubPartidos()
    }, [select])

    // Función para obtener datos de un equipo por su ID desde tus estados actuales
    const getEquipoInfo = (id, lista) => {
        return lista.find(e => e.id === id)
    }

    return (
        <section>
            {partidos.map((p) => {
                // Verificamos si el partido está activo (status == 1)
                if (p.status !== 1) return null

                return (
                    <ItemCalendario
                        key={p.id}
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
                    />
                )
            })}

            <style jsx>{`
                section{
                    display: flex;
                    opacity: 1;
                    margin: 0 4% 20px 4%;
                    margin: 0 4% 0 4%;
                    width: 92%;
                    font-family: 'Lato', sans-serif;
                    flex-direction: column;
                    align-items: center;   
                }

                @media screen and (max-width: 768px){
                    section{
                        margin: 5px 14px 5px 14px;
                        width: calc(100% - 28px);
                    }
                }
            `}</style>
        </section> 
    )
}