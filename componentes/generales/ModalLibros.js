import { useEffect, useRef } from 'react'
import Download from '../iconos/Download'

export default function Modal({ children, background, onDescargar, onClose }){
    const refCont = useRef(null)

    /* useEffect(() => {
        if(onClose){
            function handleClickOutside (e) {
                if(!refCont.current.contains(e.target)) onClose(false)
                    
            }
            
            document.addEventListener('mousedown', handleClickOutside)
            return () => {
                document.removeEventListener('mousedown', handleClickOutside)
            }
        }
    }, []) */

    useEffect(() => {
        // Bloquear scroll del body
        document.body.style.overflow = 'hidden'

        return () => {
            // Restaurar scroll cuando se cierre
            document.body.style.overflow = ''
        }
    }, [])
   
    return(
        <div className='total'>
            <div className='contenido' ref={refCont}>
                <div className='botones'>
                    {/* <div className='button dw' onClick={onDescargar}>
                        <Download />
                    </div> */}
                    <div className='button cl'>
                        <p onClick={() => onClose(false)}>X</p>
                    </div>
                </div>    
                {children}
            </div>

            <style jsx>{`
                .total{
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: ${background};
                    padding-top: 40px;
                    display: flex;
                    justify-content: center;
                    z-index: 5;
                }

                .contenido{
                    position: sticky;
                    top: 0px;
                    min-height: 600px;
                    width: 85vw;
                    border-radius: 8px;
                }

                .botones{
                    position: absolute;
                    top: -25px;
                    right: calc(-7.5vw + 15px);
                    display: flex;
                    justify-content: flex-end;
                    z-index: 11;
                }

                .button{
                    width: 41px;
                    height: 41px;
                    color: white;
                    font-weight: bold;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 8px;
                    
                    cursor: pointer;
                }

                .cl{
                    background: black;
                }

                @media screen and (max-width: 768px){
                    
                }
            `}</style>
        </div>
    )
}