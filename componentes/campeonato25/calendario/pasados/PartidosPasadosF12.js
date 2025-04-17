import PartidoSoloResultado from '../PartidoSoloResultado'

export default function PartidosPasadosF12({ title, fec, fecha, home }){   

    return (
        <>
            { title && <p>{title}</p> }
            { fec && <i>{fec}</i>}
            <PartidoSoloResultado
                com
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
            />
            <PartidoSoloResultado
                com
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
            />
            <PartidoSoloResultado
                com
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
            />
            {/* <PartidoSoloResultado
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
            <PartidoSoloResultado
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
            /> */}
            <PartidoSoloResultado
                com
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
            />
            <PartidoSoloResultado
                com
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
            />
            <PartidoSoloResultado
                com
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
            />
            <PartidoSoloResultado
                com
                res={fecha?.res9}
                jugador={fecha?.jugador9}
                pen={fecha?.pen9}
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
            />
            
            <style jsx>{`
                p{
                    margin-top: ${home ? '30px' : '5px'};
                    color: #000000;
                    width: 100%;
                    font-size: 20px;
                    font-weight: bold;
                    margin-bottom: ${fec ? '2px' : '12px'};
                }

                i{
                    color: #000000;
                    width: 100%;
                    font-size: 17px;
                    font-weight: 200;
                    margin-bottom: 12px;
                }

                @media screen and (max-width: 768px){
                    p{
                        margin-top: ${home ? '25px' : '0'};
                        font-size: 16px;
                        font-size: 400;
                    }

                    i{
                        font-size: 15px;
                    }
                }
            `}</style>
        </> 
    )
}