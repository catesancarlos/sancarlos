import {useEffect} from 'react'
import firebase from '../../services/dBase' 
import Head from 'next/head'
import Header from '../../componentes/layout/header'
import Footer from '../../componentes/layout/footer2'

const NivelNotas = ({data}) => {  

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    return (
        <div className='page-eval'>
            <Head>
                <title>Cate San Carlos - Notas Ev.</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap" rel="stylesheet"></link>
            </Head>

            <Header pagina='' />

            <div className='container'>
                {
                    data.map(item => 
                        <div className='alumno' key={item.id}>
                            <strong className='numero'>{item.id}</strong>
                            <div className='nombre'>
                                <strong>{`${item.apellido} ${item.nombre}`}</strong>
                                <div className='notas'>
                                    <p style={{paddingRight: '10px'}}><strong>Evaluación: </strong>{`${item.prueba}/10 `}</p>
                                    {
                                        ( item.recuperacion != undefined && (item.prueba < item.recuperacion || item.prueba < 7) ) 
                                        && <p><strong>Evaluación de Recuperación: </strong>{`${item.recuperacion}/10`}</p>
                                    }
                                </div>
                            </div>
                            <strong className='nota'>
                                {
                                    (item.prueba > item.recuperacion || item.recuperacion == undefined) 
                                    ? item.prueba :item.recuperacion
                                }
                            </strong>
                        </div>
                    ) 
                }
                {/* <p className='nota larga'>{`Promedio del grupo: ${Math.round(data.promedio)}/10`}</p> */}
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
                    margin: 0 auto 70px auto;
                }

                .alumno{
                    font-size: 20px;
                    background: white;
                    margin: 10px 0;
                    border-radius: 10px;
                    display: flex;
                }

                .numero{
                    width: 60px;
                    padding: 15px 0;
                    text-align: center;
                    border-right: 2px solid #ccdae8;
                }

                .nombre{
                    width: 425px;
                    padding: 15px 0 15px 15px;
                }

                .notas{
                    margin-top: 2px;
                    display: flex;
                    font-size: 14px;
                }

                .nota{
                    width: 60px;
                    padding: 15px 0;
                    background: rgba(165, 42, 42, 0.75);
                    color: white;
                    text-align: center;
                    border-radius: 0 10px 10px 0;
                }

                .recu{
                    font-size: 15px;
                    padding: 0 10px;
                    width: 70px;
                    line-height: 50px;
                    background: white;
                    color: black;
                    border-radius: 0 10px 10px 0;
                }

                .larga{
                    width: 100%;
                    margin-top: 30px;
                    font-size: 22px;
                    font-weight: bold;
                    border-radius: 10px;
                }

                @media screen and (max-width: 480px){
                    .container{
                        width: 100%;
                    }
    
                    .alumno{
                        font-size: 15px;
                        margin: 8px 0;
                        border-radius: 0 10px 10px 0;
                    }
    
                    .numero{
                        width: 10%;
                        padding: 12px 0;
                        text-align: center;
                        border-right: 2px solid #ccdae8;
                    }
    
                    .nombre{
                        width: 75%;
                        padding: 12px 0 12px 12px;
                    }

                    .notas{
                        margin-top: 2px;
                        display: block;
                        font-size: 12.5px;
                    }
    
                    .nota{
                        width: 15%;
                        padding: 12px 0;
                        border-radius: 0 10px 10px 0;
                    }

                    .larga{
                        width: 100%;
                        font-size: 20px;
                        border-radius: 10px;
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

NivelNotas.getInitialProps = async ({query}) => {
    const data = await firebase.firestore().collection(`${query.nivelNotas}`).get()
    .then(snapshota => {
        const alumnos = [];
        snapshota.forEach(alumno => {
            alumnos.push({
                id: alumno.data().id,
                apellido: alumno.data().apellido,
                nombre: alumno.data().nombre,
                prueba: alumno.data().prueba,
                recuperacion: alumno.data().recuperacion
            }); 
        })
        return (alumnos)
    })
    return {data}
} 

export default NivelNotas;