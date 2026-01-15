import { useState, useEffect } from 'react'

import db  from '../../../services/dBase'
import { collection, query, where, onSnapshot } from 'firebase/firestore'

export default function GolFemTarde(){
    const [jugadores, setJugadores] = useState([])
    const [equipos, setEquipos] = useState([])

    useEffect(() => {
        const q = query(collection(db, 'goleadores2026'), where('genero', '==', 'F'))

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const todosLosJugadores = snapshot.docs.map(doc => doc.data())

            const jugadoresOrdenados = [...todosLosJugadores].sort((a, b) => {
                // 1. Regla de excepción para "Autogol"
                // Si 'a' es Autogol, lo mandamos al final (retornamos 1)
                if (a.name === 'Autogol') return 1;
                // Si 'b' es Autogol, mantenemos a 'a' arriba (retornamos -1)
                if (b.name === 'Autogol') return -1;

                // 2. Si ninguno es Autogol, ordenamos por goles normalmente
                const golesA = Number(a.goles) || 0
                const golesB = Number(b.goles) || 0
                return golesB - golesA 
            });

            setJugadores(jugadoresOrdenados);
        })

        return () => unsubscribe();
    }, [])

    useEffect(() => {
        const q = query(collection(db, 'equipos2026'))

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const todosLosEquipos = snapshot.docs.map(doc => doc.data())
            setEquipos(todosLosEquipos)
        })

        return () => unsubscribe()
    }, [])

    // Función para obtener datos de un equipo por su ID desde tus estados actuales
    const getEquipoInfo = (id, lista) => {
        const equipo = lista.find(e => e.id === id)
        return equipo ? `${equipo.name} (${equipo.id})` : ''
    }

    const totalGoles = jugadores.reduce((acumulador, jugador) => {
        // Aseguramos que el valor sea numérico
        const golesJugador = Number(jugador.goles) || 0;
        return acumulador + golesJugador;
    }, 0);

    return(
        <table>
            <tr>
                <td colSpan={4} className='c-t-f'><strong>Masculino</strong></td>
            </tr>
            <tr>
                <td><strong>#</strong></td>
                <td><strong>Nombre</strong></td>
                <td><strong>Equipo</strong></td>
                <td><strong>Goles</strong></td>
            </tr>
            {jugadores?.map((j, index) => (
                <tr>
                    <td>{index + 1}</td>
                    <td>{j.name}</td>
                    <td>{getEquipoInfo(j.equipo, equipos)}</td>
                    <td /* style={{ background: '#C8B273' }} */>{j.goles}</td>
                </tr>
            ))}
            <tr>
                <td colSpan={3} className='c-t t1'><strong>Total:</strong></td>
                <td className='c-t t2'><strong>{totalGoles}</strong></td>
            </tr>
           {/*  <tr className='info-inag'>
                <td colSpan={10}><i>En Cursiva, jugadores de equipos ya eliminados.</i></td>
            </tr> */}

            <style jsx>{`
                .tablas{
                    display: flex;
                    justify-content: space-around;
                    align-items: flex-start;
                }

                .tablas table{
                    margin-top: 0;
                }

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

                .eq{
                    width: 270px;
                    text-align: left;
                }

                .info-inag td{
                    padding: 0;
                    font-size: 13px;
                    text-align: left;
                    border: none;
                }

                @media screen and (max-width: 768px){
                    .tablas{
                        flex-wrap: wrap;
                        justify-content: space-around;
                        align-items: flex-start;
                    }
                    
                    td{
                        font-size: 13px;
                    }
                }
            `}</style>
        </table>
    )
}