export default function FinalBibMas(){

    return(
        <section>
            <div>
                <div className='sec-ruta'>
                    <div className='partido par2'>
                        <div className='cuadro'><div>l</div>
                            <span className='burbuja'>1</span>
                            <p>Año Bíblico 1 (A1M)</p>
                            {/* <span className='lose'>1</span> */}
                        </div>
                        <div className='cuadro'><div>l</div>
                            <span className='burbuja'>4</span>
                            <p>Año Bíblico 4 (A4M)</p>
                            {/* <span className='win'>9</span> */}
                        </div>
                        <div className='union'></div>
                    </div>
                </div>
                <div className='sec-ruta-2'>
                    <div className='partido par3'>
                        <div className='cuadro'><div>l</div>
                            <span className='burbuja'>2</span>
                            <p>Año Bíblico 3 (A3M)</p>
                            {/* <span className='lose'>4</span> */}
                        </div>
                        <div className='cuadro'><div>l</div>
                            <span className='burbuja'>3</span>
                            <p>Año Bíblico 2 (A2M)</p>
                            {/* <span className='win'>10</span> */}
                        </div>
                        <div className='union'></div>
                    </div>
                </div>
            </div>
            <div className='partido par4'>
                <div className='cuadro'>
                    <p>{`>`}</p>
                    {/* <span className='win'>11</span> */}
                </div>
                <div className='cuadro'>
                    <p>{`>`}</p>
                    {/* <span className='lose'>8</span> */}
                </div>
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
                    background: #245590;
                }

                .lose{
                    background: black;
                }

                .cuadro .burbuja {
                    position: absolute;
                    /* Valores negativos para que sobresalga un poco de la esquina */
                    top: -12px; 
                    left: -6px; 
                    
                    /* Tamaño fijo igual para que sea un círculo perfecto */
                    width: 18px;
                    height: 18px;
                    
                    /* Centrado del número por dentro */
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    
                    background: red; /* Cambia al color que prefieras */
                    color: white;
                    font-size: 11px;
                    font-weight: bold;
                    border-radius: 5px; /* Esto la hace redonda */
                    z-index: 3; /* Un nivel por encima del cuadro */
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
                    width: 230px;
                    height: 160px;
                }

                @media screen and (max-width: 768px){
                    section{
                        padding-left: 14px;
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
                        left: -12px;
                    }

                    .par2{
                        margin-left: 12px;
                    }

                    .par3{
                        margin-left: 12px;
                    }

                    .par4{
                        width: 206px;
                        height: 160px;
                        margin-left: 12px;
                    }

                    .par4 .union{
                        left: -12px;
                        margin-right: 14px;
                    }
                }
            `}</style>
        </section>
        
    )
}
