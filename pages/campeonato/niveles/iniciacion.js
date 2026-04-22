import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import AppLayout from '../../../componentes/layout'
import Container from '../../../componentes/sections/Container'
import Calendario from '../../../componentes/campeonato26/calendario/ContCalendario'
import Posiciones from '../../../componentes/campeonato26/posiciones/Posiciones'
import Goleadores from '../../../componentes/campeonato26/goleadores/ContGoleadores'
import FormatoKT25 from '../../../componentes/campeonato25/formatos/FormatoKT25'
import DetallesKT25 from '../../../componentes/campeonato26/Detalles'
import EquiposKT26 from '../../../componentes/campeonato26/EquiposKT26'
import Catequistas from '../../../componentes/campeonato25/Catequistas'
import MenuAside from '../../../componentes/sections/MenuAside'

const menuOptions = [
    { id: 1, label: 'Posiciones' },
    { id: 2, label: 'Calendario' },
    { id: 3, label: 'Equipos' },
    { id: 4, label: 'Goleadores' },
    { id: 5, label: 'Reglas' }
]

export default function CampeonatoIniciacion(){
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
                            section == 3 ? <EquiposKT26 nivel='iniciacion' /> :
                                section == 4 ? <Goleadores /> : 
                                    section == 5 ? <DetallesKT25 /> : 
                                        <Posiciones nivel='iniciacion' />
                    }
                </div>
            </Container>

            <style jsx>{`
                
            `}</style>
        </AppLayout>
    )
}