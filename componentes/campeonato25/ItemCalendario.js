import Equipo from './Equipo'

export default function ItemCalendario({
    now,
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
        <section>
            <div className='genero'>
                <strong>{genero}</strong>
            </div>
            <div className='fecha'>
                <p>{dia}</p>
                <p>{fecha}</p>
                <strong>{hora}</strong>
            </div>
            <div className='eq1'>
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
            <div className='marc-glo'>
                {now && <p className='now'>Ahora</p> }
                <div className='marcador'>
                    <strong className='meq'>{res ? res?.[0] : 0}</strong>
                    <p className='vs'>Vs</p>
                    <strong className='meq'>{res ? res?.[1] : 0}</strong>
                </div>
                {pen && <p className='pen'>{`Pen (${pen})`}</p> }
            </div>
            <div className='eq2'>
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
                section{
                    width: ${home ? '100%' : 'auto'};
                    position: relative;
                    margin-top: 4px;
                    margin-left: 4px;
                    padding: 5px 5px 5px 0;
                    font-family: 'Lato', sans-serif;
                    display: flex;
                    justify-content: space-between;
                    border: 1px solid black;
                    border-radius: 6px;
                    margin-bottom: 8px;
                }

                .genero{
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

                .fecha{
                    width: 100px;
                    font-size: 15px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }

                .eq1, .eq2{
                    width: 180px;
                }

                .marc-glo{
                    position: relative;
                    width: 120px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .marcador{
                    display: flex;
                }

                .now{
                    position: absolute;
                    top: 5px;
                    background: ${genero == 'M' ? '#245590' : '#CC397B'};
                    padding: 1px 5px 2px 5px;
                    color: white;
                    font-size: 13px;
                    font-weight: 400;
                    border-radius: 5px;
                    animation-name: nuevo;
                    animation-duration: 2s;
                    animation-iteration-count: infinite;
                }

                .pen{
                    position: absolute;
                    bottom: 14px;
                    color: black;
                    font-size: 13px;
                    font-weight: 400;
                }

                @keyframes nuevo{
                   50% {
                       background: transparent;
                       color: transparent;
                    } 
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
                    section{
                        width: 100%;
                    }

                    .fecha{
                        width: 80px;
                        font-size: 12px;
                    }

                    .eq1, .eq2{
                        width: 100px;
                    }

                    .marcador{
                        width: auto;
                    }
                }
            `}</style>
        </section>
    )
}