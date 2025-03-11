import PartidoSoloResultado from './PartidoSoloResultado'

export default function PartidosPasados({ title, fec, fecha, home, noTop }){    

    return (
        <>
            { title && <p>{title}</p> }
            { fec && <i>{fec}</i>}
            {/* <PartidoSoloResultado
                res={fecha?.res1}
                jugador={fecha?.jugador1}
                pen={fecha?.pen1}
                home={home}
                dia='Sábado'
                fecha='08 Mar'
                hora='17h10'
                genero='F'
                equipos={['Santa Fé', 'Las Angeles Negros']}
                paralelos={['1ro Confir. 2 (F)', '1ro Confir. 3 (F)']}
                logos={['12F', '13F']}
                colores={{
                    eq1: ['black', 'black', 'white'],
                    eq2: ['black', 'black', 'white']
                }}
            /> */}
            <PartidoSoloResultado
                res={fecha?.res2}
                jugador={fecha?.jugador2}
                pen={fecha?.pen2}
                home={home}
                dia='Domingo'
                fecha='09 Mar'
                hora='08h30'
                genero='M'
                equipos={['Santa Fé', 'Newcastels']}
                paralelos={['1ro Confir. 2 (M)', '1ro Confir. 4 (M)']}
                logos={['12M', '14M']}
                colores={{
                    eq1: ['black', 'black', 'white'],
                    eq2: ['white', 'black', 'black']
                }}
            />
            <PartidoSoloResultado
                res={fecha?.res3}
                jugador={fecha?.jugador3}
                pen={fecha?.pen3}
                home={home}
                dia='Domingo'
                fecha='09 Mar'
                hora='09h20'
                genero='F'
                equipos={['Confirmación F.C.', 'Génesis']}
                paralelos={['2do Confir. 2 (F)', '2do Confir. 3 (F)']}
                logos={['22F', '23F']}
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
                fecha='09 Mar'
                hora='10h20'
                genero='F'
                equipos={['Camino a la Tierra Prometída', 'Mujeres de Nazareth']}
                paralelos={['Año Bíblico 5 (F)', 'Año Bíblico 4 (F)']}
                logos={['A5F', 'A4F']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['red', 'red', 'white']
                }}
            />
            <PartidoSoloResultado
                res={fecha?.res5}
                jugador={fecha?.jugador5}
                pen={fecha?.pen5}
                home={home}
                dia='Domingo'
                fecha='09 Mar'
                hora='11h20'
                genero='F'
                equipos={['Las Misioneras', 'Las Herederas de Dios']}
                paralelos={['Año Bíblico 2 (F)', 'Año Bíblico 1 (F)']}
                logos={['A2F', 'A1F']}
                colores={{
                    eq1: ['white', 'black', 'black'],
                    eq2: ['white', 'black', 'black']
                }}
            />
            <PartidoSoloResultado
                res={fecha?.res6}
                jugador={fecha?.jugador6}
                pen={fecha?.pen6}
                home={home}
                dia='Domingo'
                fecha='09 Mar'
                hora='12h20'
                genero='M'
                equipos={['Los Pastores', 'Santos y Religiosos F.C.']}
                paralelos={['2do Confir. 3 (M)', '2do Confir. 1 (M)']}
                logos={['23M', '21M']}
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