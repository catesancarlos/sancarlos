import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import AppLayout from '../../componentes/layout'
import Modal from '../../componentes/generales/ModalLibros'

import { Worker, Viewer, ProgressBar } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import { toolbarPlugin } from '@react-pdf-viewer/toolbar'

import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import '@react-pdf-viewer/toolbar/lib/styles/index.css'

export default function Libros(){
    const router = useRouter()
    const [pdfe, setPdfe] = useState(null)

    const defaultLayoutPluginInstance = defaultLayoutPlugin({ 
        sidebarTabs : () => [ ]
    } )

    const toolbarPluginInstance = toolbarPlugin()
    const { renderDefaultToolbar, Toolbar } = toolbarPluginInstance

    const transform = slot => ({
        ...slot,
        Download: () => <></>,
        DownloadMenuItem: () => <></>,
        Open: () => <></>,
        OpenMenuItem: () => <></>,
        EnterFullScreen: () => <></>,
        EnterFullScreenMenuItem: () => <></>,
        SwitchTheme: () => <></>,
        SwitchThemeMenuItem: () => <></>,
        Print: () => <></>,
        PrintMenuItem: () => <></>
    })

    useEffect(() => {
        if(pdfe){
            window.scrollTo(0, 0)
        }
    }, [pdfe])

    const handleDescargar = async (url) => {
        try {
            const respuesta = await fetch(url)
            const blob = await respuesta.blob()
            
            const enlace = window.URL.createObjectURL(blob)
            const a = document.createElement('a')
            
            a.href = enlace
            a.download = url.split('/').pop() || 'archivo.pdf' // Nombre del archivo
            document.body.appendChild(a)
            
            a.click()
            
            // Limpieza
            document.body.removeChild(a)
            window.URL.revokeObjectURL(enlace)
        } catch (error) {
            console.error('Error al descargar el PDF:', error)
        }
    }

    return(
        <AppLayout titulo='San Carlos - Libros' name='Libros'>
            <section>
                <article onClick={() => setPdfe('/libros/iniciacion.pdf')}>
                    <img src='/libros/portadaIniciacion.webp' />
                    <p>INICIACIÓN</p>
                </article>
                <article onClick={() => setPdfe('/libros/1ro-comunion.pdf')}>
                    <img src='/libros/portada1rocomunion.webp' />
                    <p>1RO COMUNIÓN</p>
                </article>
                <article onClick={() => setPdfe('/libros/2do-comunion.pdf')}>
                    <img src='/libros/portada2docomunion.jpg' />
                    <p>2DO COMUNIÓN</p>
                </article>
                <article onClick={() => setPdfe('/libros/biblico.pdf')}>
                    <img src='/libros/portadaBiblico.webp' />
                    <p>AÑO BIBLICO</p>
                </article>
                <article onClick={() => setPdfe('/libros/1ro-confirmacion.pdf')}>
                    <img src='/libros/portada1roconfirmacion.webp' />
                    <p>1RO CONFIRMACIÓN</p>
                </article>
                <article onClick={() => setPdfe('/libros/2do-confirmacion.pdf')}>
                    <img src='/libros/portada2doconfirmacion.webp' />
                    <p>2DO CONFIRMACIÓN</p>
                </article>
            
            </section>
            {
                pdfe &&
                    <Modal
                        background='#FFFFFFCC'
                        onDescargar={() => handleDescargar(pdfe)}
                        onClose={(e) => setPdfe(e)}
                    >
                        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                            <div
                                style={{
                                    border: '1px solid rgba(0, 0, 0, 0.3)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%',
                                    position: 'relative'
                                }}
                            >
                                <div
                                    style={{
                                        alignItems: 'center',
                                        backgroundColor: '#eeeeee',
                                        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                                        display: 'flex',
                                        padding: '0.25rem',
                                        position: 'absolute',
                                        width: '100%',
                                        zIndex: '3'
                                    }}
                                >
                                    <Toolbar>{renderDefaultToolbar(transform)}</Toolbar>
                                </div>
                                <div
                                    style={{
                                        flex: 1,
                                        overflow: 'hidden',
                                        zIndex: '2'
                                    }}
                                >
                                    <Viewer 
                                            fileUrl={pdfe} 
                                            renderLoader={percentages => (
                                                <div style={{ width: '240px'}}>
                                                    <p>Cargando...</p>
                                                    <ProgressBar progress={Math.round(percentages)} />
                                                </div>
                                            )}
                                            theme={{
                                                theme: 'light'
                                            }}
                                            plugins={[
                                                defaultLayoutPluginInstance,
                                                toolbarPluginInstance
                                            ]}
                                    />
                                </div>
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

                article{
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

                @media screen and (max-width: 768px){
                    section{
                        padding: 0 15px 0 15px;
                    }

                    article{
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
                }
            `}</style>
        </AppLayout>
    )
}