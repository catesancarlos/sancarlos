import TitleSection from '../../sections/TitleSection'
import ItemCalendario from './ItemCalendario'
import PartidosPasadosF1 from './pasados/PartidosPasadosF1'
import PartidosPasadosF2 from './pasados/PartidosPasadosF2'
import PartidosPasadosF3 from './pasados/PartidosPasadosF3'
import PartidosPasados from './PartidosPasados'

export default function Calendario({ fecha1, fecha2, fecha3, fecha4, children }){

    return (
        <section>
            <TitleSection
                title='Calendario Campeonato 2025'
                desc='Fecha y hora de los partidos del campeonato.'
                color='#245590'
            />
            <div>
                <strong>Quinta semana</strong>
                {children}
            </div>
            <div>
                <strong>Sexta semana</strong>
                <ItemCalendario
                    dia='Sábado'
                    fecha='22 Feb'
                    hora='16h40'
                    genero='M'
                    equipos={['Equipo Glorioso', 'Camino a la Tierra Prometída']}
                    paralelos={['Año Biblico 4 (M2)', 'Año Biblico 5 (M)']}
                    logos={['A4M', 'A5M']}
                    colores={{
                        eq1: ['blue', 'blue', 'white'],
                        eq2: ['white', 'black', 'black']
                    }}
                    mas={[2, ]}
                />
                <ItemCalendario
                    dia='Domingo'
                    fecha='23 Feb'
                    hora='09h00'
                    genero='M'
                    equipos={['Predicadores', 'Los Águilas']}
                    paralelos={['2do Confir. 4 (M1)', '1ro Confir. 1 (M)']}
                    logos={['24M', '11M']}
                    colores={{
                        eq1: ['white', 'black', 'black'],
                        eq2: ['white', 'black', 'black']
                    }}
                    mas={[1, ]}
                />
                <ItemCalendario
                    dia='Domingo'
                    fecha='23 Feb'
                    hora='10h00'
                    genero='M'
                    equipos={['Los Misioneros', 'Los Hermanos de Jesus']}
                    paralelos={['Año Bíblico 2 (M)', 'Año Bíblico 1 (M)']}
                    logos={['A2M', 'A1M']}
                    colores={{
                        eq1: ['white', 'black', 'black'],
                        eq2: ['white', 'black', 'black']
                    }}
                />
                <ItemCalendario
                    dia='Domingo'
                    fecha='23 Feb'
                    hora='11h00'
                    genero='M'
                    equipos={['Los Ángeles Bíblicos', 'Equipo de Dios']}
                    paralelos={['Año Bíblico 3 (M)', 'Año Bíblico 4 (M1)']}
                    logos={['A3M', 'A4M']}
                    colores={{
                        eq1: ['white', 'black', 'black'],
                        eq2: ['red', 'red', 'white']
                    }}
                    mas={[1, ]}
                />
                <ItemCalendario
                    dia='Domingo'
                    fecha='23 Feb'
                    hora='12h00'
                    genero='M'
                    equipos={['Los Pastores', 'Santos y Religiosos F.C.']}
                    paralelos={['2do Confir. 3 (M)', '2do Confir. 1 (M)']}
                    logos={['23M', '21M']}
                    colores={{
                        eq1: ['blue', 'blue', 'white'],
                        eq2: ['white', 'black', 'black']
                    }}
                />
            </div>
            <div>
                <strong className='ct'>Los demas partidos, se iran publicando paulatinamente...</strong>
            </div>
            <div>
                <PartidosPasadosF1
                    title='Resultados Semana 1:'
                    fecha={fecha1}
                />
            </div>
            <div>
                <PartidosPasadosF2
                    title='Resultados Semana 2:'
                    fecha={fecha2}
                />
            </div>
            <div>
                <PartidosPasadosF3
                    title='Resultados Semana 3:'
                    fecha={fecha3}
                />
            </div>
            <div>
                <PartidosPasados
                    title='Resultados Semana 4:'
                    fecha={fecha4}
                />
                <strong className='ct'>[Fin de la Primera Ronda]</strong>
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