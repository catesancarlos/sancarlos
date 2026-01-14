import { useState, useEffect } from 'react'

import AppLayout from '../../componentes/layout'
import CalendarioSemanal from '../../componentes/campeonato26/calendario/CalendarioSemanal'

import db  from '../../services/dBase'
import { setDoc, doc, runTransaction, increment } from 'firebase/firestore'

export default function Paasmal(){
    const [log, setLog] = useState(false)
    
    useEffect(() => {
        const isLogged = sessionStorage.getItem('isLogged') === 'true'
        if(isLogged) setLog(true)
    }, [])

    const handleChange = e => {
        if (e.target.value === 'moshu3682') {
            setLog(true)
            sessionStorage.setItem('isLogged', 'true')
        }
    }

    const handleFinalizar = async ([idJuego, idLocal, idVisitante, golesLocal, golesVisitante]) => {
        // Referencias de los documentos
        const partidoRef = doc(db, "partidos2026", idJuego);
        const localRef = doc(db, "equipos2026", idLocal);
        const visitanteRef = doc(db, "equipos2026", idVisitante);

        try {
            await runTransaction(db, async (transaction) => {
                // 1. Obtener datos actuales de los equipos
                const localDoc = await transaction.get(localRef);
                const visitanteDoc = await transaction.get(visitanteRef);

                if (!localDoc.exists() || !visitanteDoc.exists()) {
                    throw "Uno de los equipos no existe";
                }

                // 2. Determinar resultados
                const ganoLocal = golesLocal > golesVisitante;
                const ganoVisitante = golesVisitante > golesLocal;
                const empate = golesLocal === golesVisitante;

                // 3. Preparar actualizaciones para el Local
                const updateLocal = {
                    pj: increment(1),
                    gf: increment(golesLocal),
                    gc: increment(golesVisitante),
                    dg: increment(golesLocal - golesVisitante),
                    pg: increment(ganoLocal ? 1 : 0),
                    pe: increment(empate ? 1 : 0),
                    pp: increment(ganoVisitante ? 1 : 0),
                    pts: increment(ganoLocal ? 3 : (empate ? 1 : 0))
                };

                // 4. Preparar actualizaciones para el Visitante
                const updateVisitante = {
                    pj: increment(1),
                    gf: increment(golesVisitante),
                    gc: increment(golesLocal),
                    dg: increment(golesVisitante - golesLocal),
                    pg: increment(ganoVisitante ? 1 : 0),
                    pe: increment(empate ? 1 : 0),
                    pp: increment(ganoLocal ? 1 : 0),
                    pts: increment(ganoVisitante ? 3 : (empate ? 1 : 0))
                };

                // 5. Ejecutar todas las actualizaciones en la transacción
                transaction.update(localRef, updateLocal);
                transaction.update(visitanteRef, updateVisitante);
                transaction.update(partidoRef, { status: 2 }); // Status 2 = Finalizado
            });

            console.log("Partido finalizado y tabla actualizada correctamente");
        } catch (e) {
            console.error("Error en la transacción: ", e);
        }
    };

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

        try {
            await setDoc(doc(db, 'partidos2026', partidoId), { 
                [campo]: increment(valor)
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

    const handleGoleador = async () => {
        let na = 'Carlos Marquez'
        let eq = '25M'

        try {
            await setDoc(doc(db, 'goleadores2026',`${eq}_${na.replace(" ", "_")}`), { 
                id: `${eq}_${na.replace(" ", "_")}`,
                name: na,
                genero: 'M',
                equipo: eq,
                goles: 1
            }, { merge: true })
            
        } catch (error) {
            console.error('Error al guardar el jugador:', error)
        }
    }

    return(
        <AppLayout name='Segundos de Confirmación' titulo='2 Confirmación - Cate San Carlos'>
            <section>
                {
                    log ? 
                        <>
                            <CalendarioSemanal
                                select={2}
                                control={true}
                                onStatus={handleStatus}
                                onGoles={handleGoles}
                                onAgregar={handleAgregar}
                                onFinalizar={handleFinalizar}
                            />
                            <p onClick={handleSetear}>Partido</p>
                            <p onClick={handleEquipo}>Equipo</p>
                            <p onClick={handleGoleador}>Goleador</p>
                            <p onClick={() => {
                                sessionStorage.removeItem('isLogged')
                                setLog(false)
                            }}>Cerrar Sesión</p>
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
