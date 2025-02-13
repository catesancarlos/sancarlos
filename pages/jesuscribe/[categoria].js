import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import AppLayout from '../../componentes/layout'
import Container from '../../componentes/sections/Container'
/* import OptionsSection from '../../componentes/sections/OptionsSection' */

import db  from '../../services/dBase'
import { collection, getDocs } from 'firebase/firestore'

import descarger from '../../utils/descarger'

const categ = ['General', 'Vida de Jesús', 'Nuestra Iglesia', 'Sacramentologia', 'Liturgia', 'Multiple']

const opcionesArray = [
    {
        no: 1,
        name: 'General'
    },
    {
        no: 2,
        name: 'Vida de Jesús'
    },
    {
        no: 3,
        name: 'Nuestra Iglesia'
    },
    {
        no: 4,
        name: 'Sacramentologia'
    },
    {
        no: 5,
        name: 'Liturgia'
    },
    {
        no: 6,
        name: 'Multiple'
    }
]

const urls = [
    'https://firebasestorage.googleapis.com/v0/b/datder-b85c8.appspot.com/o/archives%2F01%20Jesuscibe%20-%20Cat%20General.pdf?alt=media&token=63c13580-f31f-41b1-a099-530d583410d7',
    'https://firebasestorage.googleapis.com/v0/b/datder-b85c8.appspot.com/o/archives%2F02%20Jesuscibe%20-%20Cat%20Vida%20de%20Jesus.pdf?alt=media&token=c0eacabd-7de7-4cac-9d33-418c07d79dbd',
    'https://firebasestorage.googleapis.com/v0/b/datder-b85c8.appspot.com/o/archives%2F03%20Jesuscibe%20-%20Cat%20Nuestra%20Iglesia.pdf?alt=media&token=5b997bbb-1659-480d-b785-c76323a3e3e7',
    'https://firebasestorage.googleapis.com/v0/b/datder-b85c8.appspot.com/o/archives%2F04%20Jesuscibe%20-%20Cat%20Sacramentologia.pdf?alt=media&token=30911e8b-ef12-4e83-bf53-9a1b388eb01d',
    'https://firebasestorage.googleapis.com/v0/b/datder-b85c8.appspot.com/o/archives%2F05%20Jesuscibe%20-%20Cat%20Liturgia.pdf?alt=media&token=d48e00bd-9221-4fc2-a2da-9276cddeee82',
    'https://firebasestorage.googleapis.com/v0/b/datder-b85c8.appspot.com/o/archives%2F06%20Jesuscibe%20-%20Cat%20Multiple.pdf?alt=media&token=fc276489-ab57-4156-aa60-3bf1ad969283'
]

const urls3 = [
    'https://firebasestorage.googleapis.com/v0/b/datder-b85c8.appspot.com/o/archives%2F01%20Jesuscibe%20-%20Cat%20General%20Multip3.pdf?alt=media&token=299c3ea1-94ae-4f7a-9e7c-b7b8bd03b5ba',
    'https://firebasestorage.googleapis.com/v0/b/datder-b85c8.appspot.com/o/archives%2F02%20Jesuscibe%20-%20Cat%20Vida%20de%20Jesus%20Multip3.pdf?alt=media&token=1ff5f063-e61c-4da4-9441-a706732a57e6',
    'https://firebasestorage.googleapis.com/v0/b/datder-b85c8.appspot.com/o/archives%2F03%20Jesuscibe%20-%20Cat%20Nuestra%20Iglesia%20Multip3.pdf?alt=media&token=d380fb5f-bc47-4237-9b73-2c25ed0a0cfc',
    '',
    'https://firebasestorage.googleapis.com/v0/b/datder-b85c8.appspot.com/o/archives%2F05%20Jesuscibe%20-%20Cat%20Liturgia%20Multip3.pdf?alt=media&token=699a7a41-b24f-4b33-af0f-3bb30912bd7e',
    'https://firebasestorage.googleapis.com/v0/b/datder-b85c8.appspot.com/o/archives%2F06%20Jesuscibe%20-%20Cat%20Multiple%20Multip3.pdf?alt=media&token=75e5d521-67f9-4231-b789-d3b7385db45c'
]

