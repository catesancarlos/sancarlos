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
            }
            { fecha?.partido2 == 1 &&
                <ItemCalendario
                    now={fecha?.partido2}
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
            }
            { fecha?.partido3 == 1 &&
                <ItemCalendario
                    fase='Para semifinal'
                    now={fecha?.partido3}
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
            }
            { fecha?.partido4 == 1 &&
                <ItemCalendario
                    com
                    fase='Semifinal - Comunión'
                    now={fecha?.partido4}
                    res={fecha?.res4}
                    jugador={fecha?.jugador4}
                    pen={fecha?.pen4}
                    extra={fecha?.extra4}
                    home={home}
                    dia='Domingo'
                    fecha='27 Abr'
                    hora='10h10'
                    genero='M'
                    equipos={['Leones de Dios', 'Guerreros contra el mal']}
                    paralelos={['2 Comun. 3 (M)', '2 Comun. 4 (M)']}
                    logos={['23M', '24M']}
                    colores={{
                        eq1: ['black', 'black', 'white'],
                        eq2: ['black', 'red', 'white']
                    }}
                />
            }
            { fecha?.partido5 == 1 &&
                <ItemCalendario
                    fase='Para semifinal'
                    now={fecha?.partido5}
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
            }
            { fecha?.partido6 == 1 &&
                <ItemCalendario
                    fase='Semifinal - Confirmación'
                    now={fecha?.partido6}
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
            }
            { fecha?.partido7 == 1 &&
                <ItemCalendario
                    com
                    fase='Semifinal - Comunión'
                    now={fecha?.partido7}
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
            }
            { fecha?.partido8 == 1 &&
                <ItemCalendario
                    fase='Semifinal - Confirmación'
                    now={fecha?.partido8}
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
            }
            { fecha?.partido9 == 1 &&
                <ItemCalendario
                    now={fecha?.partido9}
                    res={fecha?.res9}
                    jugador={fecha?.jugador9}
                    pen={fecha?.pen9}
                    home={home}
                    dia='Domingo'
                    fecha='16 Mar'
                    hora='11h00'
                    genero='F'
                    equipos={['Club GNU', 'Newcastells']}
                    paralelos={['2do Confir. 4 (F)', '1ro Confir. 4 (F)']}
                    logos={['24F', '14F']}
                    colores={{
                        eq1: ['black', 'black', 'white'],
                        eq2: ['white', 'black', 'black']
                    }}
                />
            }
            { fecha?.partido10 == 1 &&
                <ItemCalendario
                    now={fecha?.partido10}
                    res={fecha?.res10}
                    jugador={fecha?.jugador10}
                    pen={fecha?.pen10}
                    home={home}
                    dia='Domingo'
                    fecha='16 Mar'
                    hora='11h50'
                    genero='F'
                    equipos={['Génesis', 'Las Ángeles Negros']}
                    paralelos={['2do Confir. 3 (F)', '1ro Confir. 3 (F)']}
                    logos={['23F', '13F']}
                    colores={{
                        eq1: ['white', 'black', 'black'],
                        eq2: ['black', 'black', 'white']
                    }}
                />
            }
            { fecha?.partido11 == 1 &&
                <ItemCalendario
                    now={fecha?.partido11}
                    res={fecha?.res11}
                    jugador={fecha?.jugador11}
                    pen={fecha?.pen11}
                    home={home}
                    dia='Domingo'
                    fecha='16 Mar'
                    hora='12h30'
                    genero='M'
                    equipos={['Los Angelicales', 'Newcastells']}
                    paralelos={['AB Conf. Molinopamba (M)', '1ro Confir. 4 (M)']}
                    logos={['1MM', '14M']}
                    colores={{
                        eq1: ['white', 'black', 'black'],
                        eq2: ['white', 'black', 'black']
                    }}
                />
            }

            <style jsx>{`
                section{
                    display: flex;
                    opacity: 1;
                    margin: 0 4% 20px 4%;
                    margin: 0 4% 0 4%;
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