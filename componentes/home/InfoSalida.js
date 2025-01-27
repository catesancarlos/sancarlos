export default function InfoSalida({ misa }) {

    return (
        <section>
            <strong className='title'>¡Esta semana tenemos EUCARISTIA!</strong>
            <div className='salida'>
                <div className='p1'>
                    <p>Horario de salida</p>
                    <i>Centro:</i>
                </div>
                <div className='p2 izq'>
                    <p>Mañana</p>
                    <strong>12H00</strong>
                </div>
                <div className='p2 der'>
                    <p>Tarde</p>
                    <strong>17H00</strong>
                </div>
            </div>

            <style jsx>{`
                section{
                    opacity: 1;
                    margin: 0 4% 40px 4%;
                    width: 92%;
                    font-family: 'Lato', sans-serif;
                    display: flex;
                    flex-direction: column;
                    align-items: center;   
                }

                .title{
                    width: 100%;
                    background: #3C4142;
                    padding: 15px 15px 20px 15px;
                    color: white;
                    font-size: 28px;
                    text-align: center;
                    border-radius: 15px 15px 0 0;
                    margin-bottom: 12px;
                    animation-name: nuevo;
                    animation-duration: 3s;
                    animation-iteration-count: infinite;
                }

                @keyframes nuevo{
                    50% {
                        opacity: 0;
                    } 
                }

                .salida{
                    width: 100%;
                    padding: 15px;
                    color: black;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: 1px dashed #3C4142;
                    border-radius: 0 0 15px 15px;
                }

                .p1{
                    margin-top: -3px;
                    text-align: right;
                    padding-right: 12px;
                }

                .p1 p{
                    font-size: 19px;
                    font-weight: 200;
                }

                .p1 i{
                    font-size: 17px;
                    font-weight: 200;
                }

                .p2{
                    width: 110px;
                    margin: 0 4px;
                    background: #3C4142;
                    padding: 5px 8px;
                    color: white;
                    text-align: center;
                    border-radius: 10px;
                }

                .izq{
                    border-radius: 10px 0 0 10px;
                }

                .der{
                    border-radius: 0 10px 10px 0;
                }

                .p2 p{
                    font-size: 15px;
                }

                .p2 strong{
                    font-size: 20px;
                }

                @media screen and (max-width: 768px){
                    section{
                        margin: 5px 15px 15px 15px;
                        width: calc(100% - 30px);
                    }

                    .title{
                        padding: 8px 10px 10px 10px;
                        font-size: 21px;
                        border-radius: 10px 10px 0 0;
                        margin-bottom: 6px;
                    }

                    .salida{
                        padding: 10px;
                        border-radius: 0 0 12px 12px;
                    }

                    .p1{
                        padding-right: 10px;
                    }

                    .p1 p{
                        font-size: 16px;
                    }

                    .p1 i{
                        font-size: 15px;
                    }

                    .p2{
                        width: 65px;
                        margin: 0 3px;
                        padding: 5px 8px;
                        border-radius: 10px;
                    }

                    .izq{
                        border-radius: 10px 0 0 10px;
                    }

                    .der{
                        border-radius: 0 10px 10px 0;
                    }

                    .p2 p{
                        font-size: 12px;
                        line-height: 100%;
                    }

                    .p2 strong{
                        font-size: 14px;
                    }
                }
            `}</style>
        </section> 
    )
}