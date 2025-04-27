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
                equipos={['Mensajeras de Dios', 'Ángeles']}
                paralelos={['1 Comun. 1 (F)', '1 Comun. 5 (F)']}
                logos={['11F', '15F']}
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
                fase='Para semifinal'
                control={control && control[2]}
                now={fecha?.partido3}
                res={fecha?.res3}
                jugador={fecha?.jugador3}
                pen={fecha?.pen3}
                extra={fecha?.extra3}
                home={home}
                dia='Domingo'
                fecha='27 Abr'
                hora='09h30'
                genero='M'
                equipos={['Juntos con Cristo', 'Los Angelicales']}
                paralelos={['AB 1C Ángeles (M)', 'AB 1C Molinopamba (M)']}
                logos={['AAM', 'AMM']}
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
                fase='Semifinal - Comunión'
                control={control && control[3]}
                now={fecha?.partido4}
                res={fecha?.res4}
                jugador={fecha?.jugador4}
                pen={fecha?.pen4}
                extra={fecha?.extra4}
                home={home}
                dia='Domingo'
                fecha='27 Abr'
                hora='10h10'
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
                fase='Para semifinal'
                control={control && control[4]}
                now={fecha?.partido5}
                res={fecha?.res5}
                jugador={fecha?.jugador5}
                pen={fecha?.pen5}
                extra={fecha?.extra5}
                home={home}
                dia='Domingo'
                fecha='27 Abr'
                hora='10h50'
                genero='M'
                equipos={['Los Misioneros', 'Equipo de Dios']}
                paralelos={['Año Bíblico 2 (M)', 'Año Bíblico 4 (M)']}
                logos={['A2M', 'A4M']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['red', 'red', 'white']
                }}
                onStatus={onStatus}
                onGoles={onGoles}
                onAgregar={onAgregar}
            />
            <ItemCalendario
                fase='Semifinal - Confirmación'
                control={control && control[5]}
                now={fecha?.partido6}
                res={fecha?.res6}
                jugador={fecha?.jugador6}
                pen={fecha?.pen6}
                extra={fecha?.extra6}
                home={home}
                dia='Domingo'
                fecha='27 Abr'
                hora='11h30'
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
                control={control && control[6]}
                now={fecha?.partido7}
                res={fecha?.res7}
                jugador={fecha?.jugador7}
                pen={fecha?.pen7}
                extra={fecha?.extra7}
                home={home}
                dia='Domingo'
                fecha='27 Abr'
                hora='12h20'
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
                control={control && control[7]}
                now={fecha?.partido8}
                res={fecha?.res8}
                jugador={fecha?.jugador8}
                pen={fecha?.pen8}
                extra={fecha?.extra8}
                home={home}
                dia='Domingo'
                fecha='27 Abr'
                hora='13h00'
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