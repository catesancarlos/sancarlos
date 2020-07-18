import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from '../../componentes/layout/header'
import Footer from '../../componentes/layout/footer2'

const Evaluacion = () => {
    const router = useRouter()
    const [cate, setCate] = useState(false)
    const [mal, setMal] = useState(false)

    const paralelos = [
        {
            id: 'segundo-a',
            nombre: 'Paralelo A'
        },
        {
            id: 'segundo-b',
            nombre: 'Paralelo B'
        },
        {
            id: 'segundo-c',
            nombre: 'Paralelo C'
        },
        {
            id: 'segundo-d',
            nombre: 'Paralelo D'
        },
        {
            id: 'segundo-molinopamba',
            nombre: 'Molinopamba'
        },
        {
            id: 'segundo-angeles',
            nombre: 'Los Ángeles'
        },
        {
            id: 'segundo-dolorosa',
            nombre: 'La Dolorosa'
        },
        {
            id: 'segundo-auxiliadora',
            nombre: 'María Auxuliadora'
        }
    ]

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleLogin = e => {
        e.preventDefault();
        const { segundo } = event.target.elements;
        const pass = segundo.value.toLowerCase();
        if(pass === '1920kts'){
            segundo.value = '';
            setMal(false)
            setCate(true)
        } else {
            segundo.value = '';
            setMal(true)
        }
        
    }

    const handleLink = grupo => {
        router.push('/resultados/[nivelNotas]', `/resultados/${grupo}`)
    }

    const handlePruebaKts = e => {
        router.push('/[evaluacion]/[person]', '/segundo-kts/1') 
    }

    return (
        <div className='page-eval'>
            <Head>
                <title>Cate San Carlos - Evaluación</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap" rel="stylesheet"></link>
            </Head>

            <Header pagina='CALIFICACIONES' />

            <div className='container'>
                {cate ?
                    <>
                        {
                            paralelos.map(item => 
                                <p 
                                    className='nivel' 
                                    key={item.id}
                                    onClick={() => handleLink(item.id) }
                                >
                                    {item.nombre}
                                </p>
                            ) 
                        }
                    </>
                    :
                    <form onSubmit={handleLogin} className='form'>
                        <p className='form-p1'>Esta sección es solo para Catequistas:</p>
                        <p className='form-p2'>Por favor ingrese la contaseña:</p>
                        <input className='input' name='segundo' type='password' />
                        <button className='boton'>Ingresar</button>
                        { mal && <p>Contraseña Incorrecta</p> }
                    </form>
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
                    margin: 0 auto 50px auto;
                }

                .nivel{
                    font-size: 20px;
                    background: white;
                    margin: 10px 0;
                    padding: 15px 50px;
                    border-radius: 10px;
                    text-align: center;
                    cursor: pointer;
                }

                .dar{
                    margin: 25px 0 50px 0;
                    background: rgba(0, 0, 0, 0.1);
                    border: 1px dashed black;
                }

                .form{
                    background: white;
                    border-radius: 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    font-size: 25px;
                }

                .form-p1{
                    margin-bottom: 10px;
                    padding: 30px 30px 0 30px;
                }

                .form-p2{
                    font-size: 20px;
                    margin-bottom: 30px;
                }

                .input{
                    height: 35px;
                    padding-left: 10px;
                    width: 70%;
                    font-size: 22px;
                    text-align: center;
                    border: none;
                    outline:none;
                    border-bottom: 2px solid black;
                    margin-bottom: 30px;
                }

                .boton{
                    font-size: 25px;
                    color: white;
                    padding: 10px 80px;
                    margin-bottom: 30px;
                    background: brown;
                    border-radius: 30px;
                    border: none;
                    outline:none;
                    cursor: pointer;
                }

                @media screen and (max-width: 480px){
                    .form{
                        width: 85%;
                        margin: 0 auto;
                        font-size: 20px;
                    }

                    .form-p1{
                        margin-bottom: 10px;
                    }
    
                    .form-p2{
                        font-size: 16px;
                        margin-bottom: 20px;
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

export default Evaluacion;