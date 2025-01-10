import IconEscudo from './IconEscudo'

const Equipo = ({
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
            <IconEscudo color={color} borde={borde} />
            <p className='log'>{logo}</p>
            { mas && <p className='slog'>{mas}</p> }
        </div>
        <p className='l-p'>{paralelo}</p>
        <p className='l-n'>{nombre}</p>

        <style jsx>{`
            article{
                width: 140px;
                padding: 0 5px;
                font-family: 'Lato', sans-serif;
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-bottom: 10px; 
            }

            div{
                position: relative;
            }

            .log{
                position: absolute;
                top: 30px;
                width: 100%;
                color: ${letter};
                font-size: 22px;
                font-weight: bold;
                text-align: center;
            }

            .slog{
                position: absolute;
                top: 55px;
                width: 100%;
                color: ${letter};
                font-size: 16px;
                font-weight: bold;
                text-align: center;
            }

            .l-n{
                margin-top: 1px;
                font-size: 14px;
                font-weight: bold;
                text-align: center;
            }
                
            .l-p{
                font-size: 12px;
                font-weight: 500;
                text-align: center;
            }
        `}</style>
    </article>
)
export default Equipo