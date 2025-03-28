import { useState } from 'react'
import { useRouter } from 'next/router'

import AppLayout from '../../../componentes/layout'
import RespOpcion from '../../../componentes/jesuscribe/RespOpcion'

import db  from '../../../services/dBase'
import { getDoc, doc } from 'firebase/firestore'

export default function CatGeneral({ datos }){
    const router = useRouter()
    const [select, setSelect] = useState([false, false, false, false])
    const [revisar, setRevisar] = useState(null)

    const handleSelect = (e) => {
        if(e==0) setSelect([true, false, false, false])
        else if(e==1) setSelect([false, true, false, false])
        else if(e==2) setSelect([false, false, true, false])
        else if(e==3) setSelect([false, false, false, true])

        if(datos?.respuestas[e] == datos?.correcto) setRevisar('CORRECTO')
            else setRevisar('INCORRECTO')
    }

    const handleCerrar = () => {
        setSelect([false, false, false, false])
        setRevisar(null)
        router.back()
    }

    return(
        <AppLayout 
            titulo='JESUSCRIBE - General'
            name='Jesuscribe'
            categoria='GENERAL'
            back='#B0C0D9'
        >
            <section>
                <div className='div0'></div>
                <div className='pregunta'>
                    <strong>{datos?.pregunta}</strong>
                </div>
                <div className='respuestas'>
                    {
                        datos && datos?.respuestas.map(
                            (opcion, index) => 
                                <RespOpcion 
                                    key={index}
                                    dato={opcion}
                                    index={index}
                                    select={select[index]}
                                    onSelect={handleSelect}
                                />
                        )
                    }
                </div>
                <div className='califica'>
                    <p className='r'>{revisar}</p>
                    <p className='cerrar' onClick={handleCerrar}>X</p>
                </div>
            </section>

            <style jsx>{`
                section{
                    width: 100%;
                    height: calc(100vh - 175px);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .div0{
                    margin-top: 85px;
                    width: 100%;
                    border: ${!revisar ?  '3px solid white' : revisar == 'CORRECTO' ? '3px solid #00BB2D' : '3px solid red'};
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
                    border: ${!revisar ?  '6px solid white' : revisar == 'CORRECTO' ? '6px solid #00BB2D' : '6px solid red'};
                    border-radius: 30px;
                    margin-bottom: 10px;
                }

                strong{
                    font-size: 28px;
                    text-align: center;
                }

                .respuestas{
                    pointer-events: ${revisar ? 'none' : 'auto'};
                    width: 70%;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                }

                .califica{
                    display: ${revisar ? 'block' : 'none'};
                    position: relative;
                    background: ${revisar == 'CORRECTO' ? '#00BB2D' : 'red'};
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

    const datos = await getDoc(doc(db, 'js-general', `js-gn-${pregunta}`)).then(datos => {
        return (datos.data())
    })

    return {
        props : { datos }
    }
}