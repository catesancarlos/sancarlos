export default function InfoHoy({ now, ev, dev, dev2, place, place2, hour }) {

    return (
        <section>
            <div className='salida'>
                <div className='p2 izq'>
                    <strong>{now ? 'AHORA' : 'HOY'}</strong>
                </div>
                <div className='p1 pizq'>
                    <p>{ev}</p>
                    <i>{dev}</i>
                    <i>{place}</i>
                </div>
                <div className='p1'>
                    <p>{ev}</p>
                    <i>{dev2}</i>
                    <i>{place2}</i>
                </div>
                <div className='p2 der'>
                    { !now &&
                        <>
                            {/* <p>{place}</p> */}
                            <strong>{hour}</strong>
                        </>
                    }
                </div>
            </div>

            <style jsx>{`
                section{
                    opacity: 1;
                    margin: 0 4% 35px 4%;
                    width: 92%;
                    font-family: 'Lato', sans-serif;
                    display: flex;
                    flex-direction: column;
                    align-items: center;   
                }

                .salida{
                    width: 100%;
                    padding: 15px;
                    color: black;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: 1px dashed #3C4142;
                    border-radius: 15px;
                }

                .p1{
                    margin: -1px 0 0 0;
                    padding: 0 20px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    text-align: center;
                }

                .pizq{
                    padding-right: 20px;
                    border-right: 4px solid #3C4142;
                }

                .p1 p{
                    font-size: 19px;
                    font-weight: bold;
                }

                .p1 i{
                    font-size: 18px;
                    font-weight: 200;
                }

                .p2{
                    height: 70px;
                    width: 110px;
                    background: #3C4142;
                    padding: 5px 8px;
                    color: white;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    border-radius: 10px;
                }

                .izq{
                    border-radius: 10px 0 0 10px;
                    animation: ${now ? 'nuevo 3s infinite' : 'none'};
                }

                @keyframes nuevo{
                    50% {
                        opacity: 0;
                    } 
                }

                .der{
                    border-radius: 0 10px 10px 0;
                    width: ${now ? '30px' : '110px'};
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

                    .salida{
                        padding: 10px;
                        border-radius: 12px;
                    }

                    .p1{
                        /* width: ${now ? 'calc(100% - 160px)' : 'calc(100% - 170px)'}; */
                        width: auto;
                    }

                    .p1 p{
                        font-size: 16px;
                    }

                    .p1 i{
                        font-size: 15px;
                    }

                    .p2{
                        width: 70px;
                        margin: 0 3px;
                        padding: 5px 8px;
                        border-radius: 10px;
                    }

                    .izq{
                        border-radius: 10px 0 0 10px;
                        width: ${now ? '100px' : '70px'};
                    }

                    .der{
                        border-radius: 0 10px 10px 0;
                        width: ${now ? '30px' : '70px'};
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