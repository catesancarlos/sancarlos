import { useState } from 'react'
import { useRouter } from 'next/router'

import AppLayout from '../../componentes/layout'
import Modal from '../../componentes/generales/ModalLibros'

import { Viewer, Worker } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'

import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

export default function Libros(){
    const router = useRouter()
    const [pdfe, setPdfe] = useState(null)

    const newplugin = defaultLayoutPlugin()

    return(
        <AppLayout titulo='San Carlos - Libros' name='Libros'>
            <section>
                <div onClick={() => setPdfe('/libros/iniciacion.pdf')}>
                    <img src='/libros/portadaIniciacion.webp' />
                    <p>INICIACIÓN</p>
                </div>
                <div onClick={() => setPdfe('/libros/1ro-comunion.pdf')}>
                    <img src='/libros/portada1rocomunion.webp' />
                    <p>1RO COMUNIÓN</p>
                </div>
                <div onClick={() => setPdfe('/libros/2do-comunion.pdf')}>
                    <img src='/libros/portada2docomunion.jpg' />
                    <p>2DO COMUNIÓN</p>
                </div>
                <div onClick={() => setPdfe('/libros/biblico.pdf')}>
                    <img src='/libros/portadaBiblico.webp' />
                    <p>AÑO BIBLICO</p>
                </div>
                <div onClick={() => setPdfe('/libros/1ro-confirmacion.pdf')}>
                    <img src='/libros/portada1roconfirmacion.webp' />
                    <p>1RO CONFIRMACIÓN</p>
                </div>
                <div onClick={() => setPdfe('/libros/2do-confirmacion.pdf')}>
                    <img src='/libros/portada2doconfirmacion.webp' />
                    <p>2DO CONFIRMACIÓN</p>
                </div>
            
            </section>
            {
                pdfe &&
                    <Modal background='#FFFFFFCC' onClose={(e) => setPdfe(e)} >
                        <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js'>
                            <div className='docvi'>
                                <Viewer fileUrl={pdfe} plugins={[newplugin]} />
                            </div>
                        </Worker>
                    </Modal>
            }

            <style jsx>{`
                section{
                    padding: 0 50px;
                    display: flex;
                    justify-content: center;
                    flex: 1;
                    flex-wrap: wrap
                }

                div{
                    margin: 30px 55px;
                    cursor: pointer;
                    border-radius: 15px;
                    box-shadow: 5px 5px 10px 0px #777;
                }

                img{
                    width: 250px;
                    height: 300px;
                    border-radius: 15px 15px 0  0;
                }

                p{
                    background: white;
                    padding: 10px 0 10px 0;
                    width: 100%;
                    font-size: 16px;
                    font-weight: bold;
                    text-align: center;
                    border-radius: 0 0 15px 15px;
                }
                
                .docvi{
                    height: 500px;
                    width: 90vw;
                    border-radius: 16px;
                    overflow: hidden;
                }

                @media screen and (max-width: 768px){
                    section{
                        padding: 0 50px;
                    }

                    div{
                        margin: 18px 16px;
                        border-radius: 15px;
                        box-shadow: 4px 4px 8px 0px #777;
                    }

                    img{
                        width: 150px;
                        height: 190px;
                        border-radius: 15px 15px 0  0;
                    }

                    p{
                        background: white;
                        padding: 10px 0 10px 0;
                        width: 100%;
                        font-size: 14px;
                        font-weight: bold;
                        text-align: center;
                        border-radius: 0 0 15px 15px;
                    }

                    .docvi{
                        width: 95vw;
                        height: 580px;
                    }
                }
            `}</style>
        </AppLayout>
    )
}