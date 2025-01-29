import Equipo from '../Equipo'

const FormatoConfMas = ({ sin }) => {

    return (
        <section>
            { !sin && <strong className='strongo'>Formato Equipos Masculinos</strong> }
            <p className='sa'>
                <strong>R1: Participantes:</strong> En el campeonato masculino de confirmación, participarán 12 
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
                    nombre='Juntos con Cristo FC'
                    paralelo='1 Confir. AB Ángeles (M)'
                    logo='1AM'
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
                    nombre='Traicioneros como Judas'
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
            <p>
                <strong>R2: Fases:</strong> El campeonato masculino de confirmación, se desarrollará en 2 fases: 
                primera y fase final. La primera fase estará compuesta de 15 partidos y la fase final de 5, 
                sumando 20 partidos en total.
            </p>
            <p>
                <strong>R3: Primera fase:</strong> Para la primera fase del campeonato masculino de confirmación, se 
                utilizará el sistema suizo, y en este participarán conjuntamente los paralelos de los 2 
                niveles.
            </p>
            <p>
                <strong>R4: Fase final:</strong> A la fase final del campeonato masculino de confirmación, llegaran 
                los 6 mejores equipos de la primera fase, los cuales se enfrentaran en cuartos, semifinales y 
                final, para definir al campeón.
            </p>
            <p>
                <strong>R5: [Resumen]</strong> La manera más fácil de entender cuáles serán los equipos que 
                participarán en la fase final es la siguiente: "Todo equipo que gane 2 partidos estará 
                automáticamente en la fase final".
            </p>
            <p>
                <strong>R6: Partidos empatados:</strong> Con el antecedente de la regla anterior y por ese 
                motivo, en el campeonato masculino de confirmación no podrá haber partidos empatados, por lo que de 
                darse un empate, se procedrá a desempatarlo, según la regla 7.
            </p>
            <p>
                <strong>R7: Forma de desempatar partidos:</strong> En caso de empate en uno de los partidos, se definirá el mismo, con el 
                siguiente procedimiento:<br/>
                • Primeramente se jugará 2 tiempos de 4 minutos para el desempate del partido.<br/>
                • Si el partido sigue empatado al finalizar los 2 tiempos extra, se realizará el desempate 
                mediante tiros penales.<br/>
                • Cada equipo cobrará 4 tiros penales para el desempate del partido.<br/>
                • Si el partido sigue empatado al finalizar los 4 penales por equipo, se realizará el 
                desempate mediante tiros penales en muerte súbita.
            </p>
            <p>
                <strong>R8: PRIMERA FECHA:</strong> En la primera fecha se enfrentarán los 12 equipos en 6 
                partidos, los enfrentamientos serán definidos por sorteo el día de la inauguración. Cada 
                madrina elegirá el enfrentamiento de su equipo.
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
            <p>
                <strong>R9: Conteo:</strong> En el conteo se mostrará la cantidad de partidos ganados y la 
                cantidad de partidos perdidos de la siguiente manera.<br/>
                [Partidos ganados (izq.) - Partidos perdidos (der.)].<br/>
                <i>Ejemplo: 1 equipo con 1 partido ganado y 0 perdidos, su conteo se mostrará de la siguiente 
                forma: [1 - 0].</i>
            </p>
            <p>
                <strong>R10: Ganadores primera fecha:</strong> Los ganadores de la primera fecha en su conteo 
                tendrán lo siguiente: [1 - 0], y además pasarán a formar parte del grupo de ganadores (6 equipos).<br/>
                <i>Para ejemplificar, se tomará como si los equipos de la izquierda de la tabla (R8) fueron 
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
            <p>
                <strong>R11: Perdedores primera fecha:</strong> Los perdedores de la primera fecha en su conteo 
                tendrán lo siguiente: [0 - 1], y además pasarán a formar parte del grupo de perdedores (6 equipos).<br/>
                <i>Para ejemplificar, se tomará como si los equipos de la derecha de la tabla (R8) fueron 
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
            <p>
                <strong>R12: SEGUNDA FECHA (ganadores):</strong> Los equipos que forman parte del grupo de 
                ganadores (6 equipos) se enfrentarán en 3 partidos. La forma en la que se enfrentarán se 
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
            <p>
                • Los equipos que resultaran ganadores, clasificarán a la fase final con un conteo de [2 - 0].<br/>
                • Los equipos que resultaran perdedores, tendrán un conteo de [1 - 1], deberán jugar otro 
                partido contra los ganadores de los partidos del grupo de perdedores.
            </p>
            <p>
                <strong>R13: SEGUNDA FECHA (perdedores):</strong> Los equipos que forman parte del grupo de 
                perdedores (6 equipos) se enfrentarán en 3 partidos. La forma en la que se enfrentarán se 
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
            <p>
                • Los equipos que resultaran ganadores, tendrán un conteo de [1 - 1], deberán jugar otro 
                partido contra los perdedores de los partidos del grupo de ganadores.<br/>
                • Los equipos que resultaran perdedores, lamentablemente estarán eliminados del campeonato 
                con un conteo de [0 - 2].
            </p>
            <p>
                <strong>R14: TERCERA FECHA (comodín):</strong> Los 3 equipos que perdieron la segunda fecha de 
                ganadores (R12) y  los 3 equipos que ganaron la segunda fecha de perdedores (R13), en total 6 
                equipos, se enfrentarán en 3 partidos con la última oportunidad de clasificar. La forma en la 
                que se enfrentarán se muestra a continuación:
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
            <p>
                • Los equipos que resultaran ganadores, clasificarán a la fase final con un conteo de [2 - 1].<br/>
                • Los equipos que resultaran perdedores, lamentablemente estarán eliminados del campeonato 
                con un conteo de [1 - 2].
            </p>
            <p>
                <strong>R15: Ubicación ganadores para la fase final:</strong> Los 3 equipos que 
                ganaron sus 2 partidos sin perder ninguno, es decir: con conteo [2 - 0], se ubicarán en una 
                tabla para escoger los 2 primeros.<br/>
                Se podrá desempatar con estos criterios:<br/>
                • Primeramente, mejor ubicación para el equipo que haya ganado sus partidos en el tiempo regular.<br/>
                • Mejor ubicación para el equipo que haya ganado más partidos en el tiempo regular.<br/>
                • Mejor ubicación para el equipo que haya ganado más partidos en tiempo extra.<br/>
                • Mejor gol diferencia en sus partidos solo contando tiempo regular.<br/>
                • Mayor cantidad de goles anotados en sus partidos solo contando tiempo regular.<br/>
                • Menor cantidad de goles recibidos en sus partidos solo contando tiempo regular.<br/>
                • Sorteo.<br/>
            </p>
            <p>
                Los 2 primeros equipos en la tabla planteada, pasarán directamente a semifinales, mientras 
                que el equipo en 3er lugar jugará los cuartos de final.
            </p>
            <p>
                <strong>R16: CUARTOS DE FINAL:</strong> En los cuartos de final se enfrentarán los 3 
                ganadores de la fecha comodín, es decir la tercera fecha (R14) y el equipo tercero en 
                la tabla de ganadores con conteo [2 - 0] (R15). Los emparejamientos se realizarán mediante 
                sorteo con las madrinas de cada equipo, al igual que en la inauguración.
            </p>
            <p>
                <strong>R17: SEMIFINAL:</strong> En las semifinales se enfrentarán los 2 mejores equipos con 
                conteo [2 - 0] (R15) y los ganadores de los partidos de cuartos de final. Los emparejamientos 
                se realizarán mediante sorteo con las madrinas de cada equipo, a cada equipo con conteo [2 - 0], 
                se le sorteara un equipo ganador de cuartos de final.
            </p>
            <p>
                <strong>R18: FINAL:</strong> La final es la última etapa del campeonato, en donde se 
                enfrentarán los 2 mejores equipos del campeonato, ganadores de las semifinales. El 
                ganador será declarado el campeón del campeonato masculino de Confirmación 2025. 
            </p>
            
            <style jsx>{`
                section{
                    font-family: 'Lato', sans-serif;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
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
                }

                .t21{
                    margin-top: 8px;
                }

                .t2{
                    margin-top: 8px;
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
                }

                .t11{
                    margin-top: 8px;
                }

                .tlarge11{
                    width: 200px;
                }

                @media screen and (max-width: 768px){
                    p{
                        margin-top: 12px;
                        font-size: 16px;
                    }

                    .cont-logos{
                        width: 100%;
                        margin-top: 10px;
                        display: flex;
                        justify-content: space-around;
                        flex-wrap: wrap;
                        margin-bottom: 20px;
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