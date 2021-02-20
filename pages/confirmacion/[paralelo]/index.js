import { useEffect, useState } from 'react'
/* import {IoIosCheckmarkCircle} from 'react-icons/io' */
import { useRouter } from 'next/router'
import firebase from '../../../services/dBase' 
import AppLayout from '../../../componentes/layout'
import Footer from '../../../componentes/layout/footer'
import Modal from '../../../componentes/layout/Modal'
import Card from '../../../componentes/layout/Card'

const Paralelo = ({data}) => {
    const router = useRouter()
    const [paralelo, setParalelo] = useState(router.query.paralelo.substring(router.query.paralelo.indexOf('-')+1, router.query.paralelo.length))
    const [open, setOpen] = useState(null)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleAlumno = usuario => {
        if(usuario.ev1 || usuario.bloqueo) setOpen(usuario)
        else router.push('/confirmacion/[paralelo]/[persona]', `/confirmacion/${router.query.paralelo}/${usuario.user}`)
    }

    return (
        <>
            <AppLayout 
                titulo={`San Carlos - 2 Confirmación ${paralelo.toUpperCase()}`}
                name={`2DO CONFIRMACIÓN ${paralelo.toUpperCase()}`} 
            >
                <div className='container'>
                    <div className='pulse'>
                        <p className='indica-weight'>Pulse en su nombre para iniciar con la evaluación.</p>
                        <p className='indica'>
                            - El tiempo para la evaluación es de 30 minutos y corresponte a los 15 encuentros del libro
                            y a los temas de Bautismo y Reconciliación.
                        </p>
                        <p className='indica'>
                            - Si tienes problemas, al realizar tu evaluación, informalo a tu catequista.
                        </p>
                    </div>
                    <div className='lista'>
                       {/*  <div 
                            className='alumno'
                            onClick={() => {handleAlumno('catequista')}}
                        >
                            <p className='nombre'>Catequista [Para pruebas]</p>
                        </div> */}
                        {
                            data.map(item => 
                                <div 
                                    key={item.id}
                                    className='alumno'
                                    onClick={() => {handleAlumno(item)}}
                                >
                                    <p className='nombre'>
                                        {`${item.apellido.substring(0, item.apellido.indexOf(' '))} ${item.nombre}`}
                                    </p>
                                    { item.ev1 && <p className='nota'>{`${item.ev1}/10`}</p> }
                                    {/*(item.aprobado && !item.fe) && <IoIosCheckmarkCircle style={{fontSize: '25px', color: 'green'}} />*/}
                                </div>
                            ) 
                        }
                    </div>
                </div>
                {
                    open && 
                    <Modal>
                        <Card 
                            nombre={`${open.nombre} ${open.apellido.substring(0, open.apellido.indexOf(' '))}`}
                            info={open.bloqueo ? 'Usted esta inhabilitado(a) para dar la evaluación' : `Usted ya dio la Evaluación: ${open.ev1}/10`}
                        >
                            <div 
                                className='boton'
                                onClick={() => setOpen(null)}
                            >Cerrar</div>
                        </Card>
                    </Modal>
                }

                <Footer /> 
            </AppLayout>

            <style jsx>{`
                .container{
                    margin: 0 100px 20px 100px;
                    display: flex;
                    justify-content: space-between;
                }

                .pulse{
                    margin-top: 30px;
                    width: 42%;
                    font-size: 26px;
                }

                .indica-weight{
                    font-size: 0.9em;
                }

                .indica{
                    margin-top: 20px;
                    font-size: 0.73em;
                    font-weight: 300;
                    text-align: justify;
                }

                .lista{
                    width: 42%;
                    padding: 0 20px 20px 0;
                }

                .alumno{
                    background: white;
                    margin: 10px 0;
                    padding: 0 30px 0 25px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    border-radius: 10px;
                    cursor: pointer;
                    -webkit-tap-highlight-color: rgba(0,0,0,0);
                }

                .nombre{
                    font-size: 20px;
                    padding: 15px 10px 15px 0;
                }

                .nota{
                    color: brown;
                    font-size: 20px;
                    font-weight: bold;
                }

                .boton{
                    margin-top: 20px;
                    background: brown;
                    padding: 8px 60px;
                    color: white;
                    font-size: 25px;
                    border-radius: 30px;
                    border: none;
                    outline:none;
                    cursor: pointer;
                    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                }


                @media screen and (max-width: 768px){
                    .container{
                        margin: 10px 0;
                        flex-direction: column;
                        align-items: center;
                    }

                    .pulse{
                        margin: 0;
                        font-size: 18px;
                        width: 90%;
                    }

                    .paralelo{
                        margin: 10px 0 20px 0;
                    }

                    .indica-weight{
                        font-size: 0.95em;
                    }

                    .indica{
                        margin-top: 12px;
                        font-size: 0.85em;
                    }

                    .lista{
                        margin-top: 20px;
                        padding-right: 0;
                        width: 90%;
                    }
    
                    .nombre{
                        font-size: 18px;
                        padding: 12px 10px 12px 0;
                    }

                    .boton{
                        padding: 8px 50px;
                        font-size: 20px;
                    }
                }
            `}</style>
        </> 
    )
}

Paralelo.getInitialProps = async ({query}) => {
    const data = await firebase.firestore().collection(`${query.paralelo}`).get()
    .then(snapshota => {
        const alumnos = [];
        snapshota.forEach(alumno => {
            alumnos.push({
                id: alumno.data().id,
                apellido: alumno.data().apellido,
                nombre: alumno.data().nombre,
                user: alumno.data().user,
                ev1: alumno.data().ev1,
                bloqueo: alumno.data().bloqueo
            }); 
        })
        return (alumnos)
    })
    return {data}
}  

export default Paralelo;