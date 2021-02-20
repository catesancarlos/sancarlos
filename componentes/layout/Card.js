const Card = ({ nombre, info, children }) => (
    <div className='container'>
        <p className='titulo'>{nombre}</p>
        <p className='subtitulo'>{info}</p>
        {children}

        <style jsx>{`
            .container{
                background: white;
                width: 30%;
                margin: 30px auto;
                font-size: 26px;
                padding: 30px;
                border-radius: 20px;
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            .titulo{
                color: brown;
                font-weight: bold;
                margin-bottom: 20px;
            }

            .subtitulo{
                font-size: 18px;
                margin-bottom: 5px;
                text-align: center;
            }

            strong{
                color: brown;
            }


            @media screen and (max-width: 768px){
                .container{
                    width: 90%;
                    margin: 20px auto;
                    font-size: 22px;
                    padding: 25px;
                }              

                .subtitulo{
                    font-size: 16px;
                }
            }
        `}</style>
    </div>
)

export default Card