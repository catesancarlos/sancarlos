import AppLayout from '../componentes/layout'

import { Viewer, Worker } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'

import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

export default function Agenda(){
    const newplugin = defaultLayoutPlugin()

    return(
        <AppLayout titulo='San Carlos - Agenda' name='Agenda'>
            <section>
                <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js'>
                    <div className='docvi'>
                        <Viewer fileUrl='/agenda.pdf' plugins={[newplugin]} />
                    </div>
                </Worker>
            </section>
           

            <style jsx>{`
                section{
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    overflow: hidden;
                }

                .docvi{
                    height: 500px;
                    width: 90vw;
                    border-radius: 5px;
                    overflow: hidden;
                }

                @media screen and (max-width: 768px){
                    .docvi{
                        width: 95vw;
                        height: 600px;
                    }
                }
            `}</style>
        </AppLayout>
    )
}