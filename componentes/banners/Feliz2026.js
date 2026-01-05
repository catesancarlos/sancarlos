import Image from 'next/image'

export default function Feliz2026(){

    return(
        <section>
            <div className='img'>
                <Image
                    src='/feliz2026.png'
                    alt='Banner Jesuscribe proximamente'
                    fill
                />
                <div className='ftr-banner'>
                    <div className='line'></div>
                    <p className='text'>FELIZ AÑO 2026</p>
                    <div className='line'></div>
                </div>
            </div>

            <style jsx>{`
                section{
                    position: relative;
                    margin: 0px 4% 60px 4%;
                    width: 92%;
                    height: 380px;
                    border-radius: 20px;
                    overflow: hidden;
                    cursor: pointer;
                }

                .img{
                    position: relative;
                    width: 100%;
                    height: 380px;
                }

                .ftr-banner{
                    position: absolute;
                    width: 100%;
                    top: 28px;
                    display: flex;
                    align-items: center;
                }

                .text{
                    background: #FFFFFFaa;
                    width: 500px;
                    padding: 1px 0 2px 0;
                    color: brown;
                    font-size: 24px;
                    font-weight: bold;
                    text-align: center;
                    border-radius: 10px;
                }

                .line{
                    background: #FFFFFFaa;
                    width: 100%;
                    height: 4px;
                    border-radius: 0;
                }

                @media screen and (max-width: 768px){
                    section{
                        margin: 5px 0 30px 0;
                        width: 100%;
                        height: 220px;
                        border-radius: 0;
                    }

                    .img{
                        width: 100%;
                        height: 220px;
                    }

                    .ftr-banner{
                        top: 16px;
                    }

                    .text{
                        width: 450px;
                        padding: 1px 0 1px 0;
                        font-size: 15px;
                        border-radius: 8px;
                    }

                    .line{
                        height: 3px;
                    }
                }
            `}</style>
        </section>
    )
}