import {useEffect} from 'react'
/* import {IoIosCheckmarkCircle} from 'react-icons/io' */
import { useRouter } from 'next/router'
import firebase from '../../../services/dBase' 
import AppLayout from '../../../componentes/layout'
import Footer from '../../../componentes/layout/footer'

const Paralelo = ({data}) => {
    const router = useRouter()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleAlumno = usuario => {
        if(usuario == 'catequista' || router.query.paralelo == 'paralelo-d') router.push('/confirmacion/[paralelo]/[persona]', `/confirmacion/${router.query.paralelo}/${usuario}`) 
    }

    return (
        <>
            <AppLayout 
                titulo='San Carlos - Confirmación'
                name={`2DO CONFIRMACIÓN ${router.query.paralelo.substring(router.query.paralelo.indexOf('-')+1, router.query.paralelo.length).toUpperCase()}`} 
            >
                <div className='container'>
                    <div className='pulse'>
                        {/* <p className='paralelo'>
                            {`2DO CONFIRMACIÓN ${
                                router.query.paralelo.substring(router.query.paralelo.indexOf('-')+1, 
                                router.query.paralelo.length).toUpperCase()
                            }`}
                        </p> */}
                        <p className='indica-weight'>Pulse en su nombre para iniciar con la evaluación.</p>
                        <p className='indica'>
                            - Se recomienda realizar la evaluación en una computadora, para evitar imprevistos.
                        </p>
                        <p className='indica'>
                            - Si tienes problemas, para dar la Lección, informalo a tu catequista.
                        </p>
                    </div>
                    <div className='lista'>
                        <div 
                            className='alumno'
                            onClick={() => {handleAlumno('catequista')}}
                        >
                            <p className='nombre'>Catequista [Para pruebas]</p>
                        </div>
                        {
                            data.map(item => 
                                <div 
                                    className='alumno'
                                    onClick={() => {handleAlumno(item.user)}}
                                    key={item.id}
                                >
                                    <p className='nombre'>
                                        {`${item.apellido.substring(0, item.apellido.indexOf(' '))} ${item.nombre}`}
                                    </p>
                                    {
                                        item.leccion && <p className='nota'>{`${item.leccion}/10`}</p>
                                    }
                                    {/* {
                                        (item.aprobado && !item.fe) && <IoIosCheckmarkCircle style={{fontSize: '25px', color: 'green'}} />
                                    } */}
                                    
                                </div>
                            ) 
                        }
                    </div>
                </div>

                <Footer /> 
            </AppLayout>

            <style jsx>{`
                .container{
                    margin: 0 100px 20px 100px;
                    display: flex;
                    justify-content: space-between;
                }

                .pulse{
                    font-size: 26px;
                    width: 40%;
                    margin-top: 30px;
                }

                .paralelo{
                    font-weight: bold;
                    margin: 10px 0 50px 0;
                }

                .indica-weight{
                    font-size: 0.9em;
                }

                .indica{
                    margin-top: 20px;
                    font-size: 0.65em;
                    text-align: justify;
                }

                .lista{
                    width: 40%;
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

                @media screen and (max-width: 480px){
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
                leccion: alumno.data().leccion
            }); 
        })
        return (alumnos)
    })
    return {data}
}  

export default Paralelo;