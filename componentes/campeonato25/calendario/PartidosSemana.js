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
                fecha='29 Mar'
                hora='08h50'
                genero='M'
                equipos={['Niños gerrero de Dios', 'Los Reyes']}
                paralelos={['Iniciación 1 (M)', 'Iniciación 3 (M)']}
                logos={['I1M', 'I3M']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['blue', 'blue', 'white']
                }}
                onStatus={onStatus}
                onGoles={onGoles}
                onAgregar={onAgregar}
            />
            <ItemCalendario
                com
                now={fecha?.partido2}
                res={fecha?.res2}
                jugador={fecha?.jugador2}
                pen={fecha?.pen2}
                home={home}
                control={control && control[1]}
                dia='Sábado'
                fecha='29 Mar'
                hora='10h40'
                genero='F'
                equipos={['Elegidas de Dios', 'Las Reinas']}
                paralelos={['Iniciación 2 (F)', 'Iniciación 3 (F)']}
                logos={['I2F', 'I3F']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['fuchsia', 'fuchsia', 'white']
                }}
                onStatus={onStatus}
                onGoles={onGoles}
                onAgregar={onAgregar}
            />
            <ItemCalendario
                com
                now={fecha?.partido3}
                res={fecha?.res3}
                jugador={fecha?.jugador3}
                pen={fecha?.pen3}
                home={home}
                control={control && control[2]}
                dia='Sábado'
                fecha='29 Mar'
                hora='11h40'
                genero='F'
                equipos={['Las Milagrosas', 'Ángeles']}
                paralelos={['1 Comun. 4 (F)', '1 Comun. 5 (F)']}
                logos={['14F', '15F']}
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
                dia='Sábado'
                fecha='29 Mar'
                hora='12h10'
                genero='M'
                equipos={['Ángeles del Cate', 'Guerreros de Dios']}
                paralelos={['1 Comun. 4 (M)', '1 Comun. 5 (M)']}
                logos={['14M', '15M']}
                colores={{
                    eq1: ['blue', 'blue', 'white'],
                    eq2: ['white', 'black', 'black']
                }}
                onStatus={onStatus}
                onGoles={onGoles}
                onAgregar={onAgregar}
            />
            {/* <ItemCalendario
                fase='Repechaje'
                now={fecha?.partido6}
                res={fecha?.res6}
                jugador={fecha?.jugador6}
                pen={fecha?.pen6}
                home={home}
                control={control && control[5]}
                dia='Sábado'
                fecha='29 Mar'
                hora='17h20'
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
            /> */}
            { title2 && <p>{title2}</p> }
            <ItemCalendario
                fase='Repechaje'
                now={fecha?.partido5}
                res={fecha?.res5}
                jugador={fecha?.jugador5}
                pen={fecha?.pen5}
                home={home}
                control={control && control[4]}
                dia='Domingo'
                fecha='30 Mar'
                hora='08h50'
                genero='M'
                equipos={['Los Ángeles Negros', 'Los Angelicales']}
                paralelos={['1 Confir. 3 (M)', '1 Molinopamba (M)']}
                logos={['13M', '1MM']}
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
                now={fecha?.partido6}
                res={fecha?.res6}
                jugador={fecha?.jugador6}
                pen={fecha?.pen6}
                home={home}
                control={control && control[5]}
                dia='Domingo'
                fecha='30 Mar'
                hora='09h30'
                genero='M'
                equipos={['Pueblo de Israel', 'Los Historicos']}
                paralelos={['2 Comun. 1 (M)', '2 Comun. 2 (M)']}
                logos={['21M', '22M']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['blue', 'blue', 'white']
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
                fecha='30 Mar'
                hora='10h10'
                genero='F'
                equipos={['Pueblo de Israel', 'Las Historicas']}
                paralelos={['2 Comun. 1 (F)', '2 Comun. 2 (F)']}
                logos={['21F', '22F']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['blue', 'blue', 'white']
                }}
                onStatus={onStatus}
                onGoles={onGoles}
                onAgregar={onAgregar}
            />
            <ItemCalendario
                com
                now={fecha?.partido8}
                res={fecha?.res8}
                jugador={fecha?.jugador8}
                pen={fecha?.pen8}
                home={home}
                control={control && control[7]}
                dia='Domingo'
                fecha='30 Mar'
                hora='10h50'
                genero='F'
                equipos={['Hijas de Maria', 'El Maná']}
                paralelos={['2 Comun. 4 (F)', '2 Comun. 5 (F)']}
                logos={['24F', '25F']}
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
                now={fecha?.partido9}
                res={fecha?.res9}
                jugador={fecha?.jugador9}
                pen={fecha?.pen9}
                home={home}
                control={control && control[8]}
                dia='Domingo'
                fecha='30 Mar'
                hora='11h30'
                genero='M'
                equipos={['Guerreros contra el mal', 'El Maná']}
                paralelos={['2 Comun. 4 (M)', '2 Comun. 5 (M)']}
                logos={['24M', '25M']}
                colores={{
                    eq1: ['black', 'red', 'white'],
                    eq2: ['white', 'black', 'black']
                }}
                onStatus={onStatus}
                onGoles={onGoles}
                onAgregar={onAgregar}
            />
            <ItemCalendario
                fase='Cuartos de final'
                now={fecha?.partido10}
                res={fecha?.res10}
                jugador={fecha?.jugador10}
                pen={fecha?.pen10}
                extra={fecha?.extra10}
                home={home}
                control={control && control[9]}
                dia='Domingo'
                fecha='30 Mar'
                hora='12h10'
                genero='F'
                equipos={['Newcastells', 'Génesis']}
                paralelos={['1ro Confir. 4 (F)', '2do Confir. 3 (F)']}
                logos={['14F', '23F']}
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
                now={fecha?.partido11}
                res={fecha?.res11}
                jugador={fecha?.jugador11}
                pen={fecha?.pen11}
                home={home}
                control={control && control[10]}
                dia='Sábado'
                fecha='29 Mar'
                hora='16h40'
                genero='M'
                equipos={['GDL', 'Traicioneros como Judas']}
                paralelos={['2 Confir. 4 (M)', '2 Confir. 5 (M)']}
                logos={['24M', '25M']}
                colores={{
                    eq1: ['white', 'black', 'black'],
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