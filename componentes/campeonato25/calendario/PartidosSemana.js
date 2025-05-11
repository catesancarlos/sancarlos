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
                fase='Semifinal - Comunión'
                control={control && control[6]}
                now={fecha?.partido7}
                res={fecha?.res7}
                jugador={fecha?.jugador7}
                pen={fecha?.pen7}
                extra={fecha?.extra7}
                home={home}
                dia='Domingo'
                fecha='11 Mayo'
                hora='09h00'
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
                com
                fase='Semifinal - Comunión'
                control={control && control[7]}
                now={fecha?.partido8}
                res={fecha?.res8}
                jugador={fecha?.jugador8}
                pen={fecha?.pen8}
                extra={fecha?.extra8}
                home={home}
                dia='Domingo'
                fecha='11 Mayo'
                hora='09h40'
                genero='F'
                equipos={['Elegidas por Jesús', 'Las Leonas de Dios']}
                paralelos={['2 Comun. 6 (F)', '2 Comun. 3 (F)']}
                logos={['22F', '23F']}
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
                fase='Semifinal - Comunión'
                control={control && control[8]}
                now={fecha?.partido9}
                res={fecha?.res9}
                jugador={fecha?.jugador9}
                pen={fecha?.pen9}
                extra={fecha?.extra9}
                home={home}
                dia='Domingo'
                fecha='11 Mayo'
                hora='10h20'
                genero='M'
                equipos={['Instrumentos de Dios', 'Pueblo de Israel']}
                paralelos={['2 Comun. 6 (M)', '2 Comun. 1 (M)']}
                logos={['26M', '21M']}
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
                control={control && control[9]}
                now={fecha?.partido10}
                res={fecha?.res10}
                jugador={fecha?.jugador10}
                pen={fecha?.pen10}
                extra={fecha?.extra10}
                home={home}
                dia='Domingo'
                fecha='11 Mayo'
                hora='11h00'
                genero='F'
                equipos={['Las Galatas 1, 10', 'Génesis']}
                paralelos={['2 Confir. 1 (F)', '2 Confir. 3 (F)']}
                logos={['21M', '23M']}
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
                control={control && control[10]}
                now={fecha?.partido11}
                res={fecha?.res11}
                jugador={fecha?.jugador11}
                pen={fecha?.pen11}
                extra={fecha?.extra11}
                home={home}
                dia='Domingo'
                fecha='11 Mayo'
                hora='12h00'
                genero='M'
                equipos={['Fuerza Divina', 'GDL']}
                paralelos={['2 Confir. Ángeles (M)', '2 Confir. 4 (M)']}
                logos={['2AM', '24M']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['white', 'black', 'black']
                }}
                onStatus={onStatus}
                onGoles={onGoles}
                onAgregar={onAgregar}
            />
            { title1 && <p>{title1}</p> }
            <ItemCalendario
                com
                final
                fase='FINAL - Iniciación'
                control={control && control[0]}
                now={fecha?.partido1}
                res={fecha?.res1}
                jugador={fecha?.jugador1}
                pen={fecha?.pen1}
                home={home}
                dia='Sábado'
                fecha='10 Mayo'
                hora='09h00'
                genero='F'
                equipos={['Niñas guerreras de Dios', 'Elegidas de Dios']}
                paralelos={['Iniciación 1 (F)', 'Iniciación 2 (F)']}
                logos={['I1F', 'I2F']}
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
                final
                fase='FINAL - Iniciación'
                control={control && control[1]}
                now={fecha?.partido2}
                res={fecha?.res2}
                jugador={fecha?.jugador2}
                pen={fecha?.pen2}
                home={home}
                dia='Sábado'
                fecha='10 Mayo'
                hora='09h30'
                genero='M'
                equipos={['Niños guerreros de Dios', 'Elegidos de Dios']}
                paralelos={['Iniciación 1 (M)', 'Iniciación 2 (M)']}
                logos={['I1M', 'I2M']}
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
                fase='Semifinal - Reconciliación'
                control={control && control[2]}
                now={fecha?.partido3}
                res={fecha?.res3}
                jugador={fecha?.jugador3}
                pen={fecha?.pen3}
                home={home}
                dia='Sábado'
                fecha='10 Mayo'
                hora='10h40'
                genero='F'
                equipos={['Siervas de Dios', 'Ángeles']}
                paralelos={['1 Comun. 6 (F)', '1 Comun. 5 (F)']}
                logos={['16F', '15F']}
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
                fase='Semifinal - Reconciliación'
                control={control && control[3]}
                now={fecha?.partido4}
                res={fecha?.res4}
                jugador={fecha?.jugador4}
                pen={fecha?.pen4}
                home={home}
                dia='Sábado'
                fecha='10 Mayo'
                hora='11h40'
                genero='M'
                equipos={['Guerreros de Dios', 'Campeones del Fútbol']}
                paralelos={['1 Comun. 5 (M)', '1 Comun. 2 (M)']}
                logos={['15M', '12M']}
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
                fase='Semifinal - Reconciliación'
                control={control && control[4]}
                now={fecha?.partido5}
                res={fecha?.res5}
                jugador={fecha?.jugador5}
                pen={fecha?.pen5}
                home={home}
                dia='Sábado'
                fecha='10 Mayo'
                hora='12h20'
                genero='M'
                equipos={['Soldados de Jesús', 'Ángeles del Cate']}
                paralelos={['1 Comun. 3 (M)', '1 Comun. 4 (M)']}
                logos={['13M', '14M']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['black', 'black', 'white']
                }}
                onStatus={onStatus}
                onGoles={onGoles}
                onAgregar={onAgregar}
            />
            <ItemCalendario
                fase='Semifinal - Año Bíblico'
                control={control && control[5]}
                now={fecha?.partido6}
                res={fecha?.res6}
                jugador={fecha?.jugador6}
                pen={fecha?.pen6}
                extra={fecha?.extra6}
                home={home}
                dia='Sábado'
                fecha='10 Mayo'
                hora='17h00'
                genero='M'
                equipos={['Los Angelicales', 'Los Misioneros']}
                paralelos={['AB 1C Molinopamba (M)', 'Año Bíblico 2 (M)']}
                logos={['AMM', 'A2M']}
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