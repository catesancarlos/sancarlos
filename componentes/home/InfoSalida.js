export default function InfoSalida() {

    return (
        <section>
            <div className='p1'>
                <strong>Horario de salida para hoy:</strong>
                <p>Centro</p>
            </div>
            <div className='p2 izq'>
                <p>Mañana</p>
                <strong>11H30</strong>
            </div>
            <div className='p2 der'>
                <p>Tarde</p>
                <strong>16H30</strong>
            </div>

            <style jsx>{`
                section{
                    font-family: 'Lato', sans-serif;
                    margin: 0 4% 20px 4%;
                    width: 92%;
                    background: #3C4142;
                    height: 100px;
                    color: white;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 18px;
                }

                .p1{
                    margin: 0 5px;
                    text-align: right;
                    padding-right: 25px;
                }

                .p1 strong{
                    font-size: 22px;
                }

                .p1 p{
                    font-size: 18px;
                    font-weight: 200;
                }

                .p2{
                    width: 130px;
                    margin: 0 5px;
                    background: white;
                    padding: 5px 8px;
                    color: black;
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
                    font-size: 22px;
                }

                @media screen and (max-width: 768px){
                    section{
                        margin: 0 14px 15px 14px;
                        width: calc(100% - 30px);
                        height: 68px;
                    }

                    .p1{
                        margin: 0;
                        padding-right: 8px;
                    }

                    .p1 strong{
                        font-size: 16px;
                    }

                    .p1 p{
                        font-size: 16px;
                    }

                    .p2{
                        width: 78px;
                        margin: 0 3px;
                        padding: 4px 8px;
                        border-radius: 10px;
                    }

                    .izq{
                        border-radius: 10px 0 0 10px;
                    }

                    .der{
                        border-radius: 0 10px 10px 0;
                    }

                    .p2 p{
                        font-size: 13px;
                    }

                    .p2 strong{
                        font-size: 18px;
                    }
                }
            `}</style>
        </section> 
    )
}