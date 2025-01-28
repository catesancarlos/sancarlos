import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import AppLayout from '../../componentes/layout'
import Container from '../../componentes/sections/Container'
import OptionsSection from '../../componentes/sections/OptionsSection'
import TitleSection from '../../componentes/sections/TitleSection'

import db  from '../../services/dBase'
import { collection, getDocs } from 'firebase/firestore'

import descarger from '../../utils/descarger'

const categ = ['General', 'Vida de Jesús', 'Nuestra Iglesia', 'Sacramentologia', 'Liturgia', 'Multiple']
const urls = [
    'https://firebasestorage.googleapis.com/v0/b/datder-b85c8.appspot.com/o/archives%2F01%20Jesuscibe%20-%20Cat%20General.pdf?alt=media&token=63c13580-f31f-41b1-a099-530d583410d7',
    'https://firebasestorage.googleapis.com/v0/b/datder-b85c8.appspot.com/o/archives%2F02%20Jesuscibe%20-%20Cat%20Vida%20de%20Jesus.pdf?alt=media&token=c0eacabd-7de7-4cac-9d33-418c07d79dbd',
    'https://firebasestorage.googleapis.com/v0/b/datder-b85c8.appspot.com/o/archives%2F03%20Jesuscibe%20-%20Cat%20Nuestra%20Iglesia.pdf?alt=media&token=5b997bbb-1659-480d-b785-c76323a3e3e7',
    'https://firebasestorage.googleapis.com/v0/b/datder-b85c8.appspot.com/o/archives%2F04%20Jesuscibe%20-%20Cat%20Sacramentologia.pdf?alt=media&token=30911e8b-ef12-4e83-bf53-9a1b388eb01d',
    'https://firebasestorage.googleapis.com/v0/b/datder-b85c8.appspot.com/o/archives%2F05%20Jesuscibe%20-%20Cat%20Liturgia.pdf?alt=media&token=d48e00bd-9221-4fc2-a2da-9276cddeee82',
    'https://firebasestorage.googleapis.com/v0/b/datder-b85c8.appspot.com/o/archives%2F06%20Jesuscibe%20-%20Cat%20Multiple.pdf?alt=media&token=fc276489-ab57-4156-aa60-3bf1ad969283'
]

