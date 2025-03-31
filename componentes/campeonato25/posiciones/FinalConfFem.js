export default function FinalConfFem(){

    return(
        <section>
            <div>
                <div className='sec-ruta'>
                    <div className='partido'>
                        <div className='cuadro'>
                            Confirmación FC (22F)
                        </div>
                        <div className='cuadro'>
                            Las Águilas (11F)
                        </div>
                        <div className='union u1'></div>
                    </div>
                    <div className='partido par2'>
                        <div className='cuadro' style={{ color: 'transparent' }}>eq</div>
                        <div className='cuadro'><div>l</div>2 Conf 1 / 2 Ángeles</div>
                        <div className='union'></div>
                    </div>
                </div>
                <div className='sec-ruta-2'>
                    <div className='partido'>
                        <div className='cuadro'>
                            <p>Newcastells (14F)</p>
                            <span className='lose'>2</span>
                        </div>
                        <div className='cuadro'>
                            <p>Génesis (23F)</p>
                            <span className='win'>3</span>
                        </div>
                        <div className='union u1'></div>
                    </div>
                    <div className='partido par3'>
                        <div className='cuadro'><div>l</div>2 Conf 1 / 2 Ángeles</div>
                        <div className='cuadro'>
                            Génesis (23F)
                        </div>
                        <div className='union'></div>
                    </div>
                </div>
            </div>
            <div className='partido par4'>
                <div className='cuadro' style={{ color: 'transparent' }}>eq</div>
                <div className='cuadro' style={{ color: 'transparent' }}>eq</div>
                <div className='union'></div>
            </div>

            <style jsx>{`
                section{
                    font-family: 'Lato', sans-serif;
                    display: flex;
                }

                .sec-ruta{
                    display: flex;
                }

                .sec-ruta-2{
                    margin-top: 50px;
                    display: flex;
                }

                .partido{
                    position: relative;
                    width: 220px;
                    height: 100px;
                }

                .cuadro{
                    position: relative;
                    background: white;
                    width: 200px;
                    line-height: 36px;
                    text-align: center;
                    border: 2px solid black;
                    border-radius: 10px;
                    z-index: 2;
                }

                .cuadro span{
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 36px;
                    color: white;
                    font-weight: bold;
                    border-radius: 0 8px 8px 0;
                }

                .win{
                    background: #CC397B;
                }

                .lose{
                    background: black;
                }

                .cuadro p{
                    margin-right: 26px;
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
                    margin-left: 20px;
                }

                .par3{
                    margin-top: -30px;
                    margin-left: 20px;
                }

                .par4{
                    margin-top: 60px;
                    margin-left: 20px;
                    width: 220px;
                    height: 160px;
                }

                @media screen and (max-width: 768px){
                    section{
                        padding-left: 14px;
                    }

                    .partido{
                        width: 185px;
                        height: 100px;
                    }

                    .cuadro{
                        width: 170px;
                        line-height: 36px;
                        font-size: 13px;
                    }

                    .par4{
                        width: 199px;
                        height: 160px;
                    }

                    .par4 .union{
                        margin-right: 14px;
                    }
                }
            `}</style>
        </section>
        
    )
}
