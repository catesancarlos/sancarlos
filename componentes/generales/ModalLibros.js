import { useEffect, useRef } from 'react'
import Download from '../iconos/Download'

export default function Modal({ children, background, onDescargar, onClose }){
    const refCont = useRef(null)

    useEffect(() => {
        if(onClose){
            function handleClickOutside (e) {
                if(!refCont.current.contains(e.target)) onClose(false)
                    
            }
            
            document.addEventListener('mousedown', handleClickOutside)
            return () => {
                document.removeEventListener('mousedown', handleClickOutside)
            }
        }
    }, [])
   
    return(
        <div className='total'>
            <div className='contenido' ref={refCont}>
                <div className='botones'>
                    <div className='button dw' onClick={onDescargar}>
                        <Download />
                    </div>
                    <div className='button cl'>
                        <p onClick={() => onClose(false)}>X</p>
                    </div>
                </div>    
                {children}
            </div>

            <style jsx>{`
                .total{
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    background: ${background};
                    display: flex;
                    justify-content: center;
                    z-index: 5;
                    user-select: none;
                    touch-action: none;
                    -webkit-user-drag: none;
                }

                .contenido{
                    position: relative;
                    margin-top: 50px;
                    min-height: 600px;
                    width: 85vw;
                    border-radius: 5px;
                }

                .botones{
                    position: sticky;
                    top: 0;
                    width: 100%;
                    display: flex;
                    justify-content: flex-end;
                    z-index: 11;
                    pointer-events: none; /* Permite hacer clic a través del contenedor si es muy grande */
                    margin-bottom: -41px;
                }

                .button{
                    pointer-events: auto;
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

                .dw{
                    background: #02A95C;
                }

                .cl{
                    background: black;
                    margin-left: 8px;
                }

                @media screen and (max-width: 768px){
                    .contenido{
                        margin-top: 70px;
                        width: 100vw;
                        min-height: 550px;
                    }

                    .close p{
                        top: 0;
                        right: 0;
                    }
                }
            `}</style>
        </div>
    )
}