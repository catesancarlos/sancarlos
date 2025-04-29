import PartidoSoloResultado from '../PartidoSoloResultado'

export default function PartidosPasadosF14({ title, fec, fecha, home }){     

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
                fecha='26 Abr'
                hora='11h40'
                genero='F'
                equipos={['Mensajeras de Dios', 'Ángeles']}
                paralelos={['1 Comun. 1 (F)', '1 Comun. 5 (F)']}
                logos={['11F', '15F']}
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
                fecha='26 Abr'
                hora='12h20'
                genero='M'
                equipos={['Campeones del Fútbol', 'Soldados de Jesús']}
                paralelos={['1 Comun. 2 (M)', '1 Comun. 3 (M)']}
                logos={['12M', '13M']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['white', 'black', 'black']
                }}
            />
            <PartidoSoloResultado
                fase='Para semifinal'
                res={fecha?.res3}
                jugador={fecha?.jugador3}
                pen={fecha?.pen3}
                extra={fecha?.extra3}
                home={home}
                dia='Domingo'
                fecha='27 Abr'
                hora='09h30'
                genero='M'
                equipos={['Juntos con Cristo', 'Los Angelicales']}
                paralelos={['AB 1C Ángeles (M)', 'AB 1C Molinopamba (M)']}
                logos={['AAM', 'AMM']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['white', 'black', 'black']
                }}
            />
            <PartidoSoloResultado
                fase='Para semifinal'
                res={fecha?.res5}
                jugador={fecha?.jugador5}
                pen={fecha?.pen5}
                extra={fecha?.extra5}
                home={home}
                dia='Domingo'
                fecha='27 Abr'
                hora='10h50'
                genero='M'
                equipos={['Los Misioneros', 'Equipo de Dios']}
                paralelos={['Año Bíblico 2 (M)', 'Año Bíblico 4 (M)']}
                logos={['A2M', 'A4M']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['red', 'red', 'white']
                }}
            />
            <PartidoSoloResultado
                fase='Semifinal - Confirmación'
                res={fecha?.res6}
                jugador={fecha?.jugador6}
                pen={fecha?.pen6}
                extra={fecha?.extra6}
                home={home}
                dia='Domingo'
                fecha='27 Abr'
                hora='11h30'
                genero='F'
                equipos={['Confirmación FC', 'Estrellitas de María']}
                paralelos={['2 Confir. 2 (F)', '2 Confir. Ángeles (F)']}
                logos={['22M', '2AM']}
                colores={{
                    eq1: ['black', 'black', 'white'],
                    eq2: ['black', 'black', 'white']
                }}
            />
            <PartidoSoloResultado
                com
                fase='Semifinal - Comunión'
                res={fecha?.res7}
                jugador={fecha?.jugador7}
                pen={fecha?.pen7}
                extra={fecha?.extra7}
                home={home}
                dia='Domingo'
                fecha='27 Abr'
                hora='12h20'
                genero='F'
                equipos={['Pueblo de Israel', 'El Maná']}
                paralelos={['2 Comun. 1 (F)', '2 Comun. 5 (F)']}
                logos={['21F', '25F']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['white', 'black', 'black']
                }}
            />
            <PartidoSoloResultado
                fase='Semifinal - Confirmación'
                res={fecha?.res8}
                jugador={fecha?.jugador8}
                pen={fecha?.pen8}
                extra={fecha?.extra8}
                home={home}
                dia='Domingo'
                fecha='27 Abr'
                hora='13h00'
                genero='M'
                equipos={['Los Ángeles Negros', 'Confirmación FC']}
                paralelos={['1 Confir. 3 (M)', '2 Confir. 2 (M)']}
                logos={['13M', '22M']}
                colores={{
                    eq1: ['black', 'black', 'white'],
                    eq2: ['black', 'black', 'white']
                }}
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