import { useState } from 'react'
import firebase from '../../services/dBase'
import AppLayout from '../../componentes/layout'
import MenuParalelos from '../../componentes/evaluacion/menuParalelos'

export default function Confirmacion({ data }){
    const [mal, setMal] = useState(false)
    const [logged, setLogged] = useState(false)

    const handleLogin = e => {
        e.preventDefault()
        const { clave } = e.target.elements
        const password = clave.value.toLowerCase()
        if(password === '4994'){
            clave.value = 'Cargando...';
            setMal(false)
            setLogged(true)
            window.scrollTo(0, 0);
        }
        else {
            clave.value = '';
            setMal(true)
        } 
    }

    

    return(
        <AppLayout name='Segundos de Confirmación' titulo='2 Confirmación - Cate San Carlos'>
            <div className='container'>
                {
                    !logged ?
                    <>
                        <div className='bienvenida'>
                            <p className='titulo'>BIENVENIDO</p>
                            <p className='linea'>
                                Mediante este espacio podras acceder a las evaluaciones para los niveles de Segundo de 
                                Confirmación.
                            </p>
                            <p className='linea'>Uliliza la clave que te entrego tu catequista para poder ingresar.</p>
                        </div>
                        <div className='bienvenida'>
                            <form onSubmit={handleLogin} className='sesion'>
                                <p className='form-p2'>Para acceder por favor ingrese la contraseña:</p>
                                <input className='input' name='clave' type='text' required autoComplete='off' />
                                { mal && <p className='incorrecto'>Contraseña Incorrecta</p> }
                                <button className='boton'>Ingresar</button>
                            </form>
                            <p className='nota'>* Si tienes algun problema para ingresar, comunicate con tu catequista.</p>
                        </div>
                    </>
                    :
                    <MenuParalelos {...data} />
                }
            </div>

            <style jsx>{`
                .container{
                    margin: 50px 75px;
                    display: flex;
                    justify-content: space-between;
                }

                .bienvenida{
                    width: 47%;
                    font-size: 20px;
                    
                }

                .titulo{
                    font-size: 1.5em;
                    font-weight: bold;
                    text-align: center;
                    margin-bottom: 50px;
                }

                .linea{
                    text-align: justify;
                    margin-bottom: 20px;
                }

                .nota{
                    margin-top: 50px;
                    font-size: 15px;
                    text-align: right;
                }

                .sesion{
                    background: white;
                    padding: 30px;
                    font-size: 23px;
                    text-align: center;
                    display: flex;
                    flex: 1;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    border-radius: 25px;
                    
                }

                .form-p2{
                    margin-bottom: 40px;
                }

                .input{
                    height: 35px;
                    width: 70%;
                    font-size: 23px;
                    text-align: center;
                    border: none;
                    outline:none;
                    border-bottom: 2px solid black;
                    margin-bottom: 30px;
                }

                .incorrecto{
                    margin: -20px 0 20px 0;
                    color: red;
                    font-size: 20px;
                }

                .boton{
                    font-size: 25px;
                    color: white;
                    padding: 10px 80px;
                    background: brown;
                    border-radius: 30px;
                    border: none;
                    outline:none;
                    cursor: pointer;
                }


                @media screen and (max-width: 768px){
                    .container{
                        margin: 20px;
                        display: inline;
                        justify-content: space-between;
                    }
    
                    .bienvenida{
                        width: 100%;
                        font-size: 16px;
                    }
    
                    .titulo{
                        margin-bottom: 30px;
                    }
    
                    .linea{
                        font-size: 16px;
                        margin-bottom: 10px;
                    }
    
                    .nota{
                        margin-top: 0x;
                        font-size: 14px;
                    }
    
                    .sesion{
                        margin: 40px 0 35px 0;
                        background: white;
                        padding: 25px;
                        font-size: 18px;
                        border-radius: 20px;
                        
                    }
    
                    .form-p2{
                        margin-bottom: 20px;
                    }
    
                    .input{
                        height: 35px;
                        width: 70%;
                        font-size: 22px;
                        border-bottom: 2px solid black;
                        margin-bottom: 25px;
                    }
    
                    .incorrecto{
                        margin: -15px 0 15px 0;
                        color: red;
                        font-size: 16px;
                    }
    
                    .boton{
                        font-size: 20px;
                        padding: 8px 50px;
                        border-radius: 30px;
                    }
                }
            `}</style>
        </AppLayout>
        
    )
}

Confirmacion.getInitialProps = async () => {
    const data = await firebase.firestore().collection('controles').doc('prueba').get()
    .then(info => {
        return (info.data())
    })
    
    return {data}
} 