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
                final
                fase='FINAL - Reconciliación'
                control={control && control[2]}
                now={fecha?.partido3}
                res={fecha?.res3}
                jugador={fecha?.jugador3}
                pen={fecha?.pen3}
                home={home}
                dia='Sábado'
                fecha='17 Mayo'
                hora='10h40'
                genero='F'
                equipos={['Campeonas del Fútbol', 'Siervas de Dios']}
                paralelos={['1 Comun. 2 (F)', '1 Comun. 6 (F)']}
                logos={['12F', '16F']}
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
                fase='FINAL - Reconciliación'
                control={control && control[4]}
                now={fecha?.partido5}
                res={fecha?.res5}
                jugador={fecha?.jugador5}
                pen={fecha?.pen5}
                home={home}
                dia='Sábado'
                fecha='17 Mayo'
                hora='11h20'
                genero='M'
                equipos={['Soldados de Jesús', 'Guerreros de Dios']}
                paralelos={['1 Comun. 3 (M)', '1 Comun. 5 (M)']}
                logos={['13M', '15M']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['white', 'black', 'black']
                }}
                onStatus={onStatus}
                onGoles={onGoles}
                onAgregar={onAgregar}
            />
            <ItemCalendario
                final
                fase='FINAL - Año Bíblico'
                control={control && control[5]}
                now={fecha?.partido6}
                res={fecha?.res6}
                jugador={fecha?.jugador6}
                pen={fecha?.pen6}
                extra={fecha?.extra6}
                home={home}
                dia='Sábado'
                fecha='17 Mayo'
                hora='16h30'
                genero='F'
                equipos={['Los Misioneras', 'Mujeres de Nazareth']}
                paralelos={['Año Bíblico 2 (F)', 'Año Bíblico 4 (F)']}
                logos={['A2F', 'A4F']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['red', 'red', 'white']
                }}
                onStatus={onStatus}
                onGoles={onGoles}
                onAgregar={onAgregar}
            />
            <ItemCalendario
                final
                fase='FINAL - Año Bíblico'
                control={control && control[5]}
                now={fecha?.partido6}
                res={fecha?.res6}
                jugador={fecha?.jugador6}
                pen={fecha?.pen6}
                extra={fecha?.extra6}
                home={home}
                dia='Sábado'
                fecha='17 Mayo'
                hora='17h20'
                genero='M'
                equipos={['Camino a la Tierra Prometida', 'Los Misioneros']}
                paralelos={['Año Bíblico 5 (M)', 'Año Bíblico 2 (M)']}
                logos={['A5M', 'A2M']}
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
                final
                fase='FINAL - Comunión'
                control={control && control[7]}
                now={fecha?.partido8}
                res={fecha?.res8}
                jugador={fecha?.jugador8}
                pen={fecha?.pen8}
                extra={fecha?.extra8}
                home={home}
                dia='Domingo'
                fecha='18 Mayo'
                hora='14h00'
                genero='F'
                equipos={['Pueblo de Israel', 'Elegidas por Jesús']}
                paralelos={['2 Comun. 1 (F)', '2 Comun. 6 (F)']}
                logos={['21F', '26F']}
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
                fase='FINAL - Comunión'
                control={control && control[8]}
                now={fecha?.partido9}
                res={fecha?.res9}
                jugador={fecha?.jugador9}
                pen={fecha?.pen9}
                extra={fecha?.extra9}
                home={home}
                dia='Domingo'
                fecha='18 Mayo'
                hora='14h50'
                genero='M'
                equipos={['Leones de Dios', 'Pueblo de Israel']}
                paralelos={['2 Comun. 3 (M)', '2 Comun. 1 (M)']}
                logos={['23M', '21M']}
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