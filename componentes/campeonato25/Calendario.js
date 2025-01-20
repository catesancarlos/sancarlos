import ItemCalendario from './ItemCalendario'
import PartidosPasados from '../home/PartidosPasados'

export default function Calendario({ fecha, children }){

    return (
        <section>
            <p className='pf1'>Calendario Campeonato 2025</p>
            <p className='pf2'>
                Fecha y hora de los partidos del campeonato.
            </p>
            <div className='cont-partidos'>
                <p className='pf1 st'>Segunda semana</p>
                {children}
            </div>
            <div className='cont-partidos'>
                <p className='pf1 st'>Tercera semana</p>
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
                    genero='F'
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
                    genero='F'
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
            <div className='cont-partidos'>
                <p className='pf1 ct'>Proximamente...</p>
            </div>
            <div className='cont-partidos'>
                <PartidosPasados
                    title='Resultados Semana 1:'
                    fecha={fecha}
                />
            </div>

            <style jsx>{`
                section{
                    font-family: 'Lato', sans-serif;
                }

                .pf1{
                    width: 100%;
                    font-size: 20px;
                    font-weight: bold;
                }

                .st{
                    margin-bottom: 12px;
                }

                .ct{
                    text-align: center;
                }

                .pf2{
                    margin-top: 5px;
                    font-size: 17px;
                    font-weight: 200;
                }

                .cont-partidos{
                    margin-top: 20px;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                @media screen and (max-width: 768px){
                    .pf1{
                        font-size: 19px;
                    }

                    .cont-partidos .pf1{
                        font-size: 18px;
                    }
                }
            `}</style>
        </section> 
    )
}