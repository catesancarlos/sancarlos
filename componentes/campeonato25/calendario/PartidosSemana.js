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
            { title2 && <p>{title2}</p> }
            <ItemCalendario
                com
                control={control && control[8]}
                now={fecha?.partido9}
                res={fecha?.res9}
                jugador={fecha?.jugador9}
                pen={fecha?.pen9}
                home={home}
                dia='Domingo'
                fecha='20 Abr'
                hora='10h30'
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
                fecha='20 Abr'
                hora='11h00'
                genero='M'
                equipos={['Los Águilas', 'Los Ángeles Negros']}
                paralelos={['1 Confir. 1 (M)', '1 Confir. 3 (M)']}
                logos={['11M', '13M']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['black', 'black', 'white']
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
                fecha='20 Abr'
                hora='12h00'
                genero='M'
                equipos={['Los Pastores', 'GDL']}
                paralelos={['2 Confir. 3 (M)', '2 Confir. 4 (M)']}
                logos={['23M', '24M']}
                colores={{
                    eq1: ['blue', 'blue', 'white'],
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