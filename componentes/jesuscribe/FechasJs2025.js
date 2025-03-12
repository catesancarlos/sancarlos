export default function FechasJs25(){

    return (
        <div className='main'>
            <p className='pf1'>FECHAS DEL CONCURSO</p>
            <p className='pf2'>
                El concurso se llevara a cabo segun el siguiente cronograma.
            </p>
            <div className='cont-crono'>
                <div className='sec-crono'>
                    <p>12 Abril 2025</p>
                    <p>1ro Comunión</p>
                    <p>Año Biblico</p>
                </div>
                <div className='sec-crono'>
                    <p>26 Abril 2025</p>
                    <p>Iniciación</p>
                    <p>1ro Confirmación</p>
                </div>
                <div className='sec-crono'>
                    <p>03 Mayo 2025</p>
                    <p>2do Comunión</p>
                    <p>2do Confirmación</p>
                </div>
            </div>
            
            <style jsx>{`
                .main{
                    font-family: 'Lato', sans-serif;
                }

                .pf1{
                    font-size: 20px;
                    font-weight: bold;
                }

                .pf2{
                    margin-top: 10px;
                    font-size: 17px;
                    font-weight: 200;
                    margin-bottom: 40px;
                }

                .cont-crono{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .sec-crono{
                    display: flex;
                }

                .sec-crono p{
                    margin: 0 8px 16px 8px;
                    background: #333;
                    width: 150px;
                    padding: 10px;
                    color: white;
                    font-weight: bold;
                    text-align: center;
                    border-radius: 10px;
                }

                .sec-crono p:last-child{
                    background: #677;
                }

                .sec-crono p:first-child{
                    background: transparent;
                    color: black;
                    font-size: 17px;
                    border: none;
                    font-weight: bold;
                }

                @media screen and (max-width: 768px){
                    .info{
                        margin-top: 8px;
                        color: red;
                        display: block;
                        margin-bottom: 10px;
                    }

                    .sec-crono p{
                        margin: 0 4px 10px 4px;
                        width: 120px;
                        padding: 8px;
                        font-size: 13px;
                        border-radius: 10px;
                    }

                    .sec-crono p:first-child{
                        width: 100px;
                        font-size: 13px;
                    }
                }
            `}</style>
        </div> 
    )
}