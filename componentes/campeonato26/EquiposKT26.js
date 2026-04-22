import { useState, useEffect } from 'react'

import TitleSection from '../sections/TitleSection'
import Equipo from './Equipo'

import db  from '../../services/dBase'
import { collection, query, where, onSnapshot } from 'firebase/firestore'

const niveles = [
    { id: 'confirmacion', label: 'Confirmación', com: false },
    { id: 'seguimiento', label: 'Seguimiento', com: false },
    { id: 'biblico', label: 'Año Bíblico', com: false },
    { id: 'comunion', label: 'Comunión', com: true },
    { id: 'reconciliacion', label: 'Reconciliación', com: true  },
    { id: 'iniciacion', label: 'Iniciación', com: true  },
]

const EquiposKT26 = ({ nivel }) => {
    const [select, setSelect] = useState(2)
    const [equipos, setEquipos] = useState([])

    // Buscamos el objeto que coincide con el ID que viene en la prop 'nivel'
    const nivelEncontrado = niveles.find(item => item.id === nivel)

    // Definimos el título
    const titulo = (nivelEncontrado 
        ? `${nivelEncontrado.label} 2026` 
        : 'EQUIPOS 2026'
    ).toUpperCase()

    useEffect(() => {
        const q = query(
            collection(db, 'equipos2026'),
            where('nivel', '==', nivel)
        )

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const datosCargados = snapshot.docs.map(doc => doc.data())
            setEquipos(datosCargados)
        })

        return () => { unsubscribe() }
    }, [nivel])

    const masculinos = equipos.filter(eq => eq.genero === 'M');
    const femeninos = equipos.filter(eq => eq.genero === 'F');

    return (
        <>
            <TitleSection
                title={titulo}
                desc='Detalle de equipos que participan en este campeonato.'
                color='#245590'
            />
            {/* SECCIÓN MASCULINO */}
            {masculinos.length > 0 && (
                <>
                    <p style={{ 'color': '#245590' }}>MASCULINO</p>
                    <div>
                        {masculinos.map(eq => (
                            <Equipo
                                key={eq.id}
                                com={nivelEncontrado.com}
                                nombre={eq.name}
                                paralelo={eq.paralelo}
                                genero={eq.genero}
                                logo={eq.id}
                                color={eq.colors[0]}
                                borde={eq.colors[1]}
                                letter={eq.colors[2]}
                            />
                        ))}
                    </div>
                </>
            )}

            {/* SECCIÓN FEMENINO */}
            {femeninos.length > 0 && (
                <>
                    <p style={{ 'color': '#CC397B' }}>FEMENINO</p>
                    <div>
                        {femeninos.map(eq => (
                            <Equipo
                                key={eq.id}
                                com={nivelEncontrado.com}
                                nombre={eq.name}
                                paralelo={eq.paralelo}
                                genero={eq.genero}
                                logo={eq.id}
                                color={eq.colors[0]}
                                borde={eq.colors[1]}
                                letter={eq.colors[2]}
                            />
                        ))}
                    </div>
                </>
            )}
            
            
            <style jsx>{`
                p{
                    font-size: 17px;
                    font-family: 'Lato', sans-serif;
                    font-weight: bold;
                    text-align: center;
                    margin-bottom: 10px;
                }

                div{
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    margin-bottom: 30px;
                }
            `}</style>
        </> 
    )
}

export default EquiposKT26