import { useState, useEffect } from 'react'
import db from '../../../services/dBase'
import { collection, query, where, onSnapshot, doc, getDoc, updateDoc, setDoc, increment } from 'firebase/firestore';

const MAPA_NIVELES = {
    'Ini': 'iniciacion',
    'Rec': 'reconciliacion',
    'Com': 'comunion',
    'Bib': 'biblico', // Ajusta según tu necesidad real
    'Seg': 'seguimiento',
    'Con': 'confirmacion'
};

export default function EscogerGoleador({ idJuego, equipo, deQuien, nivel, genero, onGoles, onAddToQueue, onClose }) {
    const [jugadores, setJugadores] = useState([])
    const [loading, setLoading] = useState(true)
    const [isAdding, setIsAdding] = useState(false)
    const [nuevoNombre, setNuevoNombre] = useState('')

    useEffect(() => {
        const q = query(
            collection(db, 'goleadores2026'),
            where('equipo', '==', equipo)
        )

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const lista = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
            setJugadores(lista)
            setLoading(false)
        })

        return () => unsubscribe()
    }, [equipo])

    const handleSeleccionarJugador = async (jugador) => {
        // 1. Actualiza el marcador (Inmediato)
        onGoles([idJuego, deQuien, 1])
        // 2. Manda al "pozo" en lugar de escribir en BD
        onAddToQueue(jugador, equipo, idJuego)
        onClose()
    }

    // Función para manejar el agregado manual
    const handleManualAdd = () => {
        if (!nuevoNombre.trim()) return;

        const nivelCompleto = MAPA_NIVELES[nivel] || 'sin clasificar';

        const nombreLimpio = nuevoNombre.trim().replace(/\s+/g, '_');
        const idGenerado = `${equipo}_${nombreLimpio}`;
        
        // Creamos un objeto jugador temporal. 
        // ¡OJO! Si este ID no existe en tu BD, el updateDoc fallará después.
        const jugadorTemporal = { 
            id: idGenerado,
            name: nuevoNombre.trim(),
            nivel: nivelCompleto,
            genero: genero,
            equipo: equipo,
            goles: 0,
            isNew: true
        };
        
        handleSeleccionarJugador(jugadorTemporal)
    }

    return (
        <div className='modal-overlay' onClick={onClose}>
            <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h3>Seleccionar Goleador ({equipo})</h3>
                    {/* Botón de cerrar manual */}
                    <button className='btn-close' onClick={onClose}>×</button>
                </div>

                <div className='lista-jugadores'>
                    {loading ? (
                        <p>Cargando jugadores...</p>
                    ) : (
                        <>
                            {jugadores.map(jugador => (
                                <button key={jugador.id} onClick={() => handleSeleccionarJugador(jugador)}>
                                    {jugador.name}
                                </button>
                            ))}

                            {/* SECCIÓN NUEVA: Botón y Input */}
                            <div style={{ marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
                                {!isAdding ? (
                                    <button 
                                        onClick={() => setIsAdding(true)}
                                        style={{ background: '#555', color: 'white', border: 'none' }}
                                    >
                                        + Agregar jugador nuevo
                                    </button>
                                ) : (
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                        <input 
                                            type="text" 
                                            placeholder="Nombre del jugador" 
                                            value={nuevoNombre}
                                            onChange={(e) => setNuevoNombre(e.target.value)}
                                            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                                        />
                                        <button onClick={handleManualAdd} style={{ background: '#28a745', color: 'white' }}>
                                            Confirmar y Agregar
                                        </button>
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </div>

            <style jsx>{`
                /* Fondo oscuro traslúcido */
                .modal-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 10px;
                }

                .btn-close {
                    width: 30px !important;
                    padding: 5px !important;
                    background: #eee !important;
                    border: none !important;
                    font-size: 20px !important;
                    font-weight: bold;
                }

                .btn-close:active {
                    background: #ff4d4d !important; /* Rojo al presionar */
                    color: white;
                }

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

                h3 {
                    margin: 0 0 15px 0;
                    font-size: 1.2rem;
                    color: #333;
                    text-align: center;
                }

                /* Lista de jugadores con scroll */
                .lista-jugadores {
                    overflow-y: auto;
                    display: flex;
                    flex-direction: column;
                    gap: 8px; /* Espacio entre botones */
                }

                /* Botones de jugador (Optimizado para dedos) */
                button {
                    width: 100%;
                    padding: 15px;
                    background: #f0f0f0;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: background 0.2s, transform 0.1s;
                    text-align: left;
                }

                button:active {
                    background: #007bff;
                    color: white;
                    transform: scale(0.98); /* Feedback táctil */
                }

                /* Scrollbar elegante */
                .lista-jugadores::-webkit-scrollbar {
                    width: 6px;
                }
                .lista-jugadores::-webkit-scrollbar-thumb {
                    background: #ccc;
                    border-radius: 10px;
                }
            `}</style>
        </div>
    )
}