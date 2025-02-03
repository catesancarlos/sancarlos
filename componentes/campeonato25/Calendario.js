import TitleSection from '../sections/TitleSection'
import ItemCalendario from './ItemCalendario'
import PartidosPasadosF1 from '../home/PartidosPasadosF1'
import PartidosPasadosF2 from '../home/PartidosPasadosF2'
import PartidosPasados from '../home/PartidosPasados'

export default function Calendario({ fecha1, fecha2, fecha3, children }){

    return (
        <section>
            <TitleSection
                title='Calendario Campeonato 2025'
                desc='Fecha y hora de los partidos del campeonato.'
                color='#245590'
            />
            <div>
                <strong>Cuarta semana</strong>
                {children}
                <strong className='ct'>[Fin de la Primera Ronda]</strong>
            </div>
            <div>
                <strong>Quinta semana</strong>
                <ItemCalendario
                    dia='Sábado'
                    fecha='15 Feb'
                    hora='16h40'
                    genero='F'
                    equipos={['Club GNU', 'Las Gálatas 1, 10']}
                    paralelos={['2do Confir. 4 (F)', '2do Confir. 1 (F)']}
                    logos={['24F', '21F']}
                    colores={{
                        eq1: ['black', 'black', 'white'],
                        eq2: ['white', 'black', 'black']
                    }}
                />
                <ItemCalendario
                    dia='Sábado'
                    fecha='15 Feb'
                    hora='17h20'
                    genero='M'
                    equipos={['Los Angeles Negros', 'Fuerza Divina']}
                    paralelos={['1ro Confir. 3 (M)', 'Confir. Ángeles (M)']}
                    logos={['13M', '2AM']}
                    colores={{
                        eq1: ['black', 'black', 'white'],
                        eq2: ['white', 'black', 'black']
                    }}
                />
                <ItemCalendario
                    dia='Domingo'
                    fecha='16 Feb'
                    hora='09h00'
                    genero='F'
                    equipos={['Estrellitas de María', 'Las Angeles Negros']}
                    paralelos={['Confir. Ángeles (F)', '1ro Confir. 3 (F)']}
                    logos={['2AF', '13F']}
                    colores={{
                        eq1: ['black', 'black', 'white'],
                        eq2: ['black', 'black', 'white']
                    }}
                />
                <ItemCalendario
                    dia='Domingo'
                    fecha='16 Feb'
                    hora='10h00'
                    genero='F'
                    equipos={['Traicioneras como Judas', 'Génesis']}
                    paralelos={['2do Confir. 5 (F)', '2do Confir. 3 (F)']}
                    logos={['25F', '23F']}
                    colores={{
                        eq1: ['black', 'black', 'white'],
                        eq2: ['white', 'black', 'black']
                    }}
                />
                <ItemCalendario
                    dia='Domingo'
                    fecha='16 Feb'
                    hora='11h00'
                    genero='M'
                    equipos={['Confirmación F.C.', 'GDL']}
                    paralelos={['2do Confir. 2 (M)', '2do Confir. 4 (M2)']}
                    logos={['22M', '24M']}
                    colores={{
                        eq1: ['black', 'black', 'white'],
                        eq2: ['white', 'black', 'black']
                    }}
                    mas={[, 2]}
                />
                <ItemCalendario
                    dia='Domingo'
                    fecha='16 Feb'
                    hora='12h00'
                    genero='F'
                    equipos={['Newcastels', 'Las Águilas']}
                    paralelos={['1ro Confir. 4 (F)', '1ro Confir. 1 (F)']}
                    logos={['14F', '11F']}
                    colores={{
                        eq1: ['white', 'black', 'black'],
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
                <PartidosPasados
                    title='Resultados Semana 3:'
                    fecha={fecha3}
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