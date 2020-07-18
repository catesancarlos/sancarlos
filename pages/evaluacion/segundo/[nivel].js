import {useEffect} from 'react'
import { useRouter } from 'next/router'
import firebase from '../../../services/dBase' 
import Head from 'next/head'
import Header from '../../../componentes/layout/header'
import Footer from '../../../componentes/layout/footer2'

const Nivel = ({data}) => {
    const router = useRouter()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const handleAlumno = usuario => {
        router.push('/[evaluacion]/[person]', `/segundo-${router.query.nivel}/${usuario}`) 
    }

    return (
        <div className='page-eval'>
            <Head>
                <title>Cate San Carlos - Evaluación</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap" rel="stylesheet"></link>
            </Head>

            <Header pagina='eval' />

            <div className='container'>
                <div className='pulse'>
                    <p className='paralelo'>{`2DO CONFIRMACIÓN ${router.query.nivel.toUpperCase()}`}</p>
                    <p className='indica-weight'>Pulse en su nombre, para iniciar con la evaluación</p>
                    <p className='indica'>Se recomienda realizar la evaluación en una computadora, para evitar imprevistos.</p>
                    <p className='indica'>Si tienes problemas, para dar la Prueba, informalo a tu catequista.</p>
                </div>
                <div className='lista'>
                {
                    data.map(item => 
                        <p 
                            className='alumno' 
                            onClick={() => {handleAlumno(item.user)}}
                            key={item.id}
                        >
                            {`${item.apellido.substring(0, item.apellido.indexOf(' '))} ${item.nombre}`}
                        </p>
                    )
                }
                </div>
            </div>

            <Footer />

            <style jsx>{`
                .page-eval{
                    background-color: #ccdae8;
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                }

                .container{
                    margin: 0 100px 30px 100px;
                    display: flex;
                    justify-content: space-between;
                }

                .pulse{
                    font-size: 28px;
                    width: 35%;
                }

                .paralelo{
                    font-weight: bold;
                    margin: 10px 0 50px 0;
                }

                .indica-weight{
                    font-size: 0.9em;
                }

                .indica{
                    margin-top: 30px;
                    font-size: 0.65em;
                }

                .lista{
                    width: 50%;
                    padding: 0 20px 20px 0;
                }

                .alumno{
                    font-size: 20px;
                    background: white;
                    margin: 10px 0;
                    padding: 15px 20px;
                    border-radius: 10px;
                    cursor: pointer;
                    -webkit-tap-highlight-color: rgba(0,0,0,0);
                }

                @media screen and (max-width: 480px){
                    .container{
                        margin: 0 0 20px 0;
                        flex-direction: column;
                        align-items: center;
                    }

                    .pulse{
                        font-size: 18px;
                        width: 90%;
                        margin-bottom: 10px;
                    }

                    .paralelo{
                        margin: 10px 0 20px 0;
                    }

                    .indica-weight{
                        font-size: 0.8em;
                    }

                    .indica{
                        margin-top: 10px;
                        font-size: 0.65em;
                    }

                    .lista{
                        margin: 15px 0;
                        width: 90%;
                    }

                    .alumno{
                        font-size: 18px;
                        padding: 12px 10px 12px 20px;
                    }
                }
            `}</style>

            <style jsx global>{`
                body {
                    margin: 0;
                    padding: 0;
                    font-family: 'Lato', sans-serif;
                    font-weight: 300;
                }

                a{
                    color: black;
                    text-decoration: none;
                }

                p{
                    margin: 0;
                }
            `}</style>
        </div> 
    )
}

Nivel.getInitialProps = async ({query}) => {
    const data = await firebase.firestore().collection(`segundo-${query.nivel}`).get()
    .then(snapshota => {
        const alumnos = [];
        snapshota.forEach(alumno => {
            alumnos.push({
                apellido: alumno.data().apellido,
                nombre: alumno.data().nombre,
                user: alumno.data().user
            }); 
        })
        return (alumnos)
    })
    return {data}
} 

export default Nivel;