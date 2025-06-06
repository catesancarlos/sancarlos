import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

import bannerJesuscribe from '../../public/jesuscribe_next_banner.jpeg'
import Dice from '../iconos/Dice'

export default function JesuscribeNext({ first, section, children, onSection }){
    const router = useRouter()

    return(
        <section onClick={() => router.push('/jesuscribe')}>
            {
                section ? children :
                    <div className='img'>
                        <Image
                            src={bannerJesuscribe}
                            alt='Banner Jesuscribe proximamente'
                            fill
                        />
                        {/* { first &&
                            <div className='dice' onClick={onSection} >
                                <Dice size={14} color='#000' />
                                <p>Probar una pregunta</p>
                            </div>
                        } */}
                        <div className='dice'
                            /* onClick={onSection} */
                        >
                            <p>PULSA AQUÍ</p>
                        </div>
                        <div className='ftr-banner'>
                            <div className='line'></div>
                            <img src='/logo-jesuscribe.jpg' />
                            <div className='line'></div>
                        </div>
                        <div className='ftr-banner2'>
                            {/* <p>2DO CONFIRMACIÓN</p> */}
                        </div>
                    </div>
            }

            <style jsx>{`
                section{
                    position: relative;
                    /* margin: 0 4% 20px 4%;
                    width: 92%; */
                    width: 100%;
                    height: 500px;
                    border-radius: 20px;
                    overflow: hidden;
                    cursor: pointer;
                }

                .img{
                    position: relative;
                    width: 100%;
                    height: 500px;
                }

                .dice{
                    position: absolute;
                    /* top: 24px;
                    right: 24px;
                    padding: 4px 12px 4px 12px;
                    */
                    top: 30px;
                    right: 34px;
                    background: #FFF;
                    padding: 5px 20px 5px 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 5px;
                    cursor: pointer;
                }

                .dice p{
                    /* margin-left: 8px;
                    color: black;
                    font-size: 16px;
                    line-height: 20px;
                    font-weight: 200; */
                    margin-left: 0;
                    line-height: 24px;
                    color: black;
                    font-size: 20px;
                    font-weight: bold;
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
                    margin: 0 20%;
                    width: 60%;
                    bottom: 16px;
                    color: #FFFFFF;
                    font-size: 17px;
                    font-family: 'Lato', sans-serif;
                    font-weight: 500;
                    text-align: center;
                    display: flex;
                    justify-content: space-around;
                }

                .ftr-banner2 p{
                    width: 33.333%;
                }

                @media screen and (max-width: 768px){
                    section{
                        margin: 5px 0 10px 0;
                        width: 100%;
                        height: 300px;
                        border-radius: 0;
                    }

                    .img{
                        width: 100%;
                        height: 300px;
                    }

                    .dice{
                        /* top: 15px;
                        right: 15px;
                        padding: 3px 7px; */
                        top: 18px;
                        right: 20px;
                        padding: 4px 10px 3px 10px;
                        border-radius: 4px;
                    }

                    .dice p{
                        /* margin-left: 5px;
                        line-height: 14px;
                        font-size: 13px; */
                        margin-left: 0;
                        line-height: 18px;
                        font-size: 14px
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
                        margin: 0 1%;
                        width: 98%;
                        bottom: 9px;
                        font-size: 13px;
                    }

                    .ftr-banner2 p:nth-child(1){
                        width: 40%;
                    }

                    .ftr-banner2 p:nth-child(2){
                        width: 20%;
                    }

                    .ftr-banner2 p:nth-child(3){
                        width: 40%;
                    }
                }
            `}</style>
        </section>
    )
}