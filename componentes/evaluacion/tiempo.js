import {useState, useEffect} from 'react'

const Tiempo = ({timeOut, fin}) => {
    const [time, setTime] = useState(1800);
    const [t, setT] = useState('');
    const [f, setF] = useState(false);
    const [seg, setSeg] = useState('');
    const [min, setMin] = useState(30);
    const [cont, setCont] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            tick()
            setT(`${min}:${seg}`)
        }, 1000);
        return () => clearInterval(interval);
    }, [seg]);

    const tick = e => {
        if(cont == true && fin == false){
            setTime(time - 1);
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
        <div className='tiempo-prueba' id={`tiempo-prueba-${f}`}>                                 
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
                    top: 150px;
                    right: 2.5%;
                    padding: 10px 15px;
                    background-color: white;
                    text-align: center;
                    border: 1px solid brown;
                    border-radius: 20px;
                    font-size: 1.5vw;
                }

                #tiempo-prueba-true{
                    background-color: red;
                    color: white;
                }

                .cuenta-regresiva{
                    font-size: 1.5em;
                    font-weight: bold;
                }

                .roja{
                    color: white;
                }


                @media screen and (max-width: 480px){
                    .tiempo-prueba {
                        top: 25px;
                        padding: 5px;
                        border-radius: 10px;
                        font-size: 12px;
                    }

                    #tiempo-prueba-true{
                        font-weight: bold;
                    }
                }
            `}</style>
        </div> 
    )
}

export default Tiempo;