export default function Preguntas({ categoria, preguntas }){
    const router = useRouter()
    const [section, setSection] = useState(2)
    const [select, setSelect] = useState(1)

    useEffect(() => {
        if(categoria=='js-general') setSelect(1)
        if(categoria=='js-vida') setSelect(2)
        if(categoria=='js-iglesia') setSelect(3)
        if(categoria=='js-sacramentologia') setSelect(4)
        if(categoria=='js-liturgia') setSelect(5)
        if(categoria=='js-multiple') setSelect(6)
    }, [])

    const handleChangeCategory = e => {
        setSelect(e)
        if(e==1) router.push('/jesuscribe/js-general')
        if(e==2) router.push('/jesuscribe/js-vida')
        if(e==3) router.push('/jesuscribe/js-iglesia')
        if(e==4) router.push('/jesuscribe/js-sacramentologia')
        if(e==5) router.push('/jesuscribe/js-liturgia')
        if(e==6) router.push('/jesuscribe/js-multiple')
    }

    const handleDownload = () => {
        descarger([urls[select-1], `Preguntas_${categoria}`])
    }

    return(
        <AppLayout titulo='San Carlos - Jesuscribe' name='Jesuscribe'>
            <Container
                title='CONCURSO'
                subtitle='2025'
                img='/logo-jesuscribe.jpg'
            >
                <aside>
                    <p className={`op-menu ${section == 1 && 'active'}`} onClick={() => router.push('/jesuscribe')}>Invitación</p>
                    <p className={`op-menu ${section == 2 && 'active'}`} onClick={() => setSection(2)}>Banco de preguntas</p>
                    {/* <p className={`op-menu ${section == 3 && 'active'}`} onClick={() => setSection(3)}>Fechas</p> */}
                </aside>
                <div className='principal'>
                    <p className='info'>Las preguntas para el concurso están divididas por categorías, escoge una para revisarlas:</p>
                    <OptionsSection
                        options={categ}
                        select={select}
                        onSelect={handleChangeCategory}
                    />
                    <TitleSection
                        title={`Categoria: ${categ[select-1]}`}
                        desc={`Banco de preguntas de la categoría ${categ[select-1]}, para el concurso JESUSCRIBE de la Catequesis San Carlos de Ricaurte. Esta categoría cuenta con ${preguntas.length} preguntas.`}
                    >
                        <p className='download' onClick={handleDownload}>Descargar</p>
                    </TitleSection>
                    <div>
                        {
                            preguntas && preguntas?.sort(function(a, b){
                                return a.no - b.no
                            }).map((pregunta) =>
                                <div key={`${categoria}-p${pregunta.no}`} className='cont-q'>
                                    <div className='question'>
                                        <p>{pregunta.no}</p>
                                        <strong>{pregunta.pregunta}</strong>
                                    </div>
                                    {select==6 && <p className='correct'>Respuestas:</p>}
                                    <>
                                        {pregunta?.respuestas?.map((index, op) =>
                                            <p key={op} className='answer'>{select==6 ? '• ' : op==0 ? 'a) ' : op==1 ? 'b) ' : op==2 ? 'c) ' : 'd) '}{index}</p>
                                        )}
                                    </>
                                    {select!=6 && <p className='correct'>Respuesta: <strong>{pregunta.correcto}</strong></p>}
                                </div>
                            )
                        }
                    </div>
                </div>
            </Container>

            <style jsx>{`
                aside{
                    width: 15%;
                }

                .op-menu{
                    background: white;
                    padding: 10px 16px;
                    font-size: 18px;
                    font-family: 'Lato', sans-serif;
                    text-align: center;
                    border-radius: 8px;
                    box-shadow: -2px 2px 5px 0px #888;
                    -webkit-tap-highlight-color: rgba(0,0,0,0);
                    cursor: pointer;
                    margin-bottom: 12px;
                }

                .active{
                    background: #EE1C21;
                    color: white;
                }

                .principal{
                    width: 85%;
                    padding: 18px 0 18px 35px;
                }

                .info{
                    margin-bottom: 25px;
                    font-weight: bold;
                }

                .download{
                    background: #EE1C21;
                    padding: 3px 12px 4px 12px;
                    color: white;
                    font-size: 17px;
                    font-weight: bold;
                    border-radius: 6px;
                    cursor: pointer;
                }

                .cont-q{
                    margin-bottom: 16px;
                }

                .question{
                    display: flex;
                    margin-bottom: 5px;
                }

                .question p{
                    width: 40px;
                    text-align: center;
                }

                .question strong{
                    width: calc(100% - 40px);
                }

                .answer{
                    margin-left: 40px;
                    font-weight: 200;
                }

                .correct{
                    margin-top: 3px;
                    margin-left: 40px;
                    color: brown;
                }

                @media screen and (max-width: 768px){
                    aside{
                        width: 100%;
                        display: flex;
                        flex-wrap: wrap;
                    }

                    .op-menu{
                        width: calc((100% - 12px) / 3);
                        padding: 6px 5px;
                        font-size: 15px;
                        margin-right: 6px;
                        margin-bottom: 10px;
                    }

                    .op-menu:nth-child(3), .op-menu:nth-child(6), .op-menu:nth-child(9), .op-menu:nth-child(10){
                        margin-right: 0;
                    }

                    .principal{
                        width: 100%;
                        padding: 15px 0 0 0;
                    }

                    .cont-q{
                        margin-bottom: 16px;
                        font-size: 15px;
                    }

                    .question{
                        display: flex;
                        margin-bottom: 4px;
                    }

                    .question p{
                        width: auto;
                        text-align: left;
                        margin-right: 4px;
                    }

                    .question strong{
                        width: 100%;
                    }

                    .answer{
                        margin-left: 20px;
                    }

                    .correct{
                        margin-left: 20px;
                    }
                }
            `}</style>
        </AppLayout>
    )
}

export async function getServerSideProps (context) {
    const { params, res } = context
    const { categoria } = params

    const querySnapshot = await getDocs(collection(db, categoria))

    const preguntas = []
    querySnapshot.forEach((pregunta) => {
        preguntas.push(pregunta.data())
    })

    return {
        props : { categoria, preguntas }
    }
}