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
            <FooterPoints mul onNext={handleCerrar} onView={() => setView(!view)} />

            <style jsx>{`
                section{
                    width: 100%;
                    min-height: calc(100vh - 175px);
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
                    margin-bottom: 10px;
                }

                strong{
                    font-size: 28px;
                    text-align: center;
                }

                .respuestas{
                    pointer-events: none;
                    width: 70%;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    padding-bottom: 80px;
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