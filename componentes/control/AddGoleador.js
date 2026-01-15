import { useState, useEffect } from 'react'

import db  from '../../services/dBase'
import { setDoc, doc, collection, query, where, onSnapshot } from 'firebase/firestore'

export default function AddGoleador(){
    const [equipos, setEquipos] = useState([])

    const [formData, setFormData] = useState({
        name: '',
        genero: '',
        equipo: '',
        goles: 0
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
        );

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

        const docId = `${formData.equipo}_${formData.name.replace(' ', '_')}`

        try {
            const payload = {
                ...formData,
                id: docId,
                goles: Number(formData.goles)
            }

            await setDoc(doc(db, 'goleadores2026',docId), payload, { merge: true })
        } catch (error) {
            console.error('Error al guardar el jugador:', error)
        }
    }

    const { name, genero, equipo, goles } = formData

    return (
        <section>
            <div>
                <label>Nombre:</label>
                <input name='name' value={name} onChange={handleFormChange} />
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
                    <option value='M'>M</option>
                    <option value='F'>F</option>
                </select>
            </div>
            <div className="form-group">
                <label>Equipo:</label>
                <select
                    name='equipo'
                    value={equipo} 
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
                <label>Goles:</label>
                <input
                    name='goles'
                    value={goles} 
                    type='number' 
                    min='0'
                    onChange={handleFormChange}
                    onKeyDown={(e) => {if (e.key === '-' || e.key === 'e') {e.preventDefault()}}} // Evita que escriban el signo "-" o la letra "e"
                />
            </div>
            <p onClick={handleAddGoleador}>Agregar Goleador</p>

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