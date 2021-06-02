import { useRouter } from 'next/router'
import { useState } from 'react'

const MenuParalelos = ({ a, b, c, d, angeles, auxiliadora, dolorosa, molinopamba, paso }) => {
    const router = useRouter()
    const [modal, setModal] = useState(false)

    const handleRedireccion = paralelo => {
        if(!paso){
            if(paralelo == 'a' && a) router.push(`/confirmacion/paralelo-${paralelo}`)
            else if(paralelo == 'b' && b) router.push(`/confirmacion/paralelo-${paralelo}`)
            else if(paralelo == 'c' && c) router.push(`/confirmacion/paralelo-${paralelo}`)
            else if(paralelo == 'd' && d) router.push(`/confirmacion/paralelo-${paralelo}`)
            else if(paralelo == 'angeles' && angeles) router.push('/confirmacion/angeles')
            else if(paralelo == 'auxiliadora' && auxiliadora) router.push('/confirmacion/auxiliadora')
            else if(paralelo == 'dolorosa' && dolorosa) router.push('/confirmacion/dolorosa')
            else if(paralelo == 'molinopamba' && molinopamba) router.push('/confirmacion/molinopamba')
            else setModal(true)
        }
        else setModal(true)
    }

    return (
        <div className='container'>
            <p className='eva-info1'>EVALUACIÓN FINAL</p>
            <p className='eva-info2'>Escoja el paralelo o comunidad a la que pertenece.</p>
            <div className='grupos-centro'>
                <p className='centro-nombre'>Centro Parroquial</p>
                <div className='grupos'>
                    <p className='paralelo-centro' onClick={() => handleRedireccion('a')}>A</p>
                    <p className='paralelo-centro' onClick={() => handleRedireccion('b')}>B</p>
                    <p className='paralelo-centro' onClick={() => handleRedireccion('c')}>C</p>
                    <p className='paralelo-centro' onClick={() => handleRedireccion('d')}>D</p>
                </div>
            </div>

            <div className='grupos'>
                <p className='paralelo' onClick={() => handleRedireccion('molinopamba')}>Molinopamba</p>
                <p className='paralelo' onClick={() => handleRedireccion('angeles')}>Los Ángeles</p>
                <p className='paralelo' onClick={() => handleRedireccion('dolorosa')}>La Dolorosa</p>
                <p className='paralelo' onClick={() => handleRedireccion('auxiliadora')}>Maria Auxiliadora</p>
            </div>
            {
                modal && 
                <div className='modal-final'> 
                    <div className='claves'>
                        <p className='indicacion-final'>Evaluación Final</p>
                        <p className='label-final'>Usted esta tratando de ingresar a la evaluación fuera de horario.</p>
                        <p className='label-final'>{!paso ? 'Por favor vuelva a intentarlo en el horario indicado.' : 'La evaluación se realizó el día:'}</p>
                        <strong className='label-final'>Sábado 5 de junio del 2021</strong>
                        {
                            !paso &&
                            <p className='label-final horario'>
                                Molinopamba: 11H00 AM<br/>
                                Los Ángeles: 02H00 PM<br/>
                                María Auxiliadora: 03H00 PM<br/>
                                La Dolorosa: 03H15 PM<br/>
                                Centro: 16H40
                            </p>
                        }
                        <p className='finalizar' onClick={() => setModal(false)}>Aceptar</p>
                    </div>
                </div>
            }

            <style jsx>{`
                .container{
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    font-size: 25px;
                }

                .eva-info1{
                    font-weight: bold;
                    margin-bottom: 10px;
                }

                .grupos-centro{
                    margin: 50px 0 40px 0;
                }

                .centro-nombre{
                    font-weight: bold;
                }

                .grupos{
                    margin-top: 15px;
                    display: flex;
                    justify-content: space-between;
                }

                .paralelo-centro{
                    margin: 0 20px;
                    background: white;
                    padding: 15px 60px;
                    border-radius: 20px;
                    cursor: pointer;
                }

                .paralelo{
                    margin: 0 10px;
                    background: white;
                    padding: 15px 30px;
                    border-radius: 20px;
                    font-weight: bold;
                    cursor: pointer;
                }

                .modal-final{
                    position: fixed;
                    top: 0;
                    left: 0;
                    background: rgba(0, 0, 0, 0.75);
                    width: 100%;
                    height: 100vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    z-index: 5;
                }

                .claves{
                    padding: 30px;
                    background: white;
                    border-radius: 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    font-size: 20px;
                }

                .indicacion-final{
                    margin-bottom: 10px;
                    font-size: 1.5em;
                    font-weight: bold;
                }
                
                .label-final{
                    margin-top: 10px;
                }

                .horario{
                    margin-top: 30px;
                    font-size: 18px;
                }

                .finalizar{
                    margin-top: 30px;
                    letter-spacing: 2px;
                    padding: 4px 30px 6px 30px;
                    background: brown;
                    color: white;
                    font-size: 1.2em;
                    border-radius: 30px;
                    cursor: pointer;
                }


                @media screen and (max-width: 768px){
                    .container{
                        margin-bottom: 50px;
                    }

                    .eva-info1{
                        font-size: 22px;
                    }

                    .eva-info2{
                        padding: 10px 30px;
                        font-size: 18px;
                    }

                    .grupos-centro{
                        margin: 30px 0 0 0;
                    }

                    .centro-nombre{
                        font-size: 20px;
                    }

                    .grupos{
                        display: block;
                        width: 50vw;
                    }

                    .paralelo-centro{
                        margin: 10px 0;
                        font-size: 20px;
                        padding: 10px 0;
                    }

                    .paralelo{
                        margin: 10px 0;
                        font-size: 20px;
                        padding: 10px 0;
                    }
                }
            `}</style>
        </div>
    )
}

export default MenuParalelos