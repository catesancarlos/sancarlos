import PartidoSoloResultado from '../PartidoSoloResultado'

export default function PartidosPasadosF9({ title, fec, fecha, home, noTop }){    

    return (
        <>
            { title && <p>{title}</p> }
            { fec && <i>{fec}</i>}
            <PartidoSoloResultado
                com
                res={fecha?.res1}
                jugador={fecha?.jugador1}
                pen={fecha?.pen1}
                home={home}
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
            />
            <PartidoSoloResultado
                com
                res={fecha?.res2}
                jugador={fecha?.jugador2}
                pen={fecha?.pen2}
                home={home}
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
            />
            <PartidoSoloResultado
                com
                res={fecha?.res3}
                jugador={fecha?.jugador3}
                pen={fecha?.pen3}
                home={home}
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
            />
            <PartidoSoloResultado
                res={fecha?.res4}
                jugador={fecha?.jugador4}
                pen={fecha?.pen4}
                home={home}
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