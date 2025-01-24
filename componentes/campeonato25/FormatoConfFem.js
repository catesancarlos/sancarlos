import Equipo from './Equipo'

const FormatoConfFem = ({ sin }) => {

    return (
        <section>
            { !sin && <strong className='strongo'>Formato Equipos Femeninos</strong> }
            <p className='sa'>
                <strong>R1: Participantes:</strong> En el campeonato femenino de confirmación, participarán 10 
                equipos: 4 equipos que representan a los paralelos de primero de confirmación y 6 equipos 
                representantes de los paralelos de segundo de confirmación.
            </p>
            <div className='cont-logos'>
                <Equipo
                    nombre='Las Águilas'
                    paralelo='1ro Confir. 1 (F)'
                    logo='11F'
                    color='white'
                    borde='black'
                    letter='black'
                />
                <Equipo
                    nombre='Santa Fé (F)'
                    paralelo='1ro Confir. 2 (F)'
                    logo='12F'
                    color='black'
                    borde='black'
                    letter='white'
                />
                <Equipo
                    nombre='Las Angeles Negros'
                    paralelo='1ro Confir. 3 (F)'
                    logo='13F'
                    color='black'
                    borde='black'
                    letter='white'
                />
                <Equipo
                    nombre='Newcastels (F)'
                    paralelo='1ro Confir. 4 (F)'
                    logo='14F'
                    color='white'
                    borde='black'
                    letter='black'
                />
                <Equipo
                    nombre='Las Galatas 1, 10'
                    paralelo='2do Confir. 1 (F)'
                    logo='21F'
                    color='white'
                    borde='black'
                    letter='black'
                />
                <Equipo
                    nombre='Confirmación F.C. (F)'
                    paralelo='2do Confir. 2 (F)'
                    logo='22F'
                    color='black'
                    borde='black'
                    letter='white'
                />
                <Equipo
                    nombre='Génesis'
                    paralelo='2do Confir. 3 (F)'
                    logo='23F'
                    color='white'
                    borde='black'
                    letter='black'
                />
                <Equipo
                    nombre='Club GNU'
                    paralelo='2do Confir. 4 (F)'
                    logo='24F'
                    color='black'
                    borde='black'
                    letter='white'
                />
                <Equipo
                    nombre='Traicioneras como Judas'
                    paralelo='2do Confir. 5 (F)'
                    logo='25F'
                    color='black'
                    borde='black'
                    letter='white'
                />
                <Equipo
                    nombre='Estrellitas de María'
                    paralelo='2 Confir. Ángeles (F)'
                    logo='2AF'
                    color='black'
                    borde='black'
                    letter='white'
                />
            </div>
            <p>
                <strong>R2: Fases:</strong> El campeonato femenino de confirmación, se desarrollará en 2 fases: 
                primera y fase final. La primera fase estará compuesta de 15 partidos y la fase final de 5, 
                sumando 20 partidos en total.
            </p>
            <p>
                <strong>R3: Grupos:</strong> Para la primera fase del campeonato femenino de confirmación, 
                se dividirán a los equipos en 2 grupos de 5 mediante sorteo.
            </p>
            <div className='ta-pos'>
                <table>
                    <tr>
                        <td colSpan={2}>Grupo A</td>
                    </tr>
                    <tr>
                        <td className='tp'>1</td>
                        <td>Equipo A1</td>
                    </tr>
                    <tr>
                        <td className='tp'>2</td>
                        <td>Equipo A2</td>
                    </tr>
                    <tr>
                        <td className='tp'>3</td>
                        <td>Equipo A3</td>
                    </tr>
                    <tr>
                        <td className='tp'>4</td>
                        <td>Equipo A4</td>
                    </tr>
                    <tr>
                        <td className='tp'>5</td>
                        <td>Equipo A5</td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td colSpan={2}>Grupo B</td>
                    </tr>
                    <tr>
                        <td className='tp'>1</td>
                        <td>Equipo B1</td>
                    </tr>
                    <tr>
                        <td className='tp'>2</td>
                        <td>Equipo B2</td>
                    </tr>
                    <tr>
                        <td className='tp'>3</td>
                        <td>Equipo B3</td>
                    </tr>
                    <tr>
                        <td className='tp'>4</td>
                        <td>Equipo B4</td>
                    </tr>
                    <tr>
                        <td className='tp'>5</td>
                        <td>Equipo B5</td>
                    </tr>
                </table>
            </div>
            <p>
                <strong>R4: PRIMERA FASE:</strong> En la primera fase, los equipos tendrán 3 partidos, 2 de 
                estos enfrentando a equipos de su grupo (R5) y 1 partido contra el equipo que sacó su 
                misma ubicación en el sorteo, pero del otro grupo (R6).
            </p>
            <p>
                <strong>R5: Enfrentamientos mismo grupo:</strong> Cada equipo deberá enfrentarse a 2 equipos
                que forman parte de su grupo. Los enfrentamientos han sido sorteados de la siguiente manera:
            </p>
            <div className='ta-pos2'>
                <table>
                    <tr>
                        <td colSpan={3}>Grupo A</td>
                    </tr>
                    <tr>
                        <td>Equipo A1</td>
                        <td className='tp'>Vs.</td>
                        <td>Equipo A2</td>
                    </tr>
                    <tr>
                        <td>Equipo A3</td>
                        <td className='tp'>Vs.</td>
                        <td>Equipo A4</td>
                    </tr>
                    <tr>
                        <td>Equipo A2</td>
                        <td className='tp'>Vs.</td>
                        <td>Equipo A3</td>
                    </tr>
                    <tr>
                        <td>Equipo A4</td>
                        <td className='tp'>Vs.</td>
                        <td>Equipo A5</td>
                    </tr>
                    <tr>
                        <td>Equipo A1</td>
                        <td className='tp'>Vs.</td>
                        <td>Equipo A5</td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td colSpan={3}>Grupo B</td>
                    </tr>
                    <tr>
                        <td>Equipo B1</td>
                        <td className='tp'>Vs.</td>
                        <td>Equipo B2</td>
                    </tr>
                    <tr>
                        <td>Equipo B3</td>
                        <td className='tp'>Vs.</td>
                        <td>Equipo B4</td>
                    </tr>
                    <tr>
                        <td>Equipo B2</td>
                        <td className='tp'>Vs.</td>
                        <td>Equipo B3</td>
                    </tr>
                    <tr>
                        <td>Equipo B4</td>
                        <td className='tp'>Vs.</td>
                        <td>Equipo B5</td>
                    </tr>
                    <tr>
                        <td>Equipo B1</td>
                        <td className='tp'>Vs.</td>
                        <td>Equipo B5</td>
                    </tr>
                </table>
            </div>
            <p>
                <strong>R6: Enfrentamiento contra el equipo con su misma ubicación, pero del otro grupo:</strong> Cada 
                equipo deberá enfrentar 1 partido contra el equipo que sacó su misma ubicación en el sorteo, 
                pero del otro grupo:<br/>
                <i>Ejemplo: si un equipo por sorteo quedaría 
                ubicado en el grupo A, posición 1, es decir A1, debería enfrentarse al equipo sorteado en el 
                grupo B, posición 1, es decir B1 (1 partido).</i>
            </p>
            <table className='t2'>
                <tr>
                    <td>A1 vs. B1</td>
                </tr>
                <tr>
                    <td>A2 vs. B2</td>
                </tr>
                <tr>
                    <td>A3 vs. B3</td>
                </tr>
                <tr>
                    <td>A4 vs. B4</td>
                </tr>
                <tr>
                    <td>A5 vs. B5</td>
                </tr>
            </table>
            <p>
                <strong>R7: Clasificación:</strong> Para la fase final, clasificarán solamente los 3 equipos 
                que tengan el mejor puntaje en cada grupo, es decir, que hayan terminado primero, segundo y 
                tercero en la tabla de posiciones de cada uno de los grupos, como se muestra a continuación.
            </p>
            <div className='ta-pos'>
                <table>
                    <tr>
                        <td colSpan={2}>Grupo A</td>
                    </tr>
                    <tr>
                        <td className='tp'>1</td>
                        <td><strong>Clasificado</strong></td>
                    </tr>
                    <tr>
                        <td className='tp'>2</td>
                        <td><strong>Clasificado</strong></td>
                    </tr>
                    <tr>
                        <td className='tp'>3</td>
                        <td><strong>Clasificado</strong></td>
                    </tr>
                    <tr>
                        <td className='tp'>4</td>
                        <td><i>Eliminado</i></td>
                    </tr>
                    <tr>
                        <td className='tp'>5</td>
                        <td><i>Eliminado</i></td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td colSpan={2}>Grupo B</td>
                    </tr>
                    <tr>
                        <td className='tp'>1</td>
                        <td><strong>Clasificado</strong></td>
                    </tr>
                    <tr>
                        <td className='tp'>2</td>
                        <td><strong>Clasificado</strong></td>
                    </tr>
                    <tr>
                        <td className='tp'>3</td>
                        <td><strong>Clasificado</strong></td>
                    </tr>
                    <tr>
                        <td className='tp'>4</td>
                        <td><i>Eliminado</i></td>
                    </tr>
                    <tr>
                        <td className='tp'>5</td>
                        <td><i>Eliminado</i></td>
                    </tr>
                </table>
            </div>
            <p>
                <strong>R8: Criterios de desempate Primera Fase:</strong> En caso que al finalizar la 
                primera fase se tuviera en la tabla de posiciones empates en puntos entre equipos, 
                se procedería a lo siguiente para desempatar: <br/>
                1. Para determinar el mejor ubicado, primeramente, se tomará en cuenta el gol diferencia.<br/>
                2. Si siguiera existiendo un empate con el gol diferencia, el mejor ubicado será el equipo 
                que ganó el enfrentamiento que se dio anteriormente entre los equipos empatados.<br/>
                3. Si el empate en puntos se diera en la última fecha, porque los equipos en cuestión terminan 
                empatando su partido, el mejor ubicado se determinaría por 4 lanzamientos penales por equipo.<br/>
                4. De no poder llegar a un desempate mediante los puntos anteriores, se tomará en cuenta la 
                mayor cantidad total de goles marcados y posteriormente la menor cantidad total de goles 
                recibidos.<br/>
                5. El último criterio de desempate para determinar el mejor ubicado en caso de no poder 
                hacerlo con los puntos anteriores es: el equipo que cuente con menos sanciones por tarjetas 
                amarillas o rojas (amarilla 1 punto, roja por doble amarilla 2 puntos y roja directa 5 puntos).
            </p>
            <p>
                <strong>R9: FASE FINAL:</strong> La fase final se desarrollará en 3 etapas (cuartos, semifinales y 
                final), con formato de eliminación directa. En esta fase participarán 6 equipos, los 3 
                mejores de cada grupo A y B.
            </p>
            <p>
                <strong>R10: CUARTOS DE FINAL:</strong> En esta fase participarán 4 equipos, los que 
                terminaron en las posiciones 2 y 3 de cada grupo A y B. Estos 4 equipos se enfrentarán de la 
                siguiente forma y los ganadores avanzarán a las semifinales.
            </p>
            <table className='t3'>
                <tr>
                    <td className='tp'>A</td>
                    <td className='tlarge'>2do lugar Grupo A</td>
                    <td className='tp'>Vs.</td>
                    <td className='tlarge'>3er lugar Grupo B</td>
                </tr>
                <tr>
                    <td className='tp'>B</td>
                    <td className='tlarge'>2do lugar Grupo B</td>
                    <td className='tp'>Vs.</td>
                    <td className='tlarge'>3er lugar Grupo A</td>
                </tr>
            </table>
            <p>
                <strong>R11: SEMIFINAL:</strong> En esta fase participarán 4 equipos, los que terminaron 
                en 1er lugar de cada grupo A y B, y los 2 ganadores de los cuartos de final. Estos 4 equipos 
                se enfrentarán de la siguiente forma y los ganadores avanzarán a la final.
            </p>
            <table className='t31'>
                <tr>
                    <td className='tlarge'>1er lugar Grupo A</td>
                    <td className='tp'>Vs.</td>
                    <td className='tlarge'>Ganador B Cuartos</td>
                </tr>
                <tr>
                    <td className='tlarge'>1er lugar Grupo B</td>
                    <td className='tp'>Vs.</td>
                    <td className='tlarge'>Ganador A Cuartos</td>
                </tr>
            </table>
            <p>
                <strong>R12: Criterios de desempate (en la semifinal):</strong> En caso de empate en goles 
                al finalizar los partidos de semifinal, se procederá a:<br/>
                1. Realizar directamente la definición por medio de los tiros penales (4 cada equipo).<br/>
                2. De persistir el empate después de los 4 lanzamientos por equipo, clasificará el que haya 
                tenido la mejor ubicación en la “Tabla general fase regular” (R15). 
            </p>
            <p>
                <strong>R13: FINAL:</strong> La final es la última etapa del campeonato, en donde se 
                enfrentarán los 2 mejores equipos del campeonato, ganadoras de las semifinales. Las 
                ganadoras serán declaradas campeónas del campeonato femenino de Confirmación 2025. 
            </p>
            <p>
                <strong>R14: Criterios de desempate (en la Final):</strong> En caso de empate al terminar el 
                partido final, se procederá a:<br/>
                1. Se jugarán dos tiempos de 4 minutos cada uno.<br/>
                2. Si el empate continúa, se procederá a realizar la definición por medio de los tiros 
                penales (4 cada equipo).<br/>
                3. Si el empate persistiese, quedara campeón el que haya tenido la mejor ubicación en la 
                “Tabla general fase regular" (R15).
            </p>
            <p>
                <strong>R15: Tabla general fase regular:</strong> Una vez concluida la primera fase, con la 
                finalidad de ser usada como criterio de desempate en los puntos ya especificados anteriormente 
                (mas no como método de clasificación a la fase final), se ubicará a todos los equipos 
                participantes en una tabla, ubicados desde el equipo con la mayor cantidad de puntos al 
                equipo con la menor cantidad de los mismos. Tabla de ejemplo:
            </p>
            <table className='t4' style={{ marginBottom: '40px' }}>
                <tr>
                    <td className='tmp'>N°</td>
                    <td className='tlarge2'>Equipo</td>
                    <td className='tpt'>Puntos</td>
                    <td className='tp'>GD</td>
                    <td className='tp'>GF</td>
                    <td className='tp'>GC</td>
                </tr>
                <tr>
                    <td className='tmp'>1</td>
                    <td className='tlarge2'>B1</td>
                    <td className='tp'>9</td>
                    <td className='tp'>+9</td>
                    <td className='tp'>10</td>
                    <td className='tp'>1</td>
                </tr>
                <tr>
                    <td className='tmp'>2</td>
                    <td className='tlarge2'>B3</td>
                    <td className='tp'>8</td>
                    <td className='tp'>+6</td>
                    <td className='tp'>9</td>
                    <td className='tp'>3</td>
                </tr>
                <tr>
                    <td className='tmp'>3</td>
                    <td className='tlarge2'>A3</td>
                    <td className='tp'>7</td>
                    <td className='tp'>+3</td>
                    <td className='tp'>9</td>
                    <td className='tp'>6</td>
                </tr>
                <tr>
                    <td className='tmp'>4</td>
                    <td className='tlarge2'>B2</td>
                    <td className='tp'>7</td>
                    <td className='tp'>+3</td>
                    <td className='tp'>6</td>
                    <td className='tp'>3</td>
                </tr>
                <tr>
                    <td className='tmp'>5</td>
                    <td className='tlarge2'>A2</td>
                    <td className='tp'>7</td>
                    <td className='tp'>+3</td>
                    <td className='tp'>4</td>
                    <td className='tp'>1</td>
                </tr>
                <tr>
                    <td className='tmp'>6</td>
                    <td className='tlarge2'>A1</td>
                    <td className='tp'>7</td>
                    <td className='tp'>+2</td>
                    <td className='tp'>6</td>
                    <td className='tp'>4</td>
                </tr>
                <tr>
                    <td className='tmp'>7</td>
                    <td className='tlarge2'>B2</td>
                    <td className='tp'>6</td>
                    <td className='tp'>+2</td>
                    <td className='tp'>4</td>
                    <td className='tp'>2</td>
                </tr>
                <tr>
                    <td className='tmp'>8</td>
                    <td className='tlarge2'>A2</td>
                    <td className='tp'>5</td>
                    <td className='tp'>0</td>
                    <td className='tp'>4</td>
                    <td className='tp'>4</td>
                </tr>
                <tr>
                    <td className='tmp'>9</td>
                    <td className='tlarge2'>A1</td>
                    <td className='tp'>4</td>
                    <td className='tp'>-1</td>
                    <td className='tp'>3</td>
                    <td className='tp'>4</td>
                </tr>
                <tr>
                    <td className='tmp'>10</td>
                    <td className='tlarge2'>A1</td>
                    <td className='tp'>3</td>
                    <td className='tp'>-2</td>
                    <td className='tp'>2</td>
                    <td className='tp'>4</td>
                </tr>
            </table>

            <style jsx>{`
                section{
                    padding-top: ${sin ? '10px' : '40px'};
                    font-family: 'Lato', sans-serif;
                }

                p{
                    margin-top: 15px;
                    font-size: 17px;
                    font-weight: 200;
                    margin-bottom: 0;
                }

                .sa{
                    margin-top: 0;
                    margin-bottom: 10px;
                }

                .strongo{
                    background: #245590;
                    padding: 6px 10px 8px 10px;
                    color: white;
                    text-align: center;
                    letter-spacing: 1px;
                    display: block;
                    border-radius: 8px;
                }

                .cont-logos{
                    margin-top: 5px;
                    display: flex;
                    flex-wrap: wrap;
                    margin-bottom: 0;
                }

                .t1{
                    margin-top: 8px;
                    margin-left: calc(50% - 70px);
                }

                .t21{
                    margin-top: 8px;
                    margin-left: calc(50% - 60px);
                }

                .t2{
                    margin-top: 8px;
                    margin-left: calc(50% - 50px);
                }

                td{
                    width: 110px;
                    padding: 1px 5px 2px 5px;
                    font-size: 16px;
                    font-weight: 300;
                    text-align: center;
                    border: 1px solid black;
                }

                .tp{
                    width: 40px;
                }

                .ta-pos{
                    display: flex;
                    margin-left: calc(50% - 160px);
                }

                .ta-pos2{
                    display: flex;
                    margin-left: calc(50% - 270px);
                }

                .ta-pos table, .ta-pos2 table{
                    margin: 8px 10px 0 10px;
                }

                .t3{
                    margin-top: 8px;
                    margin-left: calc(50% - 130px);
                }

                .t31{
                    margin-top: 8px;
                    margin-left: calc(50% - 110px);
                }

                .t4{
                    margin-top: 8px;
                    margin-left: calc(50% - 180px);
                }

                .tlarge{
                    width: 100px;
                }

                .tlarge2{
                    width: 150px;
                }

                .tmp{
                    width: 30px;
                }

                .tpt{
                    width: 60px;
                }

                @media screen and (max-width: 768px){
                    .cont-logos{
                        margin-top: 10px;
                        display: flex;
                        justify-content: space-around;
                        flex-wrap: wrap;
                        margin-bottom: 20px;
                    }

                    .ta-pos{
                        display: flex;
                        margin-left: calc(50% - 175px);
                    }

                    .ta-pos2{
                        display: flex;
                        flex-direction: column;
                        margin-left: calc(50% - 175px);
                    }

                    .ta-pos2 table{
                        margin: 8px 0;
                    }

                    .t3{
                        margin-left: calc(50% - 0px);
                    }

                    .t31{
                        margin-left: calc(50% - 110px);
                    }

                    .t2{
                        margin-left: calc(50% - 55px);
                    }

                    .t3{
                        margin-left: calc(50% - 145px);
                    }

                    .t31{
                        margin-left: calc(50% - 125px);
                    }
                }
            `}</style>
        </section> 
    )
}

export default FormatoConfFem