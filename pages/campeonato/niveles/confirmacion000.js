import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import AppLayout from '../../../componentes/layout'
import Container from '../../../componentes/sections/Container'
import Calendario from '../../../componentes/campeonato26/calendario/ContCalendario'
import Posiciones from '../../../componentes/campeonato26/posiciones/Posiciones'
import Goleadores from '../../../componentes/campeonato26/goleadores/ContGoleadores'
import FormatoKT25 from '../../../componentes/campeonato25/formatos/FormatoKT25'
import DetallesKT25 from '../../../componentes/campeonato26/Detalles'
import EquiposKT25 from '../../../componentes/campeonato25/EquiposKT25'
import Catequistas from '../../../componentes/campeonato25/Catequistas'
import MenuAside from '../../../componentes/sections/MenuAside'

const menuOptions = [
    { id: 1, label: 'Posiciones' },
    { id: 2, label: 'Calendario' },
    { id: 3, label: 'Goleadores' },
    { id: 4, label: 'Reglas' },
    /* { id: 5, label: 'Formato' },
    { id: 6, label: 'Equipos' },
    { id: 7, label: 'Catequistas' }, */
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
                        section == 1 ? <Posiciones /> :
                            section == 2 ? <Calendario /> :
                                section == 3 ? <Goleadores /> : 
                                    section == 4 ? <FormatoKT25 /> :
                                        section == 5 ? <DetallesKT25 /> :
                                            section == 6 ? <EquiposKT25 /> :
                                                section == 7 ? <Catequistas /> : ''
                    }
                </div>
            </Container>

            <style jsx>{`
                
            `}</style>
        </AppLayout>
    )
}