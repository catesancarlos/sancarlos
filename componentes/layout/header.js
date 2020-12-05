import { useState, useEffect, useContext } from 'react'
import {AuthContext} from '../../services/authContext'
import firebase from '../../services/dBase'
import Link from 'next/link'
import Router from 'next/router'
import Login from '../Sesion/Login'

const Header = ({ name, flecha, auth }) => {
    const { logged, user, listo } = useContext(AuthContext)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        setMenuOpen(false)
    }, [user])

    const cerrarSesion = () => {
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
            setMenuOpen(false)
        }).catch(function(error) {
            // An error happened.
        })
    }

    return (
        <div className='header'>
            {
                menuOpen &&
                <div className='menu'>
                    {
                        !logged ? <Login color='black' /> :
                        <>
                            <p className='user-name'>{user.displayName}</p>
                            <p className='cerrar-sesion' onClick={cerrarSesion}>Cerrar Sesión</p>
                        </>

                    }
                </div>
            }
            <Link href='/'>
                <a>
                    <p className='name-1'>Catequesis</p>
                    <p className='name-2'>SAN CARLOS</p>
                    <div className='name-3-cont'>
                        <p className='name-3'>Ricaurte</p>
                    </div>
                </a>
            </Link>
            <div className='opciones-sesion'>
                <div className='navegacion'>
                    {   
                        (flecha && name !== 'inicio') &&
                        <p 
                            className='linkin izquierda' 
                            onClick={() => Router.back()}
                        >Atras</p>
                    }
                </div> 
                {
                    (name && name !== 'inicio') && <p className='pagina-actual'>{name.toUpperCase()}</p>
                }
                {/* <div>
                    {    
                        name == 'inicio' ?
                            <p className='user-name-header'>{user ? user.displayName : listo && 'Inicia Sesión >'}</p>
                        :
                            <div className='navegacion'>
                                <p 
                                    className='linkin izquierda' 
                                    onClick={() => Router.back()}
                                >Atras</p>
                                <p className='pagina-actual'>{name.toUpperCase()}</p>
                            </div>
                    }
                </div> */}
                <div>
                    {/* <div className='user-sesion' onClick={() => {if(!auth || logged) setMenuOpen(!menuOpen)}}>
                        {
                            logged ? 
                                <> 
                                    {
                                        user.photoURL ? 
                                            <img className='user-foto' src={user.photoURL} alt={user.displayName} />
                                        :
                                            <div className='user-foto-default'>
                                                {
                                                    user.displayName ? user.displayName.charAt(0) 
                                                    : user.email.charAt(0).toUpperCase() 
                                                }
                                            </div>
                                    }
                                </>
                            : !auth && <p className='user-foto-default'>{listo && '+'}</p>
                        }
                    </div>  */}
                </div>
            </div>


            <style jsx>{`
                .header{
                    padding: 25px 60px 25px 50px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .name-1{
                    font-size: 2vw;
                    font-weight: bold;
                }

                .name-2{
                    color: brown;
                    font-size: 3.5vw;
                    line-height: 100%;
                    font-weight: bold;
                    text-shadow: 3px 3px white;
                }

                .name-3-cont{
                    margin-top: 7px;
                    display: flex;
                    margin-left: 14vw;
                }

                .name-3{
                    background: white;
                    padding: 1px 10px 2px 10px;
                    font-size: 1.5vw;
                    font-weight: bold;
                    color: #ccdae8;
                    border-radius: 10px;
                }

                .opciones-sesion{
                    display: flex;
                    align-items: center;
                }

                .user-sesion{
                    margin-left: 15px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 50px;
                    width: 50px;
                    border-radius: 15px;
                    overflow: hidden;
                    cursor: ${(auth && !logged) ? 'default' : 'pointer'};
                }
                
                .user-foto-default{
                    background: ${logged ? '#A52A2AAA' : '#A52A2A55'};
                    width: 100%;
                    height: 100%;
                    text-align: center;
                    font-size: 30px;
                    color: white;
                    line-height: 48px;
                }
                
                .user-foto{
                    width: 100%;
                    height: 100%;
                }

                .menu{
                    position: absolute;
                    top: 115px;
                    right: 60px;
                    background: white;
                    padding: 20px;
                    border-radius: 15px;
                    text-align: right;
                    z-index: 5;
                    /* display: flex;
                    flex-direction: column;
                    align-items: flex-end; */
                }

                .user-name-header{
                    color: black;
                    font-size: 18px;
                    font-weight: bold;
                }

                .user-name{
                    color: #A52A2A;
                    font-size: 18px;
                    font-weight: bold;
                }

                .cerrar-sesion{
                    margin-top: 15px;
                    background: #000000AA;
                    color: white;
                    text-align: center;
                    padding: 2px 7px 4px 7px;
                    border-radius: 5px;
                    cursor: pointer;
                }

                .pagina-actual{
                    font-weight: bold;
                    font-size: 25px;
                    padding: 0 15px;
                    background: white;
                    line-height: 38px;
                    border-radius: ${flecha ? '0 5px 5px 0' : '5px'};
                }

                .navegacion{
                    display: flex;
                    align-items: center;
                }

                .linkin{
                    background: white;
                    width: 80px;
                    margin-right: 3px;
                    font-size: 18px;
                    font-weight: bold;
                    text-align: center;
                    line-height: 38px;
                    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                    transition: 0.2s;
                    cursor: pointer;
                }

                .linkin:hover{
                    background: #FFFFFF88;
                }

                #activo{
                    color: white;
                    background: rgba(165, 42, 42, 0.4);
                    border: 1px solid brown;
                    border-radius: 2px;
                }

                .izquierda{
                    border-radius: 20px 0 0 20px;
                }

                @media screen and (max-width: 480px){
                    .header{
                        display: block;
                        padding: 15px;
                    }
    
                    .name-1{
                        font-size: 20px;
                    }
    
                    .name-2{
                        font-size: 35px;
                        text-shadow: 2px 2px white;
                    }
    
                    .name-3-cont{
                        margin-top: 3px;
                        margin-left: 135px;
                    }
    
                    .name-3{
                        padding: 1px 7px;
                        font-size: 17px;
                        border-radius: 7px;
                    }

                    .opciones-sesion{
                        margin: 10px 0;
                        display: flex;
                        justify-content: flex-end;
                    }

                    .nombre-alumno{
                        margin-top: 20px;
                        text-align: right;
                        font-size: 20px;
                    }
    
                    .linkin{
                        background: white;
                        width: 45px;
                        margin-right: 3px;
                        font-size: 13px;
                        line-height: 34px;
                    }

                    .izquierda{
                        border-radius: 10px 0 0 10px;
                    }

                    .pagina-actual{
                        background: white;
                        padding: 0 10px;
                        font-size: 15px;
                        font-weight: bold;
                        line-height: 34px;
                        border-radius: ${flecha ? '0 5px 5px 0' : '5px'};
                    }
                }
            `}</style>
        </div>
    )
}

export default Header