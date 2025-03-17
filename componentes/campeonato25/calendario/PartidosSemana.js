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
                fecha='22 Mar'
                hora='11h40'
                genero='F'
                equipos={['Ángeles', 'Siervas de Dios']}
                paralelos={['1ro Comun. 5 (F)', '1ro Comun. 6 (F)']}
                logos={['15F', '16F']}
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
                now={fecha?.partido2}
                res={fecha?.res2}
                jugador={fecha?.jugador2}
                pen={fecha?.pen2}
                home={home}
                control={control && control[1]}
                dia='Sábado'
                fecha='22 Mar'
                hora='12h10'
                genero='M'
                equipos={['Guerreros de Dios', 'Siervos de Dios']}
                paralelos={['1ro Comun. 5 (M)', '1ro Comun. 6 (M)']}
                logos={['15M', '16M']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['white', 'black', 'black']
                }}
                onStatus={onStatus}
                onGoles={onGoles}
                onAgregar={onAgregar}
            />
            <ItemCalendario
                now={fecha?.partido3}
                res={fecha?.res3}
                jugador={fecha?.jugador3}
                pen={fecha?.pen3}
                home={home}
                control={control && control[2]}
                dia='Sábado'
                fecha='22 Mar'
                hora='16h40'
                genero='M'
                equipos={['Los Hermanos de Jesus', 'Equipo de Dios']}
                paralelos={['Año Bíblico 1 (M)', 'Año Bíblico 4 (M)']}
                logos={['A1M', 'A4M']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['red', 'red', 'white']
                }}
                mas={[, 1]}
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
                dia='Sábado'
                fecha='22 Mar'
                hora='17h20'
                genero='M'
                equipos={['Los Misioneros', 'Equipo Glorioso']}
                paralelos={['Año Bíblico 2 (M)', 'Año Bíblico 4 (M)']}
                logos={['A2M', 'A4M']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['blue', 'blue', 'white']
                }}
                mas={[, 2]}
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