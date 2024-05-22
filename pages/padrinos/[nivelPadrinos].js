import {useEffect} from 'react'

import AppLayout from '../../componentes/layout'
import Footer from '../../componentes/layout/footer2'

import db  from '../../services/dBase'
import { collection, getDocs } from 'firebase/firestore'

const NivelPadrinos = ({alumnos}) => {  

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    return (
        <AppLayout pagina='sacramento' titulo='San Carlos - Confirmación'>
            <div className='container'>
                {
                    alumnos.map(item => 
                        <div className='alumno' key={item.id}>
                            <strong className='numero'>{item.id}</strong>
                            <div className='nombre'>
                                <strong className='nombres'>{`${item.apellido} ${item.nombre}`}</strong>
                                <div className='notas'>
                                    {
                                        item.madrina ? 
                                            <>
                                                <p style={{paddingRight: '10px'}}>
                                                    Padrino: <strong>{item.padrino}</strong>
                                                </p>
                                                <p style={{paddingRight: '10px'}}>
                                                    Madrina: <strong>{item.madrina}</strong>
                                                </p> 
                                            </>
                                        :
                                            <p style={{paddingRight: '10px'}}>
                                                Padrino/Madrina: <strong>{item.padrino}</strong>
                                            </p> 
                                    }
                                </div>
                            </div>
                        </div>
                    ) 
                }
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
                    width: 500px;
                    padding: 15px 0 15px 15px;
                }

                .nombres{
                    color: brown;
                }

                .notas{
                    margin-top: 7px;
                    font-size: 16px;
                    font-weight: 400;
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
                        margin-top: 5px;
                        display: block;
                        font-size: 12.5px;
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
        </AppLayout> 
    )
}

/* NivelPadrinos.getInitialProps = async ({query}) => {
    const data = await firebase.firestore().collection(`${query.nivelPadrinos}`).get()
    .then(snapshota => {
        const alumnos = [];
        snapshota.forEach(alumno => {
            alumnos.push({
                id: alumno.data().id,
                apellido: alumno.data().apellido,
                nombre: alumno.data().nombre,
                padrino: alumno.data().padrino,
                madrina: alumno.data().madrina
            }); 
        })
        return (alumnos)
    })
    return {data}
} */

export async function getServerSideProps (context) {
    const { params, res } = context
    const { nivelPadrinos } = params

    const querySnapshot = await getDocs(collection(db, nivelPadrinos))

    const alumnos = []
    querySnapshot.forEach((alumno) => {
        alumnos.push(alumno.data())
    })

    return {
        props : { alumnos }
    }
}

export default NivelPadrinos