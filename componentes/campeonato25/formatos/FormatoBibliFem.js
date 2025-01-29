import Equipo from '../Equipo'

const FormatoBibliFem = ({ sin }) => {

    return (
        <section>
            { !sin && <strong className='strongo'>Formato Equipos Femeninos</strong> }
            <p className='sa'>
                <strong>R1: Participantes:</strong> En el campeonato femenino de año bíblico, participarán 
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
                    nombre='Camino a la Tierra Prometída'
                    paralelo='Año Bíblico 5 (F)'
                    logo='A5F'
                    color='white'
                    borde='black'
                    letter='black'
                />
            </div>
            <p>
                <strong>R2: Fases:</strong> El campeonato femenino de año bíblico, se desarrollará en 2 fases, 
                primera y final. La primera fase estará compuesta de 6 partidos, que sumando la final, serían 
                7 partidos en total.
            </p>
            <p>
                <strong>R3: PRIMERA FASE:</strong> En la primera fase los equipos formarán parte de 1 grupo y 
                deberán jugar 3 partidos, enfrentando al resto de equipos de su grupo. La ubicación en el 
                grupo será mediante sorteo.
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
            <p>
                <strong>R4: FINAL:</strong> La final es la última etapa del Campeonato, en donde se 
                enfrentarán los 2 mejores equipos de la tabla de posiciones. Las ganadoras serán declaradas  
                como las campeonas del campeonato femenino de Año Bíblico 2025. 
            </p>
            <p>
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

                .sb{
                    margin-top: 25px;
                }

                .t1{
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

                @media screen and (max-width: 768px){
                    p{
                        margin-top: 12px;
                        font-size: 16px;
                    }

                    .cont-logos{
                        margin-top: 10px;
                        display: flex;
                        justify-content: space-around;
                        flex-wrap: wrap;
                        margin-bottom: 20px;
                    }
                }
            `}</style>
        </section> 
    )
}

export default FormatoBibliFem