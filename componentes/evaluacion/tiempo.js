import {useState, useEffect} from 'react'

const Tiempo = ({ timeOut, fin }) => {
    const [time, setTime] = useState(sessionStorage.getItem('tiempo') ? sessionStorage.getItem('tiempo')-1  : 1499)
    const [t, setT] = useState(sessionStorage.getItem('tiempo') ? `${sessionStorage.getItem('tiempo')/60}:00` : '25:00')
    const [f, setF] = useState(false)
    const [seg, setSeg] = useState('00')
    const [min, setMin] = useState(sessionStorage.getItem('tiempo') ? sessionStorage.getItem('tiempo')/60 : 25)
    const [cont, setCont] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            tick()
            setT(`${min}:${seg}`)
        }, 1000)
        return () => clearInterval(interval);
    }, [seg])
    

    const tick = e => {
        if(cont == true && fin == false){
            if(time%30 == 0) sessionStorage.setItem('tiempo', time)
            setTime(time - 1)
            setMin(Math.trunc(time/60));
            if(seg>10 || seg==0) {setSeg(time%60)}
            else { setSeg(`0${time%60}`)}
            if(time<300){setF(true)}
            if(time==1) {
                setCont(false)
                timeOut(true)
            }
        }
    } 

    return (
        <div className='tiempo-prueba'>
            {console.log(t)}                              
            <p>Tiempo restante:</p>
            {
                f ? 
                <>
                    <p className='cuenta-regresiva roja'>{t}</p>
                    <p className='roja'>Faltan menos de 5 minutos.</p>
                </> 
                : <p className='cuenta-regresiva'>{t}</p>
            }
                                       
            <style jsx>{`
                .tiempo-prueba {
                    position: fixed;
                    background: ${f ? 'red' : 'white'};
                    top: 120px;
                    right: 60px;
                    padding: 10px 12px;
                    color: ${f ? 'white' : 'black'};
                    font-size: 17px;
                    text-align: center;
                    border: 1px solid brown;
                    border-radius: 20px;
                }

                .cuenta-regresiva{
                    font-size: 1.7em;
                    font-weight: bold;
                }

                .roja{
                    color: white;
                }

                @media screen and (max-width: 768px){
                    .tiempo-prueba{
                        top: 20px;
                        right: 4%;
                        padding: 5px;
                        border-radius: 10px;
                        font-size: 13.5px;
                        font-weight: ${f ? 'bold' : '300'};
                    }
                }
            `}</style>
        </div> 
    )
}

export default Tiempo