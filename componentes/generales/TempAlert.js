import { useEffect } from 'react'
import Modal from './Modal'

export default function TempAlert({ titulo, subtitulo, activo, onDesactivar }){
    useEffect(() => {
        const timer = setTimeout(() => {
            if(activo) onDesactivar(false)
        }, 1200)
        return () => clearTimeout(timer)
    }, [activo])

    return(
        <div className='container'>
            <Modal background='#00000044' share={activo} >
                <div className='mostrar'>
                    <strong>{titulo}</strong>
                    { subtitulo && <p>{subtitulo}</p> }   
                </div>
            </Modal>

            <style jsx>{`
                .container{
                    visibility: ${activo ? 'visible' : 'hidden'};
                    transition: 0.3s ease-out;
                }

                .mostrar{
                    background: brown;
                    padding: 13px 18px;
                    color: white;
                    font-family: 'K2D', sans-serif;
                    font-size: 14px;
                    text-align: center;
                    border-radius: 15px;
                }

                p{
                    margin-top: 3px;
                    font-weight: 200;
                }

                @media screen and (min-width: 1024px) {
                    .mostrar{
                        padding: 14px 20px 16px 20px;
                        font-size: 17px;
                    }
                }
            `}</style>
        </div>
    )
}