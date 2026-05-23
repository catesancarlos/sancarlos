export default function FinalSegFem(){

    return(
        <section>
            <div>
                <div className='sec-ruta'>
                    <div className='partido'>
                        <div className='cuadro'>
                            <span className='burbuja'>3</span>
                            <p>Enviadas de Jesús (11F)</p>
                            <span className='goles win'>6</span>
                        </div>
                        <div className='cuadro'>
                            <span className='burbuja'>4</span>
                            <p>Peces del Agua Sagrada</p>
                            <span className='goles lose'>2</span>
                        </div>
                        <div className='union u1'></div>
                    </div>
                    <div className='partido par2'>
                        <div className='cuadro'>
                            <span className='burbuja'>3</span>
                            <p>Enviadas de Jesús (11F)</p>
                            {/* <span className='goles lose'>1</span> */}
                        </div>
                        <div className='cuadro'><div>l</div>
                            <span className='burbuja'>2</span>
                            <p>Leones de Daniel (12M)</p>
                            {/* <span className='goles win'>9</span> */}
                        </div>
                        <div className='union'></div>
                    </div>
                </div>
            </div>
            <div className='partido par4'>
                <div className='cuadro'>
                    <span className='burbuja'></span>
                    <p>{`>`}</p>
                    {/* <span className='goles win'>11</span> */}
                </div>
                <div className='cuadro'><div>l</div>
                    <span className='burbuja'>1</span>
                    <p>Belén City (13F)</p>
                    {/* <span className='goles lose'>8</span> */}
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

                .cuadro .goles{
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
                    font-size: 12px;
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

                .par4{
                    margin-top: 60px;
                    margin-left: 20px;
                    width: 230px;
                    height: 100px;
                }

                @media screen and (max-width: 768px){
                    section{
                        padding-top: 10px;
                        padding-left: 14px;
                    }

                    .partido{
                        width: 184px;
                        height: 100px;
                    }

                    .cuadro{
                        width: 172px;
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

                    .par4{
                        width: 198px;
                        height: 100px;
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
