import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import firebase from '../../services/dBase' 
import Head from 'next/head'
import Header from '../../componentes/layout/header'
import Footer from '../../componentes/layout/footer'
import Atras from '../../componentes/layout/atras'

const NivelNotas = ({data}) => {
    const router = useRouter()
    const [grupo, setGrupo] = useState('')    

    useEffect(() => {
        const nivel = router.query.nivelNotas
        const pos = nivel.indexOf('-') + 1
        const grupo = nivel.substr(pos, nivel.length).toUpperCase()
        setGrupo(grupo)
    }, [])
    
    return (
        <div className='page-eval'>
            <Head>
                <title>Cate San Carlos - Notas Ev.</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap" rel="stylesheet"></link>
            </Head>

            <Header pagina={`2DO CONFIRMACIÓN ${grupo}`} />

            <div className='container'>
                {
                    data.alumnos.map(item => 
                        <div className='alumno' key={item.name}>
                            <p className='numero'>{item.num}</p>
                            <p className='nombre'>{item.name}</p>
                            <p className='nota'>{item.nota}</p>
                        </div>
                    ) 
                }
                <p className='nota larga'>{`Promedio del grupo: ${Math.round(data.promedio)}/10`}</p>
            </div>

            <Atras />

            <Footer />

            <style jsx>{`
                .page-eval{
                    background-color: #ccdae8;
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                }

                .container{
                    margin: 0 auto 50px auto;
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

                .nota{
                    width: 60px;
                    padding: 15px 0;
                    background: rgba(165, 42, 42, 0.75);
                    color: white;
                    text-align: center;
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
                        width: 15%;
                        padding: 12px 0;
                        text-align: center;
                        border-right: 2px solid #ccdae8;
                    }
    
                    .nombre{
                        width: 65%;
                        padding: 12px 0 12px 12px;
                    }
    
                    .nota{
                        width: 18%;
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
    const data = await firebase.firestore().collection('notas')
    .where('paralelo', '==', query.nivelNotas).orderBy('name', 'asc').get()
    .then(snapshota => {
        const size = snapshota.size
        const alumnos = [];
        var num = 0;
        var promedio = 0;
        snapshota.forEach(doc => {
            num = num + 1;
            alumnos.push({...doc.data(), num: num}); 
            promedio = promedio + doc.data().nota;
        })
        promedio = promedio/snapshota.size
        return ({alumnos, promedio})
    })
    return {data}
}  

export default NivelNotas;