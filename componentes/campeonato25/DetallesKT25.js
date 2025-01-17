const DetallesKT25 = () => {

    return (
        <div>
            <p className='pf1'>Bienvenidos al Campeonato 2025</p>
            <p className='pf2'>
                Con la finalidad de fomentar el desarrollo deportivo y de compañerismo en nuestros alumnos, 
                paralelamente a las actividades de desarrollo humano y espiritual impartidas en nuestra 
                catequesis, presentamos el Campeonato de la Catequesis San Carlos de Ricaurte 2025, en el 
                cual participarán nuestros alumnos.
            </p>
            <strong>Objetivos</strong>
            <p className='pf2'>
                • Fomentar el ambiente y ánimo deportivo en cada uno de los alumnos y de los catequistas.<br/>
                • Fortalecer los lazos de amistad y respeto entre todos los jugadores, animando el mejor desarrollo físico reflejado en el deporte.<br/>
                • Realizar espacios de esparcimiento deportivo, en los cuales puedan tener participación nuestros alumnos.<br/>
                • Impulsar mutuamente el compañerismo y la fraternidad en cada uno de los grupos.<br/>
            </p>
            <strong>Participantes</strong>
            <p className='pf2 sb'>
                El campeonato para este año va dirigido a los alumnos de todos los niveles (desde 
                Iniciación hasta Segundo de Confirmación) y para las comunidades de la Catequesis San Carlos
                de Ricaurte, tanto para varones como mujeres, y será dividido por niveles. Cada paralelo 
                deberá escoger a los(as) jugadores(as), para representar al mismo.
            </p>
            <p className='pf2'>
                El campeonato también está dirigido para catequistas, en esta ocasión se enfrentarán los
                catequistas de la tarde contra los catequistas de la mañana, en partidos de ida y vuelta, 
                haciendo de local y visitante en sus respectivos horarios.
            </p>
            <strong>Lugar del campeonato</strong>
            <p className='pf2'>
                El campeonato para todos (alumnos en general y catequistas) se llevará a cabo en los patios 
                de la catequesis.
            </p>
            <strong>Partidos</strong>
            <p className='pf2'>
                La duración de un partido, dependiendo del nivel de cada equipo es el siguiente:<br/>
                • <strong>Niveles de Confirmación:</strong> Cada partido es de 40 minutos, dividido en 2 
                tiempos de 20 minutos.<br/>
                • <strong>Niveles de Comunión:</strong> Por definir.
            </p>
            <strong>Disciplina</strong>
            <p className='pf2 sb'>
                El Campeonato es de futbol sala, por lo que se tomarán como referencia las reglas de esta 
                disciplina.
            </p>
            
            <style jsx>{`
                div{
                    font-family: 'Lato', sans-serif;
                }

                strong{
                    font-size: 17px;
                }

                .pf1{
                    font-size: 20px;
                    font-weight: bold;
                }

                .pf2{
                    margin-top: 10px;
                    font-size: 17px;
                    font-weight: 200;
                    margin-bottom: 20px;
                }

                .st{
                    margin-top: 5px;
                }

                .sb{
                    margin-bottom: 0px;
                }
            `}</style>
        </div> 
    )
}

export default DetallesKT25