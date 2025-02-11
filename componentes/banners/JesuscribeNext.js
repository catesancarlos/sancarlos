import Image from 'next/image'
import bannerJesuscribe from '../../public/jesuscribe_next_banner.jpeg'

export default function JesuscribeNext(){
    return(
        <section>
            <div className='img'>
                <Image
                    src={bannerJesuscribe}
                    alt='Banner Jesuscribe proximamente'
                    fill
                />
                <div className='ftr-banner'>
                    <div className='line'></div>
                    <img src='/logo-jesuscribe.jpg' />
                    <div className='line'></div>
                </div>
                <div className='ftr-banner2'>
                    Próximamente
                </div>
            </div>


            <style jsx>{`
                section{
                    margin: 0 4% 20px 4%;
                    width: 92%;
                }

                .img{
                    position: relative;
                    width: 100%;
                    height: 500px;
                    border-radius: 15px;
                    overflow: hidden;
                }

                .ftr-banner{
                    position: absolute;
                    width: 100%;
                    bottom: 46px;
                    display: flex;
                    align-items: center;
                }

                .ftr-banner img{
                    height: 35px;
                    border-radius: 10px;
                }

                .line{
                    background: #FFFFFF77;
                    margin: 0 0 0 20px;
                    width: 100%;
                    height: 3px;
                    border-radius: 5px;
                }

                .line:first-child{
                    margin: 0 20px 0 0;
                }

                .ftr-banner2{
                    position: absolute;
                    width: 100%;
                    bottom: 19px;
                    color: #FFFFFF;
                    font-size: 17px;
                    font-family: 'Lato', sans-serif;
                    font-weight: 200;
                    text-align: center;
                }

                @media screen and (max-width: 768px){
                    section{
                        margin: 0 0 10px 0;
                        width: 100%;
                    }

                    .img{
                        width: 100%;
                        height: 300px;
                        border-radius: 0;
                    }

                    .ftr-banner{
                        bottom: 28px;
                    }

                    .ftr-banner img{
                        height: 24px;
                        border-radius: 6px;
                    }

                    .line{
                        margin: 0 0 0 10px;
                        height: 2px;
                    }

                    .line:first-child{
                        margin: 0 10px 0 0;
                    }

                    .ftr-banner2{
                        bottom: 9px;
                        font-size: 13px;
                    }
                }
            `}</style>
        </section>
    )
}