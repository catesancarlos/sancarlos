const NoDisponible = () => {

    return (
        <div className='container'>
            <div className='obso'>
                <h3 className='obso-titulo'>Servicio no disponible.</h3>
                <p>Ya pasaron las fechas de evaluaciones.</p>
            </div>
            <p className='fechas-desc'>Fechas para las Evaluaciones de recuperacion</p>
            <div className='fecha-item'>
                <h3 className='fecha-nombre'>Segundo de Confirmación</h3>
                <p>El sábado 18 de julio a las 13H00 hasta las 23H00</p>
            </div>

            <style jsx>{`
                .container{
                    width: 100%;
                    text-align: center;
                    font-size: 25px;
                }

                .obso{
                    margin: 10px 0;
                    background: white;   
                    padding: 1.25em 0;
                }

                .obso-titulo{
                    margin: 0 0 0.25em 0;
                    font-size: 2em;
                }

                .fechas-desc{
                    font-size: 35px;
                    margin: 30px 0 30px 0;
                }

                .fecha-item{
                    width: 50%;
                    margin: 0 auto;
                    padding: 10px 0;
                    font-size: 22px;
                    line-height: 1.5em;
                    text-align: center;
                }

                .fecha-nombre{
                    margin: 0 0 10px 0;
                    font-size: 1.1em;
                    color: brown;
                }

                @media screen and (max-width: 480px){
                    .container{
                        font-size: 18px;
                    }
    
                    .obso{
                        margin: 0; 
                        padding: 1.25em 0;
                    }
    
                    .fechas-desc{
                        font-size: 1.2em;
                        margin: 50px 0 15px 0;
                    }
    
                    .fecha-item{
                        width: 90%;
                        padding: 10px 0;
                        font-size: 1em;
                        line-height: 1.5em;
                        text-align: center;
                    }
                }
            `}</style>
        </div>
    )
}

export default NoDisponible;