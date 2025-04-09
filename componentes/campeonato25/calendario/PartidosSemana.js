import ItemCalendario from './ItemCalendario'

export default function PartidosSemana({
    title1,
    title2,
    fecha,
    fec,
    home,
    control,
    onStatus,
    onGoles,
    onAgregar
}){    

    return (
        <>
            { title1 && <p>{title1}</p> }
            { fec && <i>{fec}</i>}
            <ItemCalendario
                com
                control={control && control[0]}
                now={fecha?.partido1}
                res={fecha?.res1}
                jugador={fecha?.jugador1}
                pen={fecha?.pen1}
                home={home}
                dia='Sábado'
                fecha='12 Abr'
                hora='09h00'
                genero='F'
                equipos={['Las Reinas', 'Niñas guerreras de Dios']}
                paralelos={['Iniciación. 3 (F)', 'Iniciación. 1 (F)']}
                logos={['I3F', 'I1F']}
                colores={{
                    eq1: ['fuchsia', 'fuchsia', 'white'],
                    eq2: ['white', 'black', 'black']
                }}
                onStatus={onStatus}
                onGoles={onGoles}
                onAgregar={onAgregar}
            />
            <ItemCalendario
                com
                control={control && control[1]}
                now={fecha?.partido2}
                res={fecha?.res2}
                jugador={fecha?.jugador2}
                pen={fecha?.pen2}
                home={home}
                dia='Sábado'
                fecha='12 Abr'
                hora='11h40'
                genero='F'
                equipos={['Las Milagrosas', 'Siervas de Dios']}
                paralelos={['1 Comun. 4 (F)', '1 Comun. 6 (F)']}
                logos={['14F', '16F']}
                colores={{
                    eq1: ['black', 'black', 'white'],
                    eq2: ['white', 'black', 'black']
                }}
                onStatus={onStatus}
                onGoles={onGoles}
                onAgregar={onAgregar}
            />
            <ItemCalendario
                com
                control={control && control[2]}
                now={fecha?.partido3}
                res={fecha?.res3}
                jugador={fecha?.jugador3}
                pen={fecha?.pen3}
                home={home}
                dia='Sábado'
                fecha='12 Abr'
                hora='12h20'
                genero='M'
                equipos={['Ángeles del Cate', 'Siervos de Dios']}
                paralelos={['1 Comun. 4 (M)', '1 Comun. 6 (M)']}
                logos={['14M', '16M']}
                colores={{
                    eq1: ['black', 'black', 'white'],
                    eq2: ['white', 'black', 'black']
                }}
                onStatus={onStatus}
                onGoles={onGoles}
                onAgregar={onAgregar}
            />
            { title2 && <p>{title2}</p> }
            <ItemCalendario
                fase='Cuartos de final Confirmación'
                control={control && control[3]}
                now={fecha?.partido4}
                res={fecha?.res4}
                jugador={fecha?.jugador4}
                pen={fecha?.pen4}
                extra={fecha?.extra4}
                home={home}
                dia='Domingo'
                fecha='13 Abr'
                hora='09h00'
                genero='M'
                equipos={['Equipo Sorteado', 'Equipo Sorteado']}
                paralelos={['Sorteo 12 abr 2PM', 'Sorteo 12 abr 2PM']}
                logos={['', '']}
                colores={{
                    eq1: ['gray', 'gray', 'white'],
                    eq2: ['gray', 'gray', 'white']
                }}
                onStatus={onStatus}
                onGoles={onGoles}
                onAgregar={onAgregar}
            />
            <ItemCalendario
                fase='Cuartos de final Confirmación'
                control={control && control[4]}
                now={fecha?.partido5}
                res={fecha?.res5}
                jugador={fecha?.jugador5}
                pen={fecha?.pen5}
                extra={fecha?.extra5}
                home={home}
                dia='Domingo'
                fecha='13 Abr'
                hora='09h40'
                genero='M'
                equipos={['Equipo Sorteado', 'Equipo Sorteado']}
                paralelos={['Sorteo 12 abr 2PM', 'Sorteo 12 abr 2PM']}
                logos={['', '']}
                colores={{
                    eq1: ['gray', 'gray', 'white'],
                    eq2: ['gray', 'gray', 'white']
                }}
                onStatus={onStatus}
                onGoles={onGoles}
                onAgregar={onAgregar}
            />
            <ItemCalendario
                com
                control={control && control[5]}
                now={fecha?.partido6}
                res={fecha?.res6}
                jugador={fecha?.jugador6}
                pen={fecha?.pen6}
                home={home}
                dia='Domingo'
                fecha='13 Abr'
                hora='10h20'
                genero='M'
                equipos={['Los Historicos', 'Los leones de Dios']}
                paralelos={['2 Comun. 2 (M)', '2 Comun. 3 (M)']}
                logos={['22M', '23M']}
                colores={{
                    eq1: ['blue', 'blue', 'white'],
                    eq2: ['black', 'black', 'white']
                }}
                onStatus={onStatus}
                onGoles={onGoles}
                onAgregar={onAgregar}
            />
            <ItemCalendario
                com
                control={control && control[6]}
                now={fecha?.partido7}
                res={fecha?.res7}
                jugador={fecha?.jugador7}
                pen={fecha?.pen7}
                home={home}
                dia='Domingo'
                fecha='13 Abr'
                hora='11h00'
                genero='F'
                equipos={['Las Historicas', 'Las leonas de Dios']}
                paralelos={['2 Comun. 2 (F)', '2 Comun. 3 (F)']}
                logos={['22F', '23F']}
                colores={{
                    eq1: ['blue', 'blue', 'white'],
                    eq2: ['black', 'black', 'white']
                }}
                onStatus={onStatus}
                onGoles={onGoles}
                onAgregar={onAgregar}
            />
            <ItemCalendario
                com
                control={control && control[7]}
                now={fecha?.partido8}
                res={fecha?.res8}
                jugador={fecha?.jugador8}
                pen={fecha?.pen8}
                home={home}
                dia='Domingo'
                fecha='13 Abr'
                hora='11h40'
                genero='F'
                equipos={['El Maná', 'Elegidas por Jesús']}
                paralelos={['2 Comun. 5 (F)', '2 Comun. 6 (F)']}
                logos={['25F', '26F']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['white', 'black', 'black']
                }}
                onStatus={onStatus}
                onGoles={onGoles}
                onAgregar={onAgregar}
            />
            <ItemCalendario
                com
                control={control && control[8]}
                now={fecha?.partido8}
                res={fecha?.res8}
                jugador={fecha?.jugador8}
                pen={fecha?.pen8}
                home={home}
                dia='Domingo'
                fecha='13 Abr'
                hora='12h20'
                genero='M'
                equipos={['El Maná', 'Los Instrumentos de Dios']}
                paralelos={['2 Comun. 5 (M)', '2 Comun. 6 (M)']}
                logos={['25M', '26M']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['white', 'black', 'black']
                }}
                onStatus={onStatus}
                onGoles={onGoles}
                onAgregar={onAgregar}
            />
            
            <style jsx>{`
                p{
                    color: #245590;
                    width: 100%;
                    font-size: 20px;
                    font-weight: bold;
                    margin-bottom: 12px;
                }

                @media screen and (max-width: 768px){
                    p{
                        font-size: 18px;
                        font-size: 400;
                    }
                }
            `}</style>
        </> 
    )
}