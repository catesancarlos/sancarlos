import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import AppLayout from '../../../componentes/layout'
import Container from '../../../componentes/sections/Container'
import MenuAside from '../../../componentes/sections/MenuAside'
import Posiciones from '../../../componentes/campeonato26/posiciones/Posiciones'
import Calendario from '../../../componentes/campeonato26/calendario/ContCalendario'
import EquiposKT26 from '../../../componentes/campeonato26/EquiposKT26'
import Goleadores from '../../../componentes/campeonato26/goleadores/ContGoleadores'
import DetallesKT25 from '../../../componentes/campeonato26/Detalles'

const menuOptions = [
    { id: 1, label: 'Posiciones' },
    { id: 2, label: 'Calendario' },
    { id: 3, label: 'Equipos' },
    { id: 4, label: 'Goleadores' },
    { id: 5, label: 'Reglas' }
]

export default function CampeonatoSeguimiento(){
    const [section, setSection] = useState(1)

    const router = useRouter()

    useEffect(() => {
        if(router.query.s){
            setSection(router.query.s)
            router.replace('/campeonato')
        }   
    }, [router.query.s])


    return(
        <AppLayout titulo='San Carlos - Campeonato' name='Campeonato'>
            <Container
                title='CAMPEONATO'
                subtitle='2026'
                img='/campeonato-logo.jpg'
            >
                <MenuAside opciones={menuOptions} section={section} onSection={e => setSection(e)} />
                <div style={{ 'flex': 1 }}>
                    {
                        section == 2 ? <Calendario /> :
                            section == 3 ? <EquiposKT26 nivel='seguimiento' /> :
                                section == 4 ? <Goleadores /> : 
                                    section == 5 ? <DetallesKT25 /> : 
                                        <Posiciones nivel='seguimiento' />
                    }
                </div>
            </Container>

            <style jsx>{`
                
            `}</style>
        </AppLayout>
    )
}