import IconEscudo from './IconEscudo'
import IconEscudoCom from './IconEscudoCom'

const Equipo = ({
    ca,
    pos,
    com,
    nombre,
    paralelo,
    logo,
    color,
    borde,
    letter,
    mas,
    ctext,
    op
}) => (
    <article>
        <div>
            {
                !com ? <IconEscudo ca={ca} pos={pos} color={color} borde={borde} />
                    : <IconEscudoCom ca={ca} pos={pos} color={color} borde={borde} />
            }
            <p className='log'>{logo}</p>
            { mas && <p className='slog'>{mas}</p> }
        </div>
        <p className='l-p'>{paralelo}</p>
        <p className='l-n'>{nombre}</p>

        <style jsx>{`
            article{
                width: ${ca ? 'auto' : pos ? '130px' : '165px'};
                padding: 0 5px;
                font-family: 'Lato', sans-serif;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin-bottom: ${ca ? '3px' : pos ? '0' : '10px'};
                opacity: ${op ? 0.18 : 1};
            }

            div{
                position: relative;
            }

            .log{
                position: absolute;
                top: ${ca ? '14px' : pos ? '12px' : '30px'};
                width: 100%;
                color: ${letter};
                font-size: ${ca ? '13px' : pos ? '10px' : '22px'};
                font-weight: bold;
                text-align: center;
            }

            .slog{
                position: absolute;
                top: ${ca ? '26px' : pos ? '21px' : '55px'};
                width: 100%;
                color: ${letter};
                font-size: ${ca ? '11px' : pos ? '9px' : '16px'};
                font-weight: bold;
                text-align: center;
            }

            .l-n{
                margin-top: 0px;
                color: ${ctext ? ctext : 'black'};
                font-size: ${!pos ? '13px' : '11px'};
                font-weight: bold;
                text-align: center;
            }
                
            .l-p{
                font-size: ${!pos ? '12px' : '10px'};
                font-weight: 500;
                text-align: center;
            }

            @media screen and (max-width: 768px){
                article{
                    width: ${ca ? 'auto' : pos ? '120px' : '140px'};
                    padding: ${ca ? '0' : pos ? '0' : '0 2px'};
                }

                .l-n{
                    font-size: ${ca ? '12px' : pos ? '11px' : '14px'};
                }
                    
                .l-p{
                    font-size: ${ca ? '10px' : pos ? '10px' : '12px'};
                }
            }
        `}</style>
    </article>
)
export default Equipo