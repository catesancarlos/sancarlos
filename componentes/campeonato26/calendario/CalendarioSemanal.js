import { useState, useEffect } from 'react'

import db  from '../../../services/dBase'
import { collection, query, where, onSnapshot } from 'firebase/firestore'

import ItemCalendario from './ItemCalendario'

export default function CalendarioSemanal({
    home,
    select,
    control,
    onStatus,
    onGoles,
    onAgregar
}){

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
            setLoading(false)
        })

        return () => unsubPartidos()
    }, [select])

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

    return partidos?.map((p, index) => (
        <ItemCalendario
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
        />
    ))
}