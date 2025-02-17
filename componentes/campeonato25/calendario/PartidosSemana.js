import ItemCalendario from './ItemCalendario'

export default function PartidosSemana({
    title1,
    title2,
    fecha,
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
                now={fecha?.partido1}
                res={fecha?.res1}
                jugador={fecha?.jugador1}
                pen={fecha?.pen1}
                home={home}
                control={control && control[0]}
                dia='Sábado'
                fecha='22 Feb'
                hora='16h40'
                genero='F'
                equipos={['Club GNU', 'Las Gálatas 1, 10']}
                paralelos={['2do Confir. 4 (F)', '2do Confir. 1 (F)']}
                logos={['24F', '21F']}
                colores={{
                    eq1: ['black', 'black', 'white'],
                    eq2: ['white', 'black', 'black']
                }}
                onStatus={onStatus}
                onGoles={onGoles}
                onAgregar={onAgregar}
            />
            <ItemCalendario
                now={fecha?.partido2}
                res={fecha?.res2}
                jugador={fecha?.jugador2}
                pen={fecha?.pen2}
                home={home}
                control={control && control[1]}
                dia='Sábado'
                fecha='22 Feb'
                hora='17h20'
                genero='M'
                equipos={['Equipo Glorioso', 'Camino a la Tierra Prometída']}
                paralelos={['Año Biblico 4 (M2)', 'Año Biblico 5 (M)']}
                logos={['A4M', 'A5M']}
                colores={{
                    eq1: ['blue', 'blue', 'white'],
                    eq2: ['white', 'black', 'black']
                }}
                mas={[2, ]}
                onStatus={onStatus}
                onGoles={onGoles}
                onAgregar={onAgregar}
            />
            { title2 && <p>{title2}</p> }
            <ItemCalendario
                now={fecha?.partido3}
                res={fecha?.res3}
                jugador={fecha?.jugador3}
                pen={fecha?.pen3}
                home={home}
                control={control && control[2]}
                dia='Domingo'
                fecha='23 Feb'
                hora='08h30'
                genero='M'
                equipos={['Predicadores', 'Los Águilas']}
                paralelos={['2do Confir. 4 (M1)', '1ro Confir. 1 (M)']}
                logos={['24M', '11M']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['white', 'black', 'black']
                }}
                mas={[1, ]}
                onStatus={onStatus}
                onGoles={onGoles}
                onAgregar={onAgregar}
            />
            <ItemCalendario
                now={fecha?.partido4}
                res={fecha?.res4}
                jugador={fecha?.jugador4}
                pen={fecha?.pen4}
                home={home}
                control={control && control[3]}
                dia='Domingo'
                fecha='23 Feb'
                hora='09h30'
                genero='M'
                equipos={['Los Misioneros', 'Los Hermanos de Jesus']}
                paralelos={['Año Bíblico 2 (M)', 'Año Bíblico 1 (M)']}
                logos={['A2M', 'A1M']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['white', 'black', 'black']
                }}
                onStatus={onStatus}
                onGoles={onGoles}
                onAgregar={onAgregar}
            />
            <ItemCalendario
                now={fecha?.partido5}
                res={fecha?.res5}
                jugador={fecha?.jugador5}
                pen={fecha?.pen5}
                home={home}
                control={control && control[4]}
                dia='Domingo'
                fecha='23 Feb'
                hora='10h30'
                genero='M'
                equipos={['Los Ángeles Bíblicos', 'Equipo de Dios']}
                paralelos={['Año Bíblico 3 (M)', 'Año Bíblico 4 (M1)']}
                logos={['A3M', 'A4M']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['red', 'red', 'white']
                }}
                mas={[1, ]}
                onStatus={onStatus}
                onGoles={onGoles}
                onAgregar={onAgregar}
            />
            <ItemCalendario
                now={fecha?.partido6}
                res={fecha?.res6}
                jugador={fecha?.jugador6}
                pen={fecha?.pen6}
                home={home}
                control={control && control[5]}
                dia='Domingo'
                fecha='23 Feb'
                hora='11h30'
                genero='M'
                equipos={['Los Pastores', 'Santos y Religiosos F.C.']}
                paralelos={['2do Confir. 3 (M)', '2do Confir. 1 (M)']}
                logos={['23M', '21M']}
                colores={{
                    eq1: ['blue', 'blue', 'white'],
                    eq2: ['white', 'black', 'black']
                }}
                onStatus={onStatus}
                onGoles={onGoles}
                onAgregar={onAgregar}
            />
            <ItemCalendario
                now={fecha?.partido7}
                res={fecha?.res7}
                jugador={fecha?.jugador7}
                pen={fecha?.pen7}
                home={home}
                control={control && control[6]}
                dia='Domingo'
                fecha='23 Feb'
                hora='12h30'
                genero='M'
                equipos={['Los Angeles Negros', 'Fuerza Divina']}
                paralelos={['1ro Confir. 3 (M)', 'Confir. Ángeles (M)']}
                logos={['13M', '2AM']}
                colores={{
                    eq1: ['black', 'black', 'white'],
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