import { useState, useEffect } from 'react'

import db  from '../../../services/dBase'
import { collection, query, where, onSnapshot } from 'firebase/firestore'

export default function PosConfFem(){
    const [grupoSegui, setGrupoSegui] = useState([]); // Ordenado (Posiciones)
    const [grupoSeguiLista, setGrupoSeguiLista] = useState([]); // Lista (ID/Original)

    const [grupoConfir, setGrupoConfir] = useState([]); // Ordenado (Posiciones)
    const [grupoConfirLista, setGrupoConfirLista] = useState([]); // Lista (ID/Original)

    const [partidos, setPartidos] = useState([]);

    useEffect(() => {
        // 1. Query para Grupo SEGUIMIENTO
        const q = query(
            collection(db, 'equipos2026'),
            where('genero', '==', 'F')
        )

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const datosCargados = snapshot.docs.map(doc => doc.data());

            // Función de ordenamiento que no afecta al array original
            const obtenerOrdenados = (lista) => {
                return [...lista].sort((a, b) => {
                    if ((b.pts || 0) !== (a.pts || 0)) {
                        return (b.pts || 0) - (a.pts || 0);
                    }
                    return (b.dg || 0) - (a.dg || 0);
                });
            };

            // --- PROCESAR SEGUIMIENTO ---
            const listaSegui = datosCargados.filter(eq => eq.id < '20');
            setGrupoSeguiLista(listaSegui); // Orden original de Firestore
            setGrupoSegui(obtenerOrdenados(listaSegui)); // Orden de posiciones

            // --- PROCESAR CONFIRMACIÓN ---
            const listaConfir = datosCargados.filter(eq => eq.id >= '20');
            setGrupoConfirLista(listaConfir); // Orden original de Firestore
            setGrupoConfir(obtenerOrdenados(listaConfir)); // Orden de posiciones
        });

        return () => { unsubscribe() };
    }, [])

    useEffect(() => {
        // Traemos todos los partidos 'M'
        const qPartidos = query(
            collection(db, 'partidos2026'), 
            where('genero', '==', 'F')
        );

        const unsubPartidos = onSnapshot(qPartidos, (snapshot) => {
            const partidosData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))

            // Ordenamiento global: Primero por número de fecha, luego día y hora
            const partidosOrdenados = partidosData.sort((a, b) => {
                if (a.fecha !== b.fecha) return a.fecha - b.fecha
                const diaA = parseInt(a.date) || 0
                const diaB = parseInt(b.date) || 0
                if (diaA !== diaB) return diaA - diaB
                return a.hora.localeCompare(b.hora)
            })

            setPartidos(partidosOrdenados)
        });

        return () => unsubPartidos()
    }, [])

    // Función para obtener datos de un equipo por su ID desde tus estados actuales
    const getEquipoInfo = (id, lista) => {
        const equipo = lista.find(e => e.id === id)
        return equipo ? `${equipo.name} (${equipo.id})` : 'Cargando...'
    }

    return (
        <section>
            <div className='tables'>
                <strong className='title'>Confirmación (1 & 2) - Posiciones:</strong>
                {console.log(partidos)}
                <table>
                    <thead>
                        <tr>
                            <td colSpan={10} className='title-table'>
                                <strong>Grupo SEGUIMIENTO</strong>
                            </td>
                        </tr>
                        <tr className='label'>
                            <td className='tp'><strong>#</strong></td>
                            <td className='eq'><strong>Equipo</strong></td>
                            <td className='tp'><strong>PJ</strong></td>
                            <td className='tp'><strong>G</strong></td>
                            <td className='tp'><strong>E</strong></td>
                            <td className='tp'><strong>P</strong></td>
                            <td className='tp'><strong>GF</strong></td>
                            <td className='tp'><strong>GC</strong></td>
                            <td className='tp'><strong>GD</strong></td>
                            <td className='tp'><strong>PTS</strong></td>
                        </tr>
                    </thead>
                    <tbody>
                        {grupoSegui?.map((eq, index) => (
                            <tr key={eq.id}>
                                <td className='tp'>{index + 1}</td>
                                <td className='eq'>{eq.name} ({eq.id}) {eq.bonificacion == 'madrina' ? '**' : eq.bonificacion == 'org' ? '*' : ''}</td>
                                <td className='tp'>{eq.pj || 0}</td>
                                <td className='tp'>{eq.pg || 0}</td>
                                <td className='tp'>{eq.pe || 0}</td>
                                <td className='tp'>{eq.pp || 0}</td>
                                <td className='tp'>{eq.gf || 0}</td>
                                <td className='tp'>{eq.gc || 0}</td>
                                <td className='tp'>{(eq.dg > 0 ? `+${eq.dg}` : eq.dg) || 0}</td>
                                <td className='tp'><strong>{eq.pts || 0}</strong></td>
                            </tr>
                        ))}
                        <tr className='info-inag'>
                            <td colSpan={10}>** 2 puntos extras, madrina elegida como Señorita Deportes .</td>
                        </tr>
                        <tr className='info-inag'>
                            <td colSpan={10}>* Punto extra por organización (los 2 puntos se dividen, 1 para el equipo femenino y otro al masculino).</td>
                        </tr>
                        {/* <tr className='info-inag'>
                            <td colSpan={10}><strong style={{color: '#1BB16C', marginLeft: '-1px'}}>•</strong> Clasificado, siguiente ronda.</td>
                        </tr> */}
                    </tbody>
                </table>
                <table>
                    <thead>
                        <tr>
                            <td colSpan={10} className='title-table'>
                                <strong>Grupo CONFIRMACIÓN</strong>
                            </td>
                        </tr>
                        <tr className='label'>
                            <td className='tp'><strong>#</strong></td>
                            <td className='eq'><strong>Equipo</strong></td>
                            <td className='tp'><strong>PJ</strong></td>
                            <td className='tp'><strong>G</strong></td>
                            <td className='tp'><strong>E</strong></td>
                            <td className='tp'><strong>P</strong></td>
                            <td className='tp'><strong>GF</strong></td>
                            <td className='tp'><strong>GC</strong></td>
                            <td className='tp'><strong>GD</strong></td>
                            <td className='tp'><strong>PTS</strong></td>
                        </tr>
                    </thead>
                    <tbody>
                        {grupoConfir?.map((eq, index) => (
                            <tr key={eq.id}>
                                <td className='tp'>{index + 1}</td>
                                <td className='eq'>{eq.name} ({eq.id}) {eq.bonificacion == 'madrina' ? '**' : eq.bonificacion == 'org' ? '*' : ''}</td>
                                <td className='tp'>{eq.pj || 0}</td>
                                <td className='tp'>{eq.pg || 0}</td>
                                <td className='tp'>{eq.pe || 0}</td>
                                <td className='tp'>{eq.pp || 0}</td>
                                <td className='tp'>{eq.gf || 0}</td>
                                <td className='tp'>{eq.gc || 0}</td>
                                <td className='tp'>{(eq.dg > 0 ? `+${eq.dg}` : eq.dg) || 0}</td>
                                <td className='tp'><strong>{eq.pts || 0}</strong></td>
                            </tr>
                        ))}
                        {/* <tr className='info-inag'>
                            <td colSpan={10}><strong style={{color: '#1BB16C', marginLeft: '-1px'}}>•</strong> Clasificado, siguiente ronda.</td>
                        </tr>
                        <tr className='info-inag'>
                            <td colSpan={10}>* Punto extra madrina (Se divide entre los 2 equipos del paralelo).</td>
                        </tr>
                        <tr className='info-inag'>
                            <td colSpan={10}>** 2 puntos extra por organización.</td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
            <div className='tables partidos'>
                <strong className='title'>Resultados:</strong>
                {[...new Set(partidos.map(p => p.fecha))].map(numeroFecha => (
                    <table key={numeroFecha} style={{ marginBottom: '20px' }}>
                        <thead>
                            <tr>
                                <td colSpan={5} className='title-fecha'>
                                    <strong>Fecha {numeroFecha}</strong>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            {partidos
                                .filter(p => p.fecha === numeroFecha) // Solo partidos de esta fecha
                                .map((partido) => (
                                    <tr key={partido.id}>
                                        <td>{getEquipoInfo(partido.idLocal, [...grupoSeguiLista, ...grupoConfirLista])}</td>
                                        <td>{partido.golesLocal}</td>
                                        <td>vs.</td>
                                        <td>{partido.golesVisitante}</td>
                                        <td>{getEquipoInfo(partido.idVisitante, [...grupoSeguiLista, ...grupoConfirLista])}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                ))}
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
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-bottom: 15px;
                }

                .info{
                    display: none;
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
                    background: #CC397B;;
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

                    .final{
                        margin-top: 8px;
                        width: calc(100% + 28px);
                        margin-left: 0;
                        align-items: flex-start;
                        margin-bottom: 10px;
                        overflow: scroll;
                    }

                    .info{
                        margin: 10px 0 0 14px;
                        color: red;
                        font-size: 14px;
                        display: block;
                        text-align: center;
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