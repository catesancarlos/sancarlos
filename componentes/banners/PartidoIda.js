export default function PartidoIda({ nohome }){

    return(
        <section>
            <div className='cont-banner'>                                
                <div className='div-left'>
                    <p>Catequistas</p>
                </div>
                <img src='/bannerIdaLarge2.png' />
                <div className='div-right'>
                    <div className='fecha'>
                        <p className='info-header'>Partido de Ida:</p>
                        <div className='info-desc'>
                            <p>Sábado</p>
                            <p>11 enero 2025</p>
                            <p>15h30</p>
                        </div>
                    </div>
                    <div className='fecha'>
                        <p className='info-header'>Partido de Vuelta:</p>
                        <div className='info-desc right'>
                            <p>Sábado</p>
                            <p>08 febrero 2025</p>
                            <p>10h30</p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                section{
                    margin-left: ${nohome ? '0' : '4%'};
                    width: ${nohome ? '100%' : '92%'};
                }

                .cont-banner{
                    display: flex;
                }

                .div-left{
                    width: 120px;
                    background: #001A85;
                    background-image: repeating-linear-gradient(-45deg, hsla(0, 0%, 100%, .1), hsla(0, 0%, 100%, .1) 15px, transparent 0, transparent 20px);
                    border-radius: 18px 0 0 18px;
                    margin-right: 2px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .div-left p{
                    color: white;
                    font-size: 34px;
                    font-family: 'Lato', sans-serif;
                    font-weight: bold;
                    transform: rotate(-90deg);
                }

                img{
                    width: 100%;
                    height: 420px;
                    border-radius: 0px;
                    filter: brightness(0.9);
                    filter: contrast(1.25);
                    /* box-shadow: 2px 2px 4px 0px #777; */
                }

                .div-right{
                    width: 330px;
                    background: #650004;
                    background-image: repeating-linear-gradient(-45deg, hsla(0, 0%, 100%, .1), hsla(0, 0%, 100%, .1) 15px, transparent 0, transparent 20px);
                    margin-left: 3px;
                    padding: 35px 30px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    border-radius: 0 18px 18px 0;
                }

                .fecha{
                    width: 100%;
                    height: 155px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    border: 3px solid white;
                    border-radius: 10px;
                }

                .info-header{
                    line-height: 50px;
                    width: 100%;
                    color: white;
                    font-size: 20px;
                    font-family: 'Lato', sans-serif;
                    font-weight: bold;
                    text-align: center;
                }

                .info-desc{
                    height: 100px;
                    background: white;
                    padding: 10px;
                    color: black;
                    font-size: 16px;
                    font-family: 'Lato', sans-serif;
                    font-weight: 600;
                    text-align: left;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    border-radius: 0 0 6px 6px;
                    mix-blend-mode: screen;
                }

                .info-desc p{
                    padding: 1px 0;
                }

                .right{
                    text-align: right;
                }

                @media screen and (max-width: 768px){
                    section{
                        margin-left: 0;
                        width: 100%;
                    }

                    .cont-banner{
                        flex-direction: column;
                    }

                    .div-left{
                        display: none;
                    }

                    img{
                        width: 100%;
                        height: 260px;
                    }

                    .div-right{
                        background: black;
                        background-image: repeating-linear-gradient(-45deg, hsla(0, 0%, 100%, .1), hsla(0, 0%, 100%, .1) 15px, transparent 0, transparent 20px);
                        margin-left: 0;
                        width: 100%;
                        padding: 15px;
                        flex-direction: row;
                        border-radius: 0;
                    }
                    .fecha{
                        position: relative;
                        background: black;
                        margin-top: -35px;
                        width: 47%;
                        height: 100px;
                        border: none;
                        border-radius: 10px;
                    }

                    .info-header{
                        line-height: 35px;
                        font-size: 16px;
                    }

                    .info-desc{
                        height: 65px;
                        padding: 5px 7px 7px 7px;
                        font-size: 15px;
                        font-weight: 200;
                        border-radius: 0 0 10px 10px;
                    }

                    .info-desc p{
                        padding: 0;
                    }
                }
            `}</style>
        </section>
    )
}