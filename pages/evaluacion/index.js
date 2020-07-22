import {useEffect} from 'react'
import firebase from '../../services/dBase' 
import Head from 'next/head'
import Header from '../../componentes/layout/header'
import Footer from '../../componentes/layout/footer2'

import NoDisponible from '../../componentes/evaluacion/noDisponible'
import MenuParalelos from '../../componentes/evaluacion/menuParalelos'

const Evaluacion = ({data}) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='page-eval'>
            <Head>
                <title>Cate San Carlos - Evaluación</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap" rel="stylesheet"></link>
            </Head>

            <Header pagina='eval' />

            {
                false ? 
                <MenuParalelos /> : <NoDisponible />
            }

            <Footer />

            <style jsx>{`
                .page-eval{
                    background-color: #ccdae8;
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
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

Evaluacion.getInitialProps = async () => {
    const data = await firebase.firestore().collection('controles').doc('prueba').get()
    .then(listo => {
        return (listo.data())
    })
    return {data}
}

export default Evaluacion;