const Inauguracion = () => {

    return (
        <section>
            <p className='pf1'>Inauguración Campeonato 2025</p>
            <p className='pf2 sa'>
                <strong>Fecha:</strong> La inauguración se llevará a cabo el día sábado 11 de enero del 
                2025, a partir de las 13H45, en el patio de la Catequesis.
            </p>
            <p className='pf2 sa'>
                <strong>Cronograma:</strong> Cronograma para el día de la inauguración:
            </p>
            <div>
                <table>
                    <tr>
                        <td><strong>Hora</strong></td>
                        <td><strong>Actividad</strong></td>
                        <td><strong>Detalle</strong></td>
                    </tr>
                    <tr>
                        <td>13H45</td>
                        <td>Formación</td>
                        <td>Formación, oración, indicaciones y paso a las aulas.</td>
                    </tr>
                    <tr>
                        <td>14H00</td>
                        <td>Preparación en la aulas</td>
                        <td>Preparación de cada paralelo en su aula.</td>
                    </tr><tr>
                        <td>14H30</td>
                        <td>Inauguración</td>
                        <td>Alumnos que desfilan pasan al teatro, alumnos restantes al patio.13H45</td>
                    </tr>
                    <tr>
                        <td>15H30</td>
                        <td>Partido Ida Catequistas</td>
                        <td>Catequistas de Confirmación (locales) apoyados por sus alumnos contra los catequistas de Comunión.</td>
                    </tr>
                    <tr>
                        <td>16H30</td>
                        <td>Salida</td>
                        <td>Finalización de la jornada de catequesis.</td>
                    </tr>
                </table>
            </div>
            
            <style jsx>{`
                section{
                    font-family: 'Lato', sans-serif;
                }

                .pf1{
                    font-size: 20px;
                    font-weight: bold;
                }

                .pf2{
                    margin-top: 15px;
                    font-size: 17px;
                    font-weight: 200;
                    margin-bottom: 20px;
                }

                .st{
                    margin-top: 5px;
                    margin-bottom: 25px;
                }

                .sb{
                    margin-top: 25px;
                }

                .sa{
                    margin-bottom: 0px;
                }

                div{
                    display: flex;
                    justify-content: center;
                }

                table{
                    margin-top: 8px;
                }

                td{
                    padding: 1px 5px 2px 5px;
                    font-size: 16px;
                    font-weight: 300;
                    text-align: center;
                    border: 1px solid black;
                }
            `}</style>
        </section> 
    )
}

export default Inauguracion