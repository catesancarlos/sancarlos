import { useState, useEffect, useContext } from 'react'
import {AuthContext} from '../../services/authContext'
import { useRouter } from 'next/router'
import firebase from '../../services/dBase'
import Link from 'next/link'
import Login from '../Sesion/Login'

const Header = ({ name, flecha, auth }) => {
    const { logged, user, listo } = useContext(AuthContext)
    const [menuOpen, setMenuOpen] = useState(false)
    const router = useRouter()

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
            <Link href='/' legacyBehavior>
                <a>
                    <p className='name-1'>Catequesis</p>
                    <p className='name-2'>SAN CARLOS</p>
                    <div className='name-3-cont'>
                        <p className='name-3'>Ricaurte</p>
                    </div>
                </a>
            </Link>
            <div className='navegacion'>
                    <p
                        className='item-menu'
                        onClick={() => router.push('/')}
                        style={{color: name=='Inicio' ? 'brown' : 'black', fontWeight: name=='Inicio' ? 'bold' : '200'}}
                    >INICIO</p>
                    <p
                        className='item-menu'
                        onClick={() => router.push('/campeonato')}
                        style={{color: name=='Campeonato' ? '#245590' : 'black', fontWeight: name=='Campeonato' ? 'bold' : '200'}}
                    >CAMPEONATO</p>
                    <p
                        className='item-menu'
                        onClick={() => router.push('/jesuscribe')}
                        style={{color: name=='Jesuscribe' ? '#EE1C21' : 'black', fontWeight: name=='Jesuscribe' ? 'bold' : '200'}}
                    >JESUSCRIBE</p>
                    <p
                        className='item-menu'
                        onClick={() => router.push('/timeline')}
                        style={{color: name=='Timeline' ? 'brown' : 'black', fontWeight: name=='Timeline' ? 'bold' : '200'}}
                    >TIMELINE</p>
                    <p
                        className='item-menu'
                        onClick={() => router.push('/libros')}
                        style={{color: name=='Libros' ? 'brown' : 'black', fontWeight: name=='Libros' ? 'bold' : '200'}}
                    >LIBROS</p>
                    {/* <p
                        className='item-menu'
                        onClick={() => router.push('/agenda')}
                        style={{color: name=='Agenda' ? 'brown' : 'black', fontWeight: name=='Agenda' ? 'bold' : '200'}}
                    >AGENDA</p> */}
                    <p 
                        className='item-menu'
                        onClick={() => router.push('/blog')}
                        style={{color: name=='Blog' ? 'brown' : 'black', fontWeight: name=='Blog' ? 'bold' : '200'}}
                    >BLOG</p>
            </div>

            <style jsx>{`
                .header{
                    padding: 15px 60px 15px 50px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .name-1{
                    font-size: 1.6vw;
                    font-weight: bold;
                }

                .name-2{
                    margin-top: -5px;
                    color: brown;
                    font-size: 2.6vw;
                    line-height: 100%;
                    font-weight: bold;
                    text-shadow: 3px 3px #888;
                }

                .name-3-cont{
                    margin-top: 2px;
                    display: flex;
                    margin-left: 10.25vw;
                    opacity: 0;
                }

                .name-3{
                    background: black;
                    padding: 0px 6px 2px 6px;
                    font-size: 1.2vw;
                    font-weight: bold;
                    color: white;
                    border-radius: 8px;
                }

                .navegacion{
                    display: flex;
                    align-items: center;
                }

                .item-menu{
                    padding: 6px 25px;
                    font-size: 18px;
                    font-family: 'Lato', sans-serif;
                    font-weight: 400;
                    -webkit-tap-highlight-color: rgba(0,0,0,0);
                    cursor: pointer;
                }

                .item-menu:hover{
                    background: #FFFFFF99;
                    border-radius: 10px;
                }

                .pre{
                    background: #000;
                    padding: 10px 20px 12px 20px;
                    color: white;
                    font-size: 19px;
                    font-weight: bold;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 10px;
                    cursor: pointer;
                }

                @media screen and (max-width: 768px){
                    .header{
                        padding: 12px 12px 12px 12px;
                        flex-wrap: wrap;
                    }
    
                    .name-1{
                        font-size: 16px;
                    }
    
                    .name-2{
                        margin-top: -3px;
                        font-size: 28px;
                        text-shadow: 2px 2px #888;
                    }
    
                    .name-3-cont{
                        margin-top: 0px;
                        margin-left: 101px;
                    }
    
                    .name-3{
                        padding: 1px 6px;
                        font-size: 15px;
                        border-radius: 6px;
                    }

                    .navegacion{
                        margin-top: 10px;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-wrap: wrap;
                    }

                    .item-menu{
                        padding: 5px 15px;
                        font-size: 16px;
                    }
                }
            `}</style>
        </div>
    )
}

export default Header