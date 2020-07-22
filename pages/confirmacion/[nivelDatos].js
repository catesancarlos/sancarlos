import {useEffect} from 'react'
import {IoIosCheckmarkCircle} from 'react-icons/io'
import { useRouter } from 'next/router'
import firebase from '../../services/dBase' 
import Head from 'next/head'
import Header from '../../componentes/layout/header'
import Footer from '../../componentes/layout/footer2'

const NivelDatos = ({data}) => {
    const router = useRouter()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleAlumno = usuario => {
        router.push('/datos/[evaluacion]/[person]', `/datos/${router.query.nivelDatos}/${usuario}`) 
    }

    return (
        <div className='page-eval'>
            <Head>
                <title>Cate San Carlos - Confirmación</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap" rel="stylesheet"></link>
            </Head>

            <Header pagina='' />

            <div className='container'>
                <div className='pulse'>
                    <p className='paralelo'>
                        {`2DO CONFIRMACIÓN ${
                            router.query.nivelDatos.substring(router.query.nivelDatos.indexOf('-')+1, 
                            router.query.nivelDatos.length).toUpperCase()
                        }`}
                    </p>
                    <p className='indica-weight'>Pulse en su nombre, para ingresar el nombre de su padrino.</p>
                    <p className='indica'>
                        - Solo las personas que cuenten con el visto <IoIosCheckmarkCircle style={{fontSize: '20px', color: 'green'}} /> 
                        podrán, ingresar el nombre de su padrino y también corregir el nombre del alumno si fuese necesario.
                    </p>
                    <p className='indica'>
                        - El visto verde indica a los alumnos que ya han cumplido con todas las actividades y han aprobado 
                        el año de catequesis.
                    </p>
                    <p className='indica'>
                        - Verifica pulsando tu nombre que hayas entregado la fe de bautismo o copia de tu cédula, si no la has 
                        entregado, tendrás que acercarte con las mismas a coordinación los días miércoles y jueves desde las 16h00 
                        a 18h00 a partir del 22 de julio.
                    </p>
                    <p className='indica'>
                        - Si usted no cuenta con el visto de aprobado, comunicarse con su catequista.
                    </p>
                </div>
                <div className='lista'>
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
                                (item.aprobado && !item.fe && !item.cedula) && <IoIosCheckmarkCircle style={{fontSize: '25px', color: 'green'}} />
                            }
                            
                        </div>
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
                    font-size: 26px;
                    width: 40%;
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
                    display: flex;
                    align-items: center;
                    border-radius: 10px;
                    cursor: pointer;
                    -webkit-tap-highlight-color: rgba(0,0,0,0);
                }

                .nombre{
                    font-size: 20px;
                    padding: 15px 10px 15px 20px;
                }

                @media screen and (max-width: 480px){
                    .container{
                        margin: 0 0 40px 0;
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
                        font-size: 0.85em;
                    }

                    .indica{
                        margin-top: 10px;
                        font-size: 0.75em;
                    }

                    .lista{
                        margin-top: 15px;
                        padding-right: 0;
                        width: 90%;
                    }
    
                    .nombre{
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

NivelDatos.getInitialProps = async ({query}) => {
    const data = await firebase.firestore().collection(`${query.nivelDatos}`).get()
    .then(snapshota => {
        const alumnos = [];
        snapshota.forEach(alumno => {
            alumnos.push({
                id: alumno.data().id,
                apellido: alumno.data().apellido,
                nombre: alumno.data().nombre,
                aprobado: alumno.data().aprobado,
                fe: alumno.data().fe,
                cedula: alumno.data().cedula,
                user: alumno.data().user
            }); 
        })
        return (alumnos)
    })
    return {data}
}  

export default NivelDatos;