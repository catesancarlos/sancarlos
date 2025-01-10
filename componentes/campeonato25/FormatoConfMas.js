import Equipo from './Equipo'

const FormatoConfMas = ({ sin }) => {

    return (
        <section>
            { !sin && <strong className='strongo'>Formato Equipos Masculinos</strong> }
            <p className='pf2 sb sa' style={{ marginBottom: '10px' }}>
                <strong>R1: Participantes:</strong> En el campeonato (de confirmación), participaran 12 
                equipos: 5 equipos que representan a los paralelos de primero de confirmación y 7 equipos 
                representantes de los paralelos de segundo de confirmación.
            </p>
            <div className='cont-logos'>
                <Equipo
                    nombre='Los Águilas'
                    paralelo='1ro Confir. 1 (M)'
                    logo='11M'
                    color='white'
                    borde='black'
                    letter='black'
                />
                <Equipo
                    nombre='Santa Fé (M)'
                    paralelo='1ro Confir. 2 (M)'
                    logo='12M'
                    color='black'
                    borde='black'
                    letter='white'
                />
                <Equipo
                    nombre='Los Angeles Negros'
                    paralelo='1ro Confir. 3 (M)'
                    logo='13M'
                    color='black'
                    borde='black'
                    letter='white'
                />
                <Equipo
                    nombre='Newcastels (M)'
                    paralelo='1ro Confir. 4 (M)'
                    logo='14M'
                    color='white'
                    borde='black'
                    letter='black'
                />
                <Equipo
                    nombre='Santos y Religiosos F.C.'
                    paralelo='2do Confir. 1 (M)'
                    logo='21M'
                    color='white'
                    borde='black'
                    letter='black'
                />
                <Equipo
                    nombre='Confirmación F.C. (M)'
                    paralelo='2do Confir. 2 (M)'
                    logo='22M'
                    color='black'
                    borde='black'
                    letter='white'
                />
                <Equipo
                    nombre='Los Pastores'
                    paralelo='2do Confir. 3 (M)'
                    logo='23M'
                    color='blue'
                    borde='blue'
                    letter='white'
                />
                <Equipo
                    nombre='Predicadores'
                    paralelo='2do Confir. 4 (M1)'
                    logo='24M'
                    color='white'
                    borde='black'
                    letter='black'
                    mas='1'
                />
                <Equipo
                    nombre='GDL'
                    paralelo='2do Confir. 4 (M2)'
                    logo='24M'
                    color='white'
                    borde='black'
                    letter='black'
                    mas='2'
                />
                <Equipo
                    nombre='Traicioneros de Judas'
                    paralelo='2do Confir. 5 (M)'
                    logo='25M'
                    color='black'
                    borde='black'
                    letter='white'
                />
                <Equipo
                    nombre='Fuerza Divina'
                    paralelo='2 Confir. Ángeles (M)'
                    logo='2AM'
                    color='white'
                    borde='black'
                    letter='black'
                />
            </div>
            <p className='pf2 sa'>
                <strong>R2: Fases:</strong> El campeonato (de confirmación), se desarrollara en 2 fases, 
                primera y fase final, la primera fase estara compuesta de 15 partidos y la fase final de 5, 
                sumando 20 partidos en total.
            </p>
            <p className='pf2 sa'>
                <strong>R3: Primera fase:</strong> Para la primera fase del campeonato (de confirmación), se 
                utilizara el sistema suizo, y en este participaran conjuntamente los paralelos de los 2 
                niveles.
            </p>
            <p className='pf2 sa'>
                <strong>R4: Fase final:</strong> A la fase final del campeonato (de confirmación), llegaran 
                los 6 mejores equipos de la primera fase, los cuales se enfrentaran en cuartos, semifinal y 
                final, para definir al campeón.
            </p>
            <p className='pf2 sa'>
                <strong>R5: [Resumen]</strong> La manera mas facil de entender cuales seran los equipos que 
                participaran en la fase final es la siguiente: "Todo equipo que gane 2 partidos estara 
                automaticamente en la fase final".
            </p>
            <p className='pf2 sa'>
                <strong>R6: Partidos empatados:</strong> Con el antecedente de la regla anterior y por ese 
                motivo, en el campeonato (de confirmación) no podra haber partidos empatados, por lo que de 
                darse un empate se procedra a desempatarlo, segun la regla 7.
            </p>
            <p className='pf2 sa'>
                <strong>R7: Forma de desempatar partidos:</strong> En caso de empate en uno de los partidos, se definira el mismo, con el 
                siguiente procedimiento:<br/>
                • Primeramente se jugara 2 tiempos de 4 minutos para el desempate del partido.<br/>
                • Si el partido sigue empatado al finalizar los 2 tiempos extra, se realizara el desempate 
                mediante tiros penales.<br/>
                • Cada equipo cobrara 4 tiros penales para el desempate del partido.<br/>
                • Si el partido sigue empatado al finalizar los 4 penales por equipo, se realizara el 
                desempate mediante tiros penales en muerte subita.
            </p>
            <p className='pf2 sa'>
                <strong>R8: PRIMERA FECHA:</strong> En la primera fecha se enfrentaran los 12 equipos en 6 
                partidos, los enfrentamientos seran definidos por sorteo el día de la inauguración. Cada 
                madrina elegira el enfrentamiento de su equipo.
            </p>
            <table className='t1'>
                <tr>
                    <td className='tmp'>A</td>
                    <td>E1 vs. E2</td>
                </tr>
                <tr>
                    <td className='tmp'>B</td>
                    <td>E3 vs. E4</td>
                </tr>
                <tr>
                    <td className='tmp'>C</td>
                    <td>E5 vs. E6</td>
                </tr>
                <tr>
                    <td className='tmp'>D</td>
                    <td>E7 vs. E8</td>
                </tr>
                <tr>
                    <td className='tmp'>E</td>
                    <td>E9 vs. E10</td>
                </tr>
                <tr>
                    <td className='tmp'>F</td>
                    <td>E11 vs. E12</td>
                </tr>
            </table>
            <p className='pf2 sa'>
                <strong>R9: Conteo:</strong> En el conteo se mostrara la cantidad de partidos ganados y la 
                cantidad de partidos perdidos de la siguiente manera.<br/>
                [Partidos ganados (izq.) - Partidos perdidos (der.)].<br/>
                <i>Ejemplo: 1 equipo con 1 partido ganado y 0 perdidos, su conteo se mostrara de la siguiente 
                forma [1 - 0].</i>
            </p>
            <p className='pf2 sa'>
                <strong>R10: Ganadores primera fecha:</strong> Los ganadores de la primera fecha en su conteo 
                tendran lo siguiente [1 - 0], y ademas pasaran a formar parte del grupo de ganadores (6 equipos).<br/>
                <i>Para ejemplificar se tomara como si los equipos de la izquierda de la tabla (R8) fueron 
                los ganadores.</i>
            </p>
            <table className='t21'>
                <tr>
                    <td colSpan={3} className='tmp'>Ganadores</td>
                </tr>
                <tr>
                    <td className='tp'>E1</td>
                    <td className='tp'>E3</td>
                    <td className='tp'>E5</td>
                </tr>
                <tr>
                    <td className='tp'>E7</td>
                    <td className='tp'>E9</td>
                    <td className='tp'>E11</td>
                </tr>
            </table>
            <p className='pf2 sa'>
                <strong>R11: Perdedores primera fecha:</strong> Los perdedores de la primera fecha en su conteo 
                tendran lo siguiente [0 - 1], y ademas pasaran a formar parte del grupo de perdedores (6 equipos).<br/>
                <i>Para ejemplificar se tomara como si los equipos de la derecha de la tabla (R8) fueron 
                los perdedores.</i>
            </p>
            <table className='t21'>
                <tr>
                    <td colSpan={3} className='tmp'>Perdedores</td>
                </tr>
                <tr>
                    <td className='tp'>E2</td>
                    <td className='tp'>E4</td>
                    <td className='tp'>E6</td>
                </tr>
                <tr>
                    <td className='tp'>E8</td>
                    <td className='tp'>E10</td>
                    <td className='tp'>E12</td>
                </tr>
            </table>
            <p className='pf2 sa'>
                <strong>R12: SEGUNDA FECHA (ganadores):</strong> Los equipos que forman parte del grupo de 
                ganadores (6 equipos) se enfrentaran en 3 partidos, la forma en la que se enfrentaran se 
                muestra a continuación:
            </p>
            <table className='t10'>
                <tr>
                    <td className='tp'>1</td>
                    <td className='tlarge'>Ganador A</td>
                    <td className='tp'>Vs.</td>
                    <td className='tlarge'>Ganador B</td>
                </tr>
                <tr>
                    <td className='tp'>2</td>
                    <td className='tlarge'>Ganador C</td>
                    <td className='tp'>Vs.</td>
                    <td className='tlarge'>Ganador D</td>
                </tr>
                <tr>
                    <td className='tp'>3</td>
                    <td className='tlarge'>Ganador E</td>
                    <td className='tp'>Vs.</td>
                    <td className='tlarge'>Ganador F</td>
                </tr>
            </table>
            <p className='pf2 sa'>
                • Los equipos que resultaran ganadores, clasificaran a la fase final con un conteo de [2 - 0].<br/>
                • Los equipos que resultaran perdedores, tendran un conteo de [1 - 1], deberan jugar otro 
                partido contra los ganadores de los partidos del grupo de perdedores.
            </p>
            <p className='pf2 sa'>
                <strong>R13: SEGUNDA FECHA (perdedores):</strong> Los equipos que forman parte del grupo de 
                perdedores (6 equipos) se enfrentaran en 3 partidos, la forma en la que se enfrentaran se 
                muestra a continuación:
            </p>
            <table className='t10'>
                <tr>
                    <td className='tp'>1</td>
                    <td className='tlarge'>Perdedor A</td>
                    <td className='tp'>Vs.</td>
                    <td className='tlarge'>Perdedor B</td>
                </tr>
                <tr>
                    <td className='tp'>2</td>
                    <td className='tlarge'>Perdedor C</td>
                    <td className='tp'>Vs.</td>
                    <td className='tlarge'>Perdedor D</td>
                </tr>
                <tr>
                    <td className='tp'>3</td>
                    <td className='tlarge'>Perdedor E</td>
                    <td className='tp'>Vs.</td>
                    <td className='tlarge'>Perdedor F</td>
                </tr>
            </table>
            <p className='pf2 sa'>
                • Los equipos que resultaran ganadores, tendran un conteo de [1 - 1], deberan jugar otro 
                partido contra los perdedores de los partidos del grupo de ganadores.<br/>
                • Los equipos que resultaran perdedores, lamentablemente estaran eliminados del campeonato 
                con un conteo de [0 - 2].
            </p>
            <p className='pf2 sa'>
                <strong>R14: TERCERA FECHA (comodin):</strong> Los equipos que forman parte del grupo de 
                perdedores (6 equipos) se enfrentaran en 3 partidos, la forma en la que se enfrentaran se 
                muestra a continuación:
            </p>
            <table className='t11'>
                <tr>
                    <td className='tlarge11'>Ganador<br/>(Partido 1 Perdedores)</td>
                    <td className='tp'>Vs.</td>
                    <td className='tlarge11'>Perdedor<br/>(Partido 1 Ganadores)</td>
                </tr>
                <tr>
                    <td className='tlarge11'>Ganador<br/>(Partido 2 Perdedores)</td>
                    <td className='tp'>Vs.</td>
                    <td className='tlarge11'>Perdedor<br/>(Partido 2 Ganadores)</td>
                </tr>
                <tr>
                    <td className='tlarge11'>Ganador<br/>(Partido 3 Perdedores)</td>
                    <td className='tp'>Vs.</td>
                    <td className='tlarge11'>Perdedor<br/>(Partido 3 Ganadores)</td>
                </tr>
            </table>
            <p className='pf2 sa'>
                • Los equipos que resultaran ganadores, clasificaran a la fase final con un conteo de [2 - 1].<br/>
                • Los equipos que resultaran perdedores, lamentablemente estaran eliminados del campeonato 
                con un conteo de [1 - 2].
            </p>
            <p className='pf2 sa'>
                <strong>R15: Ubicación gandores para la fase final:</strong> Los equipos 3 equipos que 
                ganaron sus 2 partidos sin perder ninguno, es decir con conteo [2 - 0], se ubicaran en una 
                tabla para escoger los 2 primeros.<br/>
                Se podra desempatar con estos criterios:<br/>
                • Primeramente mejor ubicación para el equipo que haya ganado sus partidos en el tiempo regular.<br/>
                • Mejor ubicación para el equipo que haya ganado más partidos en el tiempo regular.<br/>
                • Mejor ubicación para el equipo que haya ganado mas partidos en tiempo extra.<br/>
                • Mejor gol diferencia en sus partidos solo contando tiempo regular.<br/>
                • Mayor cantidad de goles anotados en sus partidos solo contando tiempo regular.<br/>
                • Menor cantidad de goles recibidos en sus partidos solo contando tiempo regular.<br/>
                • Sorteo.<br/>
            </p>
            <p className='pf2 sa'>
                Los 2 primeros equipos en la tabla planteada, pasaran directamente a semifinales, mientras 
                que el equipo en 3er lugar jugara los cuartos de final.
            </p>
            <p className='pf2 sa'>
                <strong>R16: CUARTOS DE FINAL:</strong> En los cuartos de final se enfrentaran los 3 
                ganadores de la fecha comodin, en decir la tercera fecha (R14) y el equipo tercero en 
                la tabla de ganadores con conteo [2 - 0] (R15). Los enparejamientos se realizaran mediante 
                sorteo con las madrinas de cada equipo al igual que en la inauguración.
            </p>
            <p className='pf2 sa'>
                <strong>R17: SEMIFINAL:</strong> En las semifinales se enfrentaran los 2 mejores equipos con 
                conteo [2 - 0] (R15) y los ganadores de los partidos de cuartos de final. Los enparejamientos 
                se realizaran mediante sorteo con las madrinas de cada equipo a cada equipo con conteo [2 - 0], 
                se le sorteara un equipo ganador de cuartos de final.
            </p>
            <p className='pf2 sa'>
                <strong>R18: FINAL:</strong> La final es la última etapa del Campeonato, en donde se 
                enfrentarán los 2 mejores equipos del campeonato, los ganadores de las semifinales. El 
                ganador será declarado el campeón del campeonato de Confirmación 2025. 
            </p>
            
            <style jsx>{`
                section{
                    padding-top: 10px;
                    font-family: 'Lato', sans-serif;
                }

                .pf2{
                    margin-top: 15px;
                    font-size: 17px;
                    font-weight: 200;
                    margin-bottom: 20px;
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
                    margin-top: 10px;
                    display: flex;
                    flex-wrap: wrap;
                    margin-bottom: 20px;
                }

                .sb{
                    margin-top: 25px;
                }

                .sa{
                    margin-bottom: 0px;
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
                }

                .ta-pos table{
                    margin: 8px 10px 0 10px;
                }

                .tlarge{
                    width: 100px;
                }

                .tmp{
                    width: 30px;
                }

                .t10{
                    margin-top: 8px;
                    margin-left: calc(50% - 140px);
                }

                .t11{
                    margin-top: 8px;
                    margin-left: calc(50% - 220px);
                }

                .tlarge11{
                    width: 200px;
                }

                @media screen and (max-width: 768px){
                    .cont-logos{
                        width: 100%;
                        margin-top: 10px;
                        display: flex;
                        justify-content: space-around;
                        flex-wrap: wrap;
                        margin-bottom: 20px;
                    }

                    .t1{
                        margin-left: calc(50% - 72px);
                    }

                    .t21{
                        margin-left: calc(50% - 62px);
                    }

                    .t10{
                        margin-left: calc(50% - 145px);
                    }

                    .t11{
                        margin-left: calc(50% - 155px);
                    }

                    .tlarge11{
                        width: 130px;
                    }
                }
            `}</style>
        </section> 
    )
}

export default FormatoConfMas