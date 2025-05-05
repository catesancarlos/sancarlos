import { useState } from 'react'
import { useRouter } from 'next/router'

import AppLayout from '../../../componentes/layout'
import RespOpcion from '../../../componentes/jesuscribe/RespOpcion'

import db  from '../../../services/dBase'
import { getDoc, doc } from 'firebase/firestore'
import FooterPoints from '../../../componentes/jesuscribe/FooterPoints'

export default function CatMultiple({ datos }){
    const router = useRouter()
    const [view, setView] = useState(false)

    const handleCerrar = () => router.back()

    return(
        <AppLayout 
            titulo='JESUSCRIBE - Multiple'
            name='Jesuscribe'
            categoria='MULTIPLE'
            back='#B0C0D9'
        >
            <section>
                <div className='div0'></div>
                <div className='pregunta'>
                    <strong>{datos?.pregunta}</strong>
                </div>
                <p className='info'>Escriba sus respuestas en un papel y luego verifique que esten correctas:</p>
                <p className='boton' onClick={() => setView(!view)}>Verificar respuestas</p>
                <div className='respuestas'>
                    {
                        view && datos?.respuestas?.map(
                            (opcion, index) => 
                                <RespOpcion
                                    ml={true}
                                    key={index}
                                    dato={opcion}
                                    mitad={[]}
                                    index={index}
                                    select={false}
                                    onSelect={[]}
                                />
                        )
                    }
                </div>
            </section>
            <div className='retorno'>
                <p onClick={handleCerrar}>Escoger otra pregunta</p>
                <p onClick={() => router.push('/jesuscribe')}>Cambiar de categoría</p>
            </div>
            {/* <FooterPoints mul onNext={handleCerrar} onView={() => setView(!view)} /> */}

            <style jsx>{`
                section{
                    width: 100%;
                    /* min-height: calc(100vh - 175px); */
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .div0{
                    margin-top: 85px;
                    width: 100%;
                    border: 3px solid white;
                    box-shadow: 0px 3px 10px 0px #777;
                }

                .pregunta{
                    margin-top: -56px;
                    background: white;
                    min-height: 110px;
                    width: 70%;
                    padding: 5px 12px 7px 12px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: 6px solid white;
                    border-radius: 30px;
                    margin-bottom: 25px;
                }

                strong{
                    font-size: 28px;
                    text-align: center;
                }

                .info{
                    width: 70%;
                    font-size: 17px;
                    font-weight: 200;
                }

                .boton{
                    margin: 25px 0 8px 0;
                    background: black;
                    padding: 4px 10px 5px 10px;
                    color: white;
                    font-weight: 200;
                    border-radius: 10px;
                    cursor: pointer;
                }

                .respuestas{
                    pointer-events: none;
                    width: 70%;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    padding-bottom: 20px;
                }

                .califica{
                    display: none;
                    position: relative;
                    background: #00BB2D;
                    margin-top: 40px;
                    width: 70%;
                    line-height: 50px;
                    text-align: center;
                    border-radius: 30px;
                }

                .r{
                    color: white;
                    font-size: 20px;
                    font-weight: bold;
                    letter-spacing: 1px;
                }

                .cerrar{
                    position: absolute;
                    top: 0;
                    right: 25px;
                    color: white;
                    cursor: pointer;
                }

                .retorno{
                    display: ${view ? 'flex' : 'none'};
                    margin-top: 30px;
                    justify-content: center;
                }

                .retorno p{
                    margin: 0 12px;
                    text-decoration: underline;
                    cursor: pointer;
                }

                @media screen and (max-width: 480px){
                    .pregunta{
                        width: 90%;
                        border: 5px solid white;
                        border-radius: 25px;
                        margin-bottom: 15px;
                    }

                    strong{
                        font-size: 22px;
                    }

                    .info{
                        width: 90%;
                        font-size: 17px;
                    }

                    .boton{
                        margin: 15px 0 8px 0;
                        background: black;
                        padding: 4px 10px 5px 10px;
                        color: white;
                        font-weight: 200;
                        border-radius: 10px;
                    }

                    .respuestas{
                        width: 90%;
                        padding: 0;
                        margin: 0;
                    }
                }
            `}</style>
        </AppLayout>
    )
}

export async function getServerSideProps (context) {
    const { params, res } = context
    const { pregunta } = params

    const datos = await getDoc(doc(db, 'js-multiple', `js-ml-${pregunta}`)).then(datos => {
        return (datos.data())
    })

    return {
        props : { datos }
    }
}