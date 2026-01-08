import { useState } from 'react'

import TitleSection from '../sections/TitleSection'
import OptionsSection from '../sections/OptionsSection'
import Reglamento from './Reglamento'
import FutbolSala from './FutbolSala'

const opcionesArray = [
    {
        no: 1,
        name: 'Detalles'
    },
    {
        no: 2,
        name: 'Reglamento'
    },
    {
        no: 3,
        name: 'Reglas Futbol Sala'
    }
]

const Detalles = () => {
    const [select, setSelect] = useState(1)

    return (
        <section>
            <TitleSection
                title='Bienvenidos al Campeonato 2026'
                desc='Reglas y directrices para el campeonato.'
                color='#245590'
            />
            <OptionsSection
                options={opcionesArray}
                select={select}
                onSelect={op => setSelect(op)}
            />
            <div>
                {select == 1 ? 
                    <>
                        <strong>Detalles Campeonato 2026</strong>
                        <p>
                            Con la finalidad de fomentar el desarrollo deportivo y de compañerismo en nuestros alumnos, 
                            paralelamente a las actividades de desarrollo humano y espiritual impartidas en nuestra 
                            catequesis, presentamos el Campeonato de la Catequesis San Carlos de Ricaurte 2026, en el 
                            cual participarán nuestros alumnos.
                        </p>
                        <strong>Objetivos</strong>
                        <p>
                            • Fomentar el ambiente y ánimo deportivo en cada uno de los alumnos y de los catequistas.<br/>
                            • Fortalecer los lazos de amistad y respeto entre todos los jugadores, animando el mejor desarrollo físico reflejado en el deporte.<br/>
                            • Realizar espacios de esparcimiento deportivo, en los cuales puedan tener participación nuestros alumnos.<br/>
                            • Impulsar mutuamente el compañerismo y la fraternidad en cada uno de los grupos.<br/>
                        </p>
                        <strong>Participantes</strong>
                        <p className='sb'>
                            El campeonato para este año va dirigido a los alumnos de los niveles de Confirmación (primero y segundo de 
                            Confirmación), del centro y las comunidades de la Catequesis San Carlos de Ricaurte, tanto para varones como 
                            mujeres. Cada paralelo deberá escoger a los(as) jugadores(as), para representar al mismo.
                        </p>
                        <p>
                            El campeonato también está dirigido para catequistas, en esta ocasión se enfrentarán los catequistas divididos 
                            en 2 equipos, en partidos de ida y vuelta, haciendo de local y visitante en sus respectivos horarios.
                        </p>
                        <strong>Lugar del campeonato</strong>
                        <p>
                            El campeonato para todos (alumnos y catequistas) se llevará a cabo en los patios de la catequesis.
                        </p>
                        <strong>Partidos</strong>
                        <p>
                            La duración de un partido, dependiendo de cada equipo es el siguiente:<br/>
                            • <strong>Masculino:</strong> Cada partido es de 40 minutos, dividido en 2 
                            tiempos de 20 minutos.<br/>
                            • <strong>Femenino:</strong> Cada partido es de 32 minutos, dividido en 2 
                            tiempos de 16 minutos.
                        </p>
                        <strong>Disciplina</strong>
                        <p className='sb'>
                            El Campeonato es de futbol sala, por lo que se tomarán como referencia las reglas de esta 
                            disciplina.
                        </p>
                    </> :
                        select == 2 ? <Reglamento /> :
                            select == 3 ? <FutbolSala /> : ''
                }
            </div>
            
            <style jsx>{`
                strong{
                    font-size: 17px;
                }

                p{
                    margin-top: 10px;
                    font-size: 17px;
                    font-weight: 200;
                    margin-bottom: 30px;
                }

                .sb{
                    margin-bottom: 0px;
                }

                @media screen and (max-width: 768px){
                    strong{
                        font-size: 16px;
                    }

                    p{
                        margin-top: 8px;
                        font-size: 16px;
                        margin-bottom: 20px;
                    }
                }
            `}</style>
        </section> 
    )
}

export default Detalles