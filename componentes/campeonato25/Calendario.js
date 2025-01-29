import TitleSection from '../sections/TitleSection'
import ItemCalendario from './ItemCalendario'
import PartidosPasadosF1 from '../home/PartidosPasadosF1'
import PartidosPasados from '../home/PartidosPasados'

export default function Calendario({ fecha1, fecha2, children }){

    return (
        <section>
            <TitleSection
                title='Calendario Campeonato 2025'
                desc='Fecha y hora de los partidos del campeonato.'
                color='#245590'
            />
            <div>
                <strong>Tercera semana</strong>
                {children}
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
                <PartidosPasadosF1
                    title='Resultados Semana 1:'
                    fecha={fecha1}
                />
            </div>
            <div>
                <PartidosPasados
                    title='Resultados Semana 2:'
                    fecha={fecha2}
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
                        font-size: 16px;
                    }
                }
            `}</style>
        </section> 
    )
}