import ItemCalendario from './ItemCalendario'

const Calendario = () => {

    return (
        <section>
            <p className='pf1'>Calendario Campeonato 2025</p>
            <p className='pf2'>
                Fecha y hora de los partidos del campeonato.
            </p>
            <div className='cont-partidos'>
                <p className='pf1 st'>Primera semana</p>
                <ItemCalendario
                    dia='Domingo'
                    fecha='19 Ene'
                    hora='08h30'
                    genero='M'
                    equipos={['Confirmación F.C.', 'Los Pastores']}
                    paralelos={['2do Confir. 2 (M)', '2do Confir. 3 (M)']}
                    logos={['22M', '23M']}
                    colores={{
                        eq1: ['black', 'black', 'white'],
                        eq2: ['blue', 'blue', 'white']
                    }}
                />
                <ItemCalendario
                    dia='Domingo'
                    fecha='19 Ene'
                    hora='09h30'
                    genero='F'
                    equipos={['Las Galatas 1, 10', 'Traicioneras como Judas']}
                    paralelos={['2do Confir. 1 (F)', '2do Confir. 5 (F)']}
                    logos={['21F', '25F']}
                    colores={{
                        eq1: ['white', 'black', 'black'],
                        eq2: ['black', 'black', 'white']
                    }}
                />
                <ItemCalendario
                    dia='Domingo'
                    fecha='19 Ene'
                    hora='10h30'
                    genero='F'
                    equipos={['Confirmación F.C.', 'Club GNU']}
                    paralelos={['2do Confir. 2 (F)', '2do Confir. 4 (F)']}
                    logos={['22F', '24F']}
                    colores={{
                        eq1: ['black', 'black', 'white'],
                        eq2: ['black', 'black', 'white']
                    }}
                />
                <ItemCalendario
                    dia='Domingo'
                    fecha='19 Ene'
                    hora='11h30'
                    genero='M'
                    equipos={['Santos y Religiosos F.C.', 'GDL']}
                    paralelos={['2do Confir. 1 (M)', '2do Confir. 4 (M2)']}
                    logos={['21M', '24M']}
                    colores={{
                        eq1: ['white', 'black', 'black'],
                        eq2: ['white', 'black', 'black']
                    }}
                    mas={[, 2]}
                />
            </div>
            <div className='cont-partidos'>
                <p className='pf1 st'>Segunda semana</p>
                <ItemCalendario
                    dia='Domingo'
                    fecha='26 Ene'
                    hora='08h30'
                    genero='M'
                    equipos={['Fuerza Divina', 'Newcastells']}
                    paralelos={['2 Confir. Ángeles (M)', '1ro Confir. 4 (M)']}
                    logos={['2AM', '14M']}
                    colores={{
                        eq1: ['white', 'black', 'black'],
                        eq2: ['white', 'black', 'black']
                    }}
                />
                <ItemCalendario
                    dia='Domingo'
                    fecha='26 Ene'
                    hora='09h30'
                    genero='F'
                    equipos={['Las Águilas', 'Estrellitas de María']}
                    paralelos={['1ro Confir. 1 (F)', '2 Confir. Ángeles (F)']}
                    logos={['11F', '2AF']}
                    colores={{
                        eq1: ['white', 'black', 'black'],
                        eq2: ['black', 'black', 'white']
                    }}
                />
                <ItemCalendario
                    dia='Domingo'
                    fecha='26 Ene'
                    hora='10h30'
                    genero='F'
                    equipos={['Santa Fé', 'Newcastells']}
                    paralelos={['1ro Confir. 2 (F)', '1ro Confir. 4 (F)']}
                    logos={['12F', '14F']}
                    colores={{
                        eq1: ['black', 'black', 'white'],
                        eq2: ['white', 'black', 'black']
                    }}
                />
                <ItemCalendario
                    dia='Domingo'
                    fecha='26 Ene'
                    hora='11h30'
                    genero='M'
                    equipos={['Santa Fé', 'Los Angeles Negros']}
                    paralelos={['1ro Confir. 2 (M)', '1ro Confir. 3 (M)']}
                    logos={['12M', '13M']}
                    colores={{
                        eq1: ['black', 'black', 'white'],
                        eq2: ['black', 'black', 'white']
                    }}
                />
            </div>
            <div className='cont-partidos'>
                <p className='pf1 st'>Proximamente...</p>
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

                .pf2{
                    margin-top: 5px;
                    font-size: 17px;
                    font-weight: 200;
                }

                .ta-2{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .cont-partidos{
                    margin-top: 20px;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .cont-partidos table{
                    margin-top: 10px;
                }

                table{
                    border-collapse: auto;
                }

                td{
                    padding: 1px 5px 2px 5px;
                    font-size: 16px;
                    font-weight: 300;
                    text-align: center;
                    border: 1px solid black;
                    
                }

                tr{
                    border: 1px solid black;
                }

                .equipo{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .genero{
                    background: #000000AA;
                    color: white;
                    font-weight: bold;
                }

                @media screen and (max-width: 768px){
                    .pf1{
                        font-size: 19px;
                    }

                    table{
                        border-collapse: collapse;
                    }

                    tr{
                        border: 1px solid black;
                    }

                    td{
                        padding: 1px 4px 2px 4px;
                        font-size: 12px;
                        border: none;
                    }

                    .equipo{
             
                    }

                    .cont-partidos .pf1{
                        font-size: 18px;
                    }
                }
            `}</style>
        </section> 
    )
}

export default Calendario