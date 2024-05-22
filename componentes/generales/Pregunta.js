const Pregunta = ({ no, pregunta, children }) => (
    <div className='container'>
        <div className='pregunta'>
            { no && <p className='numero'>{`${no}.`}</p> }
            <p>{pregunta}</p>
        </div>
        <div className='opciones'>
            {children}
        </div>


        <style jsx>{`
            .container{
                width: 100%;
                margin: 0 auto;
                padding: 15px 25px 20px 20px;
                border: 2px solid white;
                border-radius: 20px;
                margin-bottom: 0px;
            }

            .pregunta{
                color: brown;
                font-weight: bold;
                font-size: 20px;
                text-align: justify;
                display: flex;
                padding-bottom: 10px;
            }

            .numero{
                padding-right: 8px;
            }

            .opciones{
                margin: 0 0 0 25px;
            }


            @media screen and (max-width: 768px){
                .container{
                    width: 100%;
                    padding: 20px 15px 25px 15px;
                    border: none;
                    border-radius: 0;
                    border-bottom: 5px solid #ccdae8;
                    margin-bottom: 0;
                }

                .pregunta{
                    font-size: 16px;
                    padding-bottom: 5px;
                }

                .opciones{
                    margin: 0;
                }
            }
        `}</style>
    </div>
)

export default Pregunta