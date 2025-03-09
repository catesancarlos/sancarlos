import ItemCalendario from '../campeonato25/calendario/ItemCalendario'

export default function PartidoNow({ fecha, home = true }) {

    return (
        <section>
            { fecha?.partido1 == 1 &&
                <ItemCalendario
                    now={fecha?.partido1}
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
                />
            }
            { fecha?.partido2 == 1 &&
                <ItemCalendario
                    now={fecha?.partido2}
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
            }
            { fecha?.partido3 == 1 &&
                <ItemCalendario
                    now={fecha?.partido3}
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
            }
            { fecha?.partido4 == 1 &&
                <ItemCalendario
                    now={fecha?.partido4}
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
            }
            { fecha?.partido5 == 1 &&
                <ItemCalendario
                    now={fecha?.partido5}
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
            }
            { fecha?.partido6 == 1 &&
                <ItemCalendario
                    now={fecha?.partido6}
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
            }

            <style jsx>{`
                section{
                    display: flex;
                    opacity: 1;
                    margin: 0 4% 20px 4%;
                    width: 92%;
                    font-family: 'Lato', sans-serif;
                    flex-direction: column;
                    align-items: center;   
                }

                @media screen and (max-width: 768px){
                    section{
                        margin: 5px 14px 5px 14px;
                        width: calc(100% - 28px);
                    }
                }
            `}</style>
        </section> 
    )
}