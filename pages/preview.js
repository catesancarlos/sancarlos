import { useState, useEffect } from 'react'

import AppLayout from '../componentes/layout'

export default function Preview(){

    return(
        <AppLayout name='' titulo=''>
            <section>
                <div>
                    <div className='sec-ruta'>
                        <div className='partido'>
                            <div className='cuadro'>Confirmación FC (22F)</div>
                            <div className='cuadro'>Las Águilas (11F)</div>
                            <div className='union u1'></div>
                        </div>
                        <div className='partido par2'>
                            <div className='cuadro' style={{ color: 'transparent' }}>eq</div>
                            <div className='cuadro'><div>l</div>21F / 2AF</div>
                            <div className='union'></div>
                        </div>
                    </div>
                    <div className='sec-ruta-2'>
                        <div className='partido'>
                            <div className='cuadro'>Newcastells (14F)</div>
                            <div className='cuadro'>Génesis (23F)</div>
                            <div className='union u1'></div>
                        </div>
                        <div className='partido par3'>
                            <div className='cuadro'><div>l</div>21F / 2AF</div>
                            <div className='cuadro' style={{ color: 'transparent' }}>eq</div>
                            <div className='union'></div>
                        </div>
                    </div>
                </div>
                <div className='partido par4'>
                    <div className='cuadro' style={{ color: 'transparent' }}>eq</div>
                    <div className='cuadro' style={{ color: 'transparent' }}>eq</div>
                    <div className='union'></div>
                </div>
            </section>

            <style jsx>{`
                section{
                    font-family: 'Lato', sans-serif;
                    margin: 0 4% 0 4%;
                    width: 92%;
                    display: flex;
                    overflow-x: scroll;
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
                    width: 200px;
                    height: 100px;
                }

                .cuadro{
                    background: white;
                    width: 180px;
                    line-height: 36px;
                    text-align: center;
                    border: 2px solid black;
                    border-radius: 10px;
                    z-index: 2;
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
                    width: 200px;
                    height: 160px;
                }

                @media screen and (max-width: 768px){
                    .partido{
                        width: 180px;
                        height: 100px;
                    }

                    .cuadro{
                        width: 160px;
                        line-height: 36px;
                        font-size: 14px;
                    }

                    .par4{
                        width: 180px;
                        height: 160px;
                    }
                }
            `}</style>
        </AppLayout>
        
    )
}
