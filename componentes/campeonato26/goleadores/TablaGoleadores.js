import { useState, useEffect } from 'react'
import db from '../../../services/dBase'
import { collection, query, where, onSnapshot } from 'firebase/firestore'

export default function TablaGoleadores({ nivel, genero, titulo }) {
    const [jugadores, setJugadores] = useState([])
    const [equipos, setEquipos] = useState([])

    // Determinar estilos según el género
    const headerClass = genero === 'M' ? 'c-t-m' : 'c-t-f'

    useEffect(() => {
        const q = query(
            collection(db, 'goleadores2026'), 
            where('nivel', '==', nivel),
            where('genero', '==', genero)
        )

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const todosLosJugadores = snapshot.docs.map(doc => doc.data())

            const jugadoresOrdenados = [...todosLosJugadores].sort((a, b) => {
                if (a.name === 'Autogol') return 1;
                if (b.name === 'Autogol') return -1;
                const golesA = Number(a.goles) || 0
                const golesB = Number(b.goles) || 0
                return golesB - golesA
            });

            setJugadores(jugadoresOrdenados);
        })

        return () => unsubscribe();
    }, [genero]) // Se vuelve a ejecutar si el género cambia

    useEffect(() => {
        const q = query(collection(db, 'equipos2026'))
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const todosLosEquipos = snapshot.docs.map(doc => doc.data())
            setEquipos(todosLosEquipos)
        })
        return () => unsubscribe()
    }, [])

    const getEquipoInfo = (id, lista) => {
        const equipo = lista.find(e => e.id === id)
        return equipo ? `${equipo.name} (${equipo.id})` : ''
    }

    const totalGoles = jugadores.reduce((acc, j) => acc + (Number(j.goles) || 0), 0);

    return (
        <table>
            <tr>
                <td colSpan={4} className={headerClass}><strong>{titulo}</strong></td>
            </tr>
            <tr>
                <td><strong>#</strong></td>
                <td><strong>Nombre</strong></td>
                <td><strong>Equipo</strong></td>
                <td><strong>Goles</strong></td>
            </tr>
            {jugadores?.map((j, index) => (
                <tr key={j.id || index}>
                    <td>{index + 1}</td>
                    <td>{j.name}</td>
                    <td>{getEquipoInfo(j.equipo, equipos)}</td>
                    <td>{j.goles}</td>
                </tr>
            ))}
            <tr>
                <td colSpan={3} className='c-t t1'><strong>Total:</strong></td>
                <td className='c-t t2'><strong>{totalGoles}</strong></td>
            </tr>

            <style jsx>{`
                td{
                    padding: 1px 5px 2px 5px;
                    font-size: 14px;
                    text-align: center;
                    border: 1px solid black;
                }

                .ita{
                    font-style: italic;
                    font-weight: 300;
                }

                tr td:nth-child(2){
                    text-align: left;
                }

                tr td:nth-child(3){
                    text-align: left;
                }

                tr td:last-child{
                    text-align: center;
                }

                .c-t{
                    background: black;
                    color: white;
                    border: 1px solid black;   
                }

                .t1{
                    border-radius: 0 0 0 10px;
                }

                .t2{
                    text-align: center;
                    border-radius: 0 0 10px 0;
                }
                
                .c-t-m{
                    background: #245590;
                    color: white;
                    border: 1px solid #245590;
                    border-radius: 10px 10px 0 0;
                }

                .c-t-f{
                    background: #CC397B;
                    color: white;
                    border: 1px solid #CC397B;
                    border-radius: 10px 10px 0 0;
                }

                @media screen and (max-width: 768px){
                    td{
                        font-size: 13px;
                    }
                }
            `}</style>
        </table>
    )
}