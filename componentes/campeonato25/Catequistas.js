import PartidoIda from '../banners/PartidoIda'

const Catequistas = () => {

    return (
        <div>
            <PartidoIda nohome />
            <p className='pf1'>Catequistas de Comunión Vs. Catequistas de Confirmación</p>
            <p className='pf2 st'>
                Los catequistas de todos los niveles de la mañana (comunión) se enfrentaran en 2 partidos 
                ida y vuelta a los catequistas de los niveles de la tarde (confirmación).
            </p>
            <p className='pf2 sa'>
                <strong>Formato</strong>
            </p>
            <p className='pf2 sa'>
                <strong>•</strong> Para este campeonato se ha dividido a los catequistas en dos equipos: 
                los que dan catequesis a los niveles de COMUNIÓN (Iniciación, 1ro y 2do de Comunión), 
                conformaran un equipo y los que dan catequesis a los niveles de CONFIRMACIÓN (Año Bíblico, 
                1ro y 2do de Confirmación), conformaran otro equipo. 
            </p>
            <p className='pf2 sa'>
                <strong>•</strong> Los catequistas que formen parte de los equipos, representaran a todos 
                los catequistas de su sacramento y de todas las comunidades. 
            </p>
            <p className='pf2 sa'>
                <strong>•</strong> Los catequistas también representaran a todos los alumnos de su sacramento 
                COMUNIÓN o CONFIRMACIÓN.
            </p>
            <p className='pf2 sa'>
                <strong>•</strong> Cada equipo de catequistas de COMUNIÓN o CONFIRMACIÓN, jugarán de locales 
                ante los alumnos de su sacramento en una ocasión y por lo mismo serán visitantes en otra.  
            </p>
            <p className='pf2 sa'>
                <strong>•</strong> El equipo de catequistas que sea local, jugara con la presencia de los 
                alumnos de su sacramento y en su horario de normal de catequesis (horario de la catequesis 
                del centro parroquial). 
            </p>
            <p className='pf2 sa'>
                <strong>•</strong> El equipo de catequistas que será visitante, jugará sin la presencia de 
                los alumnos de su sacramento y no en su horario de catequesis, sino en el horario de su 
                adversario. 
            </p>
            <p className='pf2 sa'>
                <strong>•</strong> El primer partido se llevará a cabo el día sábado 11 de enero del 2025 a 
                las 15:30 (3:30 PM), en este partido serán locales los catequistas de los niveles de 
                CONFIRMACIÓN.
            </p>
            <p className='pf2 sa'>
                <strong>•</strong> El segundo partido se llevará a cabo el día sábado 08 de febrero del 2025 
                a las 10:30 AM, en este partido serán locales los catequistas de los niveles de COMUNIÓN. 
            </p>
            <p className='pf2 sa'>
                <strong>•</strong> Los partidos a jugar tendrán la duración de 50 minutos, divididos en 2 
                tiempos de 25 minutos y un entretiempo de 5 minutos.
            </p>
            <p className='pf2 sa'>
                <strong>•</strong> Las reglas que se usarán para los partidos, serán las del futbol sala.
            </p>
            <p className='pf2 sa'>
                <strong>•</strong> Sera el ganador del campeonato de catequistas, el equipo que resulte 
                ganador en el marcador global después de los 2 partidos.
            </p>
            <p className='pf2 sa'>
                <strong>•</strong> No se considerará valor extra por goles de visitante.
            </p>
            <p className='pf2 sa'>
                <strong>•</strong> Si al final de los 2 partidos hubiera igualdad de goles se jugarán 2 
                tiempos extra de 5 minutos cada uno, si después de eso el resultado sigue igualado, se 
                procederá a 5 lanzamientos penales por cada equipo.
            </p> 

            <style jsx>{`
                div{
                    position: relative;
                }

                .pf1{
                    margin-top: 25px;
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
            `}</style>
        </div> 
    )
}

export default Catequistas