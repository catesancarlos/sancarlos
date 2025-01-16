import Equipo from './Equipo'

const Calendario = () => {

    return (
        <section>
            <p className='pf1'>Calendario Campeonato 2025</p>
            <p className='pf2'>
                Fechas para cada partido del campeonato.
            </p>
            <div className='cont-partidos'>
                <p className='pf1'>Primera semana</p>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                Domingo<br/>
                                19 Ene<br/>
                                <strong>08h30</strong>
                            </td>
                            <td className='equipo'>
                                <Equipo
                                    ca
                                    nombre='Confirmación F.C.'
                                    paralelo='2do Confir. 2 (M)'
                                    logo='22M'
                                    color='black'
                                    borde='black'
                                    letter='white'
                                />
                            </td>
                            <td>0</td>
                            <td>vs.</td>
                            <td>0</td>
                            <td className='equipo'>
                                <Equipo
                                    ca
                                    nombre='Los Pastores'
                                    paralelo='2do Confir. 3 (M)'
                                    logo='23M'
                                    color='blue'
                                    borde='blue'
                                    letter='white'
                                />
                            </td>
                            <td className='genero'>[M]</td>
                        </tr>
                        <tr>
                            <td>
                                Domingo<br/>
                                19 Ene<br/>
                                <strong>09h30</strong>
                            </td>
                            <td className='equipo'>
                                <Equipo
                                    ca
                                    nombre='Las Galatas 1, 10'
                                    paralelo='2do Confir. 1 (F)'
                                    logo='21F'
                                    color='white'
                                    borde='black'
                                    letter='black'
                                />
                            </td>
                            <td>0</td>
                            <td>vs.</td>
                            <td>0</td>
                            <td className='equipo'>
                                <Equipo
                                    ca
                                    nombre='Traicioneras como Judas'
                                    paralelo='2do Confir. 5 (F)'
                                    logo='25F'
                                    color='black'
                                    borde='black'
                                    letter='white'
                                />
                            </td>
                            <td className='genero'>[F]</td>
                        </tr>  
                        <tr>
                            <td>
                                Domingo<br/>
                                19 Ene<br/>
                                <strong>10h30</strong>
                            </td>
                            <td className='equipo'>
                                <Equipo
                                    ca
                                    nombre='Confirmación F.C.'
                                    paralelo='2do Confir. 2 (F)'
                                    logo='22F'
                                    color='black'
                                    borde='black'
                                    letter='white'
                                />
                            </td>
                            <td>0</td>
                            <td>vs.</td>
                            <td>0</td>
                            <td className='equipo'>
                                <Equipo
                                    ca
                                    nombre='Club GNU'
                                    paralelo='2do Confir. 4 (F)'
                                    logo='24F'
                                    color='black'
                                    borde='black'
                                    letter='white'
                                />
                            </td>
                            <td className='genero'>[F]</td>
                        </tr>
                        <tr>
                            <td>
                                Domingo<br/>
                                19 Ene<br/>
                                <strong>11h30</strong>
                            </td>
                            <td className='equipo'>
                                <Equipo
                                    ca
                                    nombre='Santos y Religiosos F.C.'
                                    paralelo='2do Confir. 1 (M)'
                                    logo='21M'
                                    color='white'
                                    borde='black'
                                    letter='black'
                                />
                            </td>
                            <td>0</td>
                            <td>vs.</td>
                            <td>0</td>
                            <td className='equipo'>
                                <Equipo
                                    ca
                                    nombre='GDL'
                                    paralelo='2do Confir. 4 (M2)'
                                    logo='24M'
                                    color='white'
                                    borde='black'
                                    letter='black'
                                    mas='2'
                                />
                            </td>
                            <td className='genero'>[M]</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='cont-partidos'>
                <p className='pf1'>Segunda semana</p>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                Domingo<br/>
                                26 Ene<br/>
                                <strong>08h30</strong>
                            </td>
                            <td className='equipo'>
                                <Equipo
                                    ca
                                    nombre='Fuerza Divina'
                                    paralelo='2 Confir. Ángeles (M)'
                                    logo='2AM'
                                    color='white'
                                    borde='black'
                                    letter='black'
                                />
                            </td>
                            <td>0</td>
                            <td>vs.</td>
                            <td>0</td>
                            <td className='equipo'>
                                <Equipo
                                    ca
                                    nombre='Newcastells'
                                    paralelo='1ro Confir. 4 (M)'
                                    logo='14M'
                                    color='white'
                                    borde='black'
                                    letter='black'
                                />
                            </td>
                            <td className='genero'>[M]</td>
                        </tr>
                        <tr>
                            <td>
                                Domingo<br/>
                                26 Ene<br/>
                                <strong>09h30</strong>
                            </td>
                            <td className='equipo'>
                                <Equipo
                                    ca
                                    nombre='Las Águilas'
                                    paralelo='1ro Confir. 1 (F)'
                                    logo='11F'
                                    color='white'
                                    borde='black'
                                    letter='black'
                                />
                            </td>
                            <td>0</td>
                            <td>vs.</td>
                            <td>0</td>
                            <td className='equipo'>
                                <Equipo
                                    ca
                                    nombre='Estrellitas de María'
                                    paralelo='2 Confir. Ángeles (F)'
                                    logo='2AF'
                                    color='black'
                                    borde='black'
                                    letter='white'
                                />
                            </td>
                            <td className='genero'>[F]</td>
                        </tr>  
                        <tr>
                            <td>
                                Domingo<br/>
                                26 Ene<br/>
                                <strong>10h30</strong>
                            </td>
                            <td className='equipo'>
                                <Equipo
                                    ca
                                    nombre='Santa Fé'
                                    paralelo='1ro Confir. 2 (F)'
                                    logo='12F'
                                    color='black'
                                    borde='black'
                                    letter='white'
                                />
                            </td>
                            <td>0</td>
                            <td>vs.</td>
                            <td>0</td>
                            <td className='equipo'>
                                <Equipo
                                    ca
                                    nombre='Newcastells'
                                    paralelo='1ro Confir. 4 (F)'
                                    logo='14F'
                                    color='white'
                                    borde='black'
                                    letter='black'
                                />
                            </td>
                            <td className='genero'>[F]</td>
                        </tr>
                        <tr>
                            <td>
                                Domingo<br/>
                                26 Ene<br/>
                                <strong>11h30</strong>
                            </td>
                            <td className='equipo'>
                                <Equipo
                                    ca
                                    nombre='Santa Fé'
                                    paralelo='1ro Confir. 2 (M)'
                                    logo='12M'
                                    color='black'
                                    borde='black'
                                    letter='white'
                                />
                            </td>
                            <td>0</td>
                            <td>vs.</td>
                            <td>0</td>
                            <td className='equipo'>
                                <Equipo
                                    ca
                                    nombre='Los Angeles Negros'
                                    paralelo='1ro Confir. 3 (M)'
                                    logo='13M'
                                    color='black'
                                    borde='black'
                                    letter='white'
                                />
                            </td>
                            <td className='genero'>[M]</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='cont-partidos'>
                <p className='pf1'>Proximamente...</p>
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