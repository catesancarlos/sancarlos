import { useState, useEffect } from 'react'

import Equipo from '../Equipo'
import EscogerGoleador from './EscogerGoleador'

import { writeBatch, doc, increment } from 'firebase/firestore'
import db from '../../../services/dBase'

export default function ItemCalendario({
    com,
    final,
    now,
    control,
    idJuego,
    fecha,
    nivel,
    genero,
    equipos,
    fase,
    res,
    jugador,
    extra,
    pen,
    home,
    onStatus,
    onGoles,
    onAgregar,
    onFinalizar
}) {
    const [name, setName] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [equipoSeleccionado, setEquipoSeleccionado] = useState(null)
    const [isResumenModalOpen, setIsResumenModalOpen] = useState(false)
    const [golesPendientes, setGolesPendientes] = useState(() => {
        const saved = localStorage.getItem(`goles_${idJuego}`)
        return saved ? JSON.parse(saved) : []
    })

    useEffect(() => {
        localStorage.setItem(`goles_${idJuego}`, JSON.stringify(golesPendientes))
    }, [golesPendientes, idJuego])

    const handleChange = e => {
        setName(e.target.value)
    }

    const handleAgregar = e => {
        onAgregar([idJuego, name])
    }

    const abrirModal = (tipo) => {
        setIsModalOpen(true)
        setEquipoSeleccionado(tipo)
    }

    const agregarAlPozo = (jugador, equipo, idJuego) => {
        setGolesPendientes(prev => [...prev, { jugador, equipo, idJuego, timestamp: Date.now() }])
    }

    const resumenGoles = golesPendientes.reduce((acc, item) => {
        const id = item.jugador.id;
        if (!acc[id]) {
            acc[id] = {
                nombre: item.jugador.name, // Asegúrate de usar el campo correcto
                equipo: item.equipo,
                cantidad: 0,
                jugador: item.jugador // Guardamos el objeto completo por si lo necesitas
            };
        }
        acc[id].cantidad += 1;
        return acc;
    }, {});

    const confirmarGoleadores = async () => {
        try {
            const batch = writeBatch(db);
            
            Object.values(resumenGoles).forEach(g => {
                const jugadorRef = doc(db, 'goleadores2026', g.jugador.id);
                
                // Verificamos si es nuevo basándonos en tu flag 'isNew'
                if (g.jugador.isNew === true) {
                    // CASO 1: Jugador NUEVO -> Usamos SET (Crea el documento)
                    batch.set(jugadorRef, {
                        id: g.jugador.id,
                        name: g.jugador.name,
                        equipo: g.jugador.equipo,
                        genero: g.jugador.genero,
                        nivel: g.jugador.nivel, // Asegúrate de que este campo exista en g.jugador
                        goles: g.cantidad // Inicia con los goles de este partido
                    });
                } else {
                    // CASO 2: Jugador EXISTENTE -> Usamos UPDATE (Suma al existente)
                    batch.update(jugadorRef, { 
                        goles: increment(g.cantidad) 
                    });
                }
            });

            await batch.commit();
            
            setGolesPendientes([]); 
            localStorage.removeItem(`goles_${idJuego}`); 
            setIsResumenModalOpen(false);
            alert("Goles registrados correctamente");
        } catch (error) {
            console.error("Error al guardar:", error);
            alert("Hubo un error al guardar: " + error.message);
        }
    };

    const limpiarTodo = () => {
        if (window.confirm("¿Estás seguro de que quieres borrar todos los goles de este partido?")) {
            setGolesPendientes([]);
            localStorage.removeItem(`goles_${idJuego}`)
            setIsResumenModalOpen(false)
        }
    };

    return(
        <section>
            <div className='tp'>
                <div className='genero'>
                    <strong>{genero}</strong>
                </div>
                {fase &&
                    <div className='fase'>
                        <strong>{fase}</strong>
                    </div>
                }
                <div className='fecha'>
                    {!control &&
                        <>
                            <p>{fecha[0]}</p>
                            <p>{fecha[1]}</p>
                        </>
                    }
                    <strong>{!control ? fecha[2] : control}</strong>
                </div>
                <div className='eq1' onClick={() => { if(control) abrirModal('local') }}>
                    <Equipo
                        ca
                        com={com}
                        nombre={equipos[0].name}
                        paralelo={equipos[0].paralelo}
                        genero={equipos[0].genero}
                        logo={equipos[0].id}
                        color={equipos[0].colors[0]}
                        borde={equipos[0].colors[1]}
                        letter={equipos[0].colors[2]}
                    />
                </div>
                <div className='marc-glo'>
                    {
                        control ? 
                            <div className='op-now'>
                                <p onClick={() => {if(res?.[0] > 0) {onGoles([idJuego, 'golesLocal', -1])}}}>-</p>
                                <p onClick={() => onStatus([idJuego, 0])}>N</p>
                                <p onClick={() => onStatus([idJuego, 1])}>S</p>
                                <p onClick={() => onStatus([idJuego, 2])}>E</p>
                                <p onClick={() => {if(res?.[1] > 0) {onGoles([idJuego, 'golesVisitante', -1])}}}>-</p>
                            </div>
                        : now==1 ? <p className='now'>Ahora</p> : now==2 ? <p className='fin'>Finalizado</p> : now==3 ? <p className='suspendido'>Suspendido</p> : ''
                    }
                    <div className='marcador'>
                        <strong className='meq'>{res ? res?.[0] : 0}</strong>
                        <p className='vs'>Vs</p>
                        <strong className='meq'>{res ? res?.[1] : 0}</strong>
                    </div>
                    {pen && <p className='pen'>{`Pen (${pen})`}</p> }
                    {extra && <p className='pen'>{`T. extra (${extra})`}</p> }
                </div>
                <div className='eq2' onClick={() => { if(control) abrirModal('visitante') }}>
                    <Equipo
                        ca
                        com={com}
                        nombre={equipos[1].name}
                        paralelo={equipos[1].paralelo}
                        genero={equipos[1].genero}
                        logo={equipos[1].id}
                        color={equipos[1].colors[0]}
                        borde={equipos[1].colors[1]}
                        letter={equipos[1].colors[2]}
                    />
                </div>
            </div>
            { (jugador && !control) && <p className='jugador'>{`Jugador${genero == 'F' ? 'a' : ''} del partido:`}<span>{jugador}</span></p> }
            { control && 
                <div className='jugador'>
                    <input
                        onChange={handleChange}
                        value={name ? name : ''}
                        placeholder={jugador ? jugador : ''}
                    />
                    <p onClick={handleAgregar}>Agregar</p>
                    <p onClick={() => onFinalizar([idJuego, equipos[0].id, equipos[1].id, res[0], res[1]])}>Finalizar</p>
                    <p onClick={() => golesPendientes.length > 0 && setIsResumenModalOpen(true)}>
                        Grabar goles ({golesPendientes.length})
                    </p>
                </div>
            }

            {isModalOpen && 
                <EscogerGoleador
                    idJuego={idJuego}
                    equipo={ equipoSeleccionado == 'local' ? equipos[0].id : equipos[1].id}
                    deQuien={equipoSeleccionado == 'local' ? 'golesLocal' : 'golesVisitante'}
                    nivel={nivel}
                    genero={genero}
                    onGoles={onGoles}
                    onAddToQueue={agregarAlPozo}
                    onClose={() => setIsModalOpen(false)}
                />
            }

            {isResumenModalOpen && (
                <div className='modal-overlay' onClick={() => setIsResumenModalOpen(false)}>
                    <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                        <h3>Resumen de Goles</h3>
                        <div className='lista-jugadores'>
                            {Object.values(resumenGoles).map((g) => (
                                <div key={g.jugador.id} style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
                                    {g.nombre} {g.jugador.nivel} ({g.equipo}): <strong>{g.cantidad} {g.cantidad === 1 ? 'gol' : 'goles'}</strong>
                                </div>
                            ))}
                        </div>
                        <button 
                            style={{ marginTop: '15px', background: '#245590', color: 'white', padding: '10px', border: 'none', borderRadius: '5px' }}
                            onClick={confirmarGoleadores}
                        >
                            Confirmar y Guardar
                        </button>
                        <button 
                            style={{ marginTop: '5px', background: '#ccc', padding: '10px', border: 'none', borderRadius: '5px' }}
                            onClick={() => setIsResumenModalOpen(false)}
                        >
                            Cancelar
                        </button>
                        {/* Botón Limpiar Todo (Solo si hay elementos) */}
                        {Object.values(resumenGoles).length > 0 && (
                            <button 
                                onClick={limpiarTodo}
                                style={{ marginTop: '10px', background: '#f8d7da', color: '#721c24', border: '1px solid #f5c6cb', padding: '8px', borderRadius: '5px', width: '100%' }}
                            >
                                Limpiar toda la lista
                            </button>
                        )}
                    </div>
                </div>
            )}

            <style jsx>{`
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.7);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000; /* Asegura que esté encima de todo */
                }

                /* Caja del modal */
                .modal-content {
                    background: white;
                    width: 90%;
                    max-width: 400px;
                    max-height: 80vh; /* Para que no se salga de la pantalla */
                    padding: 20px;
                    border-radius: 15px;
                    box-shadow: 0 10px 25px rgba(0,0,0,0.3);
                    display: flex;
                    flex-direction: column;
                    overflow: hidden; /* Necesario para que el scroll funcione bien */
                }

                section{
                    background: ${final ? '#C8B273' : 'transparent'};
                    width: ${home ? '100%' : 'auto'};
                    position: relative;
                    margin-top: 4px;
                    margin-left: 4px;
                    font-family: 'Lato', sans-serif;
                    border: ${genero == 'M' ? `1px ${!com ? 'solid' : 'dashed'} #245590` : `1px ${!com ? 'solid' : 'dashed'} #CC397B`};
                    border: ${final ? 'none' : 'auto'};
                    border-radius: 10px;
                    border-bottom: ${jugador ? 'none' : 'auto'};
                    margin-bottom: 16px;
                }

                .tp{
                    padding: ${!control ? '5px 5px 5px 0' : '5px'};
                    display: flex;
                    justify-content: space-between;
                }

                .jugador{
                    width: 100%;
                    background: ${genero == 'M' ? '#245590' : '#CC397B'};
                    padding: 4px 0;
                    color: white;
                    font-size: 13px;
                    font-weight: 200;
                    text-align: center;
                    display: flex;
                    justify-content: center;
                    border-radius: 0 0 10px 10px;
                }

                .jugador span{
                    margin-left: 4px;
                    font-weight: 400;
                }

                .jugador p{
                    margin-left: 4px;
                    background: white;
                    padding: 0 5px;
                    color: black;
                    border-radius: 5px;
                    cursor: pointer;
                }

                .genero{
                    position: absolute;
                    top: -6px;
                    left: -6px;
                    background: ${genero == 'M' ? '#245590' : '#CC397B'};
                    width: 28px;
                    line-height: 28px;
                    color: white;
                    text-align: center;
                    border-radius: 6px;
                }

                .fase{
                    position: absolute;
                    top: -8px;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                }

                .fase strong{
                    background: #F2F8F6;
                    margin-left: 17%;
                    padding: 0 8px 2px 8px;
                    font-size: 15px;
                    color: ${genero == 'M' ? '#245590' : '#CC397B'};
                    border-radius: 6px;
                }

                .fecha{
                    width: 100px;
                    font-size: 15px;
                    display: ${!control ? 'flex' : 'none'};
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }

                .eq1, .eq2{
                    width: 180px;
                    cursor: ${control ? 'pointer' : 'auto'};
                }

                .marc-glo{
                    position: relative;
                    width: 120px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .marcador{
                    display: flex;
                }

                .now{
                    position: absolute;
                    top: 8px;
                    background: ${genero == 'M' ? '#245590' : '#CC397B'};
                    padding: 1px 5px 2px 5px;
                    color: white;
                    font-size: 13px;
                    font-weight: 400;
                    border-radius: 5px;
                    animation-name: nuevo;
                    animation-duration: 2s;
                    animation-iteration-count: infinite;
                }

                .fin{
                    position: absolute;
                    top: 8px;
                    color: #555;
                    font-size: 13px;
                    font-weight: bold;
                }

                .suspendido{
                    position: absolute;
                    top: 8px;
                    color: red;
                    font-size: 13px;
                    font-weight: 500;
                }

                .op-now{
                    position: absolute;
                    top: 5px;
                    display: flex;
                }

                .op-now p{
                    width: 20px;
                    line-height: 18px;
                    color: white;
                    font-size: 13px;
                    font-weight: 400;
                    text-align: center;
                    border-radius: 5px;
                    cursor: pointer;
                }

                .op-now p:nth-child(1){
                    background: #444;
                    margin-right: 4px;
                }

                .op-now p:nth-child(2){
                    background: white;
                    color: black;
                    border: 1px solid black;
                    margin-left: 4px;
                    margin-right: 4px;
                    box-shadow: ${now == 0 ? '-1px 3px 5px 0px #888' : 'none'};
                }
                
                .op-now p:nth-child(3){
                    background: green;
                    margin-left: 4px;
                    margin-right: 4px;
                    box-shadow: ${now == 1 ? '-1px 3px 5px 0px #888' : 'none'};
                }

                .op-now p:nth-child(4){
                    background: black;
                    margin-left: 4px;
                    margin-right: 4px;
                    box-shadow: ${now == 2 ? '-1px 3px 5px 0px #888' : 'none'};
                }

                .op-now p:nth-child(5){
                    background: #444;
                    margin-left: 4px;
                }

                .pen{
                    position: absolute;
                    bottom: 14px;
                    color: black;
                    font-size: 13px;
                    font-weight: 400;
                }

                @keyframes nuevo{
                   50% {
                       background: transparent;
                       color: transparent;
                    } 
                }

                .meq{
                    color: ${genero == 'M' ? '#245590' : '#CC397B'};
                    font-size: 18px;
                }

                .meq:first-child{
                    padding: 0 10px 0 5px;
                }

                .meq:last-child{
                    padding: 0 5px 0 10px;
                }

                .vs{
                    color: #00000099;
                    font-size: 18px;
                }

                @media screen and (max-width: 768px){
                    section{
                        width: 100%;
                        border-radius: 6px;
                    }

                    .jugador{
                        padding: 3px 0 3px 0;
                        font-size: 11px;
                    }

                    .fecha{
                        width: 80px;
                        font-size: 12px;
                    }

                    .eq1, .eq2{
                        width: 100px;
                    }

                    .marcador{
                        width: auto;
                    }

                    .fase strong{
                        font-size: 14px;
                    }
                }
            `}</style>
        </section>
    )
}