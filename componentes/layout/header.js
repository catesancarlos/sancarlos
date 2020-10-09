import Link from 'next/link'
import Router from 'next/router'

const Header = ({pagina, name}) => {
    return (
        <div className='header'>
            <Link href='/'>
                <a>
                    <p className='name-1'>Catequesis</p>
                    <p className='name-2'>SAN CARLOS</p>
                    <div className='name-3-cont'>
                        <p className='name-3'>Ricaurte</p>
                    </div>
                </a>
            </Link>
            {
                name ? <p className='nombre-alumno'>{name.toUpperCase()}</p> :
                    pagina != 'index' &&
                    <div className='navegacion'>
                        <p 
                            className='linkin izquierda' 
                            onClick={() => Router.back()}
                        >Atras</p>
                        <p 
                            className='linkin'
                            onClick={() => Router.push('/')}
                        >Inicio</p>
                        <p 
                            className='linkin' 
                            id={(pagina == 'info') ? 'activo' : 'desactivo'}
                            onClick={() => Router.push('/informacion')}
                        >Información</p>
                        <p 
                            className='linkin'
                            id={(pagina == 'eval') ? 'activo' : 'desactivo'}
                            onClick={() => Router.push('/evaluacion')}
                        >Evaluaciones</p>
                        <p 
                            className='linkin' 
                            id={(pagina == 'sacramento') ? 'activo' : 'desactivo'}
                            onClick={() => Router.push('/miConfirmacion')}
                        >Mi Sacramento</p>
                    </div>
            }

            <style jsx>{`
                .header{
                    /* padding: 40px 60px 40px 60px; */
                    padding: 25px 60px 25px 50px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .name-1{
                    /* font-size: 2.25vw; */
                    font-size: 2vw;
                    font-weight: bold;
                }

                .name-2{
                    color: brown;
                    /* font-size: 4vw; */
                    font-size: 3.5vw;
                    line-height: 100%;
                    font-weight: bold;
                    text-shadow: 3px 3px white;
                }

                .name-3-cont{
                    margin-top: 7px;
                    display: flex;
                    /* margin-left: 17vw; */
                    margin-left: 14vw;
                }

                .name-3{
                    background: white;
                    padding: 1px 10px 2px 10px;
                    /* font-size: 1.9vw; */
                    font-size: 1.5vw;
                    font-weight: bold;
                    color: #ccdae8;
                    border-radius: 10px;
                }

                .nombre-alumno{
                    font-weight: bold;
                    font-size: 27px;
                }

                .navegacion{
                    display: flex;
                }

                .linkin{
                    background: white;
                    width: 9.75vw;
                    margin-right: 5px;
                    font-size: 1.25vw;
                    font-weight: bold;
                    text-align: center;
                    line-height: 40px;
                    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                    cursor: pointer;
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

                    .nombre-alumno{
                        margin-top: 20px;
                        text-align: right;
                        font-size: 20px;
                    }

                    .navegacion{
                        margin: 15px 0 10px 0;
                    }
    
                    .linkin{
                        background: white;
                        width: 20%;
                        margin-right: 2.5px;
                        font-size: 7.5px;
                        line-height: 35px;
                    }
                }
            `}</style>
        </div>
    )
}

export default Header;
