import Equipo from './Equipo'

export default function ItemCalendario({
    res,
    pen,
    home,
    dia,
    fecha,
    hora,
    genero,
    equipos,
    paralelos,
    logos,
    colores,
    mas
}) {
    return(
        <article>
            <strong className='gender'>{genero}</strong>
            <div className='date'>
                <p>{dia}</p>
                <p>{fecha}</p>
                <strong>{hora}</strong>
            </div>
            <div className='team'>
                <Equipo
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
                <div className='score'>
                    <strong className='meq'>{res ? res?.[0] : 0}</strong>
                    <p className='vs'>Vs</p>
                    <strong className='meq'>{res ? res?.[1] : 0}</strong>
                </div>
                {pen && <p className='pen'>{`Pen (${pen})`}</p> }
            </div>
            <div className='team'>
                <Equipo
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

            <style jsx>{`
                article{
                    position: relative;
                    margin-top: 4px;
                    margin-left: 4px;
                    width: ${home ? '100%' : 'auto'};
                    padding: 5px 5px 5px 0;
                    font-family: 'Lato', sans-serif;
                    display: flex;
                    justify-content: space-between;
                    border: 1px solid black;
                    border-radius: 6px;
                    margin-bottom: 12px;
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