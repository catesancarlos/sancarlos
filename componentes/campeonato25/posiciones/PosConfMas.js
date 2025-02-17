import Equipo from '../Equipo'

export default function PosConfMas(){
    return(
        <section>
            <strong className='title'>Fixture Confirmación - Masculino:</strong>
            <p className='info'>{`<< Mueve el cuadro a la izquierda para ver más <<`}</p>
            <div className='cont'>
                <div className='primera'>
                    <div className='partido'>
                        <strong className='id'>A</strong>
                        <Equipo
                            pos
                            nombre='Confirmación F.C.'
                            paralelo='2do Confir. 2 (M)'
                            logo='22M'
                            color='black'
                            borde='black'
                            letter='white'
                            ctext='green'
                        />
                        <div className='marcador'>
                            <strong className='meq'>7</strong>
                            <p className='vs'>vs</p>
                            <strong className='meq'>5</strong>
                        </div>
                        <Equipo
                            pos
                            nombre='Los Pastores'
                            paralelo='2do Confir. 3 (M)'
                            logo='23M'
                            color='blue'
                            borde='blue'
                            letter='white'
                            ctext='red'
                        />
                    </div>
                    <div className='partido'>
                        <strong className='id'>B</strong>
                        <Equipo
                            pos
                            nombre='Santos y Religiosos F.C.'
                            paralelo='2do Confir. 1 (M)'
                            logo='21M'
                            color='white'
                            borde='black'
                            letter='black'
                            ctext='red'
                        />
                        <div className='marcador'>
                            <strong className='meq'>1</strong>
                            <p className='vs'>vs</p>
                            <strong className='meq'>9</strong>
                        </div>
                        <Equipo
                            pos
                            nombre='GDL'
                            paralelo='2do Confir. 4 (M2)'
                            logo='24M'
                            color='white'
                            borde='black'
                            letter='black'
                            mas='2'
                            ctext='green'
                        />
                    </div>
                    <div className='partido'>
                        <strong className='id'>C</strong>
                        <Equipo
                            pos
                            nombre='Santa Fé (M)'
                            paralelo='1ro Confir. 2 (M)'
                            logo='12M'
                            color='black'
                            borde='black'
                            letter='white'
                            ctext='red'
                        />
                        <div className='marcador'>
                            <strong className='meq'>0</strong>
                            <p className='vs'>vs</p>
                            <strong className='meq'>2</strong>
                        </div>
                        <Equipo
                            pos
                            nombre='Los Angeles Negros'
                            paralelo='1ro Confir. 3 (M)'
                            logo='13M'
                            color='black'
                            borde='black'
                            letter='white'
                            ctext='green'
                        />
                    </div>
                    <div className='partido'>
                        <strong className='id'>D</strong>
                        <Equipo
                            pos
                            nombre='Fuerza Divina'
                            paralelo='2 Confir. Ángeles (M)'
                            logo='2AM'
                            color='white'
                            borde='black'
                            letter='black'
                            ctext='green'
                        />
                        <div className='marcador'>
                            <strong className='meq'>10</strong>
                            <p className='vs'>vs</p>
                            <strong className='meq'>6</strong>
                        </div>
                        <Equipo
                            pos
                            nombre='Newcastells'
                            paralelo='1ro Confir. 4 (M)'
                            logo='14M'
                            color='white'
                            borde='black'
                            letter='black'
                            ctext='red'
                        />
                    </div>
                    <div className='partido'>
                        <strong className='id'>E</strong>
                        <Equipo
                            pos
                            nombre='Predicadores'
                            paralelo='2do Confir. 4 (M1)'
                            logo='24M'
                            color='white'
                            borde='black'
                            letter='black'
                            mas='1'
                            ctext='green'
                        />
                        <div className='marcador'>
                            <strong className='meq'>12</strong>
                            <p className='vs'>vs</p>
                            <strong className='meq'>7</strong>
                        </div>
                        <Equipo
                            pos
                            nombre='Traicioneros de Judas'
                            paralelo='2do Confir. 5 (M)'
                            logo='25M'
                            color='black'
                            borde='black'
                            letter='white'
                            ctext='red'
                        />
                    </div>
                    <div className='partido'>
                        <strong className='id'>F</strong>
                        <Equipo
                            pos
                            nombre='Los Águilas'
                            paralelo='1ro Confir. 1 (M)'
                            logo='11M'
                            color='white'
                            borde='black'
                            letter='black'
                            ctext='green'
                        />
                        <div className='marcador'>
                            <strong className='meq'>5</strong>
                            <p className='vs'>vs</p>
                            <strong className='meq'>3</strong>
                        </div>
                        <Equipo
                            pos
                            nombre='Juntos con Cristo FC'
                            paralelo='1 Confir. AB Ángeles (M)'
                            logo='1AM'
                            color='white'
                            borde='black'
                            letter='black'
                            ctext='red'
                        />
                    </div>
                </div>
                <div>
                    <div className='segunda-cont'>
                        <div className='line'>
                            <p>[<span style={{ color: 'green' }}>1</span> - 0]</p>
                        </div>
                        <div className='segunda'>
                            <div className='partido'>
                                <strong className='id'>1</strong>
                                <Equipo
                                    pos
                                    nombre='Confirmación F.C.'
                                    paralelo='2do Confir. 2 (M)'
                                    logo='22M'
                                    color='black'
                                    borde='black'
                                    letter='white'
                                    ctext='green'
                                />
                                <div className='marcador'>
                                    <strong className='meq'>5</strong>
                                    <p className='vs'>vs</p>
                                    <strong className='meq'>4</strong>
                                </div>
                                <Equipo
                                    pos
                                    nombre='GDL'
                                    paralelo='2do Confir. 4 (M2)'
                                    logo='24M'
                                    color='white'
                                    borde='black'
                                    letter='black'
                                    mas='2'
                                    ctext='red'
                                />
                            </div>
                            <div className='partido'>
                                <strong className='id'>2</strong>
                                <Equipo
                                    pos
                                    nombre='Los Angeles Negros'
                                    paralelo='1ro Confir. 3 (M)'
                                    logo='13M'
                                    color='black'
                                    borde='black'
                                    letter='white'
                                />
                                <div className='marcador'>
                                    <strong className='meq'>0</strong>
                                    <p className='vs'>vs</p>
                                    <strong className='meq'>0</strong>
                                </div>
                                <Equipo
                                    pos
                                    nombre='Fuerza Divina'
                                    paralelo='2 Confir. Ángeles (M)'
                                    logo='2AM'
                                    color='white'
                                    borde='black'
                                    letter='black'
                                />
                            </div>
                            <div className='partido'>
                                <strong className='id'>3</strong>
                                <Equipo
                                    pos
                                    nombre='Predicadores'
                                    paralelo='2do Confir. 4 (M1)'
                                    logo='24M'
                                    color='white'
                                    borde='black'
                                    letter='black'
                                    mas='1'
                                />
                                <div className='marcador'>
                                    <strong className='meq'>0</strong>
                                    <p className='vs'>vs</p>
                                    <strong className='meq'>0</strong>
                                </div>
                                <Equipo
                                    pos
                                    nombre='Los Águilas'
                                    paralelo='1ro Confir. 1 (M)'
                                    logo='11M'
                                    color='white'
                                    borde='black'
                                    letter='black'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='segunda-cont nobot'>
                        <div className='line l2'>
                            <p>[0 - <span style={{ color: 'red' }}>1</span>]</p>
                        </div>
                        <div className='segunda sl2'>
                            <div className='partido'>
                                <strong className='id'>4</strong>
                                <Equipo
                                    pos
                                    nombre='Los Pastores'
                                    paralelo='2do Confir. 3 (M)'
                                    logo='23M'
                                    color='blue'
                                    borde='blue'
                                    letter='white'
                                />
                                <div className='marcador'>
                                    <strong className='meq'>0</strong>
                                    <p className='vs'>vs</p>
                                    <strong className='meq'>0</strong>
                                </div>
                                <Equipo
                                    pos
                                    nombre='Santos y Religiosos F.C.'
                                    paralelo='2do Confir. 1 (M)'
                                    logo='21M'
                                    color='white'
                                    borde='black'
                                    letter='black'
                                />
                            </div>
                            <div className='partido'>
                                <strong className='id'>5</strong>
                                <Equipo
                                    pos
                                    nombre='Santa Fé (M)'
                                    paralelo='1ro Confir. 2 (M)'
                                    logo='12M'
                                    color='black'
                                    borde='black'
                                    letter='white'
                                />
                                <div className='marcador'>
                                    <strong className='meq'>0</strong>
                                    <p className='vs'>vs</p>
                                    <strong className='meq'>0</strong>
                                </div>
                                <Equipo
                                    pos
                                    nombre='Newcastels'
                                    paralelo='1ro Confir. 4 (M)'
                                    logo='14M'
                                    color='white'
                                    borde='black'
                                    letter='black'
                                />
                            </div>
                            <div className='partido'>
                                <strong className='id'>6</strong>
                                <Equipo
                                    pos
                                    nombre='Traicioneros de Judas'
                                    paralelo='2do Confir. 5 (M)'
                                    logo='25M'
                                    color='black'
                                    borde='black'
                                    letter='white'
                                />
                                <div className='marcador'>
                                    <strong className='meq'>0</strong>
                                    <p className='vs'>vs</p>
                                    <strong className='meq'>0</strong>
                                </div>
                                <Equipo
                                    pos
                                    nombre='Juntos con Cristo FC'
                                    paralelo='1 Confir. AB Ángeles (M)'
                                    logo='1AM'
                                    color='white'
                                    borde='black'
                                    letter='black'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='tercera-cont'>
                    <div className='segunda-cont'>
                        <div className='line t31'>
                            <p>[<span style={{ color: 'green' }}>2</span> - 0]</p>
                        </div>
                        <div className='segunda terc'>
                            <Equipo
                                pos
                                nombre='Confirmación F.C.'
                                paralelo='2do Confir. 2 (M)'
                                logo='22M'
                                color='black'
                                borde='black'
                                letter='white'
                            />
                            <Equipo
                                ca
                                pos
                                nombre=''
                                paralelo='Ganador partido 2'
                                logo=''
                                color='#eee'
                                borde='black'
                                letter='#eee"'
                            />
                            <Equipo
                                ca
                                pos
                                nombre=''
                                paralelo='Ganador partido 3'
                                logo=''
                                color='#eee'
                                borde='black'
                                letter='#eee'
                            />
                        </div>
                    </div>
                    <div className='segunda-cont'>
                        <div className='empate'>
                            <div className='line-em'>
                                <p>[1 - 1]</p>
                            </div>
                            <div className='line-em'>
                                <p>[1 - 1]</p>
                            </div>
                        </div>
                        <div className='segunda slem'>
                            <div className='partido'>
                                <Equipo
                                    pos
                                    nombre='GDL'
                                    paralelo='2do Confir. 4 (M2)'
                                    logo='24M'
                                    color='white'
                                    borde='black'
                                    letter='black'
                                    mas='2'
                                />
                                <div className='marcador'>
                                    <strong className='meq'>0</strong>
                                    <p className='vs'>vs</p>
                                    <strong className='meq'>0</strong>
                                </div>
                                <Equipo
                                    ca
                                    pos
                                    nombre=''
                                    paralelo='Ganador Partido 4'
                                    logo=''
                                    color='#eee'
                                    borde='black'
                                    letter='#eee'
                                />
                            </div>
                            <div className='partido'>
                                <Equipo
                                    ca
                                    pos
                                    nombre=''
                                    paralelo='Perdedor Partido 2'
                                    logo=''
                                    color='#eee'
                                    borde='black'
                                    letter='#eee'
                                />
                                <div className='marcador'>
                                    <strong className='meq'>0</strong>
                                    <p className='vs'>vs</p>
                                    <strong className='meq'>0</strong>
                                </div>
                                <Equipo
                                    ca
                                    pos
                                    nombre=''
                                    paralelo='Ganador Partido 5'
                                    logo=''
                                    color='#eee'
                                    borde='black'
                                    letter='#eee'
                                />
                            </div>
                            <div className='partido'>
                                <Equipo
                                    ca
                                    pos
                                    nombre=''
                                    paralelo='Perdedor Partido 3'
                                    logo=''
                                    color='#eee'
                                    borde='black'
                                    letter='#eee'
                                />
                                <div className='marcador'>
                                    <strong className='meq'>0</strong>
                                    <p className='vs'>vs</p>
                                    <strong className='meq'>0</strong>
                                </div>
                                <Equipo
                                    ca
                                    pos
                                    nombre=''
                                    paralelo='Ganador Partido 6'
                                    logo=''
                                    color='#eee'
                                    borde='black'
                                    letter='#eee'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='segunda-cont nobot'>
                        <div className='line l2 t31'>
                            <p>[0 - <span style={{ color: 'red' }}>2</span>]</p>
                        </div>
                        <div className='segunda terc sl2'>
                        <Equipo
                            ca
                            pos
                            nombre=''
                            paralelo='Perdedor partido 4'
                            logo=''
                            color='#eee'
                            borde='black'
                                etter='#eee"'
                        />
                        <Equipo
                            ca
                            pos
                            nombre=''
                            paralelo='Perdedor partido 5'
                            logo=''
                            color='#eee'
                            borde='black'
                            letter='#eee"'
                        />
                        <Equipo
                            ca
                            pos
                            nombre=''
                            paralelo='Perdedor partido 6'
                            logo=''
                            color='#eee'
                            borde='black'
                            letter='#eee"'
                        />
                        </div>
                    </div>
                </div>
            </div>
            
            <style jsx>{`
                section{
                    display: flex;
                    flex-direction: column;
                }

                .title{
                    margin-top: 28px;
                    width: 100%;
                    font-size: 20px;
                    margin-bottom: 25px;
                }

                .info{
                    color: red;
                    font-size: 16px;
                    display: block;
                    margin-bottom: 15px;
                    text-align: center;
                }

                .cont{
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    margin: 0 -5% 0 0;
                    overflow-x: scroll;
                }

                .primera{
                    border: 3px solid #444;
                    border-radius: 6px;
                }

                .segunda-cont{
                    display: flex;
                    align-items: center;
                    margin-bottom: 20px;
                }

                .segunda{
                    border: 3px solid green;
                    border-radius: 6px;
                }

                .tercera-cont{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }

                .terc{
                    padding: 8px 0;
                    display: flex;
                }

                .sl2{
                    border: 3px solid red;
                }

                .slem{
                    border: 3px solid yellow;
                }

                .nobot{
                    margin-bottom: 0;
                }

                .line{
                    position: relative;
                    width: 60px;
                    height: 3px;
                    border: 2px solid green;
                }

                .empate{
                    position: relative;
                    height: 190px;
                    width: 70px;
                    display: flex;
                    flex-direction: column;
                    align-items: space-between;
                }

                .line-em{
                    width: 65px;
                    height: 3px;
                    border: 2px solid yellow;
                }

                .line-em:first-child{
                    position: absolute;
                    top: 0;
                }

                .line-em:last-child{
                    position: absolute;
                    bottom: 0;
                }

                .l2{
                    border: 2px solid red;
                }

                .line p, .line-em p{
                    margin-top: -28px;
                    text-align: center;
                    font-weight:  bold;
                }

                .t31{
                    width: 70px;
                }

                .partido{
                    padding: 4px 0 6px 0;
                    display: flex;
                    align-items: center;
                    border-bottom: 1px solid #CCC;
                }

                .id{
                    padding-left: 15px;
                    font-size: 20px;
                }

                .marcador{
                    width: 80px;
                    display: flex;
                    justify-content: center;
                }

                .meq{
                    width: 30px;
                    color: #245590;
                    font-size: 18px;
                    text-align: center;
                }

                .vs{
                    width: 20px;
                    color: #00000099;
                    font-size: 18px;
                    text-align: center;
                }

                .tercera-cont{
                    padding-right: 4%;
                }

                @media screen and (max-width: 768px){
                    .title{
                        margin-top: 24px;
                        font-size: 16px;
                        margin-bottom: 12px;
                    }

                    .info{
                        color: red;
                        font-size: 14px;
                        display: block;
                        margin-bottom: 10px;
                        text-align: center;
                    }

                    .cont{
                        justify-content: flex-start;
                        margin: 0 -15px 0 -15px;
                        padding-left: 15px;
                        overflow-x: scroll;
                    }

                    .tercera-cont{
                        padding-right: 15px;
                    }
                }
            `}</style>
        </section>
    )
}