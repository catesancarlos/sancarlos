import IconEscudo from './IconEscudo'

const Equipo = ({
    ca,
    nombre,
    paralelo,
    logo,
    color,
    borde,
    letter,
    mas
}) => (
    <article>
        <div>
            <IconEscudo ca={ca} color={color} borde={borde} />
            <p className='log'>{logo}</p>
            { mas && <p className='slog'>{mas}</p> }
        </div>
        <p className='l-p'>{paralelo}</p>
        <p className='l-n'>{nombre}</p>

        <style jsx>{`
            article{
                width: ${!ca ? '140px' : 'auto'};
                padding: 0 5px;
                font-family: 'Lato', sans-serif;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin-bottom: ${!ca ? '10px' : '3px'};
            }

            div{
                position: relative;
            }

            .log{
                position: absolute;
                top: ${!ca ? '30px' : '14px'};
                width: 100%;
                color: ${letter};
                font-size: ${!ca ? '22px' : '13px'};
                font-weight: bold;
                text-align: center;
            }

            .slog{
                position: absolute;
                top: ${!ca ? '55px' : '26px'};
                width: 100%;
                color: ${letter};
                font-size: ${!ca ? '16px' : '11px'};
                font-weight: bold;
                text-align: center;
            }

            .l-n{
                margin-top: 0px;
                font-size: 14px;
                font-weight: bold;
                text-align: center;
            }
                
            .l-p{
                font-size: 12px;
                font-weight: 500;
                text-align: center;
            }

            @media screen and (max-width: 768px){
                article{
                    width: ${!ca ? '140px' : 'auto'};
                    padding: ${!ca ? '0 2px' : '0'};
                }

                .l-n{
                    font-size: ${!ca ? '14px' : '12px'};
                }
                    
                .l-p{
                    font-size: ${!ca ? '12px' : '10px'};
                }
            }
        `}</style>
    </article>
)
export default Equipo