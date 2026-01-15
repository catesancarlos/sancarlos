import { useState, useEffect } from 'react'

import db  from '../../services/dBase'
import { setDoc, doc, collection, query, where, onSnapshot } from 'firebase/firestore'

export default function AddPartido(){
    const [equipos, setEquipos] = useState([])

    const [formData, setFormData] = useState({
        fecha: 0,
        semana: 0,
        dia: '',
        date: '',
        hora: '',
        genero: '',
        idLocal: '',
        idVisitante: '',
        grupo: ''
    })

    const handleFormChange = (e) => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    useEffect(() => {
        // Si no hay género seleccionado, no carga
        if (!formData.genero) {
            setEquipos([])
            return
        }

        // Consulta filtrada por el género seleccionado
        const q = query(
            collection(db, 'equipos2026'), 
            where('genero', '==', formData.genero)
        )

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const listaEquipos = snapshot.docs.map(doc => doc.data())
            setEquipos(listaEquipos)
        })

        return () => unsubscribe()
    }, [formData.genero])

    const handleAddGoleador = async (e) => {
        e.preventDefault()

        // Si alguno de los valores es "falsy" (string vacío o 0), detiene la ejecución
        if (Object.values(formData).some(valor => !valor)) return

        const docId = `F${formData.fecha}_${formData.idLocal}_${formData.idVisitante}`

        try {
            const payload = {
                ...formData,
                fecha: Number(formData.fecha),
                semana: Number(formData.semana),
                id: docId,
                status: 0,
                golesLocal: 0,
                golesVisitante: 0,
            }

            await setDoc(doc(db, 'partidos2026',docId), payload, { merge: true })
        } catch (error) {
            console.error('Error al guardar el jugador:', error)
        }
    }

    const { fecha, semana, dia, date, hora, genero, idLocal, idVisitante, grupo } = formData

    return (
        <section>
            <div>
                <label>Fecha:</label>
                <input
                    name='fecha'
                    value={fecha} 
                    type='number' 
                    min='0'
                    onChange={handleFormChange}
                    onKeyDown={(e) => {if (e.key === '-' || e.key === 'e') {e.preventDefault()}}} // Evita que escriban el signo "-" o la letra "e"
                />
            </div>
            <div>
                <label>Semana:</label>
                <input
                    name='semana'
                    value={semana} 
                    type='number' 
                    min='0'
                    onChange={handleFormChange}
                    onKeyDown={(e) => {if (e.key === '-' || e.key === 'e') {e.preventDefault()}}} // Evita que escriban el signo "-" o la letra "e"
                />
            </div>
            <div>
                <label>Día:</label>
                <select
                    name='dia' 
                    value={dia} 
                    onChange={handleFormChange}
                    className="custom-select" 
                >
                    <option value="">Selecciona el día...</option>
                    <option value='Sábado'>Sábado</option>
                    <option value='Domingo'>Domingo</option>
                </select>
            </div>
            <div>
                <label>Date:</label>
                <input name='date' value={date} onChange={handleFormChange} />
            </div>
            <div>
                <label>Hora:</label>
                <input name='hora' value={hora} onChange={handleFormChange} />
            </div>
            <div>
                <label>Genero:</label>
                <select
                    name='genero' 
                    value={genero} 
                    onChange={handleFormChange}
                    className="custom-select" 
                >
                    <option value="">Selecciona el genero...</option>
                    <option value='M'>Masculino</option>
                    <option value='F'>Femenino</option>
                </select>
            </div>
            <div className="form-group">
                <label>Equipo Local:</label>
                <select
                    name='idLocal'
                    value={idLocal} 
                    onChange={handleFormChange}
                    className="custom-select"
                >
                    <option value="">Selecciona un equipo...</option>
                    {equipos.map((eq) => (
                        <option key={eq.id} value={eq.id}>
                            {eq.id}
                        </option>
                    ))}
                </select>
            </div>
            <div className="form-group">
                <label>Equipo Visitante:</label>
                <select
                    name='idVisitante'
                    value={idVisitante} 
                    onChange={handleFormChange}
                    className="custom-select"
                >
                    <option value="">Selecciona un equipo...</option>
                    {equipos.map((eq) => (
                        <option key={eq.id} value={eq.id}>
                            {eq.id}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label>Grupo:</label>
                <select
                    name='grupo' 
                    value={grupo} 
                    onChange={handleFormChange}
                    className="custom-select" 
                >
                    <option value="">Selecciona el grupo...</option>
                    <option value='Seg'>Seguimiento</option>
                    <option value='Con'>Confirmación</option>
                </select>
            </div>
            <p onClick={handleAddGoleador}>Agregar Partido</p>

            <style jsx>{`
                div{
                    width: fit-content;
                    background-color: white;
                    padding: 10px;
                    display: flex;
                    align-items: center;
                    border-radius: 6px;
                    margin-bottom: 10px;
                }

                label{
                    width: 70px;
                }

                input{
                    width: 280px;
                    border: none;
                    outline: none;
                    border-bottom: 1px solid black;
                }

                .form-group {
                    display: flex;
                    align-items: center;
                    width: fit-content; /* Mantiene el div al ancho del contenido */
                    background-color: white;
                    padding: 5px 15px;
                    border-radius: 10px;
                    margin-bottom: 8px;
                }

                                .custom-select {
                    border: none;
                    border-bottom: 1px solid black;
                    outline: none;
                    background: transparent;
                    padding: 2px 5px;
                    font-family: inherit;
                    cursor: pointer;
                    min-width: 150px; /* Un ancho mínimo para que sea legible */
                }
            `}</style>
        </section>
    )
}