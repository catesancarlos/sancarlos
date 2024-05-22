import { useEffect, useRef } from 'react'

export default function Modal({ children, background, share, onClose }){
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
                { (onClose && !share) && <div className='close' onClick={() => onClose(false)}>X</div> }
                {children}
            </div>

            <style jsx>{`
                .total{
                    background: ${background ? background : 'transparent'};
                    position: fixed;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 12;
                    user-select: none;
                    touch-action: none;
                    -webkit-user-drag: none;
                    visibility: ${(share || share == undefined) ? 'visible' : 'hidden'};
                }

                .contenido{
                    position: relative;
                    background: ${share ? 'transparent' : 'white'};
                }

                .close{
                    background: black;
                    position: absolute;
                    /* top: -30px;
                    right: -30px; */
                    top: -15px;
                    right: calc(50% - 15px);
                    padding: 2px 8px 3px 8px;
                    color: white;
                    font-size: 18px;
                    font-weight: bold;
                    border-radius: 15px;
                    cursor: pointer;
                    z-index: 11;
                }
            `}</style>
        </div>
    )
}