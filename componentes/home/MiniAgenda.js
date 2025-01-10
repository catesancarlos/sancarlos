const MiniAgenda = () => {

    return (
        <section>
            <div className='divo'></div>
            <p className='title'>Próximas actividades</p>
            <div className='cont'>
                <article>
                    <div className='e_header'>
                        <p className='e_title'>Catequesis</p>
                        <p className='e_subtitle'>Clases Normales</p>
                    </div>
                    <div className='e_info'>
                        <p>Sábado 11 enero 2025</p>
                        <p>Segun horario</p>
                        <p>Centros catequeticos</p>
                    </div>
                </article>
                <article>
                    <div className='e_header'>
                        <p className='e_title'g>Catequesis Familiar</p>
                        <p className='e_subtitle'>2do Comunión</p>
                    </div>
                    <div className='e_info'>
                        <p>Viernes 10 enero 2025</p>
                        <p>19H00</p>
                        <p>Teatro Catequesis</p>
                    </div>
                </article>
                <article>
                    <div className='e_header'>
                        <p className='e_title'>Catequesis Familiar</p>
                        <p className='e_subtitle'>Año Bíblico</p>
                    </div>
                    <div className='e_info'>
                        <p>Viernes 10 enero 2025</p>
                        <p>19H00</p>
                        <p>Templo Parroquial</p>
                    </div>
                </article>
                <article>
                    <div className='e_header'>
                        <p className='e_title'>Catequesis Familiar</p>
                        <p className='e_subtitle'>1ro Confirmación</p>
                    </div>
                    <div className='e_info'>
                        <p>Sábado 11 enero 2025</p>
                        <p>19H00</p>
                        <p>Teatro Catequesis</p>
                    </div>
                </article>
                <article>
                    <div className='e_header'>
                        <p className='e_title'>Catequesis Familiar</p>
                        <p className='e_subtitle'>2do Confirmación</p>
                    </div>
                    <div className='e_info'>
                        <p>Viernes 17 enero 2025</p>
                        <p>19H00</p>
                        <p>Teatro Catequesis</p>
                    </div>
                </article>
            </div>

            <style jsx>{`
                section{
                    margin: 25px 4% 0 4%;
                    width: 92%;
                }

                .divo{
                    margin-top: 18px;
                    width: 100%;
                    border: 1px solid black;
                }

                .title{
                    margin: -15px auto 0 auto;
                    width: 212px;
                    background: #F2F8F6;
                    font-size: 20px;
                    font-weight: bold;
                    text-align: center;
                    margin-bottom: 18px;
                }

                .cont{
                    display: flex;
                }

                article{
                    background: white;
                    width: 20%;
                    font-size: 13px;
                    font-family: 'Lato', sans-serif;
                    border-radius: 10px;
                    margin-right: 20px;
                    box-shadow: 2px 2px 4px 0px #777;
                    overflow: hidden;
                }

                article:first-child .e_header{
                
                    background-image: repeating-linear-gradient(-45deg, hsla(0, 0%, 100%, .1), hsla(0, 0%, 100%, .1) 15px, transparent 0, transparent 20px);
                }

                article:last-child{
                    margin-right: 0;
                }

                .e_header{
                    background: #000000AA;
                    padding: 5px 10px 7px 10px;
                    color: white;
                    font-weight: bold;
                }

                .e_title{
                    font-size: 14px;
                    font-weight: 200;
                }

                .e_subtitle{
                    font-size: 12px;
                    letter-spacing: 1px;
                }

                .e_info{
                    padding: 5px 10px 7px 10px;
                    font-size: 200;
                }

                @media screen and (max-width: 768px){
                    section{
                        margin: 18px 3% 25px 3%;
                        width: 94%;
                    }

                    .cont{
                        justify-content: space-between;
                        flex-wrap: wrap;
                    }

                    article{
                        width: calc(50% - 10px);
                        font-size: 13px;
                        margin-right: 0px;
                        box-shadow: 2px 2px 2px 0px #777;
                        margin-bottom: 15px;
                    }

                    .e_header{
                        padding: 5px 10px 7px 10px;
                    }

                    .e_title{
                        font-size: 13px;
                    }

                    .e_subtitle{
                        font-size: 12px;
                    }

                    .e_info{
                        padding: 5px 10px 7px 10px;
                        font-size: 12px;
                    }

                    .e_info p{
                        margin-top: 2px;
                    }
                }
            `}</style>
        </section> 
    )
}

export default MiniAgenda