import { useState, useEffect } from 'react'

import AppLayout from '../../componentes/layout'
import CalendarioSemanal from '../../componentes/campeonato26/calendario/CalendarioSemanal'

import db  from '../../services/dBase'
import { setDoc, doc, collection, query, where, onSnapshot } from 'firebase/firestore'


let CAMPEONATO = 'campeonato26'
let FECHA = 'fecha1'

export default function Paasmal(){
    const [log, setLog] = useState(false)
    const [fecha, setFecha] = useState({})

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
        /* setLoading(true) */
        const qPartidos = query(collection(db, 'partidos2026'), where('semana', '==', 2))

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
            /* setLoading(false) */
        })

        return () => unsubPartidos()
    }, [])

    useEffect(() => {
        if (log) {
            const unsub = onSnapshot(doc(db, CAMPEONATO, FECHA), (doc) => {
                if (doc.exists()) setFecha(doc.data())
            })
            return () => unsub()
        }
    }, [log])

    const handleChange = e => {
        if(e.target.value == 'moshu3682') setLog(true)
    }

    const handleStatus = async ([partidoId, nuevoStatus]) => {

        try {
            await setDoc(doc(db, 'partidos2026', partidoId), { 
                status: nuevoStatus 
            }, { merge: true })
            
        } catch (error) {
            console.error('Error al actualizar el estado del partido:', error)
        }
    }

    const handleGoles = async ([partidoId, campo, valor]) => {

        const valorSeguro = valor < 0 ? 0 : valor;

        try {
            await setDoc(doc(db, 'partidos2026', partidoId), { 
                [campo]: valorSeguro
            }, { merge: true })
        } catch (error) {
            console.error('Error actualizando marcador:', error)
        }
    }

    const handleAgregar = async ([partidoId, nombreJugador]) => {

        try {
            await setDoc(doc(db, 'partidos2026', partidoId), { 
                jugador: nombreJugador 
            }, { merge: true })
            
        } catch (error) {
            console.error('Error al guardar el jugador:', error)
        }
    }

    const handleSetear = async () => {
        
        try {
            await setDoc(doc(db, 'partidos2026', 'F2_11F_14F'), { 
                fecha: 2,
                semana: 2,
                grupo: 'Seg',
                genero: 'F',
                idLocal: '11F',
                idVisitante: '14F',
                golesLocal: 0,
                golesVisitante: 0,
                status: 0,
                dia: 'Domingo',
                date: '18 Enero',
                hora: '10h40'
            }, { merge: true })
            
        } catch (error) {
            console.error('Error al guardar el jugador:', error)
        }
    }

    const handleEquipo = async () => {
        
        try {
            await setDoc(doc(db, 'equipos2026', '25F'), { 
                id: '25F',
                colors: ['white', 'black', 'black'],
                genero: 'F',
                name: 'Confirmación 5',
                paralelo: '2 Confir. 5',
                pj: 0,
                pg: 0,
                pe: 0,
                pp: 0,
                gf: 0,
                gc: 0,
                dg: 0,
                pts: 0
            }, { merge: true })
            
        } catch (error) {
            console.error('Error al guardar el jugador:', error)
        }
    }

    return(
        <AppLayout name='Segundos de Confirmación' titulo='2 Confirmación - Cate San Carlos'>
            <section>
                {
                    true ? 
                        <>
                            <CalendarioSemanal
                                select={2}
                                control={true}
                                onStatus={handleStatus}
                                onGoles={handleGoles}
                                onAgregar={handleAgregar}
                            />
                            <p onClick={handleSetear}>Partido</p>
                            <p onClick={handleEquipo}>Equipo</p>
                        </>
                    :
                        <div style={{ display: 'flex'}}>
                            <input onChange={handleChange} />
                        </div>
                }
            </section>

            <style jsx>{`
                section{
                    font-family: 'Lato', sans-serif;
                    margin: 0 4% 0 4%;
                    width: 92%;
                }
            `}</style>
        </AppLayout>
        
    )
}
