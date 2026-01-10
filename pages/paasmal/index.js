import { useState, useEffect } from 'react'

import AppLayout from '../../componentes/layout'
import PartidosSemana from '../../componentes/campeonato26/calendario/PartidosSemana'

import db  from '../../services/dBase'
import { doc, setDoc, onSnapshot } from 'firebase/firestore'

let CAMPEONATO = 'campeonato26'
let FECHA = 'fecha1'

export default function Paasmal(){
    const [log, setLog] = useState(false)
    const [fecha, setFecha] = useState({})

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
        // Esto crea el nombre de la clave dinámicamente: "partido1", "partido2", etc.
        const nombreClave = `partido${partidoId}`

        try {
            await setDoc(doc(db, CAMPEONATO, FECHA), { 
                [nombreClave]: nuevoStatus 
            }, { merge: true })
            
        } catch (error) {
            console.error('Error al actualizar el estado del partido:', error)
        }
    }

    const handleGoles = async ([partidoId, equipoIdx, operacion]) => {
        const key = `res${partidoId}`
        const currentRes = fecha[key] || [0, 0] // Fallback por si no existe el dato
        
        // Creamos una copia del resultado actual
        let nuevoResultado = [...currentRes]
        
        // Calculamos el nuevo valor (sumar o restar 1)
        const valorActual = Number(nuevoResultado[equipoIdx])
        nuevoResultado[equipoIdx] = operacion === '+' ? valorActual + 1 : valorActual - 1

        // Evitamos goles negativos (opcional)
        if (nuevoResultado[equipoIdx] < 0) nuevoResultado[equipoIdx] = 0

        try {
            await setDoc(doc(db, CAMPEONATO, FECHA), { 
                [key]: nuevoResultado 
            }, { merge: true })
        } catch (error) {
            console.error('Error actualizando marcador:', error)
        }
    }

    const handleAgregar = async ([partidoId, nombreJugador]) => {
        // Genera automáticamente: "jugador1", "jugador2", etc.
        const campo = `jugador${partidoId}`

        try {
            await setDoc(doc(db, CAMPEONATO, FECHA), { 
                [campo]: nombreJugador 
            }, { merge: true })
            
        } catch (error) {
            console.error('Error al guardar el jugador:', error)
        }
    }

    return(
        <AppLayout name='Segundos de Confirmación' titulo='2 Confirmación - Cate San Carlos'>
            {console.log(fecha)}
            <section>
                {
                    log ?
                        <PartidosSemana
                            title='Partidos de la semana:'
                            fecha={fecha}
                            control={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                            onStatus={handleStatus}
                            onGoles={handleGoles}
                            onAgregar={handleAgregar}
                        />
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
