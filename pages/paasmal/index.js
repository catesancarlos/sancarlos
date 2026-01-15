import { useState, useEffect } from 'react'

import AppLayout from '../../componentes/layout'
import Container from '../../componentes/sections/Container'
import CalendarioSemanal from '../../componentes/campeonato26/calendario/CalendarioSemanal'

import db  from '../../services/dBase'
import { setDoc, doc, onSnapshot, runTransaction, increment } from 'firebase/firestore'
import AddGoleador from '../../componentes/control/AddGoleador'
import AddPartido from '../../componentes/control/AddPartido'

export default function Paasmal(){
    const [log, setLog] = useState(false)
    const [section, setSection] = useState(1)
    const [select, setSelect] = useState(1)

    const handleChangeSection = e => setSection(e)
    
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

    useEffect(() => {
        onSnapshot(doc(db, 'controles', 'pagina'), (doc) => {
            setSelect(doc.data().fecha)
        })
    }, [])

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

    return(
        <AppLayout name='Segundos de Confirmación' titulo='2 Confirmación - Cate San Carlos'>
            {
                !log ? <div style={{ display: 'flex'}}><input onChange={handleChange} /></div> :
                <Container
                    title='CAMPEONATO'
                    subtitle='Control'
                >
                    <aside>
                        <p className={`op-menu ${section == 1 && 'active'}`} onClick={() => handleChangeSection(1)}>Calendario</p>
                        <p className={`op-menu ${section == 2 && 'active'}`} onClick={() => handleChangeSection(2)}>Ag Partido</p>
                        <p className={`op-menu ${section == 3 && 'active'}`} onClick={() => handleChangeSection(3)}>Ag Equipo</p>
                        <p className={`op-menu ${section == 4 && 'active'}`} onClick={() => handleChangeSection(4)}>Ag Goleador</p>
                        <p className={`op-menu ${section == 5 && 'active'}`} onClick={() => {
                            sessionStorage.removeItem('isLogged')
                            setLog(false)
                        }}>Cerrar Sesión</p>
                    </aside>
                    <div className='principal'>
                        {section == 1 
                            ? <CalendarioSemanal
                                select={select}
                                control={true}
                                onStatus={handleStatus}
                                onGoles={handleGoles}
                                onAgregar={handleAgregar}
                                onFinalizar={handleFinalizar}
                            />
                            : section == 2
                                ? <AddPartido />
                                : section == 3
                                    ? <p onClick={handleEquipo}>Equipo</p>
                                    : <AddGoleador />
                        }
                    </div>
                </Container>
            }

            <style jsx>{`
                aside{
                    width: 15%;
                }

                .op-menu{
                    background: white;
                    padding: 10px 16px;
                    font-size: 18px;
                    font-family: 'Lato', sans-serif;
                    text-align: center;
                    border-radius: 8px;
                    box-shadow: -2px 2px 5px 0px #888;
                    -webkit-tap-highlight-color: rgba(0,0,0,0);
                    cursor: pointer;
                    margin-bottom: 12px;
                    
                }

                .active{
                    background: #245590;
                    color: white;
                }

                .principal{
                    width: 85%;
                    padding: 18px 0 18px 35px;
                }

                @media screen and (max-width: 768px){
                    aside{
                        width: 100%;
                        display: flex;
                        flex-wrap: wrap;
                    }

                    .op-menu{
                        width: calc((100% - 12px) / 3);
                        padding: 6px 5px;
                        font-size: 15px;
                        margin-right: 6px;
                        margin-bottom: 10px;
                    }

                    .op-menu:nth-child(3), .op-menu:nth-child(6), .op-menu:nth-child(9), .op-menu:nth-child(10){
                        margin-right: 0;
                    }

                    .principal{
                        width: 100%;
                        padding: 15px 0 0 0;
                    }
                }
            `}</style>
        </AppLayout>
        
    )
}
