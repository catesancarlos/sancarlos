import PartidoSoloResultado from '../PartidoSoloResultado'

export default function PartidosPasadosF11({ title, fec, fecha, home }){    

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
                fecha='05 Abr'
                hora='12h00'
                genero='M'
                equipos={['Mensajeros de Dios', 'Soldados de Jesús']}
                paralelos={['1 Comun. 1 (M)', '1 Comun. 3 (M)']}
                logos={['11M', '13M']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['white', 'black', 'black']
                }}
            />
            <PartidoSoloResultado
                fase='Repechaje'
                res={fecha?.res2}
                jugador={fecha?.jugador2}
                pen={fecha?.pen2}
                home={home}
                dia='Sábado'
                fecha='05 Abr'
                hora='17h00'
                genero='M'
                equipos={['Peruanitos de Dios', 'Los Pastores']}
                paralelos={['2 Molinopamba (M)', '2 Confir. 3 (M)']}
                logos={['2MM', '23M']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['blue', 'blue', 'white']
                }}
            />
            <PartidoSoloResultado
                fase='Cuartos de final'
                res={fecha?.res3}
                jugador={fecha?.jugador3}
                pen={fecha?.pen3}
                extra={fecha?.extra3}
                home={home}
                dia='Domingo'
                fecha='06 Abr'
                hora='09h40'
                genero='F'
                equipos={['Confirmación FC', 'Las Águilas']}
                paralelos={['2do Confir. 2 (F)', '1ro Confir. 1 (F)']}
                logos={['22F', '11F']}
                colores={{
                    eq1: ['black', 'black', 'white'],
                    eq2: ['white', 'black', 'black']
                }}
            />
            <PartidoSoloResultado
                com
                res={fecha?.res4}
                jugador={fecha?.jugador4}
                pen={fecha?.pen4}
                home={home}
                dia='Domingo'
                fecha='06 Abr'
                hora='10h20'
                genero='M'
                equipos={['Pueblo de Israel', 'Los leones de Dios']}
                paralelos={['2 Comun. 1 (M)', '2 Comun. 3 (M)']}
                logos={['21M', '23M']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['black', 'black', 'white']
                }}
            />
            <PartidoSoloResultado
                com
                res={fecha?.res5}
                jugador={fecha?.jugador5}
                pen={fecha?.pen5}
                home={home}
                dia='Domingo'
                fecha='06 Abr'
                hora='11h00'
                genero='F'
                equipos={['Pueblo de Israel', 'Las leonas de Dios']}
                paralelos={['2 Comun. 1 (F)', '2 Comun. 3 (F)']}
                logos={['21F', '23F']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['black', 'black', 'white']
                }}
            />
            <PartidoSoloResultado
                com
                res={fecha?.res6}
                jugador={fecha?.jugador6}
                pen={fecha?.pen6}
                home={home}
                dia='Domingo'
                fecha='06 Abr'
                hora='11h40'
                genero='F'
                equipos={['Hijas de Maria', 'Elegidas por Jesús']}
                paralelos={['2 Comun. 4 (F)', '2 Comun. 6 (F)']}
                logos={['24F', '26F']}
                colores={{
                    eq1: ['black', 'red', 'white'],
                    eq2: ['white', 'black', 'black']
                }}
            />
            <PartidoSoloResultado
                com
                res={fecha?.res7}
                jugador={fecha?.jugador7}
                pen={fecha?.pen7}
                home={home}
                dia='Domingo'
                fecha='06 Abr'
                hora='12h20'
                genero='M'
                equipos={['Guerreros contra el mal', 'Los Instrumentos de Dios']}
                paralelos={['2 Comun. 4 (M)', '2 Comun. 6 (M)']}
                logos={['24M', '26M']}
                colores={{
                    eq1: ['black', 'red', 'white'],
                    eq2: ['white', 'black', 'black']
                }}
                sus
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