import { useState } from 'react'
import firebase from '../../services/dBase'
import FacebookIcon from '../iconos/FacebookIcon'

export default function Login({ color = 'white' }){
    const [login, setLogin] = useState(true)

    const handleLogin = async event => {
        event.preventDefault()

        if(login){
            const { email, password } = event.target.elements
            try {
                await firebase.auth().signInWithEmailAndPassword(email.value, password.value)
            } catch (error) {
                console.log(error)
            }
        } else {
            const { email, name, password } = event.target.elements
            try {
                await firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
                    .then(result => {
                        result.user.updateProfile({
                            displayName: name.value
                        })
                    })
                    if(color == 'white') setLogin(!login)
            } catch (error) {
                alert(error)
            }
        }
    }

    const authFacebook = () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        
        firebase.auth().signInWithPopup(provider)
            .then(result => { 
                result.user.updateProfile({
                photoURL: result.additionalUserInfo.profile.picture.data.url
            })
        })
          .catch(err =>{
            console.error(err)
        })
    }

    return(
        <div className='sesion-container' >
            <form onSubmit={handleLogin} className='form-sesion'>
                <p className='signup-title'>{login ? 'Inicia sesión' : 'Bienvenido, crea tu cuenta'}</p>
                {
                    !login && <input 
                    className='sesion input-sesion'   
                    type='text' 
                    name='name'
                    placeholder='Nombre de usuario'
                    required
                    />
                }
                <input 
                    className='sesion input-sesion'   
                    type='email' 
                    name='email'
                    placeholder='Correo electrónico'
                    required
                />
                <input
                    className='sesion input-sesion' 
                    type='password' 
                    name='password'
                    placeholder='Contraseña'
                    required
                />
                <button className='sesion button-sesion'>{login ? 'Iniciar sesión' : 'Crear cuenta'}</button>
                {
                    login ?
                        <>
                            <p className='login-link' onClick={() => setLogin(false)}>
                                No tienes una cuenta <strong>Crear cuenta</strong>
                            </p>
                            <div className='container-sesion-facebook'>
                                O puedes: 
                                <div onClick={authFacebook} className='sesion-facebook'>
                                    <FacebookIcon />&nbsp;&nbsp;Iniciar con Facebook
                                </div>  
                            </div>
                        </>
                    :
                        <p className='login-link' onClick={() => setLogin(true)}>
                            ¿Tienes una cuenta? <strong>Inicia Sesión</strong>
                        </p>
                }
            </form>

            <style jsx>{`
                .form-sesion{
                    width: 450px;
                    margin: 0 auto;
                    text-align: center;
                }
                
                .signup-title{
                    color: ${color};
                    font-size: 34px;
                    font-weight: bold;
                    margin-bottom: 30px;
                }

                .sesion{
                    width: 100%;
                    height: 46px;
                    padding: 12px 15px 12px 15px;
                    font-size: 22px;
                    outline: none;
                    border: none;
                }
                
                .input-sesion{
                    background: white;
                    margin-bottom: 15px;
                    border: ${color == 'black' ? '1px solid #999' : 'none'};
                    border-radius: 10px;
                }

                .button-sesion{
                    margin-top: 20px;
                    background-color: #A52A2A;
                    color: white;
                    font-weight: bold;
                    line-height: 1em;
                    border-radius: 10px;
                    cursor: pointer;
                }

                .login-link{
                    margin-top: 30px;
                }

                .login-link strong{
                    color: #A52A2A;
                    cursor: pointer;
                }

                .container-sesion-facebook{
                    margin-top: 25px;
                    color: black;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .sesion-facebook{
                    margin-left: 15px;
                    background: #4267b2;
                    color: white;
                    padding: 5px 10px;
                    display: flex;
                    align-items: center;
                    border-radius: 5px;
                    outline: none;
                    cursor: pointer;
                }
            `}</style>
        </div>
    )
}