import Link from 'next/link'

const MenuParalelos = () => {

    return (
        <div className='container'>
            <h3 className='eva-info1'>Evaluación de recuperación Segundos de Confirmación</h3>
            <p className='eva-info2'>Escoja el paralelo o comunidad a la que pertenece.</p>
            <div className='grupos-centro'>
                <p className='centro-nombre'>Centro Parroquial</p>
                <div className='grupos'>
                    <Link href='/evaluacion/segundo/a'>
                        <a><p className='paralelo-centro'>A</p></a>
                    </Link>
                    <Link href='/evaluacion/segundo/b'>
                        <a><p className='paralelo-centro'>B</p></a>
                    </Link>
                    <Link href='/evaluacion/segundo/c'>
                        <a><p className='paralelo-centro'>C</p></a>
                    </Link>
                    <Link href='/evaluacion/segundo/d'>
                        <a><p className='paralelo-centro'>D</p></a>
                    </Link>
                </div>
            </div>

            <div className='grupos'>
                <Link href='/evaluacion/segundo/molinopamba'>
                    <a><p className='paralelo'>Molinopamba</p></a>
                </Link>
                <Link href='/evaluacion/segundo/angeles'>
                    <a><p className='paralelo'>Los Ángeles</p></a>
                </Link>
                <Link href='/evaluacion/segundo/dolorosa'>
                    <a><p className='paralelo'>La Dolorosa</p></a>
                </Link>
                <Link href='/evaluacion/segundo/auxiliadora'>
                    <a><p className='paralelo'>Maria Auxiliadora</p></a>
                </Link>
            </div>

            <style jsx>{`
                .container{
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    font-size: 25px;
                }

                .eva-info1{
                    margin: 10px 0;
                }

                .grupos-centro{
                    margin: 50px 0 40px 0;
                }

                .centro-nombre{
                    font-weight: bold;
                }

                .grupos{
                    margin-top: 15px;
                    display: flex;
                    justify-content: space-between;
                }

                .paralelo-centro{
                    margin: 0 20px;
                    background: white;
                    padding: 15px 60px;
                    border-radius: 20px;
                }

                .paralelo{
                    margin: 0 10px;
                    background: white;
                    padding: 15px 30px;
                    border-radius: 20px;
                    font-weight: bold;
                }

                @media screen and (max-width: 480px){
                    .container{
                        margin-bottom: 50px;
                    }

                    .eva-info1{
                        font-size: 22px;
                    }

                    .eva-info2{
                        padding: 10px 30px;
                        font-size: 18px;
                    }

                    .grupos-centro{
                        margin: 30px 0 0 0;
                    }

                    .centro-nombre{
                        font-size: 20px;
                    }

                    .grupos{
                        display: block;
                        width: 50vw;
                    }

                    .paralelo-centro{
                        margin: 10px 0;
                        font-size: 20px;
                        padding: 10px 0;
                    }

                    .paralelo{
                        margin: 10px 0;
                        font-size: 20px;
                        padding: 10px 0;
                    }
                }
            `}</style>
        </div>
    )
}

export default MenuParalelos;