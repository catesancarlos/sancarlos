import ItemCalendario from '../campeonato25/ItemCalendario'

export default function PartidosSemana({ title, fecha, home, control, onStatus, onGoles }){    

    return (
        <>
            { title && <p>{title}</p> }
            <ItemCalendario
                now={fecha?.partido1}
                res={fecha?.res1}
                pen={fecha?.pen1}
                home={home}
                control={control && control[0]}
                dia='Domingo'
                fecha='26 Ene'
                hora='09h00'
                genero='M'
                equipos={['Fuerza Divina', 'Newcastells']}
                paralelos={['2 Confir. Ángeles (M)', '1ro Confir. 4 (M)']}
                logos={['2AM', '14M']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['white', 'black', 'black']
                }}
                onStatus={onStatus}
                onGoles={onGoles}
            />
            <ItemCalendario
                now={fecha?.partido2}
                res={fecha?.res2}
                pen={fecha?.pen2}
                home={home}
                control={control && control[1]}
                dia='Domingo'
                fecha='26 Ene'
                hora='10h00'
                genero='F'
                equipos={['Las Águilas', 'Estrellitas de María']}
                paralelos={['1ro Confir. 1 (F)', '2 Confir. Ángeles (F)']}
                logos={['11F', '2AF']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['black', 'black', 'white']
                }}
                onStatus={onStatus}
                onGoles={onGoles}
            />
            <ItemCalendario
                now={fecha?.partido3}
                res={fecha?.res3}
                pen={fecha?.pen3}
                home={home}
                control={control && control[2]}
                dia='Domingo'
                fecha='26 Ene'
                hora='11h00'
                genero='F'
                equipos={['Santa Fé', 'Newcastells']}
                paralelos={['1ro Confir. 2 (F)', '1ro Confir. 4 (F)']}
                logos={['12F', '14F']}
                colores={{
                    eq1: ['black', 'black', 'white'],
                    eq2: ['white', 'black', 'black']
                }}
                onStatus={onStatus}
                onGoles={onGoles}
            />
            <ItemCalendario
                now={fecha?.partido4}
                res={fecha?.res4}
                pen={fecha?.pen4}
                home={home}
                control={control && control[3]}
                dia='Domingo'
                fecha='26 Ene'
                hora='12h00'
                genero='M'
                equipos={['Santa Fé', 'Los Angeles Negros']}
                paralelos={['1ro Confir. 2 (M)', '1ro Confir. 3 (M)']}
                logos={['12M', '13M']}
                colores={{
                    eq1: ['black', 'black', 'white'],
                    eq2: ['black', 'black', 'white']
                }}
                onStatus={onStatus}
                onGoles={onGoles}
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