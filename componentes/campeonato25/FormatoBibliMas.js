import Equipo from './Equipo'

const FormatoBibliMas = ({ sin }) => {

    return (
        <section>
            { !sin && <strong className='strongo'>Formato Equipos Masculinos</strong> }
            <p className='pf2 sb sa'>
                <strong>R1: Participantes:</strong> En el campeonato masculino de año bíblico, participarán 6 equipos 
                que representan a los 6 paralelos de año bíblico.
            </p>
            <div className='cont-logos'>
                <Equipo
                    nombre='Los Hermanos de Jesus'
                    paralelo='Año Bíblico 1 (M)'
                    logo='A1M'
                    color='white'
                    borde='black'
                    letter='black'
                />
                <Equipo
                    nombre='Los Misioneros'
                    paralelo='Año Bíblico 2 (M)'
                    logo='A2M'
                    color='white'
                    borde='black'
                    letter='black'
                />
                <Equipo
                    nombre='Los Ángeles Bíblicos'
                    paralelo='Año Bíblico 3 (M)'
                    logo='A3M'
                    color='white'
                    borde='black'
                    letter='black'
                />
                <Equipo
                    nombre='Equipo de Dios'
                    paralelo='Año Bíblico 4 (M1)'
                    logo='A4M'
                    color='red'
                    borde='red'
                    letter='white'
                    mas='1'
                />
                <Equipo
                    nombre='Equipo Glorioso'
                    paralelo='Año Bíblico 4 (M2)'
                    logo='A4M'
                    color='blue'
                    borde='blue'
                    letter='white'
                    mas='2'
                />
                <Equipo
                    nombre='Camino a la Tierra Prometída'
                    paralelo='Año Bíblico 5 (M)'
                    logo='A5M'
                    color='white'
                    borde='black'
                    letter='black'
                />
            </div>
            <p className='pf2 sa'>
                <strong>R2: Fases:</strong> El campeonato masculino de año bíblico, se desarrollará en 2 fases, 
                primera y fase final. La primera fase estará compuesta de 9 partidos y la fase final de 3, 
                sumando 12 partidos en total.
            </p>
            <p className='pf2 sa'>
                <strong>R3: Ubicación:</strong> En la primera fase del campeonato, los 6 equipos serán 
                ubicados en 2 grupos de 3 equipos. Los equipos serán ubicados mediante sorteo en los grupos 
                A y B.
            </p>
            <p className='pf2 sa'>
                <strong>R4: Primera fase (enfrentamientos):</strong> En la primera fase, los equipos tendrán 
                3 partidos, 2 de estos enfrentando al resto de equipos de su grupo (R5) y 1 partido contra 
                el equipo que sacó su misma ubicación en el sorteo, pero del otro grupo (R6).
            </p>
            <p className='pf2 sa'>
                <strong>R5: Enfrentamientos mismo grupo:</strong> Cada equipo deberá enfrentarse a los 2 
                equipos que forman parte de su grupo.<br/>
                <i>Ejemplo: si un equipo por sorteo quedaría ubicado en el grupo B, posición 1, es decir 
                B1, debería enfrentarse a los equipos B2 y B3 (2 partidos).</i>
            </p>
            <table className='t1'>
                <tr>
                    <td>A1 vs. A2</td>
                    <td>B1 vs. B2</td>
                </tr>
                <tr>
                    <td>A1 vs. A3</td>
                    <td>B1 vs. B3</td>
                </tr>
                <tr>
                    <td>A2 vs. A3</td>
                    <td>B2 vs. B3</td>
                </tr>
            </table>
            <p className='pf2 sa'>
                <strong>R6: Enfrentamiento contra el equipo con su misma ubicación, pero del otro grupo:</strong> Cada 
                equipo deberá enfrentar 1 partido contra el equipo que sacó su misma ubicación en el sorteo, 
                pero del otro grupo.<br/>
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
            </table>
            <p className='pf2 sa'>
                <strong>R7: Clasificación:</strong> Para la fase final, clasificarán solamente los 2 equipos 
                que tengan el mejor puntaje en cada grupo, es decir que hayan terminado primero y segundo en 
                la tabla de posiciones de cada uno de los grupos, como se muestra a continuación.
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
                        <td><i>Eliminado</i></td>
                    </tr>
                </table>
            </div>
            <p className='pf2 sa'>
                <strong>R8: Criterios de desempate en Primera Fase:</strong> En caso que al finalizar la 
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
            <p className='pf2 sa'>
                <strong>R9: Fase final:</strong> La fase final la conforman 2 etapas (semifinales y final), 
                con formato de eliminación directa. En esta fase participarán 4 equipos, los 2 mejores de 
                cada grupo A y B, estos 4 equipos se enfrentarán de la siguiente forma y los ganadores 
                avanzarán a la final.
            </p>
            <table className='t3'>
                <tr>
                    <td className='tlarge'>1er lugar Grupo A</td>
                    <td className='tp'>Vs.</td>
                    <td className='tlarge'>2do lugar Grupo B</td>
                </tr>
                <tr>
                    <td className='tlarge'>1er lugar Grupo B</td>
                    <td className='tp'>Vs.</td>
                    <td className='tlarge'>2do lugar Grupo A</td>
                </tr>
            </table>
            <p className='pf2 sa'>
                <strong>R10: Criterios de desempate (en la semifinal):</strong> En caso de empate en goles 
                al finalizar los partidos de semifinal, se procederá a:<br/>
                1. Realizar directamente la definición por medio de los tiros penales (4 cada equipo).<br/>
                2. De persistir el empate después de los 5 lanzamientos por equipo, clasificará el que haya 
                tenido la mejor ubicación en la “Tabla general fase regular” (R13). 
            </p>
            <p className='pf2 sa'>
                <strong>R11: FINAL:</strong> La final es la última etapa del campeonato, en donde se 
                enfrentarán los 2 mejores equipos del campeonato, ganadores de las semifinales. El 
                ganador será declarado el campeón del campeonato masculino de Año Bíblico 2025. 
            </p>
            <p className='pf2 sa'>
                <strong>R12: Criterios de desempate (en la Final):</strong> En caso de empate al terminar el 
                partido final, se procederá a:<br/>
                1. Se jugarán dos tiempos de 4 minutos cada uno.<br/>
                2. Si el empate continúa, se procederá a realizar la definición por medio de los tiros 
                penales (4 cada equipo).<br/>
                3. Si el empate persistiese, quedara campeón el que haya tenido la mejor ubicación en la 
                “Tabla general fase regular" (R13).
            </p>
            <p className='pf2 sa'>
                <strong>R13: Tabla general fase regular:</strong> Una vez concluida la primera fase, con la 
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
                    <td className='tp'>15</td>
                    <td className='tp'>+9</td>
                    <td className='tp'>10</td>
                    <td className='tp'>1</td>
                </tr>
                <tr>
                    <td className='tmp'>2</td>
                    <td className='tlarge2'>B3</td>
                    <td className='tp'>12</td>
                    <td className='tp'>+6</td>
                    <td className='tp'>9</td>
                    <td className='tp'>3</td>
                </tr>
                <tr>
                    <td className='tmp'>3</td>
                    <td className='tlarge2'>A3</td>
                    <td className='tp'>12</td>
                    <td className='tp'>+3</td>
                    <td className='tp'>9</td>
                    <td className='tp'>6</td>
                </tr>
                <tr>
                    <td className='tmp'>4</td>
                    <td className='tlarge2'>B2</td>
                    <td className='tp'>11</td>
                    <td className='tp'>+3</td>
                    <td className='tp'>6</td>
                    <td className='tp'>3</td>
                </tr>
                <tr>
                    <td className='tmp'>5</td>
                    <td className='tlarge2'>A2</td>
                    <td className='tp'>10</td>
                    <td className='tp'>+3</td>
                    <td className='tp'>4</td>
                    <td className='tp'>1</td>
                </tr>
                <tr>
                    <td className='tmp'>6</td>
                    <td className='tlarge2'>A1</td>
                    <td className='tp'>10</td>
                    <td className='tp'>-1</td>
                    <td className='tp'>3</td>
                    <td className='tp'>4</td>
                </tr>
            </table>

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
                    margin-left: calc(50% - 100px);
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

                .ta-pos table{
                    margin: 8px 10px 0 10px;
                }

                .t3{
                    margin-top: 8px;
                    margin-left: calc(50% - 120px);
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

                    .t1{
                        margin-left: calc(50% - 115px);
                    }

                    .t2{
                        margin-left: calc(50% - 55px);
                    }

                    .ta-pos{
                        margin-left: calc(50% - 175px);
                    }

                    .t3{
                        margin-left: calc(50% - 125px);
                    }
                }
            `}</style>
        </section> 
    )
}

export default FormatoBibliMas