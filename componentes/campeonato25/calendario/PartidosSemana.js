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
                now={fecha?.partido1}
                res={fecha?.res1}
                jugador={fecha?.jugador1}
                pen={fecha?.pen1}
                home={home}
                control={control && control[0]}
                dia='Sábado'
                fecha='05 Abr'
                hora='12h00'
                genero='M'
                equipos={['Mensajeros de Dios', 'Soldados de Jesús']}
                paralelos={['1 Comun. 1 (M)', '1 Comun. 3 (M)']}
                logos={['11M', '13M']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['white', 'black', 'black']
                }}
                onStatus={onStatus}
                onGoles={onGoles}
                onAgregar={onAgregar}
            />
            <ItemCalendario
                fase='Repechaje'
                now={fecha?.partido2}
                res={fecha?.res2}
                jugador={fecha?.jugador2}
                pen={fecha?.pen2}
                home={home}
                control={control && control[1]}
                dia='Sábado'
                fecha='05 Abr'
                hora='17h00'
                genero='M'
                equipos={['Peruanitos de Dios', 'Los Pastores']}
                paralelos={['2 Molinopamba (M)', '2 Confir. 3 (M)']}
                logos={['2MM', '23M']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['blue', 'blue', 'white']
                }}
                onStatus={onStatus}
                onGoles={onGoles}
                onAgregar={onAgregar}
            />
            { title2 && <p>{title2}</p> }
            <ItemCalendario
                fase='Cuartos de final'
                now={fecha?.partido3}
                res={fecha?.res3}
                jugador={fecha?.jugador3}
                pen={fecha?.pen3}
                extra={fecha?.extra3}
                home={home}
                control={control && control[2]}
                dia='Domingo'
                fecha='06 Abr'
                hora='09h40'
                genero='F'
                equipos={['Confirmación FC', 'Las Águilas']}
                paralelos={['2do Confir. 2 (F)', '1ro Confir. 1 (F)']}
                logos={['22F', '11F']}
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
                now={fecha?.partido4}
                res={fecha?.res4}
                jugador={fecha?.jugador4}
                pen={fecha?.pen4}
                home={home}
                control={control && control[3]}
                dia='Domingo'
                fecha='06 Abr'
                hora='10h20'
                genero='M'
                equipos={['Pueblo de Israel', 'Los leones de Dios']}
                paralelos={['2 Comun. 1 (M)', '2 Comun. 3 (M)']}
                logos={['21M', '23M']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['black', 'black', 'white']
                }}
                onStatus={onStatus}
                onGoles={onGoles}
                onAgregar={onAgregar}
            />
            <ItemCalendario
                com
                now={fecha?.partido5}
                res={fecha?.res5}
                jugador={fecha?.jugador5}
                pen={fecha?.pen5}
                home={home}
                control={control && control[4]}
                dia='Domingo'
                fecha='06 Abr'
                hora='11h00'
                genero='F'
                equipos={['Pueblo de Israel', 'Las leonas de Dios']}
                paralelos={['2 Comun. 1 (F)', '2 Comun. 3 (F)']}
                logos={['21F', '23F']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['black', 'black', 'white']
                }}
                onStatus={onStatus}
                onGoles={onGoles}
                onAgregar={onAgregar}
            />
            <ItemCalendario
                com
                now={fecha?.partido6}
                res={fecha?.res6}
                jugador={fecha?.jugador6}
                pen={fecha?.pen6}
                home={home}
                control={control && control[5]}
                dia='Domingo'
                fecha='06 Abr'
                hora='11h40'
                genero='F'
                equipos={['Hijas de Maria', 'Elegidas por Jesús']}
                paralelos={['2 Comun. 4 (F)', '2 Comun. 6 (F)']}
                logos={['24F', '26F']}
                colores={{
                    eq1: ['black', 'red', 'white'],
                    eq2: ['white', 'black', 'black']
                }}
                onStatus={onStatus}
                onGoles={onGoles}
                onAgregar={onAgregar}
            />
            <ItemCalendario
                com
                now={fecha?.partido7}
                res={fecha?.res7}
                jugador={fecha?.jugador7}
                pen={fecha?.pen7}
                home={home}
                control={control && control[6]}
                dia='Domingo'
                fecha='06 Abr'
                hora='12h20'
                genero='M'
                equipos={['Guerreros contra el mal', 'Los Instrumentos de Dios']}
                paralelos={['2 Comun. 4 (M)', '2 Comun. 6 (M)']}
                logos={['24M', '26M']}
                colores={{
                    eq1: ['black', 'red', 'white'],
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