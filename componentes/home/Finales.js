export default function Finales(){
    return(
        <section>
            <p className='title'>FINAL INICIACIÓN</p>
            <div className='partido'>
                <div className='equipo'>
                    <p>Niños guerreros de Dios</p>
                    <p>Iniciación 1</p>
                    <img src='/inag_kt_camp_2025_2.jpg' />
                </div>
                <p className='versus'>Vs</p>
                <div className='equipo eder'>
                    <p>Elegidos de Dios</p>
                    <p>Iniciación 2</p>
                    <img src='/inag_kt_camp_2025_2.jpg' />
                </div>
            </div>
            
            <style jsx>{`
                section{
                    position: relative;
                    margin: 0 4% 20px 4%;
                    width: 92%;
                    border-radius: 20px;
                    overflow: hidden;
                }
                
                @media screen and (max-width: 768px){
                    section{
                        margin: 5px 0 30px 0;
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        border-radius: 0;
                        border-radius: 15px;
                        overflow: hidden;
                    }

                    .title{
                        background: #245590;
                        width: 100%;
                        padding: 2px 0 3px 0;
                        color: white;
                        text-align: center;
                        border-radius: 10px 10px 0 0;
                    }

                    .partido{
                        background: #C8B273;
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }

                    .equipo{
                        width: calc(100%/2);
                        mask-image: linear-gradient(90deg, #C8B273 80%, transparent);
                    }

                    .eder{
                        mask-image: linear-gradient(-90deg, #C8B273 80%, transparent);
                    }

                    .partido img{
                        height: 120px;
                        width: 100%;
                        object-fit: cover;
                    }

                    .versus{
                        color: white;
                        font-size: 40px;
                        font-weight: bold;
                    }
                }
            `}</style>
        </section>
    )
}