export default function Preguntas({ categoria, preguntas }){
    const router = useRouter()
    const [datos, setDatos] = useState([])
    /* const [section, setSection] = useState(2) */
    const [select, setSelect] = useState(1)
    const [inic, setInic] = useState(false)
    const [tarde, setTarde] = useState(true)

    useEffect(() => {
        if(categoria=='js-general') setSelect(1)
        if(categoria=='js-vida') setSelect(2)
        if(categoria=='js-iglesia') setSelect(3)
        if(categoria=='js-sacramentologia') setSelect(4)
        if(categoria=='js-liturgia') setSelect(5)
        if(categoria=='js-multiple') setSelect(6)
        setInic(false)
        setTarde(true)
    }, [categoria])

    useEffect(() => {
        sessionStorage.setItem(`strg-${categoria}`, JSON.stringify(preguntas))
    }, [categoria])

    useEffect(() => {
        if(preguntas) setDatos(preguntas)
    }, [preguntas])

    useEffect(() => {
        if(inic) setDatos(preguntas.filter(pr => pr.no%3 == 0))
            else setDatos(preguntas)
    }, [inic])

    useEffect(() => {
        if(!tarde && categ[select-1] == 'Sacramentologia') setDatos([])
            else setDatos(preguntas)
    }, [tarde])

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
        if(!inic) descarger([urls[select-1], `Preguntas_${categoria}`])
        else descarger([urls3[select-1], `Preguntas_${categoria}_multiplos3`])
    }

    return(
        <AppLayout titulo='San Carlos - Jesuscribe' name='Jesuscribe'>
            <Container
                title='CONCURSO'
                subtitle='2025'
                img='/logo-jesuscribe.jpg'
            >
                <aside>
                    <p className={`op-menu`} onClick={() => router.push('/jesuscribe')}>Invitación</p>
                    <p className={`op-menu`} onClick={() => router.push({pathname: '/jesuscribe', query: {s: 2}})}>Niveles</p>
                    <p className={`op-menu`} onClick={() => router.push({pathname: '/jesuscribe', query: {s: 3}})}>Fechas</p>
                    <p className={`op-menu ${select == 1 && 'active'}`} onClick={() => handleChangeCategory(1)}>General</p>
                    <p className={`op-menu ${select == 2 && 'active'}`} onClick={() => handleChangeCategory(2)}>Vida de Jesús</p>
                    <p className={`op-menu ${select == 3 && 'active'}`} onClick={() => handleChangeCategory(3)}>Nuestra Iglesia</p>
                    <p className={`op-menu ${select == 4 && 'active'}`} onClick={() => handleChangeCategory(4)}>Sacramentologia</p>
                    <p className={`op-menu ${select == 5 && 'active'}`} onClick={() => handleChangeCategory(5)}>Liturgia</p>
                    <p className={`op-menu ${select == 6 && 'active'}`} onClick={() => handleChangeCategory(6)}>Multiple</p>
                </aside>
                
                <div className='principal'>
                    {/* <p className='info'>Las preguntas para el concurso están divididas por categorías, escoge una para revisarlas:</p>
                    <OptionsSection
                        options={opcionesArray}
                        select={select}
                        onSelect={handleChangeCategory}
                        bot
                    /> */}
                    <div className='title-section'>
                        <div className='title'>
                            <strong className='cat-title'>{`Categoria: ${categ[select-1]}`}</strong>
                            {datos.length > 0 &&
                                <p className='download' onClick={handleDownload}>Descargar</p>
                            }
                        </div>
                        <div className='cont-filtro'>
                            <p className='perte'>A que nivel perteneces:</p>
                            <div className='filtro'>
                                {categ[select-1] != 'Sacramentologia' ?
                                    <>
                                        <p className={inic ? 'acto' : 'normal'} onClick={() => setInic(true)}>Iniciación y Reconciliación</p>
                                        <p className={!inic ? 'acto' : 'normal'} onClick={() => setInic(false)}>Demas niveles</p>
                                    </>
                                :
                                    <>
                                        <p className={!tarde ? 'acto' : 'normal'} onClick={() => setTarde(false)}>Niveles de la mañana</p>
                                        <p className={tarde ? 'acto' : 'normal'} onClick={() => setTarde(true)}>Niveles de la tarde</p>
                                    </>
                                }
                            </div>
                        </div>
                        <i>{
                            datos.length == 0 ? 'Su nivel no debe estudiar esta categoria' : `Banco de preguntas de la 
                            categoría ${categ[select-1]}, para el concurso JESUSCRIBE de la Catequesis San Carlos de 
                            Ricaurte. Esta categoría cuenta con ${datos.length} preguntas.`
                        }</i>
                    </div>
                    <div className='bucket'>
                        {
                            datos && datos?.sort(function(a, b){
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
                    display: flex;
                    justify-content: center;
                    align-items: center;
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
                    font-weight: 200;
                }

                .title-section{
                    margin-bottom: 30px;
                }

                .title{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .cat-title{
                    color: black;
                    font-size: 22px;
                    margin-bottom: 6px;
                }

                i{
                    font-size: 17px;
                    font-weight: 200;
                }

                .download{
                    background: #EE1C21;
                    padding: 1px 12px 2px 12px;
                    color: white;
                    font-size: 17px;
                    border-radius: 6px;
                    cursor: pointer;
                }

                .cont-filtro{
                    margin: 12px 0 15px 0;
                    display: flex;
                    align-items: center;
                }

                .filtro{
                    margin-left: 10px;
                    display: flex;
                }

                .filtro p{
                    margin: 0 5px;
                    padding: 3px 8px;
                    font-size: 15px;
                    font-weight: 200;
                    text-align: center;
                    border-radius: 6px;
                    box-shadow: -1px 4px 3px 0px #888;
                    cursor: pointer;
                }

                .acto{
                    background: black;
                    color: white;
                }

                .normal{
                    background: white;
                    color: black;
                }

                .bucket{
                    position: relative;
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

                    .title-section{
                        margin-bottom: 20px;
                    }

                    strong{
                        font-size: 18px;
                        margin-bottom: 2px;
                    }

                    i{
                        font-size: 16px;
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

                    .cont-filtro{
                        font-size: 15px;
                        justify-content: space-between;
                    }

                    .perte{
                        width: 100%;
                    }

                    .filtro{
                        width: 100%;
                    }

                    .filtro p{
                        margin: 0 4px;
                        padding: 2px 6px;
                        font-size: 13px;

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