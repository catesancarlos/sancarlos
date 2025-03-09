import { useRouter } from 'next/router'

export default function InfoHoy({ now, link }) {
    const router = useRouter()

    return (
        <section>
            <div className='salida'>
                <div className='p2 izq'>
                    <strong>{(now?.now1 == 1)  ? 'HOY' :  (now?.now1 == 2) ? 'AHORA' : ''}</strong>
                </div>
                <div className='p1'>
                    <p>{now?.ev1}</p>
                    <i>{now?.des1}</i>
                    {
                        link ? 
                            <i 
                                onClick={() => router.push(link[1])}
                                style={{
                                    cursor: 'pointer',
                                    color: '#00AEEF',
                                    fontWeight: 'bold'
                                }}
                            >{link[0]}</i> 
                                : <i>{now?.place1}</i>
                    }
                </div>
                {
                    now?.ev2 &&
                    <div className='p1 pizq'>
                        <p>{now?.ev2}</p>
                        <i>{now?.des2}</i>
                        <i>{now?.place2}</i>
                    </div>
                }
                <div className='p2 der'>
                    { (now?.now1 == 1) && <strong>{now?.hour1}</strong> }
                </div>
            </div>

            <style jsx>{`
                section{
                    display: ${(now?.now1 == 0 || !now?.now1) ? 'none' : 'flex'};
                    opacity: 1;
                    margin: 0 4% 30px 4%;
                    width: 92%;
                    font-family: 'Lato', sans-serif;
                    flex-direction: column;
                    align-items: center;   
                }

                .salida{
                    width: 100%;
                    padding: 12px;
                    color: black;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: 1px dashed #3C4142;
                    border-radius: 15px;
                }

                .p1{
                    margin: -1px 0 0 0;
                    width: 180px;
                    width: 280px;
                    height: 70px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    text-align: center;
                }

                .pizq{
                    border-left: 4px solid #3C4142;
                }

                .p1 p{
                    font-size: 17px;
                    font-weight: bold;
                }

                .p1 i{
                    font-size: 16px;
                    font-weight: 200;
                }

                .p2{
                    height: 72px;
                    width: 100px;
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
                    animation: ${(now?.now1== 2) ? 'nuevo 3s infinite' : 'none'};
                }

                @keyframes nuevo{
                    50% {
                        opacity: 0;
                    } 
                }

                .der{
                    border-radius: 0 10px 10px 0;
                    width: ${now?.now1 == 2 ? '30px' : '110px'};
                }

                .p2 p{
                    font-size: 15px;
                }

                .p2 strong{
                    font-size: 20px;
                }

                @media screen and (max-width: 768px){
                    section{
                        margin: 5px 14px 14px 14px;
                        width: calc(100% - 28px);
                    }

                    .salida{
                        padding: 6px;
                        border-radius: 12px;
                    }

                    .p1{
                        height: 58px;
                        width: ${now?.now1 == 2 ? 'calc((100% - 85px)/1)' : 'calc((100% - 120px)/1)'};
                    }

                    .pizq{
                        border-left: 3px solid #3C4142;
                    }

                    .p1 p{
                        font-size: 13px;
                    }

                    .p1 i{
                        font-size: 12px;
                    }

                    .p2{
                        height: 60px;
                        width: 60px;
                        padding: 5px 8px;
                        border-radius: 10px;
                    }

                    .izq{
                        border-radius: 10px 0 0 10px;
                        width: ${now?.now1 == 2 ? '100px' : '70px'};
                    }

                    .der{
                        border-radius: 0 10px 10px 0;
                        width: ${now?.now1 == 2 ? '25px' : '60px'};
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