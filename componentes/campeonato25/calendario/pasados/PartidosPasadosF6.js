import PartidoSoloResultado from '../PartidoSoloResultado'

export default function PartidosPasados({ title, fec, fecha, home, noTop }){    

    return (
        <>
            { title && <p>{title}</p> }
            { fec && <i>{fec}</i>}
            <PartidoSoloResultado
                res={fecha?.res1}
                jugador={fecha?.jugador1}
                pen={fecha?.pen1}
                home={home}
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
            />
            <PartidoSoloResultado
                res={fecha?.res2}
                jugador={fecha?.jugador2}
                pen={fecha?.pen2}
                home={home}
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
            />
            <PartidoSoloResultado
                res={fecha?.res3}
                jugador={fecha?.jugador3}
                pen={fecha?.pen3}
                home={home}
                dia='Domingo'
                fecha='23 Feb'
                hora='08h20'
                genero='M'
                equipos={['Los Angeles Negros', 'Fuerza Divina']}
                paralelos={['1ro Confir. 3 (M)', 'Confir. Ángeles (M)']}
                logos={['13M', '2AM']}
                colores={{
                    eq1: ['black', 'black', 'white'],
                    eq2: ['white', 'black', 'black']
                }}
            />
            <PartidoSoloResultado
                res={fecha?.res4}
                jugador={fecha?.jugador4}
                pen={fecha?.pen4}
                home={home}
                dia='Domingo'
                fecha='23 Feb'
                hora='09h00'
                genero='M'
                equipos={['Los Misioneros', 'Los Hermanos de Jesus']}
                paralelos={['Año Bíblico 2 (M)', 'Año Bíblico 1 (M)']}
                logos={['A2M', 'A1M']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['white', 'black', 'black']
                }}
            />
            <PartidoSoloResultado
                res={fecha?.res5}
                jugador={fecha?.jugador5}
                pen={fecha?.pen5}
                home={home}
                dia='Domingo'
                fecha='23 Feb'
                hora='09h40'
                genero='M'
                equipos={['Los Ángeles Bíblicos', 'Equipo de Dios']}
                paralelos={['Año Bíblico 3 (M)', 'Año Bíblico 4 (M1)']}
                logos={['A3M', 'A4M']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['red', 'red', 'white']
                }}
                mas={[, 1]}
            />

            <style jsx>{`
                p{
                    margin-top: ${home ? '30px' : '5px'};
                    color: #000000;
                    width: 100%;
                    font-size: 20px;
                    font-weight: bold;
                    margin-bottom: ${fec ? '2px' : '12px'};
                }

                i{
                    color: #000000;
                    width: 100%;
                    font-size: 17px;
                    font-weight: 200;
                    margin-bottom: 12px;
                }

                @media screen and (max-width: 768px){
                    p{
                        margin-top: ${home ? '25px' : '0'};
                        font-size: 16px;
                        font-size: 400;
                    }

                    i{
                        font-size: 15px;
                    }
                }
            `}</style>
        </> 
    )
}