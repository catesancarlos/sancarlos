import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import AppLayout from '../../componentes/layout'
import Container from '../../componentes/sections/Container'
import InvitacionJs25 from '../../componentes/jesuscribe/InvitacionJs25'
import CategoriasJs25 from '../../componentes/jesuscribe/CategoriasJs25'
import FechasJs25 from '../../componentes/jesuscribe/FechasJs2025'

export default function Jesuscribe(){
    const router = useRouter()
    const [section, setSection] = useState(1)

    useEffect(() => {
        if(router.query.s){
            setSection(router.query.s)
            router.replace('/jesuscribe')
        }   
    }, [router.query.s])

    return(
        <AppLayout titulo='San Carlos - Jesuscribe' name='Jesuscribe'>
            <Container
                title='CONCURSO'
                subtitle='2025'
                img='/logo-jesuscribe.jpg'
            >
                <aside>
                    <p className={`op-menu ${section == 1 && 'active'}`} onClick={() => setSection(1)}>Invitación</p>
                    <p className={`op-menu ${section == 3 && 'active'}`} onClick={() => setSection(3)}>Fechas</p>
                    <p className={`op-menu ${section == 2 && 'active'}`} onClick={() => setSection(2)}>Niveles</p>
                    <p className={`op-menu ${section == 4 && 'active'}`} onClick={() => {setSection(0), router.push('/jesuscribe/js-general')}}>General</p>
                    <p className={`op-menu ${section == 5 && 'active'}`} onClick={() => {setSection(0), router.push('/jesuscribe/js-vida')}}>Vida de Jesús</p>
                    <p className={`op-menu ${section == 6 && 'active'}`} onClick={() => {setSection(0), router.push('/jesuscribe/js-iglesia')}}>Nuestra Iglesia</p>
                    <p className={`op-menu ${section == 7 && 'active'}`} onClick={() => {setSection(0), router.push('/jesuscribe/js-sacramentologia')}}>Sacramentologia</p>
                    <p className={`op-menu ${section == 8 && 'active'}`} onClick={() => {setSection(0), router.push('/jesuscribe/js-liturgia')}}>Liturgia</p>
                    <p className={`op-menu ${section == 9 && 'active'}`} onClick={() => {setSection(0), router.push('/jesuscribe/js-multiple')}}>Multiple</p>
                </aside>
                <div className='principal'>
                    {
                        section == 1 ? <InvitacionJs25 /> : 
                            section == 2 ? <CategoriasJs25 /> :
                                section == 3 ? <FechasJs25 /> : ''
                    }
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
                }
            `}</style>
        </AppLayout>
    )
}