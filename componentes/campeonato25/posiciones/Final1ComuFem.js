export default function FinalConfFem(){

    return(
        <section>
            <div>
                <div className='sec-ruta'>
                    <div className='partido par2'>
                        <div className='cuadro'>
                            <p>Camp. del Fútbol (12F)</p>
                            <span className='win'>7</span>
                        </div>
                        <div className='cuadro'>
                            <p>Las Milagrosas (14F)</p>
                            <span className='lose'>0</span>
                        </div>
                        <div className='union u1'></div>
                    </div>
                </div>
                <div className='sec-ruta-2'>
                    <div className='partido par3'>
                        <div className='cuadro'>
                            <p>Siervas de Dios (16F)</p>
                            <span className='win'>2</span>
                        </div>
                        <div className='cuadro'>
                            <p>Ángeles (15F)</p>
                            <span className='lose'>0</span>
                        </div>
                        <div className='union u1'></div>
                    </div>
                </div>
            </div>
            <div className='partido par4'>
                <div className='cuadro'>
                    <p>Camp. del Fútbol (12F)</p>
                    <span className='win'>2</span>
                </div>
                <div className='cuadro'>
                    <p>Siervas de Dios (16F)</p>
                    <span className='lose'>0</span>
                </div>
                <div className='union'></div>
            </div>

            <style jsx>{`
                section{
                    font-family: 'Lato', sans-serif;
                    display: flex;
                }

                .sec-ruta{
                    margin-top: -25px;
                    display: flex;
                }

                .sec-ruta-2{
                    margin-top: 50px;
                    display: flex;
                }

                .partido{
                    position: relative;
                    width: 230px;
                    height: 100px;
                }

                .cuadro{
                    position: relative;
                    background: white;
                    width: 210px;
                    line-height: 36px;
                    font-size: 15px;
                    text-align: center;
                    border: 2px solid black;
                    border-radius: 10px;
                    z-index: 2;
                }

                .cuadro span{
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 32px;
                    color: white;
                    font-weight: bold;
                    border-radius: 0 8px 8px 0;
                }

                .cuadro p{
                    text-align: left;
                    padding-left: 10px;
                }

                .win{
                    background: #CC397B;
                }

                .lose{
                    background: black;
                }

                .partido .cuadro:first-child{
                    position: absolute;
                    top: 0;
                }

                .partido .cuadro:nth-child(2){
                    position: absolute;
                    bottom: 0;
                }

                .union{
                    position: absolute;
                    top: 19px;
                    bottom: 19px;
                    left: -20px;
                    right: 0;
                    border: 2px solid black;
                    border-left: none;
                    z-index: 1;
                }

                .u1{
                    left: 0;
                }
     
                .cuadro div{
                    background: #F2F8F6;
                    position: absolute;
                    left: -22px;
                    width: 20px;
                    color: transparent;
                }

                .par2{
                    margin-top: 30px;
                    margin-left: 0;
                }

                .par3{
                    margin-top: -30px;
                    margin-left: 0;
                }

                .par4{
                    margin-top: 35px;
                    margin-left: 20px;
                    width: 230px;
                    height: 160px;
                }

                @media screen and (max-width: 768px){
                    section{
                        width: 100%;
                        padding-left: 0px;
                    }

                    .partido{
                        width: 192px;
                        height: 100px;
                    }

                    .cuadro{
                        width: 180px;
                        line-height: 36px;
                        font-size: 13px;
                    }

                    .cuadro p{
                        padding-left: 6px;
                    }

                    .par2 .union, .par3 .union{
                        left: 0px;
                    }

                    .par2{
                        margin-left: 0px;
                    }

                    .par3{
                        margin-left: 0px;
                    }

                    .par4{
                        width: 178px;
                        height: 160px;
                        margin-left: 12px;
                    }

                    .par4 .union{
                        left: -12px;
                        margin-right: 0;
                    }

                    .par4 .cuadro{
                        width: 166px;
                    }
                }
            `}</style>
        </section>
        
    )
}
