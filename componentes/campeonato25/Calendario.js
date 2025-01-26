import TitleSection from '../sections/TitleSection'
import ItemCalendario from './ItemCalendario'
import PartidosPasados from '../home/PartidosPasados'

export default function Calendario({ fecha, children }){

    return (
        <section>
            <TitleSection
                title='Calendario Campeonato 2025'
                desc='Fecha y hora de los partidos del campeonato.'
            />
            <div>
                <strong>Segunda semana</strong>
                {children}
            </div>
            <div>
                <strong>Tercera semana</strong>
                <ItemCalendario
                    dia='Sábado'
                    fecha='01 Feb'
                    hora='17h00'
                    genero='M'
                    equipos={['Predicadores', 'Traicioneros como Judas']}
                    paralelos={['2do Confir. 4 (M1)', '2do Confir. 5 (M)']}
                    logos={['24M', '25M']}
                    colores={{
                        eq1: ['white', 'black', 'black'],
                        eq2: ['black', 'black', 'white']
                    }}
                    mas={[1, ]}
                />
                <ItemCalendario
                    dia='Domingo'
                    fecha='02 Feb'
                    hora='09h00'
                    genero='M'
                    equipos={['Los Águilas', 'Juntos con Cristo FC']}
                    paralelos={['1ro Confir. 1 (M)', '1 Confir. AB Ángeles (M)']}
                    logos={['11M', '1AM']}
                    colores={{
                        eq1: ['white', 'black', 'black'],
                        eq2: ['white', 'black', 'black']
                    }}
                />
                <ItemCalendario
                    dia='Domingo'
                    fecha='02 Feb'
                    hora='10h00'
                    genero='M'
                    equipos={['Los Ángeles Bíblicos', 'Los Misioneros']}
                    paralelos={['Año Bíblico 3 (M)', 'Año Bíblico 2 (M)']}
                    logos={['A3M', 'A2M']}
                    colores={{
                        eq1: ['white', 'black', 'black'],
                        eq2: ['white', 'black', 'black']
                    }}
                />
                <ItemCalendario
                    dia='Domingo'
                    fecha='02 Feb'
                    hora='11h00'
                    genero='M'
                    equipos={['Equipo Glorioso', 'Los Hermanos de Jesus']}
                    paralelos={['Año Bíblico 4 (M2)', 'Año Bíblico 1 (M)']}
                    logos={['A4M', 'A1M']}
                    colores={{
                        eq1: ['blue', 'blue', 'white'],
                        eq2: ['white', 'black', 'black']
                    }}
                    mas={[2, ]}
                />
                <ItemCalendario
                    dia='Domingo'
                    fecha='02 Feb'
                    hora='12h00'
                    genero='M'
                    equipos={['Equipo de Dios', 'Camino a la Tierra Prometída']}
                    paralelos={['Año Bíblico 4 (M1)', 'Año Bíblico 5 (M)']}
                    logos={['A4M', 'A5M']}
                    colores={{
                        eq1: ['red', 'red', 'white'],
                        eq2: ['white', 'black', 'black']
                    }}
                    mas={[1, ]}
                />
            </div>
            <div>
                <strong>Cuarta semana</strong>
                <ItemCalendario
                    dia='Sábado'
                    fecha='08 Feb'
                    hora='16h40'
                    genero='F'
                    equipos={['Camino a la Tierra Prometída', 'Las Misioneras']}
                    paralelos={['Año Bíblico 5 (F)', 'Año Bíblico 2 (F)']}
                    logos={['A5F', 'A2F']}
                    colores={{
                        eq1: ['white', 'black', 'black'],
                        eq2: ['white', 'black', 'black']
                    }}
                />
                <ItemCalendario
                    dia='Sábado'
                    fecha='08 Feb'
                    hora='17h20'
                    genero='F'
                    equipos={['Mujeres de Nazareth', 'Las Herederas de Dios']}
                    paralelos={['Año Bíblico 4 (F)', 'Año Bíblico 1 (F)']}
                    logos={['A4F', 'A1F']}
                    colores={{
                        eq1: ['red', 'white', 'white'],
                        eq2: ['white', 'black', 'black']
                    }}
                />
            </div>
            <div>
                <strong className='ct'>[Fin de la Primera Ronda]</strong>
                <strong className='ct'>Proximamente...</strong>
            </div>
            <div>
                <PartidosPasados
                    title='Resultados Semana 1:'
                    fecha={fecha}
                />
            </div>

            <style jsx>{`
                strong{
                    width: 100%;
                    font-size: 20px;
                    margin-bottom: 12px;
                }

                .ct{
                    text-align: center;
                }

                div{
                    margin-top: 20px;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                @media screen and (max-width: 768px){
                    strong{
                        font-size: 19px;
                    }
                }
            `}</style>
        </section> 
    )
}