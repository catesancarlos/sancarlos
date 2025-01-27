import { useRouter } from 'next/router'

const MiniAgenda = () => {
    const router = useRouter()

    return (
        <section>
            <div className='divo'></div>
            <p className='title'>Próximas actividades</p>
            <div className='cont'>
                <article>
                    <div className='clases-iz'>
                        <div className='e_header'>
                            <p className='e_title'>Catequesis</p>
                            <p className='e_subtitle'>Clases Normales</p>
                        </div>
                        <div className='e_info'>
                            <p>Sábado 01 febrero 2025</p>
                            <p>Centros catequeticos</p>
                            <p style={{ color: '#245590', fontWeight: 'bold' }}>{`Segun horario >>`}</p>
                        </div>
                    </div>
                    <div className='clases-dr'>
                        <strong>Centro</strong>
                        <p>• Mañana: 08:45 - 11:30</p>
                        <p>• Tarde: 13:45 - 16:30</p>
                        <strong>Los Ángeles</strong>
                        <p>• Mañana: 09:00 - 11:30</p>
                        <p>• Tarde: 14:00 - 16:30</p>
                        <p><strong>Molinopamba:</strong> 08:00-11:00</p>
                    </div>
                </article>
                <article>
                    <div className='e_header'>
                        <p className='e_title'>Tercera Semana</p>
                        <p className='e_subtitle'>Campeonato 2025</p>
                    </div>
                    <div className='e_info'>
                        <p>Sábado 01 febero 2025</p>
                        <p>Patio Catequesis</p>
                        <p onClick={() => router.push('/campeonato')} style={{ cursor: 'pointer' }}>17:00</p>
                    </div>
                </article>
                <article>
                    <div className='e_header'>
                        <p className='e_title'>Catequesis Familiar</p>
                        <p className='e_subtitle'>Iniciación</p>
                    </div>
                    <div className='e_info'>
                        <p>Sábado 01 febrero 2025</p>
                        <p>Teatro Catequesis</p>
                        <p>19H00</p>
                    </div>
                </article>
                <article>
                    <div className='e_header'>
                        <p className='e_title'>Tercera Semana</p>
                        <p className='e_subtitle'>Campeonato 2025</p>
                    </div>
                    <div className='e_info'>
                        <p>Domingo 02 febero 2025</p>
                        <p>Patio Catequesis</p>
                        <p onClick={() => router.push('/campeonato')} style={{ color: '#245590', fontWeight: 'bold', cursor: 'pointer' }}>Ver horarios</p>
                    </div>
                </article>
                {/* 
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
                </article> */}
            </div>

            <style jsx>{`
                section{
                    font-family: 'Lato', sans-serif;
                    margin: 35px 4% 0 4%;
                    margin: 0px 4% 50px 4%;
                    width: 92%;
                }

                .divo{
                    margin-top: 18px;
                    width: 100%;
                    border: 1px solid brown;
                }

                .title{
                    margin: -17px auto 0 auto;
                    width: 220px;
                    background: #F2F8F6;
                    color: brown;
                    font-size: 22px;
                    font-weight: bold;
                    text-align: center;
                    margin-bottom: 30px;
                }

                .cont{
                    display: flex;
                    flex-wrap: wrap;
                }

                article{
                    background: white;
                    width: calc(25% - 15px);
                    border: 2px solid #00000088;
                    border-radius: 15px;
                    margin-right: 20px;
                    box-shadow: 2px 2px 4px 0px #777;
                    overflow: hidden;
                }

                article:nth-child(1){
                    width: calc(50% - 15px);
                    display: flex;
                    border: 2px solid #245590;
                }

                .clases-iz{
                    width: 50%;
                }

                .clases-dr{
                    margin: 1px 0 4px 0;
                    width: 50%;
                    padding: 0 16px;
                    font-size: 15px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                .clases-dr p{
                    font-weight: 200;
                }
                
                article:nth-child(3){
                    margin-right: 0;
                }

                article:nth-child(4){
                    margin-top: 20px;
                }

                .e_header{
                    background: #00000088;
                    background-image: repeating-linear-gradient(-45deg, hsla(0, 0%, 100%, .1), hsla(0, 0%, 100%, .1) 15px, transparent 0, transparent 20px);
                    padding: 8px 10px 10px 10px;
                    color: white;
                    font-weight: bold;
                }

                article:nth-child(1) .e_header{
                    background: #245590;
                    background-image: repeating-linear-gradient(-45deg, hsla(0, 0%, 100%, .1), hsla(0, 0%, 100%, .1) 15px, transparent 0, transparent 20px);
                    border-radius: 0 0 15px 0;
                }

                .e_title{
                    font-size: 17px;
                    font-weight: 400;
                }

                .e_subtitle{
                    font-size: 17px;
                    letter-spacing: 1px;
                }

                .e_info{
                    color: black;
                    padding: 10px 12px 12px 12px;
                    font-size: 17px;
                    font-weight: 200;
                }

                @media screen and (max-width: 768px){
                    section{
                        font-family: 'Lato', sans-serif;
                        margin: 20px 15px 0 15px;
                        margin: 10px 15px 20px 15px;
                        width: calc(100% - 30px);
                    }

                    .title{
                        margin-bottom: 20px;
                    }

                    .cont{
                        justify-content: space-between;
                        flex-wrap: wrap;
                    }

                    article{
                        width: calc(50% - 8px);
                        font-size: 13px;
                        margin-right: 0px;
                        box-shadow: 2px 2px 2px 0px #777;
                        margin-bottom: 15px;
                    }

                    article:nth-child(1){
                        width: 100%;
                        display: flex;
                        border: 3px solid #245590;
                    }

                    .clases-iz{
                        width: 49%;
                    }

                    .clases-dr{
                        margin: 1px 0 4px 0;
                        width: 51%;
                        padding: 0 6px 0 8px;
                        font-size: 13px;
                    }

                    article:nth-child(4){
                        margin-top: 0;
                    }

                    .e_header{
                        padding: 6px 8px 7px 8px;
                    }

                    .e_title{
                        font-size: 14px;
                    }

                    .e_subtitle{
                        font-size: 14px;
                    }

                    .e_info{
                        padding: 6px 7px 7px 7px;
                        font-size: 14px;
                    }

                    .e_info p{
                        margin-top: 1px;
                    }

                    .e_info p:first-child{
                        margin-top: 0;
                    }
                }
            `}</style>
        </section> 
    )
}

export default MiniAgenda