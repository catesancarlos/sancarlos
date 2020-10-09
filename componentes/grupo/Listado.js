/* import { useState } from 'react'
import Estrella from '../../componentes/iconos/Estrella'

export default function Listado({ listado, isPC }) {
    const [agregar, setAgregar] = useState(false)

    return(
        <div>
            <p className='info-grupo'>Alumnos inscritos en este paralelo:</p>
            {
                listado.map(alumno => 
                    <div className='item-lista' key={alumno.id}>
                        <p className='nombre-alumno'>{alumno.nombre}</p>
                        <div className='detalle'>
                            <a className='punto'
                                href={`https://${isPC ? 'web' : 'api'}.whatsapp.com/send?phone=593${alumno.celular.slice(1)}`}
                                target='_blank' 
                            >
                                {alumno.celular}
                            </a>
                        </div>
                        <div className='detalle'>
                            <p className='punto'>
                                <Estrella size={24} fondo='#ccdae8' color='#ccdae8' />
                                Dar estrella
                            </p>
                        </div>
                        <div className='detalle'>
                            <p className='opciones'>Opciones</p>
                        </div>
                    </div>
                )
            }
                                
            <div>
                {
                    !agregar ? 
                        <p className='agregar' onClick={() => setAgregar(true)}>+ Agregar alumno</p>
                    :
                                        <div className='item-lista'>
                                            <input className='nombre-alumno input-alumno' />
                                            <div className='detalle'>
                                                <input className='nombre-alumno input-alumno anchito' />
                                            </div>
                                            <div className='detalle'>
                                                
                                            </div>
                                            <div className='detalle'>
                                                <p className='opciones' style={{background: 'brown'}}>Agregar</p>
                                            </div>
                                        </div>
                                        
                }
            </div>

            <style jsx>{`
                .info-grupo{
                    margin-bottom: 30px;
                }

                .item-lista{
                    background: white;
                    height: 42px;
                    padding: 0 20px;
                    line-height: 1em;
                    display: flex;
                    align-items: center;
                    border-radius: 10px;
                    margin-bottom: 10px;
                }

                .nombre-alumno{
                    font-weight: bold;
                    width: 40%;
                    border-right: 2px solid #ccdae8;
                }

                .detalle{
                    width: 150px;
                    display: flex;
                    justify-content: center;
                }

                .punto{
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                }

                .opciones{
                    background: #ccdae8;
                    padding: 4px 10px;
                    border-radius: 5px;
                    cursor: pointer;
                }
            `}</style>
        </div>
    )
} */