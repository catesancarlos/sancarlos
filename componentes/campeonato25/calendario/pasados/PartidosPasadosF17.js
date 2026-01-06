import ItemCalendario from '../ItemCalendario2025'
import PartidoSoloResultado from '../PartidoSoloResultado'

export default function PartidosPasadosF16({ title, fec, fecha, home }){ 

    return (
        <>
            { title && <p>{title}</p> }
            <ItemCalendario
                com
                final
                fase='FINAL - Reconciliación'
                /* now={fecha?.partido1} */
                res={fecha?.res1}
                jugador={fecha?.jugador1}
                pen={fecha?.pen1}
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
            />
            <ItemCalendario
                com
                final
                fase='FINAL - Reconciliación'
                /* now={fecha?.partido2} */
                res={fecha?.res2}
                jugador={fecha?.jugador2}
                pen={fecha?.pen2}
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
            />
            <ItemCalendario
                final
                fase='FINAL - Año Bíblico'
                /* now={fecha?.partido3} */
                res={fecha?.res3}
                jugador={fecha?.jugador3}
                pen={fecha?.pen3}
                extra={fecha?.extra3}
                home={home}
                dia='Sábado'
                fecha='17 Mayo'
                hora='16h30'
                genero='F'
                equipos={['Las Misioneras', 'Mujeres de Nazareth']}
                paralelos={['Año Bíblico 2 (F)', 'Año Bíblico 4 (F)']}
                logos={['A2F', 'A4F']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['red', 'red', 'white']
                }}
            />
            <ItemCalendario
                final
                fase='FINAL - Año Bíblico'
                /* now={fecha?.partido4} */
                res={fecha?.res4}
                jugador={fecha?.jugador4}
                pen={fecha?.pen4}
                extra={fecha?.extra4}
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
            />
            <ItemCalendario
                com
                final
                fase='FINAL - Comunión'
                /* now={fecha?.partido5} */
                res={fecha?.res5}
                jugador={fecha?.jugador5}
                pen={fecha?.pen5}
                extra={fecha?.extra5}
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
            />
            <ItemCalendario
                com
                final
                fase='FINAL - Comunión'
                /* now={fecha?.partido6} */
                res={fecha?.res6}
                jugador={fecha?.jugador6}
                pen={fecha?.pen6}
                extra={fecha?.extra6}
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