import Equipo from '../Equipo'

export default function PartidoSoloResultado({
    com,
    res,
    pen,
    extra,
    jugador,
    home,
    dia,
    fecha,
    hora,
    genero,
    equipos,
    paralelos,
    logos,
    colores,
    mas,
    sus
}) {
    return(
        <article>
            <div className='tp'>
                <strong className='gender'>{genero}</strong>
                <div className='date'>
                    <p>{dia}</p>
                    <p>{fecha}</p>
                    <strong>{hora}</strong>
                </div>
                <div className='team'>
                    <Equipo
                        com={com}
                        ca
                        nombre={equipos[0]}
                        paralelo={paralelos[0]}
                        logo={logos[0]}
                        color={colores.eq1[0]}
                        borde={colores.eq1[1]}
                        letter={colores.eq1[2]}
                        mas={mas && mas[0]}
                    />
                </div>
                <div className='cont-score'>
                    {sus && <p className='suspendido'>Suspendido</p> }
                    <div className='score'>
                        <strong className='meq'>{res ? res?.[0] : 0}</strong>
                        <p className='vs'>Vs</p>
                        <strong className='meq'>{res ? res?.[1] : 0}</strong>
                    </div>
                    {pen && <p className='pen'>{`Pen (${pen})`}</p> }
                    {extra && <p className='pen'>{`T. extra (${extra})`}</p> }
                </div>
                <div className='team'>
                    <Equipo
                        com={com}
                        ca
                        nombre={equipos[1]}
                        paralelo={paralelos[1]}
                        logo={logos[1]}
                        color={colores.eq2[0]}
                        borde={colores.eq2[1]}
                        letter={colores.eq2[2]}
                        mas={mas && mas[1]}
                    />
                </div>
            </div>
            { jugador && <p className='jugador'>{`Jugador${genero == 'F' ? 'a' : ''} del partido:`}<span>{jugador}</span></p> }

            <style jsx>{`
                article{
                    width: ${home ? '100%' : 'auto'};
                    position: relative;
                    margin-top: 4px;
                    margin-left: 4px;
                    font-family: 'Lato', sans-serif;
                    border-radius: 10px;
                    border: ${genero == 'M' ? `1px ${!com ? 'solid' : 'dashed'} #245590` : `1px ${!com ? 'solid' : 'dashed'} #CC397B`};
                    border-bottom: ${jugador ? 'none' : 'auto'};
                    margin-bottom: 12px;
                }

                .tp{
                    padding: 5px;
                    display: flex;
                    justify-content: space-between;
                }

                .jugador{
                    width: 100%;
                    background: ${genero == 'M' ? '#245590' : '#CC397B'};
                    padding: 4px 0;
                    color: white;
                    font-size: 13px;
                    font-weight: 200;
                    text-align: center;
                    display: flex;
                    justify-content: center;
                    border-radius: 0 0 10px 10px;
                }

                .jugador span{
                    margin-left: 4px;
                    font-weight: 400;
                }

                .jugador p{
                    margin-left: 4px;
                    background: white;
                    padding: 0 5px;
                    color: black;
                    border-radius: 5px;
                    cursor: pointer;
                }

                .gender{
                    position: absolute;
                    top: -6px;
                    left: -6px;
                    background: ${genero == 'M' ? '#245590' : '#CC397B'};
                    width: 28px;
                    line-height: 28px;
                    color: white;
                    text-align: center;
                    border-radius: 6px;
                }

                .date{
                    width: 100px;
                    font-size: 15px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }

                .team{
                    width: 180px;
                }

                .cont-score{
                    position: relative;
                    width: 120px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .suspendido{
                    position: absolute;
                    top: 8px;
                    color: red;
                    font-size: 13px;
                    font-weight: 500;
                }

                .score{
                    display: flex;
                }

                .pen{
                    position: absolute;
                    bottom: 14px;
                    color: black;
                    font-size: 13px;
                    font-weight: 400;
                }

                .meq{
                    color: ${genero == 'M' ? '#245590' : '#CC397B'};
                    font-size: 18px;
                }

                .meq:first-child{
                    padding: 0 10px 0 5px;
                }

                .meq:last-child{
                    padding: 0 5px 0 10px;
                }

                .vs{
                    color: #00000099;
                    font-size: 18px;
                }

                @media screen and (max-width: 768px){
                    article{
                        width: 100%;
                    }

                    .date{
                        width: 80px;
                        font-size: 12px;
                    }

                    .team{
                        width: 100px;
                    }

                    .score{
                        width: auto;
                    }
                }
            `}</style>
        </article>
    )
}