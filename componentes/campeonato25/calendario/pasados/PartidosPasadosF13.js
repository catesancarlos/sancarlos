import PartidoSoloResultado from '../PartidoSoloResultado'

export default function PartidosPasadosF13({ title, fec, fecha, home }){   

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
                dia='Domingo'
                fecha='20 Abr'
                hora='10h30'
                genero='M'
                equipos={['Guerreros contra el mal', 'Los Instrumentos de Dios']}
                paralelos={['2 Comun. 4 (M)', '2 Comun. 6 (M)']}
                logos={['24M', '26M']}
                colores={{
                    eq1: ['black', 'red', 'white'],
                    eq2: ['white', 'black', 'black']
                }}
            />
            <PartidoSoloResultado
                fase='Cuartos de final Confirmación'
                res={fecha?.res2}
                jugador={fecha?.jugador2}
                pen={fecha?.pen2}
                home={home}
                dia='Domingo'
                fecha='20 Abr'
                hora='11h00'
                genero='M'
                equipos={['Los Águilas', 'Los Ángeles Negros']}
                paralelos={['1 Confir. 1 (M)', '1 Confir. 3 (M)']}
                logos={['11M', '13M']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['black', 'black', 'white']
                }}
            />
            <PartidoSoloResultado
                fase='Cuartos de final Confirmación'
                res={fecha?.res3}
                jugador={fecha?.jugador3}
                pen={fecha?.pen3}
                home={home}
                dia='Domingo'
                fecha='20 Abr'
                hora='12h00'
                genero='M'
                equipos={['Los Pastores', 'GDL']}
                paralelos={['2 Confir. 3 (M)', '2 Confir. 4 (M)']}
                logos={['23M', '24M']}
                colores={{
                    eq1: ['blue', 'blue', 'white'],
                    eq2: ['white', 'black', 'black']
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