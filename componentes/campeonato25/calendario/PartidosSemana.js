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
            <ItemCalendario
                com
                control={control && control[0]}
                now={fecha?.partido1}
                res={fecha?.res1}
                jugador={fecha?.jugador1}
                pen={fecha?.pen1}
                home={home}
                dia='Sábado'
                fecha='26 Abr'
                hora='11h40'
                genero='F'
                equipos={['Mensajeras de Dios', 'Pastoras']}
                paralelos={['1 Comun. 1 (F)', '1 Comun. 3 (F)']}
                logos={['11F', '13F']}
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
                control={control && control[1]}
                now={fecha?.partido2}
                res={fecha?.res2}
                jugador={fecha?.jugador2}
                pen={fecha?.pen2}
                home={home}
                dia='Sábado'
                fecha='26 Abr'
                hora='12h20'
                genero='M'
                equipos={['Campeones del Fútbol', 'Soldados de Jesús']}
                paralelos={['1 Comun. 2 (M)', '1 Comun. 3 (M)']}
                logos={['12M', '13M']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['white', 'black', 'black']
                }}
                onStatus={onStatus}
                onGoles={onGoles}
                onAgregar={onAgregar}
            />
            { title2 && <p>{title2}</p> }
            <ItemCalendario
                com
                fase='Semifinal - Comunión'
                control={control && control[0]}
                now={fecha?.partido1}
                res={fecha?.res1}
                jugador={fecha?.jugador1}
                pen={fecha?.pen1}
                home={home}
                dia='Domingo'
                fecha='20 Abr'
                hora='09h30'
                genero='M'
                equipos={['Leones de Dios', 'Guerreros contra el mal']}
                paralelos={['2 Comun. 3 (M)', '2 Comun. 4 (M)']}
                logos={['23M', '24M']}
                colores={{
                    eq1: ['black', 'black', 'white'],
                    eq2: ['black', 'red', 'white']
                }}
                onStatus={onStatus}
                onGoles={onGoles}
                onAgregar={onAgregar}
            />
            <ItemCalendario
                fase='Semifinal - Confirmación'
                control={control && control[2]}
                now={fecha?.partido3}
                res={fecha?.res3}
                jugador={fecha?.jugador3}
                pen={fecha?.pen3}
                extra={fecha?.extra3}
                home={home}
                dia='Domingo'
                fecha='20 Abr'
                hora='10h30'
                genero='F'
                equipos={['Confirmación FC', 'Estrellitas de María']}
                paralelos={['2 Confir. 2 (F)', '2 Confir. Ángeles (F)']}
                logos={['22M', '2AM']}
                colores={{
                    eq1: ['black', 'black', 'white'],
                    eq2: ['black', 'black', 'white']
                }}
                onStatus={onStatus}
                onGoles={onGoles}
                onAgregar={onAgregar}
            />
            <ItemCalendario
                com
                fase='Semifinal - Comunión'
                control={control && control[0]}
                now={fecha?.partido1}
                res={fecha?.res1}
                jugador={fecha?.jugador1}
                pen={fecha?.pen1}
                home={home}
                dia='Domingo'
                fecha='20 Abr'
                hora='11h30'
                genero='F'
                equipos={['Pueblo de Israel', 'El Maná']}
                paralelos={['2 Comun. 1 (F)', '2 Comun. 5 (F)']}
                logos={['21F', '25F']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['white', 'black', 'black']
                }}
                onStatus={onStatus}
                onGoles={onGoles}
                onAgregar={onAgregar}
            />
            <ItemCalendario
                fase='Semifinal - Confirmación'
                control={control && control[1]}
                now={fecha?.partido2}
                res={fecha?.res2}
                jugador={fecha?.jugador2}
                pen={fecha?.pen2}
                extra={fecha?.extra2}
                home={home}
                dia='Domingo'
                fecha='20 Abr'
                hora='12h30'
                genero='M'
                equipos={['Los Ángeles Negros', 'Confirmación FC']}
                paralelos={['1 Confir. 3 (M)', '2 Confir. 2 (M)']}
                logos={['13M', '22M']}
                colores={{
                    eq1: ['black', 'black', 'white'],
                    eq2: ['black', 'black', 'white']
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