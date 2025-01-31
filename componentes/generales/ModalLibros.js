import { useEffect, useRef } from 'react'

export default function Modal({ children, background, onClose }){
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
                {onClose && 
                    <div className='close'>
                        <p onClick={() => onClose(false)}>X</p>
                    </div>
                }
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

                .close{
                    position: sticky;
                    top: 0;
                    z-index: 11;
                }

                .close p{
                    position: absolute;
                    right: 0;
                    background: black;
                    width: 41px;
                    line-height: 41px;
                    color: white;
                    font-size: 20px;
                    font-weight: bold;
                    text-align: center;
                    border-radius: 5px;
                    cursor: pointer;
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