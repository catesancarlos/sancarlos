import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import firebase from '../../services/dBase' 
import AppLayout from '../../componentes/layout'
import Footer from '../../componentes/layout/footer2'

const Padrinos = () => {
    const router = useRouter()
    const [user, setUser] = useState(null)
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
        window.scrollTo(0, 0)
        firebase.auth().onAuthStateChanged(firebaseUser => {
            setUser(firebaseUser)
        })
    }, [user]);

    const handleLogin = e => {
        e.preventDefault();
        const { segundo } = e.target.elements
        const pass = segundo.value.toLowerCase()
        if(pass === '1920sc'){
            segundo.value = '';
            setMal(false)
            setCate(true)
            if(!user) firebase.auth().signInAnonymously()
        } else {
            segundo.value = '';
            setMal(true)
        }  
    }

    const handleCerrarSesion = () => {
        firebase.auth().signOut()
        router.push('/')
    }

    const handleLink = grupo => {
        router.push('/padrinos/[nivelPadrinos]', `/padrinos/${grupo}`)
    }

    return (
        <AppLayout pagina='sacramento' titulo='San Carlos - Confirmación'>
            <div className='container'>
                {(cate === true && user !== null) ?
                    <>
                        <div className='cerrar'>
                            <p onClick={handleCerrarSesion}>Cerrar Sesión</p>
                        </div>
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
                        <p className='form-p2'>Para acceder al listado de padrinos,<br/>por favor ingrese la contaseña:</p>
                        <input className='input' name='segundo' type='password' />
                        { mal && <p className='incorrecto'>Contraseña Incorrecta</p> }
                        <button className='boton'>Ingresar</button>
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

                .cerrar{
                    display: flex;
                    justify-content: flex-end;
                }

                .cerrar p{
                    background: brown;
                    padding: 5px;
                    color: white;
                    font-size: 14px;
                    border-radius: 5px;
                    cursor: pointer;
                }

                .nivel{
                    font-size: 20px;
                    background: white;
                    margin: 10px 0;
                    padding: 15px 50px;
                    border-radius: 10px;
                    text-align: center;
                    cursor: pointer;
                    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
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

                .incorrecto{
                    margin: -15px 0 10px 0;
                    color: red;
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
        </AppLayout>
    )
}

export default Padrinos;