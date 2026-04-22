import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import AppLayout from '../../componentes/layout'
import Container from '../../componentes/sections/Container'
import MenuAside from '../../componentes/sections/MenuAside'
import Calendario from '../../componentes/campeonato26/calendario/ContCalendario'

const menuOptions = [
    { id: 'confirmacion', label: 'Confirmación' },
    { id: 'seguimiento', label: 'Seguimiento' },
    { id: 'biblico', label: 'Año Bíblico' },
    { id: 'comunion', label: 'Comunión' },
    { id: 'reconciliacion', label: 'Reconciliación' },
    { id: 'iniciacion', label: 'Iniciación' },
]

export default function Campeonato(){
    const [section, setSection] = useState(1)

    const router = useRouter()

    useEffect(() => {
        if(router.query.s){
            setSection(router.query.s)
            router.replace('/campeonato')
        }   
    }, [router.query.s])

    const handleChangeSection = e => setSection(e)

    return(
        <AppLayout titulo='San Carlos - Campeonato' name='Campeonato'>
            <Container
                title='CAMPEONATO'
                subtitle='2026'
                img='/campeonato-logo.jpg'
            >
                <MenuAside opciones={menuOptions} />
                <Calendario />
            </Container>

            <style jsx>{`
                .op-menu{
                    width: 180px;
                    background: white;
                    padding: 10px 16px;
                    font-size: 18px;
                    font-family: 'Lato', sans-serif;
                    text-align: center;
                    border-radius: 8px;
                    box-shadow: -2px 2px 5px 0px #888;
                    -webkit-tap-highlight-color: rgba(0,0,0,0);
                    cursor: pointer;
                    margin-bottom: 15px;
                    transition: 0.5s ease;
                }

                .op-menu:hover{
                    background: #245590;
                    color: white;
                }

                @media screen and (max-width: 768px){
                    .op-menu{
                        padding: 6px 5px;
                        font-size: 15px;
                    }
                }
            `}</style>
        </AppLayout>
    )
}