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
                    fecha='15 Mar'
                    hora='10h30'
                    genero='M'
                    equipos={['Niños gerreros de Dios', 'Los elegidos de Dios']}
                    paralelos={['Iniciación 1 (M)', 'Iniciación 2 (M)']}
                    logos={['I1M', 'I2M']}
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
                    fecha='15 Mar'
                    hora='11h40'
                    genero='F'
                    equipos={['Mensajeras de Dios', 'Las Campeonas del Futbol']}
                    paralelos={['1ro Comun. 1 (F)', '1ro Comun. 2 (F)']}
                    logos={['11F', '12F']}
                    colores={{
                        eq1: ['white', 'black', 'black'],
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
                    dia='Sábado'
                    fecha='15 Mar'
                    hora='12h10'
                    genero='M'
                    equipos={['Mensajeros de Dios', 'Los Campeones del Futbol']}
                    paralelos={['1ro Comun. 1 (M)', '1ro Comun. 2 (M)']}
                    logos={['11M', '12M']}
                    colores={{
                        eq1: ['white', 'black', 'black'],
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
                    dia='Sábado'
                    fecha='15 Mar'
                    hora='16h40'
                    genero='M'
                    equipos={['Peruanitos de Dios', 'Los Águilas']}
                    paralelos={['Conf. Molinopamba (M)', '1ro Confir. 1 (M)']}
                    logos={['2MM', '11M']}
                    colores={{
                        eq1: ['white', 'black', 'black'],
                        eq2: ['white', 'black', 'black']
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
                    dia='Sábado'
                    fecha='15 Mar'
                    hora='17h20'
                    genero='M'
                    equipos={['Traicioneros como Judas', 'Juntos con Cristo FC']}
                    paralelos={['2do Confir. 5 (M)', '1 Conf. AB Ángeles (M)']}
                    logos={['25M', '1AM']}
                    colores={{
                        eq1: ['black', 'black', 'white'],
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
                    fecha='16 Mar'
                    hora='08h30'
                    genero='F'
                    equipos={['Confirmación F.C.', 'Las Galatas 1, 10']}
                    paralelos={['2do Confir. 2 (F)', '2do Confir. 1 (F)']}
                    logos={['22F', '21F']}
                    colores={{
                        eq1: ['black', 'black', 'white'],
                        eq2: ['white', 'black', 'black']
                    }}
                />
            }
            { fecha?.partido7 == 1 &&
                <ItemCalendario
                    now={fecha?.partido7}
                    res={fecha?.res7}
                    jugador={fecha?.jugador7}
                    pen={fecha?.pen7}
                    home={home}
                    dia='Domingo'
                    fecha='16 Mar'
                    hora='09h20'
                    genero='F'
                    equipos={['Traicioneras como Judas', 'Estrellitas de Maria']}
                    paralelos={['2do Confir. 5 (F)', '2 Conf. Ángeles (F)']}
                    logos={['25F', '2AF']}
                    colores={{
                        eq1: ['black', 'black', 'white'],
                        eq2: ['black', 'black', 'white']
                    }}
                />
            }
            { fecha?.partido8 == 1 &&
                <ItemCalendario
                    now={fecha?.partido8}
                    res={fecha?.res8}
                    jugador={fecha?.jugador8}
                    pen={fecha?.pen8}
                    home={home}
                    dia='Domingo'
                    fecha='16 Mar'
                    hora='10h10'
                    genero='F'
                    equipos={['Santa Fé', 'Las Águilas']}
                    paralelos={['1ro Confir. 2 (F)', '1ro Confir. 1 (F)']}
                    logos={['12F', '11F']}
                    colores={{
                        eq1: ['black', 'black', 'white'],
                        eq2: ['white', 'black', 'black']
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