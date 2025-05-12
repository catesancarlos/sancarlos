export default function FinalConfFem(){

    return(
        <section>
            <div>
                <div className='sec-ruta'>
                    <div className='partido par2'>
                        <div className='cuadro'>
                            <p>Soldad. de Jesús (13M)</p>
                            <span className='win'>10</span>
                        </div>
                        <div className='cuadro'>
                            <p>Ángeles del Cate (14M)</p>
                            <span className='lose'>2</span>
                        </div>
                        <div className='union u1'></div>
                    </div>
                </div>
                <div className='sec-ruta-2'>
                    <div className='partido par3'>
                        <div className='cuadro'>
                            <p>Guerrer. de Dios (15M)</p>
                            <span className='win'>6</span>
                        </div>
                        <div className='cuadro'>
                            <p>Camp. del Fútbol (12M)</p>
                            <span className='lose'>5</span>
                        </div>
                        <div className='union u1'></div>
                    </div>
                </div>
            </div>
            <div className='partido par4'>
                <div className='cuadro'>Soldados de Jesús (13M)</div>
                <div className='cuadro'>Guerreros de Dios (15M)</div>
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
                    width: 240px;
                    height: 100px;
                }

                .cuadro{
                    position: relative;
                    background: white;
                    width: 220px;
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
                    background: #245590;
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
                    width: 240px;
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
