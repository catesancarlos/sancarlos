import TitleSection from '../../sections/TitleSection'
import ItemCalendario from './ItemCalendario'
import PartidosPasadosF1 from './pasados/PartidosPasadosF1'
import PartidosPasadosF2 from './pasados/PartidosPasadosF2'
import PartidosPasadosF3 from './pasados/PartidosPasadosF3'
import PartidosPasadosF4 from './pasados/PartidosPasadosF4'
import PartidosPasadosF5 from './pasados/PartidosPasadosF5'
import PartidosPasados from './PartidosPasados'

export default function Calendario({ datos, children }){

    return (
        <section>
            <TitleSection
                title='Calendario Campeonato 2025'
                desc='Fecha y hora de los partidos del campeonato.'
                color='#245590'
            />
            <div>
                <strong>Septima semana</strong>
                {children}
            </div>
            <div>
                <strong>Octava semana</strong>
                <ItemCalendario
                    com
                    dia='Sábado'
                    fecha='15 Mar'
                    hora='10h50'
                    genero='M'
                    equipos={['Niños gerreros de Dios', 'Los elegidos de Dios']}
                    paralelos={['Iniciación 1 (M)', 'Iniciación 2 (M)']}
                    logos={['I1M', 'I2M']}
                    colores={{
                        eq1: ['white', 'black', 'black'],
                        eq2: ['white', 'black', 'black']
                    }}
                />
                <ItemCalendario
                    com
                    dia='Sábado'
                    fecha='15 Mar'
                    hora='11h40'
                    genero='F'
                    equipos={['Mensajeras de Dios', 'Las Campeonas del Futbol']}
                    paralelos={['1ro Comun. 1 (F)', '1ro Comun. 2 (F)']}
                    logos={['11F', '12F']}
                    colores={{
                        eq1: ['white', 'black', 'black'],
                        eq2: ['white', 'black', 'black']
                    }}
                />
                <ItemCalendario
                    com
                    dia='Sábado'
                    fecha='15 Mar'
                    hora='12h10'
                    genero='M'
                    equipos={['Mensajeros de Dios', 'Los Campeones del Futbol']}
                    paralelos={['1ro Comun. 1 (M)', '1ro Comun. 2 (M)']}
                    logos={['11M', '12M']}
                    colores={{
                        eq1: ['white', 'black', 'black'],
                        eq2: ['white', 'black', 'black']
                    }}
                />
                {/* <ItemCalendario
                    dia='Sábado'
                    fecha='15 Mar'
                    hora='16h40'
                    genero='M'
                    equipos={['Molinopamba', 'Los Águilas']}
                    paralelos={['Confir. Molinopamba (M)', '1ro Confir. 1 (M)']}
                    logos={['2MM', '11M']}
                    colores={{
                        eq1: ['black', 'black', 'white'],
                        eq2: ['white', 'black', 'black']
                    }}
                />
                <ItemCalendario
                    dia='Sábado'
                    fecha='15 Mar'
                    hora='17h20'
                    genero='M'
                    equipos={['Los Pastores', 'Santos y Religiosos F.C.']}
                    paralelos={['2do Confir. 3 (M)', '2do Confir. 1 (M)']}
                    logos={['25M', '21M']}
                    colores={{
                        eq1: ['blue', 'blue', 'white'],
                        eq2: ['white', 'black', 'black']
                    }}
                /> */}
            </div>
            <div>
                <strong className='ct'>Los demas partidos, se iran publicando paulatinamente...</strong>
            </div>
            <div>
                <PartidosPasadosF1
                    title='Resultados Semana 1:'
                    fecha={datos[0]}
                />
            </div>
            <div>
                <PartidosPasadosF2
                    title='Resultados Semana 2:'
                    fecha={datos[1]}
                />
            </div>
            <div>
                <PartidosPasadosF3
                    title='Resultados Semana 3:'
                    fecha={datos[2]}
                />
            </div>
            <div>
                <PartidosPasadosF4
                    title='Resultados Semana 4:'
                    fecha={datos[3]}
                />
                <strong className='ct'>[Fin de la Primera Ronda]</strong>
            </div>
            <div>
                <PartidosPasadosF5
                    title='Resultados Semana 5:'
                    fecha={datos[4]}
                />
            </div>
            <div>
                <PartidosPasados
                    title='Resultados Semana 6:'
                    fecha={datos[5]}
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