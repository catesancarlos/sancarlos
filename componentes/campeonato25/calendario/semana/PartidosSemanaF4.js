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
                fecha='15 Feb'
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
                fecha='15 Feb'
                hora='17h20'
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
            { title2 && <p>{title2}</p> }
            <ItemCalendario
                now={fecha?.partido3}
                res={fecha?.res3}
                jugador={fecha?.jugador3}
                pen={fecha?.pen3}
                home={home}
                control={control && control[2]}
                dia='Domingo'
                fecha='16 Feb'
                hora='09h00'
                genero='F'
                equipos={['Estrellitas de María', 'Las Angeles Negros']}
                paralelos={['Confir. Ángeles (F)', '1ro Confir. 3 (F)']}
                logos={['2AF', '13F']}
                colores={{
                    eq1: ['black', 'black', 'white'],
                    eq2: ['black', 'black', 'white']
                }}
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
                fecha='16 Feb'
                hora='10h00'
                genero='F'
                equipos={['Traicioneras como Judas', 'Génesis']}
                paralelos={['2do Confir. 5 (F)', '2do Confir. 3 (F)']}
                logos={['25F', '23F']}
                colores={{
                    eq1: ['black', 'black', 'white'],
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
                fecha='16 Feb'
                hora='11h00'
                genero='M'
                equipos={['Confirmación F.C.', 'GDL']}
                paralelos={['2do Confir. 2 (M)', '2do Confir. 4 (M2)']}
                logos={['22M', '24M']}
                colores={{
                    eq1: ['black', 'black', 'white'],
                    eq2: ['white', 'black', 'black']
                }}
                mas={[, 2]}
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
                fecha='16 Feb'
                hora='12h00'
                genero='F'
                equipos={['Newcastels', 'Las Águilas']}
                paralelos={['1ro Confir. 4 (F)', '1ro Confir. 1 (F)']}
                logos={['14F', '11F']}
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