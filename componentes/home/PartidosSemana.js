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
                dia='Sábado'
                fecha='01 Feb'
                hora='17h00'
                genero='M'
                equipos={['Predicadores', 'Traicioneros como Judas']}
                paralelos={['2do Confir. 4 (M1)', '2do Confir. 5 (M)']}
                logos={['24M', '25M']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['black', 'black', 'white']
                }}
                mas={[1, ]}
                onStatus={onStatus}
                onGoles={onGoles}
            />
            <ItemCalendario
                now={fecha?.partido2}
                res={fecha?.res2}
                pen={fecha?.pen2}
                home={home}
                control={control && control[0]}
                dia='Domingo'
                fecha='02 Feb'
                hora='09h00'
                genero='M'
                equipos={['Los Águilas', 'Juntos con Cristo FC']}
                paralelos={['1ro Confir. 1 (M)', '1 Confir. AB Ángeles (M)']}
                logos={['11M', '1AM']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['white', 'black', 'black']
                }}
                onStatus={onStatus}
                onGoles={onGoles}
            />
            <ItemCalendario
                now={fecha?.partido3}
                res={fecha?.res3}
                pen={fecha?.pen3}
                home={home}
                control={control && control[0]}
                dia='Domingo'
                fecha='02 Feb'
                hora='10h00'
                genero='M'
                equipos={['Los Ángeles Bíblicos', 'Los Misioneros']}
                paralelos={['Año Bíblico 3 (M)', 'Año Bíblico 2 (M)']}
                logos={['A3M', 'A2M']}
                colores={{
                    eq1: ['white', 'black', 'black'],
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
                control={control && control[0]}
                dia='Domingo'
                fecha='02 Feb'
                hora='11h00'
                genero='M'
                equipos={['Equipo Glorioso', 'Los Hermanos de Jesus']}
                paralelos={['Año Bíblico 4 (M2)', 'Año Bíblico 1 (M)']}
                logos={['A4M', 'A1M']}
                colores={{
                    eq1: ['blue', 'blue', 'white'],
                    eq2: ['white', 'black', 'black']
                }}
                mas={[2, ]}
                onStatus={onStatus}
                onGoles={onGoles}
            />
            <ItemCalendario
                now={fecha?.partido5}
                res={fecha?.res5}
                pen={fecha?.pen5}
                home={home}
                control={control && control[0]}
                dia='Domingo'
                fecha='02 Feb'
                hora='12h00'
                genero='M'
                equipos={['Equipo de Dios', 'Camino a la Tierra Prometída']}
                paralelos={['Año Bíblico 4 (M1)', 'Año Bíblico 5 (M)']}
                logos={['A4M', 'A5M']}
                colores={{
                    eq1: ['red', 'red', 'white'],
                    eq2: ['white', 'black', 'black']
                }}
                mas={[1, ]}
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