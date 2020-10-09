/* import { useState } from 'react'
import firebase from '../../services/dBase' 

export default function Descripcion({ grupo, datos }) {
    const [video, setVideo] = useState(null)

    const handleSubmit = e => {
        e.preventDefault()
        const url = e.target.sala.value.substring(e.target.sala.value.indexOf("https://"), e.target.sala.value.indexOf("ID")-2)
        const sala = e.target.sala.value.substring(e.target.sala.value.indexOf("ón: ")+4, e.target.sala.value.indexOf("Código")-1)
        const clave = e.target.sala.value.slice(e.target.sala.value.indexOf("acceso: ")+8, -1)
        let refSala = firebase.firestore().collection('2confa-controles').doc('info-general')
        setVideo({url, sala, clave})
        refSala.set({url, sala, clave})
    }

    return(
        <div>
            <p className='info-grupo'>
                {`Grupo de trabajo para el año lectivo 2020 - 2021 del 
                ${grupo}, de la Catequesis San Carlos de Ricaurte.`}
            </p>
            <div className='cate-sala'>
                <div className='seccion'>
                    <p className='subtitulo'>CATEQUISTAS</p>
                    <p>
                        Catequista: <strong>{datos.catequista[0]}</strong>
                    </p>
                    <p>
                        Celular: <strong>{datos.numeros[0]}</strong>
                    </p>
                    <p className='linea-final'>
                        Email: <strong>{datos.correos[0]}</strong>
                    </p>
                    <p>
                        Catequista: <strong>{datos.catequista[1]}</strong>
                    </p>
                    <p>
                        Celular: <strong>{datos.numeros[1]}</strong>
                    </p>
                    <p>
                        Email: <strong>{datos.correos[1]}</strong>
                    </p>
                </div>
                <div className='seccion'>
                    <p className='subtitulo'>SALA VIRTUAL</p>
                    <>
                        {
                            !video && !datos.url ?
                                <form onSubmit={handleSubmit}>
                                    <p className='linea'>Pegue aquí la invitación a la reunión</p>
                                    <textarea className='area' name='sala' required></textarea>
                                    <button className='boton-guardar'>GUARDAR</button>
                                </form>
                            :
                                <>
                                    <p className='linea'><strong>Plataforma:</strong> ZOOM</p>
                                    <p className='linea'>
                                        <strong>Enlace: </strong>
                                        <a 
                                            href={video ? video.url : datos.url} 
                                            target="_blank"
                                        >
                                            {video ? video.url : datos.url}
                                        </a>
                                    </p>
                                    <p className='linea'>
                                        <strong>ID reunión: </strong>{video ? video.sala : datos.sala}
                                    </p>
                                    <p className='linea'>
                                        <strong>Código de acceso: </strong>{video ? video.clave :datos.clave}
                                    </p>
                                    <p 
                                        className='boton-entrar'
                                        onClick={() => window.open(video ? video.url : datos.url)}
                                    >INGRESAR</p>
                                </>
                                
                        }
                    </>  
                </div>
            </div>

            <style jsx>{`
                .info-grupo{
                    margin-bottom: 30px;
                }

                .cate-sala{
                    display: flex;
                    justify-content: space-between;
                }

                .seccion{
                    width: 48%;
                    padding: 20px 25px;
                    border: 1px solid white;
                    border-radius: 10px;
                }

                .subtitulo{
                    font-size: 18px;
                    font-weight: bold;
                    margin-bottom: 20px;
                    text-align: center;
                }

                .linea-final{
                    margin-bottom: 25px;
                }

                .linea{
                    margin-bottom: 4px;
                }

                .area{
                    margin-top: 5px;
                    width: 100%;
                    height: 150px;
                }

                .boton-entrar{
                    margin-top: 25px;
                    padding: 3px 0 5px 0;
                    background: #3B83BD99;
                    color: white;
                    font-size: 16px;
                    letter-spacing: 2px;
                    text-align: center;
                    border-radius: 10px;
                    cursor: pointer;
                    transition: 0.25s;
                }

                .boton-entrar:hover{
                    background: #3B83BD;
                }

                .boton-guardar{
                    margin-top: 10px;
                    background: #3B83BD99;
                    width: 100%;
                    padding: 5px 0 3px 0;
                    color: white;
                    font-size: 16px;
                    letter-spacing: 2px;
                    border: none;
                    outline: none;
                    border-radius: 10px;
                    cursor: pointer;
                    transition: 0.25s;
                }

                a{
                    color: #3B83BD;
                }
            `}</style>
        </div>
    )
} */