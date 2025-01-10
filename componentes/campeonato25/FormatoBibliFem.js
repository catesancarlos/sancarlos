import Equipo from './Equipo'

const FormatoBibliFem = ({ sin }) => {

    return (
        <section>
            { !sin && <strong className='strongo'>Formato Equipos Femeninos</strong> }
            <p className='pf2 sb sa'>
                <strong>R1: Participantes:</strong> En el campeonato femenino (de año bíblico), participaran 
                4 equipos que representan a los paralelos de año bíblico.
            </p>
            <div className='cont-logos'>
                <Equipo
                    nombre='Las Herederas de Dios'
                    paralelo='Año Bíblico 1 (F)'
                    logo='A1F'
                    color='white'
                    borde='black'
                    letter='black'
                />
                <Equipo
                    nombre='Las Misioneras'
                    paralelo='Año Bíblico 2 (F)'
                    logo='A2F'
                    color='white'
                    borde='black'
                    letter='black'
                />
                <Equipo
                    nombre='Mujeres de Nazareth'
                    paralelo='Año Bíblico 4 (F)'
                    logo='A4F'
                    color='red'
                    borde='red'
                    letter='white'
                />
                <Equipo
                    nombre='Bíblicas 5'
                    paralelo='Año Bíblico 5 (F)'
                    logo='A5F'
                    color='white'
                    borde='black'
                    letter='black'
                />
            </div>
            <p className='pf2 sa'>
                <strong>R2: Fases:</strong> El campeonato (de año bíblico), se desarrollara en 2 fases, 
                primera y final, la primera fase estara compuesta de 6 partidos y sumando la final, seria 
                7 partidos en total.
            </p>
            <p className='pf2 sa'>
                <strong>R3: PRIMERA FASE:</strong> En la primera fase los equipos formaran parte de 1 grupo y 
                deberan jugar 3 partidos, enfrentando al resto de equipos de su grupo. La ubicación en el 
                grupo sera mediante sorteo con ayuda de las madrinas de cada equipo.
            </p>
            <table className='t1'>
                <tr>
                    <td>A1 vs. A2</td>
                    <td>A3 vs. A4</td>
                </tr>
                <tr>
                    <td>A1 vs. A3</td>
                    <td>A2 vs. A4</td>
                </tr>
                <tr>
                    <td>A4 vs. A1</td>
                    <td>A2 vs. A3</td>
                </tr>
            </table>
            <p className='pf2 sa'>
                <strong>R4: FINAL:</strong> La final es la última etapa del Campeonato, en donde se 
                enfrentarán los 2 mejores equipos de la tabla de posiciones. El ganador será declarado el 
                campeón del campeonato de Año Bíblico 2025. 
            </p>
            <p className='pf2 sa'>
                <strong>R5: Criterios de desempate (en la Final):</strong> En caso de empate al terminar el 
                partido Final, se procederá a:<br/>
                1. Se jugarán dos tiempos de 4 minutos cada uno.<br/>
                2. Si el empate continua, se procederá a realizar la definición por medio de los tiros 
                penales (4 cada equipo).<br/>
                3. Si el empate persistiese, quedara campeón el que haya tenido la mejor ubicación en en la 
                tabla de posiciones entre los 2 equipos finalistas.
            </p>

            <style jsx>{`
                section{
                    padding-top: ${sin ? '10px' : '0'};
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

                td{
                    width: 110px;
                    padding: 1px 5px 2px 5px;
                    font-size: 16px;
                    font-weight: 300;
                    text-align: center;
                    border: 1px solid black;
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
                }
            `}</style>
        </section> 
    )
}

export default FormatoBibliFem