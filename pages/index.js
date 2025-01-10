import { useState, useEffect } from 'react'
import Link from 'next/link'

import AppLayout from '../componentes/layout'
import PartidoIda from '../componentes/banners/PartidoIda'
import MiniAgenda from '../componentes/home/MiniAgenda'
import CampSection from '../componentes/home/CampSection'

const Home = () => {
    const [toggle, setToggle] = useState(true)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(() =>  {
            setToggle((toggle) => !toggle)
        }, 3000);
    
        return () => clearInterval(intervalID);
    }, []);

    return (
        <>
            <AppLayout name='Inicio'  titulo='Cate San Carlos'>
                <div className='banner'>
                    {/* <img src='/main_banner.jpg' /> */}
                    <PartidoIda />
                    {/* <div className='hover_now'>
                        <p className='now_now'>En este momento:</p>
                        <p className='now_tittle'>
                            {toggle ? 'Catequesis Familiar 2do Confirmación' :
                            'Catequesis Familiar Iniciación'}
                        </p>
                    </div> */}
                </div>
                <MiniAgenda />
                <CampSection />
            </AppLayout>

            <style jsx>{`
                .banner{
                    position: relative;
                } 

                .hover_now{
                    position: absolute;
                    bottom: 30px;
                    right: calc(4% + 35px);
                    background: white;
                    min-width: 290px;
                    padding: 6px 10px 8px 10px;
                    text-align: right;
                    border-radius: 10px;
                    cursor: pointer;
                }

                .now_now{
                    color: brown;
                    font-size: 200;
                    animation-name: newo;
                    animation-duration: 3s;
                    animation-iteration-count: infinite;
                }

                @keyframes newo{
                   50% {
                       color: white;
                    } 
                }

                .now_tittle{
                    color: black;
                    font-weight: bold;
                }

                @media screen and (max-width: 768px){
                    img{
                        margin: 0;
                        width: 100%;
                        height: 240px;
                        border-radius: 0;
                        box-shadow: none;
                    }

                    .hover_now{
                        bottom: 15px;
                        right: 15px;
                        min-width: 220px;
                        padding: 6px 10px 8px 10px;
                        font-size: 12px;
                        border-radius: 10px;
                    }
                }
            `}</style>
        </> 
    )
}

export default Home;
